const TERMINAL_STATUSES = new Set(["completed", "failed"]);

export const CHAT_STORAGE_KEY = "leste:webchat:v5";
export const CHAT_SESSION_DURATION_MS = 24 * 60 * 60 * 1000;

export function getChatStorageKey(flowId) {
  return flowId && flowId !== "clone2-capta"
    ? `${CHAT_STORAGE_KEY}:${encodeURIComponent(flowId)}`
    : CHAT_STORAGE_KEY;
}

export function requiresChatIdentification(flowId) {
  return !flowId || flowId === "clone2-capta";
}

export function createChatStartPayload(documento) {
  return { message: "Olá", variables: { documento: String(documento || "").replace(/\D/g, "") } };
}

export function getChatBootstrapMessages(audience, flowId = "clone2-capta") {
  if (!requiresChatIdentification(flowId)) return [];
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
    return { id: fallbackId, role: "assistant", text: message, options: [], media: null, pix: null };
  }
  if (!message || typeof message !== "object") return null;

  const raw = message.raw || {};
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
  if (!text && !media && !pix && options.length === 0) return null;

  return {
    id: firstString(messageId(message), fallbackId),
    role: ["user", "visitor", "client"].includes(message.role || message.sender) ? "user" : "assistant",
    text,
    options,
    media,
    pix,
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
