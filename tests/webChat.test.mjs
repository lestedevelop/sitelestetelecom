import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(new URL("../src/lib/webChat.js", import.meta.url), "utf8");
const moduleUrl = `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
const {
  CHAT_STORAGE_KEY,
  createChatStartPayload,
  createWebFormSubmission,
  getChatSocketAuth,
  getChatStorageKey,
  getChatBootstrapMessages,
  loadStoredChat,
  mergeMessages,
  normalizeMessage,
  normalizeTurn,
  prepareOutboxEvent,
  requiresChatIdentification,
  webFormValidationError,
} = await import(moduleUrl);

test("inicia o fluxo com o CPF no documento e escolhe a entrada conforme o público", () => {
  assert.deepEqual(createChatStartPayload("123.456.789-01"), {
    message: "Olá",
    variables: { documento: "12345678901" },
  });
  assert.deepEqual(getChatBootstrapMessages("customer"), ["Já sou cliente"]);
  assert.deepEqual(getChatBootstrapMessages("visitor"), ["Não sou cliente", "Assinar por aqui"]);
  assert.deepEqual(createChatStartPayload(), { message: "Olá", variables: { documento: "" } });
  assert.deepEqual(getChatBootstrapMessages(undefined, "vendas-web"), []);
  assert.equal(requiresChatIdentification("clone2-capta"), true);
  assert.equal(requiresChatIdentification("vendas-web"), true);
  assert.equal(getChatStorageKey("clone2-capta"), CHAT_STORAGE_KEY);
  assert.equal(getChatStorageKey("vendas-web"), `${CHAT_STORAGE_KEY}:vendas-web:identified`);
});

test("normaliza texto e botões interativos e usa o título para ids inválidos", () => {
  const message = normalizeMessage({
    id: "1",
    raw: {
      interactive: {
        body: { text: "Como podemos ajudar?" },
        action: { buttons: [{ reply: { id: "[object Object]", title: "Segunda via" } }] },
      },
    },
  });

  assert.equal(message.text, "Como podemos ajudar?");
  assert.deepEqual(message.options, [{ label: "Segunda via", value: "Segunda via" }]);
});

test("normaliza listas, telegram buttons e a sessão mais recente", () => {
  const turn = normalizeTurn({
    data: {
      session_id: "session-2",
      status: "HANDOFF",
      messages: [{
        fallback_text: "Escolha uma opção",
        interactive: { action: { sections: [{ rows: [{ id: "a", title: "Financeiro" }] }] } },
        telegram_buttons: [[{ text: "Suporte", callback_data: "support" }]],
      }],
    },
  });

  assert.equal(turn.sessionId, "session-2");
  assert.equal(turn.status, "handoff");
  assert.deepEqual(turn.messages[0].options, [
    { label: "Suporte", value: "support" },
    { label: "Financeiro", value: "a" },
  ]);
});

test("não duplica mensagens recebidas novamente pelo stream", () => {
  const first = { id: "1", text: "Olá" };
  const second = { id: "2", text: "Tudo bem?" };
  assert.deepEqual(mergeMessages([first], [first, second]), [first, second]);
  assert.deepEqual(mergeMessages([first], [second, second]), [first, second]);
});

test("guarda o ID real da última mensagem como cursor, sem usar IDs locais", () => {
  const turn = normalizeTurn({
    message: "texto enviado pelo visitante",
    responses: [{ _id: "outbox-41", text: "Resposta correta" }],
  });
  assert.equal(turn.messages[0].text, "Resposta correta");
  assert.equal(turn.messages[0].id, "outbox-41");
  assert.equal(turn.cursor, "outbox-41");
  assert.equal(normalizeTurn({ message: "Sem ID do servidor" }).cursor, "");
});

test("recupera o ID do envelope de evento para deduplicar e retomar o socket", () => {
  const event = prepareOutboxEvent({ id: "outbox-42", agent_message: { text: "Mensagem perdida" } });
  const turn = normalizeTurn(event);
  assert.equal(turn.messages[0].id, "outbox-42");
  assert.equal(turn.cursor, "outbox-42");
  assert.deepEqual(mergeMessages(turn.messages, normalizeTurn(prepareOutboxEvent({ id: "outbox-42", message: "Mensagem perdida" })).messages), turn.messages);
  assert.deepEqual(getChatSocketAuth("session-1", { sessionId: "session-1", cursor: turn.cursor }), {
    sessionId: "session-1",
    after: "outbox-42",
  });
  assert.deepEqual(getChatSocketAuth("session-2", { sessionId: "session-1", cursor: turn.cursor }), { sessionId: "session-2" });
  const wrapped = normalizeTurn(prepareOutboxEvent({ data: { id: "outbox-43", message: "Mais uma resposta" }, sessionId: "session-1" }));
  assert.equal(wrapped.messages[0].id, "outbox-43");
  assert.equal(wrapped.sessionId, "session-1");
  assert.equal(wrapped.cursor, "outbox-43");
});

test("normaliza mídia, links e PIX sem aceitar protocolos inseguros", () => {
  const message = normalizeMessage({
    image: { url: "https://cdn.example.com/fatura.png", caption: "Fatura" },
    pix: { copiaECola: "000201010212", qrCodeUrl: "javascript:alert(1)" },
    buttons: [{ title: "Abrir portal", url: "https://portal.example.com" }],
  });

  assert.deepEqual(message.media, { url: "https://cdn.example.com/fatura.png", kind: "image", label: "Fatura" });
  assert.deepEqual(message.pix, { code: "000201010212", qrUrl: "" });
  assert.equal(message.options[0].href, "https://portal.example.com/");
});

test("descarta sessão local expirada", () => {
  const values = new Map([[CHAT_STORAGE_KEY, JSON.stringify({ sessionId: "old", expiresAt: 99 })]]);
  const storage = {
    getItem: (key) => values.get(key),
    removeItem: (key) => values.delete(key),
  };
  assert.equal(loadStoredChat(storage, 100), null);
  assert.equal(values.has(CHAT_STORAGE_KEY), false);
});

test("carrega o cursor persistido junto da sessão", () => {
  const storage = {
    getItem: () => JSON.stringify({ sessionId: "session-1", cursor: "outbox-42", messages: [], expiresAt: 200 }),
    removeItem: () => assert.fail("Sessão ativa não deve ser removida"),
  };
  assert.equal(loadStoredChat(storage, 100).cursor, "outbox-42");
});

test("preserva formulário Web e envia interaction com node_id e campos recebidos", () => {
  const message = normalizeMessage({
    id: "form-1",
    role: "bot",
    type: "web_form",
    text: "Informe a localização",
    web_form: {
      node_id: "web_form_localizacao",
      title: "Localização do endereço",
      submit_label: "Continuar",
      fields: [{ name: "localizacao_web", label: "Referência", type: "textarea", format: "geolocation", required: false }],
    },
  });
  assert.equal(message.kind, "web_form");
  assert.equal(message.webForm.fields[0].format, "geolocation");
  assert.equal(normalizeTurn({ sessionId: "session-1", messages: [{ id: "form-1", type: "web_form", web_form: { node_id: "web_form_localizacao", fields: [{ name: "localizacao_web" }] } }] }).messages[0].webForm.nodeId, "web_form_localizacao");
  assert.deepEqual(createWebFormSubmission(message.webForm, { localizacao_web: "-22.9000,-43.2000", extra: "ignorado" }), {
    message: "Formulário enviado",
    interaction: { type: "web_form_response", node_id: "web_form_localizacao", values: { localizacao_web: "-22.9000,-43.2000" } },
  });
  assert.deepEqual(createWebFormSubmission(message.webForm, { localizacao_web: "referência" }, "socket"), {
    text: "Formulário enviado",
    interaction: { type: "web_form_response", node_id: "web_form_localizacao", values: { localizacao_web: "referência" } },
  });
});

test("converte data do formulário e identifica falha de validação", () => {
  const form = { nodeId: "web_form_responsavel", fields: [{ name: "nascimentoresponsavel", type: "date" }] };
  assert.equal(createWebFormSubmission(form, { nascimentoresponsavel: "1990-05-20" }).interaction.values.nascimentoresponsavel, "20/05/1990");
  assert.equal(webFormValidationError({ ok: false, code: "web_form_validation_failed", message: "Preencha e envie o formulário exibido acima." }), "Preencha e envie o formulário exibido acima.");
});

test("ordena carrossel e preserva o ID da quick reply, não o título", () => {
  const message = normalizeMessage({
    type: "whatsapp_raw",
    raw: { interactive: { type: "carousel", body: { text: "Escolha um plano" }, action: { cards: [
      { card_index: 1, body: { text: "Plano B" }, action: { buttons: [{ type: "quick_reply", quick_reply: { id: "PLANO_B", title: "Eu quero esse" } }] } },
      { card_index: 0, header: { image: { link: "https://cdn.example.com/plano.png" } }, body: { text: "Plano A" }, action: { buttons: [{ type: "quick_reply", quick_reply: { id: "PLANO_A", title: "Eu quero esse" } }] } },
    ] } } },
  });
  assert.equal(message.kind, "carousel");
  assert.equal(message.text, "Escolha um plano");
  assert.deepEqual(message.carousel.cards.map((card) => card.button.value), ["PLANO_A", "PLANO_B"]);
  assert.equal(message.carousel.cards[0].imageUrl, "https://cdn.example.com/plano.png");
  assert.equal(message.carousel.cards[0].button.label, "Eu quero esse");
});

test("fornece fallback para Flow do WhatsApp e tipo desconhecido", () => {
  const flow = normalizeMessage({ type: "whatsapp_raw", raw: { interactive: { type: "flow" } } });
  const unknown = normalizeMessage({ type: "new_builder_type" });
  const locationRequest = normalizeMessage({ type: "whatsapp_raw", raw: { interactive: { type: "location_request_message" } } });
  assert.equal(flow.kind, "unsupported_flow");
  assert.match(flow.text, /canal compatível/);
  assert.equal(unknown.kind, "unsupported");
  assert.match(unknown.text, /indisponível/);
  assert.equal(locationRequest.kind, "unsupported");
  assert.equal(locationRequest.unsupportedType, "location_request_message");
});

test("não reutiliza sessões anteriores sem identificação no fluxo de vendas", () => {
  const values = new Map([
    [CHAT_STORAGE_KEY, JSON.stringify({ sessionId: "cliente", expiresAt: 200 })],
    [`${CHAT_STORAGE_KEY}:vendas-web`, JSON.stringify({ sessionId: "venda-antiga", expiresAt: 200 })],
  ]);
  const storage = {
    getItem: (key) => values.get(key),
    removeItem: (key) => values.delete(key),
  };
  assert.equal(loadStoredChat(storage, 100, getChatStorageKey("vendas-web")), null);
  assert.equal(loadStoredChat(storage, 100)?.sessionId, "cliente");
  assert.equal(loadStoredChat(storage, 100, `${CHAT_STORAGE_KEY}:vendas-web`)?.sessionId, "venda-antiga");
});
