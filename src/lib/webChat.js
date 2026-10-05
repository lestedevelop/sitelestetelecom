const TERMINAL_STATUSES = new Set(["completed", "failed"]);

export const CHAT_STORAGE_KEY = "leste:webchat:v5";
export const CHAT_SESSION_DURATION_MS = 24 * 60 * 60 * 1000;

export function getChatStorageKey(flowId) {
  return flowId && flowId !== "clone2-capta"
    ? `${CHAT_STORAGE_KEY}:${encodeURIComponent(flowId)}${requiresChatIdentification(flowId) ? ":identified" : ""}`
    : CHAT_STORAGE_KEY;
}

export function requiresChatIdentification(flowId) {
  return !flowId || flowId === "clone2-capta" || flowId === "vendas-web";
}

export function createChatStartPayload(documento) {
  return { message: "Olá", variables: { documento: String(documento || "").replace(/\D/g, "") } };
}

export function getChatBootstrapMessages(audience, flowId = "clone2-capta") {
  if (flowId !== "clone2-capta") return [];
  return audience === "customer"
    ? ["Já sou cliente"]
    : ["Não sou cliente", "Assinar por aqui"];
}

function asArray(value) {
  if (Array.isArray(value)) return value;
  return value == null ? [] : [value];
}

function firstString(...values) {
  return values.find((value) => typeof value === "string" && value.trim())?.trim() || "";
}

function messageId(message) {
  if (!message || typeof message !== "object") return "";
  return firstString(message.id, message._id, message.messageId, message.message_id);
}

function lastMessageId(messages) {
  return [...asArray(messages)].reverse().map(messageId).find(Boolean) || "";
}

function safeUrl(value) {
  if (typeof value !== "string") return "";
  try {
    const url = new URL(value);
    return ["http:", "https:"].includes(url.protocol) ? url.toString() : "";
  } catch {
    return "";
  }
}

function normalizeWebForm(form) {
  if (!form || typeof form !== "object") return null;
  const nodeId = firstString(form.node_id, form.nodeId);
  if (!nodeId) return null;

  const fields = asArray(form.fields).map((field) => {
    if (!field || typeof field !== "object") return null;
    const name = firstString(field.name, field.variable);
    if (!name) return null;
    return {
      name,
      label: firstString(field.label, name),
      type: firstString(field.type, "text").toLowerCase(),
      format: firstString(field.format).toLowerCase(),
      required: field.required === true,
      placeholder: firstString(field.placeholder),
      pattern: firstString(field.pattern),
      options: asArray(field.options).map((option) => {
        if (typeof option === "string") return { label: option, value: option };
        if (!option || typeof option !== "object") return null;
        const label = firstString(option.label, option.title, option.text, option.value);
        const value = firstString(option.value, option.id, label);
        return label && value ? { label, value } : null;
      }).filter(Boolean),
    };
  }).filter(Boolean);

  return {
    nodeId,
    title: firstString(form.title),
    submitLabel: firstString(form.submit_label, form.submitLabel, "Enviar"),
    fields,
  };
}

function normalizeCarousel(interactive) {
  if (String(interactive?.type || "").toLowerCase() !== "carousel") return null;
  const cards = asArray(interactive?.action?.cards).map((card, position) => {
    if (!card || typeof card !== "object") return null;
    const quickReply = asArray(card.action?.buttons)
      .find((button) => button?.type === "quick_reply" && button?.quick_reply?.id)?.quick_reply;
    const index = Number(card.card_index);
    return {
      index: Number.isFinite(index) ? index : position,
      imageUrl: safeUrl(card.header?.image?.link),
      text: firstString(card.body?.text, card.text),
      button: quickReply ? {
        label: firstString(quickReply.title, "Selecionar"),
        value: firstString(quickReply.id),
      } : null,
    };
  }).filter(Boolean).sort((a, b) => a.index - b.index);
  return { cards };
}

export function createWebFormSubmission(form, values, transport = "rest") {
  if (!form?.nodeId) throw new Error("Formulário sem identificador.");
  const submittedValues = Object.fromEntries(asArray(form.fields).map((field) => {
    const value = String(values?.[field.name] ?? "").trim();
    const date = field.type === "date" && /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    return [field.name, date ? `${date[3]}/${date[2]}/${date[1]}` : value];
  }));
  if (new TextEncoder().encode(JSON.stringify(submittedValues)).length > 16 * 1024) {
    throw new Error("O formulário excede o tamanho permitido. Reduza o texto e tente novamente.");
  }
  return {
    [transport === "socket" ? "text" : "message"]: "Formulário enviado",
    interaction: { type: "web_form_response", node_id: form.nodeId, values: submittedValues },
  };
}

