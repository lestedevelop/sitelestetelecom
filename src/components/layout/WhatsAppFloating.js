"use client";

import { useState } from "react";
import Image from "next/image";
import whatsappIcon from "@/assets/icons/whatsappButton.png";
import atendimentoIcon from "@/assets/AtendimentoHeadphone.svg";

const WHATSAPP_PHONE = "552120201300";

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

const whatsappOptions = [
  {
    label: "Assine pelo WhatsApp!",
    icon: whatsappIcon,
    href: whatsappLink("Olá! Quero assinar a Leste pelo WhatsApp."),
  },
  {
    label: "Precisa de atendimento? Fale com a gente.",
    icon: atendimentoIcon,
    href: whatsappLink("Olá! Preciso de atendimento."),
  },
];

export default function WhatsAppFloating() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3"
      style={{ right: 20, bottom: 20, zIndex: 2147483647 }}
    >
      {open ? (
        <div className="w-[min(calc(100vw-40px),360px)] overflow-hidden rounded-2xl border border-black/10 bg-white p-3 shadow-[0_16px_40px_rgba(0,0,0,.16)]">
          <div className="mb-2 flex items-center justify-between px-1">
            <div>
              <p className="text-sm font-bold text-darkgreen">WhatsApp Leste</p>
              <p className="text-xs text-graylight">(021) 2020-1300</p>
            </div>
            <button
              type="button"
              className="rounded-lg px-2 py-1 text-xs font-semibold text-graylight hover:bg-light hover:text-darkgreen"
              onClick={() => setOpen(false)}
            >
              Fechar
            </button>
          </div>

          <div className="space-y-2">
            {whatsappOptions.map((option) => (
              <a
                key={option.label}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-16 items-center gap-3 rounded-xl border border-graylighter bg-light px-4 py-3 text-left text-sm font-semibold text-darkgreen transition-colors hover:border-primary hover:text-primary"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <Image src={option.icon} alt="" className="h-6 w-6 object-contain" />
                </span>
                <span>{option.label}</span>
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="relative grid h-16 w-16 place-items-center rounded-full bg-[#25D366] shadow-[0_12px_24px_rgba(0,0,0,.2)] transition-transform hover:-translate-y-px"
        aria-label="Abrir opções de WhatsApp"
        aria-expanded={open}
      >
        <Image src={whatsappIcon} alt="WhatsApp" width={32} height={32} />
      </button>
    </div>
  );
}
