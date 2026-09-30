"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, Check, Copy, ExternalLink, Headphones, LoaderCircle, RefreshCw, Send, X } from "lucide-react";
import { io } from "socket.io-client";
import LesteChatAuth from "@/components/layout/LesteChatAuth";
import {
  CHAT_SESSION_DURATION_MS,
  CHAT_STORAGE_KEY,
  createChatStartPayload,
  getChatBootstrapMessages,
  isTerminalStatus,
  loadStoredChat,
  mergeMessages,
  normalizeTurn,
  retryDelay,
} from "@/lib/webChat";

const CHAT_API_URL = "/api/web-chat";
const CHAT_SOCKET_URL = process.env.NEXT_PUBLIC_CHAT_SOCKET_URL || "https://chatbot-dev.lestetelecom.com.br/public-chat";

async function request(url, options) {
  let response;
  try {
    response = await fetch(url, {
      ...options,
      headers: { Accept: "application/json", "Content-Type": "application/json", ...options?.headers },
    });
  } catch {
    throw new Error("Não foi possível conectar ao atendimento. Tente novamente.");
  }
  if (!response.ok) {
    const error = new Error(response.status === 429 ? "Muitas tentativas. Aguarde um instante." : "Não foi possível conectar ao atendimento.");
    error.status = response.status;
    error.retryAfter = retryDelay(response);
    throw error;
  }
  return response.json();
}