export function webFormValidationError(payload) {
  const body = payload?.data && typeof payload.data === "object" ? payload.data : payload;
  if (!body || typeof body !== "object") return "";
  const detail = body.detail && typeof body.detail === "object" ? body.detail : body.error;
  const code = firstString(body.code, body.error_code, detail?.code, typeof body.error === "string" ? body.error : "");
  if (code !== "web_form_validation_failed" && body.ok !== false) return "";
  return firstString(body.message, detail?.message, typeof body.detail === "string" ? body.detail : "", "Confira os campos e tente novamente.");
}

function optionFrom(value) {
  if (typeof value === "string") return { label: value, value };
  if (!value || typeof value !== "object") return null;

  const label = firstString(value.title, value.text, value.label, value.name, value.description);
  const href = safeUrl(value.url || value.link);
  let optionValue = firstString(value.callback_data, value.value, value.payload, value.id, value.reply?.id);
  if (!optionValue || optionValue === "[object Object]") optionValue = label;

  return label ? { label, value: optionValue || label, ...(href ? { href } : {}) } : null;
}

function collectOptions(message) {
  const interactive = message?.raw?.interactive || message?.interactive;
  const buttons = [
    ...asArray(message?.buttons),
    ...asArray(interactive?.action?.buttons).map((button) => button?.reply || button),
    ...asArray(message?.reply_markup?.inline_keyboard).flat(),
    ...asArray(message?.telegram_buttons).flat(),
  ];
  const rows = asArray(interactive?.action?.sections).flatMap((section) => asArray(section?.rows));

  return [...buttons, ...rows].map(optionFrom).filter(Boolean);
}

function mediaFrom(message) {
  const raw = message?.raw || {};
  const candidates = [
    [message?.media, message?.media?.type || "file"],
    [message?.image, "image"],
    [message?.video, "video"],
    [message?.audio, "audio"],
    [message?.document, "document"],
    [raw?.image, "image"],
    [raw?.video, "video"],
    [raw?.audio, "audio"],
    [raw?.document, "document"],
  ];

  for (const [candidate, fallbackKind] of candidates) {
    if (!candidate) continue;
    const url = safeUrl(typeof candidate === "string" ? candidate : candidate.url || candidate.link);
    if (!url) continue;
    return {
      url,
      kind: firstString(candidate.type, candidate.kind, fallbackKind),
      label: firstString(candidate.filename, candidate.file_name, candidate.caption, "Abrir arquivo"),
    };
  }
  return null;
}

function pixFrom(message) {
  const raw = message?.raw || {};
  const pix = message?.pix || raw?.pix || message?.payment?.pix || raw?.payment?.pix;
  if (!pix) return null;
  if (typeof pix === "string") return { code: pix, qrUrl: "" };
  const code = firstString(pix.copyPaste, pix.copiaECola, pix.copy_paste, pix.code, pix.payload, pix.emv);
  const qrUrl = safeUrl(pix.qrCodeUrl || pix.qr_code_url || pix.image || pix.url);
  return code || qrUrl ? { code, qrUrl } : null;
}

export function normalizeMessage(message, fallbackId = "message") {
  if (typeof message === "string") {
    return { id: fallbackId, role: "assistant", kind: "text", text: message, options: [], media: null, pix: null };
  }
  if (!message || typeof message !== "object") return null;

  const raw = message.raw || {};
  const type = firstString(message.type).toLowerCase();
  const interactive = raw.interactive || message.interactive;
  const interactiveType = firstString(interactive?.type).toLowerCase();
  const webForm = normalizeWebForm(message.web_form);
  const carousel = normalizeCarousel(interactive);
  const unsupportedInteractive = interactiveType && !["button", "list"].includes(interactiveType);
  const kind = webForm ? "web_form" : carousel ? "carousel" : interactiveType === "flow" ? "unsupported_flow" : unsupportedInteractive || type && !["text", "whatsapp_raw"].includes(type) ? "unsupported" : "text";
  const text = firstString(
    message.text,
    raw?.text?.body,
    raw?.interactive?.body?.text,
    message.fallback_text,
    message.body,
    message.content,
    message.message,
    raw?.caption,
  );
  const media = mediaFrom(message);
  const pix = pixFrom(message);
  const options = collectOptions(message);
  if (!text && !media && !pix && options.length === 0 && !webForm && !carousel && kind === "text") return null;
  const displayText = kind === "unsupported_flow"
    ? [text, "Este formulário precisa ser aberto em um canal compatível."].filter(Boolean).join("\n")
    : text || (kind === "unsupported" ? "Conteúdo indisponível neste canal." : "");

  return {
    id: firstString(messageId(message), fallbackId),
    role: ["user", "visitor", "client"].includes(message.role || message.sender) ? "user" : "assistant",
    kind,
    text: displayText,
    options,
    media,
    pix,
    ...(webForm ? { webForm } : {}),
    ...(carousel ? { carousel } : {}),
    ...(kind === "unsupported" || kind === "unsupported_flow" ? { unsupportedType: interactiveType || type } : {}),
  };
}

