"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, KeyRound, Mail, MessageSquare, ShieldCheck, UserPlus, UserRound } from "lucide-react";
import {
  AUTH_CODE_DURATION_MS,
  contactConfirmationMatches,
  maskCellphone,
  maskCpf,
  maskEmail,
  normalizeCellphone,
  normalizeCpf,
  onlyDigits,
} from "@/lib/atendimentoAuth";

const AUTH_API_URL = "/api/atendimento-auth";

async function authRequest(action, body) {
  let response;
  try {
    response = await fetch(`${AUTH_API_URL}/${action}`, {
      method: "POST",
      credentials: "include",
      headers: { Accept: "application/json", "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
  } catch {
    throw new Error("Não foi possível acessar a autenticação agora.");
  }

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    const error = new Error(data?.message || "Não foi possível continuar agora.");
    error.status = response.status;
    error.data = data;
    throw error;
  }
  return data;
}

function BackButton({ onClick, disabled }) {
  return <button type="button" onClick={onClick} disabled={disabled} className="mb-3 grid h-9 w-9 place-items-center rounded-full border border-graylighter bg-white text-darkgreen transition hover:border-primary hover:text-primary disabled:opacity-50" aria-label="Voltar"><ArrowLeft className="h-4.5 w-4.5" /></button>;
}

function SubmitButton({ children, disabled }) {
  return <button type="submit" disabled={disabled} className="mt-2 w-full rounded-xl bg-primary px-4 py-3 text-sm font-bold text-white transition hover:bg-darkgreen disabled:cursor-not-allowed disabled:opacity-50">{children}</button>;
}

function Field({ label, ...props }) {
  return <label className="block text-xs font-semibold text-darkgreen"><span className="mb-1.5 block">{label}</span><input {...props} className="h-11 w-full rounded-xl border border-graylighter bg-white px-3 text-sm text-darkgreen outline-none transition focus:border-primary disabled:bg-light" /></label>;
}

export default function LesteChatAuth({ onAuthenticated }) {
  const [step, setStep] = useState("audience");
  const [audience, setAudience] = useState("");
  const [cpf, setCpf] = useState("");
  const [visitor, setVisitor] = useState({ nome: "", celular: "", email: "" });
  const [identity, setIdentity] = useState(null);
  const [deliveryMethod, setDeliveryMethod] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [code, setCode] = useState("");
  const [expiresAt, setExpiresAt] = useState(0);
  const [now, setNow] = useState(Date.now());
  const [mustRequestNewCode, setMustRequestNewCode] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const requestPendingRef = useRef(false);

  const email = identity?.email || "";
  const celular = identity?.celular || "";
  const hasEmail = Boolean(email && celular);
  const hasSms = Boolean(celular);
  const remainingSeconds = Math.max(0, Math.ceil((expiresAt - now) / 1000));
  const expired = step === "code" && remainingSeconds === 0;
  const timer = `${String(Math.floor(remainingSeconds / 60)).padStart(2, "0")}:${String(remainingSeconds % 60).padStart(2, "0")}`;

  useEffect(() => {
    if (step !== "code") return undefined;
    const interval = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(interval);
  }, [step]);

  const channelLabel = useMemo(() => deliveryMethod === "email" ? "e-mail" : "SMS", [deliveryMethod]);

  const resetFeedback = () => {
    setError("");
    setNotice("");
  };

  const beginRequest = () => {
    if (requestPendingRef.current) return false;
    requestPendingRef.current = true;
    setBusy(true);
    return true;
  };

  const endRequest = () => {
    requestPendingRef.current = false;
    setBusy(false);
  };

  const chooseAudience = (value) => {
    setAudience(value);
    setStep("identify");
    resetFeedback();
  };

  const identify = async (event) => {
    event.preventDefault();
    resetFeedback();
    if (!beginRequest()) return;
    try {
      if (audience === "customer") {
        const normalizedCpf = normalizeCpf(cpf);
        if (!normalizedCpf) throw new Error("Informe um CPF válido.");
        const customer = await authRequest("info-client-init", { identifierType: "cpf", identifier: normalizedCpf });
        const customerCellphone = normalizeCellphone(customer?.cliente_celular || customer?.contato_celular);
        const customerEmail = String(customer?.contato_email || customer?.e_mail || "").trim();
        if (!customer?.codcli || !customerCellphone) throw new Error("Não encontramos um celular válido no cadastro.");
        setCpf(normalizedCpf);
        setIdentity({ audience, codcli: customer.codcli, celular: customerCellphone, email: customerEmail });
        setDeliveryMethod(customerEmail ? "email" : "sms");
      } else {
        const normalizedCpf = normalizeCpf(cpf);
        const visitorCellphone = normalizeCellphone(visitor.celular);
        const visitorEmail = String(visitor.email || "").trim();
        if (!normalizedCpf || !visitor.nome.trim() || !visitorCellphone || !visitorEmail) throw new Error("Preencha CPF, nome, celular e e-mail válidos.");
        const result = await authRequest("new-visitor", { cpf: normalizedCpf, nome: visitor.nome.trim(), celular: visitorCellphone, email: visitorEmail });
        if (!result?.visitorId) throw new Error("Não foi possível cadastrar seus dados.");
        setCpf(normalizedCpf);
        setIdentity({ audience, visitor_id: result.visitorId, celular: visitorCellphone, email: visitorEmail });
        setDeliveryMethod("email");
      }
      setConfirmation("");
      setStep("contact");
    } catch (cause) {
      setError(cause.message);
    } finally {
      endRequest();
    }
  };

  const sendCode = async (event) => {
    event?.preventDefault();
    resetFeedback();
    if (!contactConfirmationMatches(deliveryMethod, confirmation, { email, celular })) {
      setError("Os dados informados não correspondem ao contato selecionado.");
      return;
    }
    if (!beginRequest()) return;
    try {
      await authRequest("generate-code", {
        audience,
        celular,
        deliveryMethod,
        email: deliveryMethod === "email" ? email : "",
        codcli: identity?.codcli || undefined,
        visitor_id: identity?.visitor_id || undefined,
      });
      setCode("");
      setExpiresAt(Date.now() + AUTH_CODE_DURATION_MS);
      setNow(Date.now());
      setMustRequestNewCode(false);
      setStep("code");
    } catch (cause) {
      setError(cause.message);
    } finally {
      endRequest();
    }
  };

  const validateCode = async (event) => {
    event.preventDefault();
    resetFeedback();
    if (expired || mustRequestNewCode) {
      setError("O código expirou. Solicite um novo código.");
      return;
    }
    if (!/^\d{6}$/.test(code)) {
      setError("Digite os seis dígitos do código.");
      return;
    }
    if (!beginRequest()) return;
    try {
      await authRequest("validate-code", {
        audience,
        celular,
        code,
        visitor_id: identity?.visitor_id || undefined,
      });
      await onAuthenticated({ audience, cpf: normalizeCpf(cpf) });
    } catch (cause) {
      setMustRequestNewCode(Boolean(cause.data?.retryWithNewCode));
      setError(cause.status === 400 && !cause.data?.message
        ? "Código inválido ou substituído. Use o código mais recente recebido."
        : cause.message);
    } finally {
      endRequest();
    }
  };

  const resendCode = async () => {
    resetFeedback();
    if (!beginRequest()) return;
    try {
      await authRequest("generate-code", {
        audience,
        celular,
        deliveryMethod,
        email: deliveryMethod === "email" ? email : "",
        codcli: identity?.codcli || undefined,
        visitor_id: identity?.visitor_id || undefined,
      });
      setCode("");
      setExpiresAt(Date.now() + AUTH_CODE_DURATION_MS);
      setNow(Date.now());
      setMustRequestNewCode(false);
      setNotice(`Novo código enviado por ${channelLabel}.`);
    } catch (cause) {
      setError(cause.message);
    } finally {
      endRequest();
    }
  };

  return (
    <div className="flex-1 overflow-y-auto px-5 py-5 text-darkgreen">
      {step === "audience" ? <div className="mx-auto flex max-w-sm flex-col items-center pt-5 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-primary/10 text-primary"><ShieldCheck className="h-7 w-7" /></span>
        <h3 className="mt-4 text-lg font-bold">Vamos identificar você</h3>
        <p className="mt-1 text-sm text-graylight">Escolha uma opção para iniciar o atendimento com segurança.</p>
        <div className="mt-6 grid w-full gap-3">
          <button type="button" onClick={() => chooseAudience("customer")} className="flex items-center gap-3 rounded-xl border border-graylighter bg-white p-4 text-left text-sm font-bold transition hover:border-primary hover:text-primary"><UserRound className="h-5 w-5" />Já sou cliente</button>
          <button type="button" onClick={() => chooseAudience("visitor")} className="flex items-center gap-3 rounded-xl border border-graylighter bg-white p-4 text-left text-sm font-bold transition hover:border-primary hover:text-primary"><UserPlus className="h-5 w-5" />Ainda não sou cliente</button>
        </div>
      </div> : null}

      {step === "identify" ? <div className="mx-auto max-w-sm"><BackButton onClick={() => setStep("audience")} disabled={busy} /><h3 className="text-lg font-bold">{audience === "customer" ? "Informe seu CPF" : "Seus dados de contato"}</h3><p className="mb-5 mt-1 text-sm text-graylight">{audience === "customer" ? "Usaremos o cadastro da Leste para confirmar sua identidade." : "Cadastre seus dados para continuar com o atendimento."}</p>
        <form className="space-y-4" onSubmit={identify}>
          {audience === "customer" ? <Field label="CPF" name="cpf" type="text" inputMode="numeric" autoComplete="off" placeholder="000.000.000-00" maxLength={14} value={maskCpf(cpf)} onChange={(event) => { setCpf(onlyDigits(event.target.value).slice(0, 11)); resetFeedback(); }} disabled={busy} required /> : <>
            <Field label="CPF" name="cpf" type="text" inputMode="numeric" autoComplete="off" placeholder="000.000.000-00" maxLength={14} value={maskCpf(cpf)} onChange={(event) => { setCpf(onlyDigits(event.target.value).slice(0, 11)); resetFeedback(); }} disabled={busy} required />
            <Field label="Nome completo" name="name" type="text" autoComplete="name" value={visitor.nome} onChange={(event) => setVisitor((current) => ({ ...current, nome: event.target.value }))} disabled={busy} required />
            <Field label="Celular" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="(00) 00000-0000" value={visitor.celular} onChange={(event) => setVisitor((current) => ({ ...current, celular: event.target.value }))} disabled={busy} required />
            <Field label="E-mail" name="email" type="email" inputMode="email" autoComplete="email" placeholder="nome@exemplo.com" value={visitor.email} onChange={(event) => setVisitor((current) => ({ ...current, email: event.target.value }))} disabled={busy} required />
          </>}
          <SubmitButton disabled={busy}>{busy ? "Consultando…" : "Continuar"}</SubmitButton>
        </form>
      </div> : null}

      {step === "contact" ? <div className="mx-auto max-w-sm"><BackButton onClick={() => setStep("identify")} disabled={busy} /><h3 className="text-lg font-bold">Receba seu código</h3><p className="mb-5 mt-1 text-sm text-graylight">Escolha um canal e confirme parte do contato cadastrado.</p>
        <form className="space-y-4" onSubmit={sendCode}>
          <div className="grid gap-2" role="radiogroup" aria-label="Canal de envio">
            {hasEmail ? <button type="button" role="radio" aria-checked={deliveryMethod === "email"} onClick={() => { setDeliveryMethod("email"); setConfirmation(""); resetFeedback(); }} className={`flex items-center gap-3 rounded-xl border bg-white p-3 text-left ${deliveryMethod === "email" ? "border-primary text-primary" : "border-graylighter"}`}><Mail className="h-5 w-5" /><span><strong className="block text-sm">E-mail</strong><small>{maskEmail(email)}</small></span></button> : null}
            {hasSms ? <button type="button" role="radio" aria-checked={deliveryMethod === "sms"} onClick={() => { setDeliveryMethod("sms"); setConfirmation(""); resetFeedback(); }} className={`flex items-center gap-3 rounded-xl border bg-white p-3 text-left ${deliveryMethod === "sms" ? "border-primary text-primary" : "border-graylighter"}`}><MessageSquare className="h-5 w-5" /><span><strong className="block text-sm">SMS</strong><small>{maskCellphone(celular)}</small></span></button> : null}
          </div>
          <Field label={deliveryMethod === "email" ? "Digite a parte do e-mail antes do @" : "Digite os 4 últimos números do celular"} type="text" inputMode={deliveryMethod === "email" ? "email" : "numeric"} autoComplete="off" value={confirmation} onChange={(event) => { setConfirmation(deliveryMethod === "sms" ? onlyDigits(event.target.value).slice(0, 4) : event.target.value); resetFeedback(); }} disabled={busy} required />
          <SubmitButton disabled={busy || !deliveryMethod}>{busy ? "Enviando…" : "Enviar código"}</SubmitButton>
        </form>
      </div> : null}

      {step === "code" ? <div className="mx-auto max-w-sm"><BackButton onClick={() => setStep("contact")} disabled={busy} /><span className="mb-3 grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary"><KeyRound className="h-5 w-5" /></span><h3 className="text-lg font-bold">Digite seu código</h3><p className="mb-4 mt-1 text-sm text-graylight">Enviamos 6 dígitos por {channelLabel}.</p>
        <form className="space-y-4" onSubmit={validateCode}>
          <p className={`text-center text-xs font-bold ${expired ? "text-red-600" : "text-graylight"}`}>{expired ? "Código expirado" : `Expira em ${timer}`}</p>
          <Field label="Código de confirmação" type="text" inputMode="numeric" autoComplete="one-time-code" maxLength={6} value={code} onChange={(event) => { setCode(onlyDigits(event.target.value).slice(0, 6)); resetFeedback(); }} disabled={busy || expired || mustRequestNewCode} required />
          <SubmitButton disabled={busy || expired || mustRequestNewCode}>{busy ? "Validando…" : "Continuar"}</SubmitButton>
          <button type="button" onClick={resendCode} disabled={busy || (!expired && !mustRequestNewCode)} className="w-full py-2 text-sm font-bold text-primary disabled:cursor-not-allowed disabled:text-graylighter">Reenviar código</button>
        </form>
      </div> : null}

      {error ? <p className="mx-auto mt-4 max-w-sm rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700" role="alert">{error}</p> : null}
      {notice ? <p className="mx-auto mt-4 max-w-sm rounded-xl border border-primary/20 bg-primary/5 p-3 text-xs text-primary" role="status">{notice}</p> : null}
    </div>
  );
}
