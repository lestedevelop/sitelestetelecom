import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const source = await readFile(new URL("../src/lib/webChat.js", import.meta.url), "utf8");
const moduleUrl = `data:text/javascript;base64,${Buffer.from(source).toString("base64")}`;
const {
  CHAT_STORAGE_KEY,
  createChatStartPayload,
  getChatBootstrapMessages,
  loadStoredChat,
  mergeMessages,
  normalizeMessage,
  normalizeTurn,
} = await import(moduleUrl);

test("inicia o fluxo com o CPF no documento e escolhe a entrada conforme o público", () => {
  assert.deepEqual(createChatStartPayload("123.456.789-01"), {
    message: "Olá",
    variables: { documento: "12345678901" },
  });
  assert.deepEqual(getChatBootstrapMessages("customer"), ["Já sou cliente"]);
  assert.deepEqual(getChatBootstrapMessages("visitor"), ["Não sou cliente", "Assinar por aqui"]);
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
