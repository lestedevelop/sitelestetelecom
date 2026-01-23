"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import whatsappIcon from "@/assets/icons/whatsappButton.png";

const WHATSAPP_PHONE = "552120201300";

const QUESTIONS = [
    { key: "help", question: "Como posso te ajudar?" },
    { key: "name", question: "Qual seu nome?", answerPrefix: "" },
    { key: "contact", question: "Qual seu e-mail?", answerPrefix: "" },
    { key: "cel", question: "Qual seu celular?", answerPrefix: "" },
];

const EMPTY_ANSWERS = { help: "", name: "", contact: "",cel: "" };

function buildWhatsAppLink({ name, contact, help }) {
    const trimmedName = String(name || "").trim();
    const trimmedContact = String(contact || "").trim();
    const trimmedHelp = String(help || "").trim();
    const text = `Olá! Meu nome é ${trimmedName}. Meu contato é ${trimmedContact}. Preciso de ajuda com: ${trimmedHelp}.`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export default function WhatsAppFloating() {
    const [open, setOpen] = useState(false);
    const [answers, setAnswers] = useState(EMPTY_ANSWERS);
    const [step, setStep] = useState(0);

    const currentQuestion = QUESTIONS[step] || null;
    const currentKey = currentQuestion?.key || "";
    const currentValue = currentKey ? answers[currentKey] : "";
    const canAdvance = currentValue.trim().length > 0;
    const isComplete = step >= QUESTIONS.length;

    const waLink = useMemo(
        () => buildWhatsAppLink(answers),
        [answers]
    );

    const handleSend = () => {
        if (!canAdvance) return;
        setStep((s) => Math.min(s + 1, QUESTIONS.length));
    };

    useEffect(() => {
        if (step !== QUESTIONS.length) return;
    }, [step, answers]);

    return (
        <div
            className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3"
            style={{ right: 20, bottom: 20, zIndex: 2147483647 }}
        >
            {open ? (
                <div className="w-[300px] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_16px_40px_rgba(0,0,0,.12)]">
                    <div className="flex items-center justify-between bg-[#0b8f73] px-4 py-3 text-white">
                        <div>
                            <div className="text-sm font-semibold">Leste Telecom</div>
                            <div className="text-[11px] opacity-90">Normalmente responde em até 10min</div>
                        </div>
                        <button
                            type="button"
                            className="rounded-lg px-2 py-1 text-xs font-semibold text-white/80 hover:bg-white/10"
                            onClick={() => setOpen(false)}
                        >
                            Fechar
                        </button>
                    </div>

                    <div className="bg-[url('/whatsapp-bg.png')] bg-[length:180px_180px] p-4">
                        <div className="mb-3 w-fit max-w-[85%] text-dark rounded-xl bg-white px-3 py-2 text-sm shadow-sm">
                            Oi!
                        </div>

                        {QUESTIONS.map((q, index) => {
                            const isAsked = index <= step;
                            const isAnswered = index < step;
                            const value = answers[q.key];

                            return (
                                <div key={q.key}>
                                    {isAsked ? (
                                        <div className="mb-3 w-fit max-w-[85%] text-dark rounded-xl bg-white px-3 py-2 text-sm shadow-sm">
                                            {q.question}
                                        </div>
                                    ) : null}

                                    {isAnswered ? (
                                        <div className="w-full flex justify-end">
                                            <p className="mb-3 w-fit max-w-[85%] font-semibold rounded-xl bg-[#25d366] px-3 py-2 text-sm shadow-sm">
                                                {q.answerPrefix ? `${q.answerPrefix} ${value || "—"}` : value || "—"}
                                            </p>
                                        </div>
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>

                    <div className="border-t border-black/10 bg-white p-3">
                        {!isComplete ? (
                            <>
                                <input
                                    type="text"
                                    value={currentValue}
                                    onChange={(e) =>
                                        setAnswers((prev) => ({
                                            ...prev,
                                            [currentKey]: e.target.value,
                                        }))
                                    }
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            handleSend();
                                        }
                                    }}
                                    placeholder="Digite aqui..."
                                    className="mb-3 w-full rounded-xl border text-dark border-black/10 px-3 py-2 text-sm outline-none focus:border-primary"
                                />
                                <button
                                    type="button"
                                    onClick={handleSend}
                                    className={`w-full rounded-xl px-3 py-2 text-sm font-semibold text-white ${
                                        canAdvance ? "bg-[#25D366]" : "pointer-events-none bg-[#25D366]/50"
                                    }`}
                                >
                                    Enviar
                                </button>
                            </>
                        ) : (
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-full rounded-xl px-3 py-2 text-center text-sm font-semibold text-white shadow-[0_10px_20px_rgba(37,211,102,.25)] bg-[#25D366]"
                            >
                                Chat no WhatsApp
                            </a>
                        )}
                    </div>
                </div>
            ) : null}

            <button
                type="button"
                onClick={() => {
                    setOpen((v) => !v);
                    setStep(0);
                    setAnswers(EMPTY_ANSWERS);
                }}
                className="relative grid h-16 w-16 place-items-center rounded-full bg-[#25D366] shadow-[0_12px_24px_rgba(0,0,0,.2)]"
                aria-label="Abrir WhatsApp"
            >
                <Image src={whatsappIcon} alt="WhatsApp" width={32} height={32} />
                <span className="absolute -right-1 -top-1 grid h-6 w-6 place-items-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow">
                    1
                </span>
            </button>
        </div>
    );
}