export function normalizeTurn(payload) {
  if (Array.isArray(payload)) {
    return {
      messages: payload.map((message, index) => normalizeMessage(message, `message-${Date.now()}-${index}`)).filter(Boolean),
      sessionId: "",
      status: "",
      cursor: lastMessageId(payload),
    };
  }
  if (!payload || typeof payload !== "object") return { messages: [], sessionId: "", status: "", cursor: "" };
  const body = payload.data && typeof payload.data === "object" ? payload.data : payload;
  const candidates = body.messages ?? body.responses ?? body.output ?? body.result?.messages ?? body.agent_message ?? body.message ?? [];
  const messages = asArray(candidates)
    .map((message, index) => normalizeMessage(message, `message-${Date.now()}-${index}`))
    .filter(Boolean);

  return {
    messages,
    sessionId: firstString(body.sessionId, body.session_id, body.session?.id, payload.sessionId),
    status: firstString(body.status, body.session?.status, payload.status).toLowerCase(),
    cursor: firstString(body.cursor, body.lastId, body.last_id, body.eventId, body.event_id, payload.cursor, lastMessageId(candidates)),
  };
}

export function prepareOutboxEvent(payload) {
  const wrapper = payload && typeof payload === "object" ? payload : { message: payload };
  const body = wrapper.data && typeof wrapper.data === "object" ? wrapper.data : wrapper;
  const source = body.messages ?? body.agent_message ?? body.message ?? body;
  const entries = asArray(source);
  const envelopeId = firstString(body.cursor, body.lastId, body.last_id, body.eventId, body.event_id, body.id, body._id, body.messageId, body.message_id, wrapper.cursor, wrapper.id);
  const messages = entries.map((entry) => {
    if (entry && typeof entry === "object") {
      return messageId(entry) || entries.length !== 1 || !envelopeId ? entry : { ...entry, id: envelopeId };
    }
    return { ...(entries.length === 1 && envelopeId ? { id: envelopeId } : {}), text: String(entry ?? "") };
  });
  return {
    ...body,
    sessionId: firstString(body.sessionId, body.session_id, wrapper.sessionId, wrapper.session_id),
    status: firstString(body.status, wrapper.status),
    messages,
    cursor: envelopeId || lastMessageId(entries),
  };
}

export function getChatSocketAuth(sessionId, chat) {
  const cursor = chat?.sessionId === sessionId ? firstString(chat.cursor) : "";
  return { sessionId, ...(cursor ? { after: cursor } : {}) };
}

export function mergeMessages(current, incoming) {
  const seen = new Set(current.map((message) => message.id));
  const merged = [...current];
  for (const message of incoming) {
    if (seen.has(message.id)) continue;
    seen.add(message.id);
    merged.push(message);
  }
  return merged;
}

export function isTerminalStatus(status) {
  return TERMINAL_STATUSES.has(status);
}

export function loadStoredChat(storage, now = Date.now(), storageKey = CHAT_STORAGE_KEY) {
  try {
    const value = JSON.parse(storage.getItem(storageKey));
    if (!value?.sessionId || !value?.expiresAt || value.expiresAt <= now || isTerminalStatus(value.status)) {
      storage.removeItem(storageKey);
      return null;
    }
    return { ...value, cursor: firstString(value.cursor), messages: Array.isArray(value.messages) ? value.messages : [] };
  } catch {
    storage.removeItem(storageKey);
    return null;
  }
}

export function retryDelay(response, fallback = 2000) {
  const value = response.headers.get("Retry-After");
  if (!value) return fallback;
  const seconds = Number(value);
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);
  const date = Date.parse(value);
  return Number.isNaN(date) ? fallback : Math.max(0, date - Date.now());
}
