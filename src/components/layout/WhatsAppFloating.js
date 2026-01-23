"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import whatsappIcon from "@/assets/icons/whatsappButton.png";

const WHATSAPP_PHONE = "552120201300";

function buildWhatsAppLink({ name, contact, help }) {
    const trimmedName = String(name || "").trim();
    const trimmedContact = String(contact || "").trim();
    const trimmedHelp = String(help || "").trim();
    const text = `Olá! Meu nome é ${trimmedName}. Meu contato é ${trimmedContact}. Preciso de ajuda com: ${trimmedHelp}.`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
}

export default function WhatsAppFloating() {
    const [open, setOpen] = useState(false);
    const [help, setHelp] = useState("");
    const [name, setName] = useState("");
    const [contact, setContact] = useState("");
    const [step, setStep] = useState(0);

    const canGoName = help.trim().length > 0;
    const canGoEmail = help.trim().length > 0 && name.trim().length > 0;
    const canGoWhatsApp =
        help.trim().length > 0 && name.trim().length > 0 && contact.trim().length > 0;

    const waLink = useMemo(
        () => buildWhatsAppLink({ name, contact, help }),
        [name, contact, help]
    );

    const sendHelp = () => {
        if (!canGoName) return;
        setStep(1);
    };

    const sendName = () => {
        if (!canGoEmail) return;
        setStep(2);
    };

    const sendEmail = () => {
        if (!canGoWhatsApp) return;
        setStep(3);
    };

    useEffect(() => {
        if (step !== 3) return;
        console.log("Ajuda:", help);
        console.log("Nome:", name);
        console.log("Email:", contact);
    }, [step, help, name, contact]);

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
                        <div className="mb-4 w-fit max-w-[85%] text-dark rounded-xl bg-white px-3 py-2 text-sm shadow-sm">
                            Como posso te ajudar?
                        </div>

                        {step >= 1 ? (
                            <div className="w-full flex justify-end">
                                <p className="mb-3 w-fit max-w-[85%] font-semibold rounded-xl bg-[#25d366] px-3 py-2 text-sm shadow-sm">
                                    {help || "—"}
                                </p>
                            </div>
                        ) : null}

                        {step >= 1 ? (
                            <div className="mb-3 w-fit max-w-[85%] text-dark rounded-xl bg-white px-3 py-2 text-sm shadow-sm">
                                Qual seu nome?
                            </div>
                        ) : null}

                        {step >= 2 ? (
                            <div className="w-full flex justify-end">
                                <p className="mb-3 w-fit max-w-[85%] font-semibold rounded-xl bg-[#25d366] px-3 py-2 text-sm shadow-sm">
                                    Meu nome é {name || "—"}
                                </p>
                            </div>
                        ) : null}

                        {step >= 2 ? (
                            <div className="mb-3 w-fit max-w-[85%] text-dark rounded-xl bg-white px-3 py-2 text-sm shadow-sm">
                                Qual seu e-mail?
                            </div>
                        ) : null}

                        {step >= 3 ? (
                            <div className="w-full flex justify-end">
                                <p className="mb-3 w-fit max-w-[85%] font-semibold rounded-xl bg-[#25d366] px-3 py-2 text-sm shadow-sm">
                                    Meu e-mail é {contact || "—"}
                                </p>
                            </div>
                        ) : null}
                    </div>

                    <div className="border-t border-black/10 bg-white p-3">
                        {step === 0 ? (
                            <>
                                <input
                                    type="text"
                                    value={help}
                                    onChange={(e) => setHelp(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            sendHelp();
                                        }
                                    }}
                                    placeholder="Digite aqui..."
                                    className="mb-3 w-full rounded-xl border text-dark border-black/10 px-3 py-2 text-sm outline-none focus:border-primary"
                                />
                                <button
                                    type="button"
                                    onClick={sendHelp}
                                    className={`w-full rounded-xl px-3 py-2 text-sm font-semibold text-white ${
                                        canGoName ? "bg-[#25D366]" : "pointer-events-none bg-[#25D366]/50"
                                    }`}
                                >
                                    Enviar
                                </button>
                            </>
                        ) : null}

                        {step === 1 ? (
                            <>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            sendName();
                                        }
                                    }}
                                    placeholder="Digite aqui..."
                                    className="mb-3 w-full rounded-xl border text-dark border-black/10 px-3 py-2 text-sm outline-none focus:border-primary"
                                />
                                <button
                                    type="button"
                                    onClick={sendName}
                                    className={`w-full rounded-xl px-3 py-2 text-sm font-semibold text-white ${
                                        canGoEmail ? "bg-[#25D366]" : "pointer-events-none bg-[#25D366]/50"
                                    }`}
                                >
                                    Enviar
                                </button>
                            </>
                        ) : null}

                        {step === 2 ? (
                            <>
                                <input
                                    type="text"
                                    value={contact}
                                    onChange={(e) => setContact(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault();
                                            sendEmail();
                                        }
                                    }}
                                    placeholder="Digite aqui..."
                                    className="mb-3 w-full rounded-xl border text-dark border-black/10 px-3 py-2 text-sm outline-none focus:border-primary"
                                />
                                <button
                                    type="button"
                                    onClick={sendEmail}
                                    className={`w-full rounded-xl px-3 py-2 text-sm font-semibold text-white ${
                                        canGoWhatsApp ? "bg-[#25D366]" : "pointer-events-none bg-[#25D366]/50"
                                    }`}
                                >
                                    Enviar
                                </button>
                            </>
                        ) : null}

                        {step >= 3 ? (
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block w-full rounded-xl px-3 py-2 text-center text-sm font-semibold text-white shadow-[0_10px_20px_rgba(37,211,102,.25)] ${
                                    canGoWhatsApp ? "bg-[#25D366]" : "pointer-events-none bg-[#25D366]/50"
                                }`}
                            >
                                Chat no WhatsApp
                            </a>
                        ) : null}
                    </div>
                </div>
            ) : null}

            <button
                type="button"
                onClick={() => {
                    setOpen((v) => !v);
                    setStep(0);
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