function Message({ message, disabled, onOption }) {
  const mine = message.role === "user";
  const [copied, setCopied] = useState(false);
  const renderText = (text) => text.split(/(https?:\/\/[^\s]+)/g).map((part, index) => {
    if (!part.startsWith("http")) return part;
    return <a key={`${part}-${index}`} href={part} target="_blank" rel="noopener noreferrer" className="font-semibold underline underline-offset-2">{part}</a>;
  });
  const copyPix = async () => {
    await navigator.clipboard.writeText(message.pix.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`flex ${mine ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[86%] rounded-2xl px-3.5 py-2.5 text-sm leading-5 ${mine ? "rounded-br-md bg-primary text-white" : "rounded-bl-md border border-graylighter bg-white text-darkgreen"}`}>
        {message.text ? <p className="whitespace-pre-wrap break-words">{renderText(message.text)}</p> : null}
        {message.media?.kind === "image" ? <a href={message.media.url} target="_blank" rel="noopener noreferrer" aria-label={message.media.label} className="mt-2 block h-36 rounded-lg bg-cover bg-center" style={{ backgroundImage: `url(${JSON.stringify(message.media.url)})` }} /> : null}
        {message.media?.kind === "video" ? <video className="mt-2 max-h-52 w-full rounded-lg" src={message.media.url} controls preload="metadata" /> : null}
        {message.media?.kind === "audio" ? <audio className="mt-2 w-full max-w-64" src={message.media.url} controls preload="metadata" /> : null}
        {message.media && !["image", "video", "audio"].includes(message.media.kind) ? (
          <a className="mt-2 inline-flex items-center gap-1 font-semibold underline underline-offset-2" href={message.media.url} target="_blank" rel="noopener noreferrer">
            {message.media.label}<ExternalLink className="h-3.5 w-3.5" />
          </a>
        ) : null}
        {message.pix ? <div className="mt-2 rounded-lg border border-primary/25 bg-white p-2.5 text-darkgreen">
          {message.pix.qrUrl ? <a href={message.pix.qrUrl} target="_blank" rel="noopener noreferrer" aria-label="Abrir QR Code PIX" className="mb-2 block h-36 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${JSON.stringify(message.pix.qrUrl)})` }} /> : null}
          {message.pix.code ? <><p className="line-clamp-2 break-all text-[11px]">{message.pix.code}</p><button type="button" onClick={copyPix} className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-primary">{copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}{copied ? "Código copiado" : "Copiar código PIX"}</button></> : null}
        </div> : null}
        {message.options.length ? (
          <div className="mt-2 flex flex-col gap-1.5">
            {message.options.map((option) => option.href ? <a key={`${option.label}-${option.href}`} href={option.href} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-lg border border-primary bg-white px-3 py-2 text-left text-xs font-bold text-primary transition hover:bg-primary hover:text-white">{option.label}<ExternalLink className="h-3.5 w-3.5" /></a> : <button key={`${option.label}-${option.value}`} type="button" disabled={disabled} onClick={() => onOption(option.value, option.label)} className="rounded-lg border border-primary bg-white px-3 py-2 text-left text-xs font-bold text-primary transition hover:bg-primary hover:text-white disabled:opacity-50">{option.label}</button>)}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function LesteChat({ onBack, onClose }) {
  const [chat, setChat] = useState(null);
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [realtimeConnected, setRealtimeConnected] = useState(false);
  const [authComplete, setAuthComplete] = useState(false);
  const [verifiedContext, setVerifiedContext] = useState(null);
  const socketRef = useRef(null);
  const initializedSessionsRef = useRef(new Set());
  const pendingSendRef = useRef(null);
  const bottomRef = useRef(null);
  const chatRef = useRef(null);

  const persist = useCallback((next) => {
    chatRef.current = next;
    setChat(next);
    if (next?.sessionId && !isTerminalStatus(next.status)) localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify(next));
    else localStorage.removeItem(CHAT_STORAGE_KEY);
  }, []);

  const applyTurn = useCallback((payload, base = chatRef.current) => {
    const turn = normalizeTurn(payload);
    if (!base && !turn.sessionId) return null;
    const next = {
      ...(base || {}),
      sessionId: turn.sessionId || base?.sessionId,
      status: turn.status || base?.status || "active",
      cursor: turn.cursor || base?.cursor || "",
      messages: mergeMessages(base?.messages || [], turn.messages),
      expiresAt: base?.expiresAt || Date.now() + CHAT_SESSION_DURATION_MS,
    };
    persist(next);
    return next;
  }, [persist]);

  const activateIdleSessionWithRest = useCallback(async (session) => {
    if (session?.status !== "idle" || session.messages?.length) return session;
    const payload = await request(`${CHAT_API_URL}/sessions/${encodeURIComponent(session.sessionId)}/continue`, {
      method: "POST",
      body: JSON.stringify({ message: "Olá" }),
    });
    return applyTurn(payload, session);
  }, [applyTurn]);

  const start = useCallback(async (context = null) => {
    setAuthComplete(true);
    setLoading(true);
    setError("");
    try {
      let payload = await request(`${CHAT_API_URL}/start`, {
        method: "POST",
        body: JSON.stringify(createChatStartPayload(context?.cpf)),
      });

      for (const message of getChatBootstrapMessages(context?.audience)) {
        const sessionId = normalizeTurn(payload).sessionId;
        if (!sessionId) throw new Error("Não foi possível iniciar o atendimento.");
        payload = await request(`${CHAT_API_URL}/sessions/${encodeURIComponent(sessionId)}/continue`, {
          method: "POST",
          body: JSON.stringify({ message }),
        });
      }

      applyTurn(payload, null);
    } catch (cause) {
      setError(cause.message);
    } finally {
      setLoading(false);
    }
  }, [applyTurn]);

  useEffect(() => {
    const stored = loadStoredChat(localStorage);
    if (stored) {
      chatRef.current = stored;
      setChat(stored);
      setAuthComplete(true);
      setLoading(false);
    } else {
      setLoading(false);
      setAuthComplete(false);
    }
  }, []);

  const handleAuthenticated = useCallback(async (context) => {
    setVerifiedContext(context);
    await start(context);
  }, [start]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat?.messages, sending]);

  useEffect(() => {
    const sessionId = chat?.sessionId;
    if (!sessionId || isTerminalStatus(chat.status)) return;

    const socket = io(CHAT_SOCKET_URL, {
      auth: { sessionId },
      transports: ["websocket", "polling"],
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 10000,
      timeout: 10000,
    });
    socketRef.current = socket;

    const finishPendingSend = () => {
      pendingSendRef.current = null;
      setSending(false);
    };
    const applyReply = (payload) => {
      applyTurn(payload);
      finishPendingSend();
      setError("");
    };
    const applyAgentMessage = (payload) => {
      const agentMessage = payload?.agent_message || payload?.message || payload;
      const messages = Array.isArray(payload?.messages) ? payload.messages : [agentMessage];
      applyTurn({ ...payload, messages });
      finishPendingSend();
      setError("");
    };
    const initializeSession = () => {
      const current = chatRef.current;
      if (current?.status !== "idle" || current.messages?.length || initializedSessionsRef.current.has(sessionId)) return;
      initializedSessionsRef.current.add(sessionId);
      setSending(true);
      socket.timeout(15000).emit("message", { message: "Olá" }, (socketError, payload) => {
        if (socketError) {
          activateIdleSessionWithRest(current)
            .catch((cause) => setError(cause.message))
            .finally(() => setSending(false));
          return;
        }
        applyReply(payload);
      });
    };

    socket.on("connect", () => setRealtimeConnected(true));
    socket.on("ready", initializeSession);
    socket.on("reply", applyReply);
    socket.on("session", applyReply);
    socket.on("agent_message", applyAgentMessage);
    socket.on("web_session_outbox", applyAgentMessage);
    socket.on("ended", (payload) => applyTurn({ ...payload, status: "completed" }));
    socket.on("idle", (payload) => applyTurn({ ...payload, status: "completed" }));
    socket.on("disconnect", () => setRealtimeConnected(false));
    socket.on("connect_error", () => {
      setRealtimeConnected(false);
      const current = chatRef.current;
      if (current?.status === "idle" && !current.messages?.length && !initializedSessionsRef.current.has(sessionId)) {
        initializedSessionsRef.current.add(sessionId);
        activateIdleSessionWithRest(current).catch((cause) => setError(cause.message));
      }
    });

    return () => {
      socket.disconnect();
      if (socketRef.current === socket) socketRef.current = null;
      setRealtimeConnected(false);
    };
  }, [activateIdleSessionWithRest, applyTurn, chat?.sessionId, chat?.status]);

  const send = async (value = draft, label = value) => {
    const content = value.trim();
    if (!content || !chat?.sessionId || sending || isTerminalStatus(chat.status)) return;
    const optimistic = {
      ...chat,
      messages: [...chat.messages, { id: `local-${Date.now()}`, role: "user", text: label.trim(), options: [], media: null }],
    };
    persist(optimistic);
    setDraft("");
    setSending(true);
    setError("");
    const socket = socketRef.current;
    if (socket?.connected) {
      const operationId = `send-${Date.now()}`;
      pendingSendRef.current = operationId;
      socket.timeout(15000).emit("message", { message: content }, (socketError, payload) => {
        if (pendingSendRef.current !== operationId) return;
        pendingSendRef.current = null;
        if (socketError) {
          setError("A resposta demorou mais que o esperado. Tente novamente.");
        } else {
          applyTurn(payload, optimistic);
        }
        setSending(false);
      });
      return;
    }
    try {
      const payload = await request(`${CHAT_API_URL}/sessions/${encodeURIComponent(chat.sessionId)}/continue`, {
        method: "POST",
        body: JSON.stringify({ message: content }),
      });
      applyTurn(payload, optimistic);
    } catch (cause) {
      setError(cause.message);
      if (cause.status === 429) setTimeout(() => setError("Você já pode tentar enviar novamente."), cause.retryAfter);
    } finally {
      setSending(false);
    }
  };

  const ended = isTerminalStatus(chat?.status);

  return (
    <section className="flex h-[min(680px,calc(100dvh-40px))] w-[min(400px,calc(100vw-24px))] flex-col overflow-hidden rounded-2xl border border-black/10 bg-[#f4f7f6] shadow-[0_18px_50px_rgba(0,0,0,.22)]" role="dialog" aria-label="Chat de atendimento Leste">
      <header className="flex items-center gap-3 bg-darkgreen px-4 py-3 text-white">
        <button type="button" onClick={onBack} className="grid h-9 w-9 place-items-center rounded-full hover:bg-white/10" aria-label="Voltar às opções"><ArrowLeft className="h-5 w-5" /></button>
        <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15"><Headphones className="h-5 w-5" /></span>
        <div className="min-w-0 flex-1"><h2 className="text-sm font-bold">Atendimento Leste</h2><p className="text-xs text-white/75">{!authComplete ? "Identificação segura" : chat?.status === "handoff" ? "Atendimento com nossa equipe" : realtimeConnected ? "Assistente virtual • tempo real" : "Assistente virtual"}</p></div>
        <button type="button" onClick={onClose} className="grid h-9 w-9 place-items-center rounded-full hover:bg-white/10" aria-label="Fechar chat"><X className="h-5 w-5" /></button>
      </header>

      {!authComplete ? <LesteChatAuth onAuthenticated={handleAuthenticated} /> : <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4" aria-live="polite">
        {loading ? <div className="flex h-full items-center justify-center text-primary"><LoaderCircle className="h-7 w-7 animate-spin" /></div> : null}
        {!loading && !chat?.messages?.length && !error ? <p className="mx-auto mt-8 max-w-64 text-center text-sm text-graylight">Iniciando seu atendimento…</p> : null}
        {chat?.messages?.map((message) => <Message key={message.id} message={message} disabled={sending || ended} onOption={send} />)}
        {sending ? <div className="flex justify-start"><span className="rounded-2xl rounded-bl-md border border-graylighter bg-white px-4 py-3"><LoaderCircle className="h-4 w-4 animate-spin text-primary" /></span></div> : null}
        {error ? <div className="rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700">{error}{!chat?.sessionId ? <button type="button" onClick={() => start(verifiedContext)} className="mt-2 flex items-center gap-1 font-bold"><RefreshCw className="h-3.5 w-3.5" />Tentar novamente</button> : null}</div> : null}
        {ended ? <div className="rounded-xl border border-graylighter bg-white p-3 text-center text-sm text-graylight">Este atendimento foi encerrado.<button type="button" onClick={() => verifiedContext ? start(verifiedContext) : setAuthComplete(false)} className="mx-auto mt-2 flex items-center gap-1 font-bold text-primary"><RefreshCw className="h-4 w-4" />Iniciar novo atendimento</button></div> : null}
        <div ref={bottomRef} />
      </div>}

      {authComplete ? <form className="flex items-end gap-2 border-t border-graylighter bg-white p-3" onSubmit={(event) => { event.preventDefault(); send(); }}>
        <label className="sr-only" htmlFor="leste-chat-message">Digite sua mensagem</label>
        <textarea id="leste-chat-message" rows={1} maxLength={2000} value={draft} disabled={loading || sending || ended || !chat?.sessionId} onChange={(event) => setDraft(event.target.value)} onKeyDown={(event) => { if (event.key === "Enter" && !event.shiftKey) { event.preventDefault(); send(); } }} placeholder="Digite sua mensagem" className="max-h-28 min-h-11 flex-1 resize-none rounded-xl border border-graylighter px-3 py-2.5 text-sm text-darkgreen outline-none focus:border-primary disabled:bg-light" />
        <button type="submit" disabled={!draft.trim() || sending || ended || !chat?.sessionId} className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-white transition hover:bg-darkgreen disabled:cursor-not-allowed disabled:opacity-40" aria-label="Enviar mensagem"><Send className="h-5 w-5" /></button>
      </form> : null}
    </section>
  );
}
