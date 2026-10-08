"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Headphones, MessageCircle } from "lucide-react";
import whatsappIcon from "@/assets/icons/whatsappButton.png";
import atendimentoIcon from "@/assets/AtendimentoHeadphone.svg";
import LesteChat from "@/components/layout/LesteChat";

const WHATSAPP_PHONE = "552120201300";

function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
}

export default function WhatsAppFloating({ showWhatsApp = true, showChatbot = true, chatFlowId = "clone2-capta" }) {
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMinimized, setChatMinimized] = useState(false);

  useEffect(() => {
    if (!chatOpen) return undefined;

    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflow = html.style.overflow;
    const previousBodyOverflow = body.style.overflow;
    const mobile = window.matchMedia("(max-width: 639px)");
    const syncScroll = () => {
      html.style.overflow = mobile.matches ? "hidden" : previousHtmlOverflow;
      body.style.overflow = mobile.matches ? "hidden" : previousBodyOverflow;
    };

    syncScroll();
    mobile.addEventListener("change", syncScroll);
    return () => {
      mobile.removeEventListener("change", syncScroll);
      html.style.overflow = previousHtmlOverflow;
      body.style.overflow = previousBodyOverflow;
    };
  }, [chatOpen]);

  if (!showChatbot) {
    return <a
      href={whatsappLink("Olá! Preciso de atendimento da Leste.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[60] grid h-16 w-16 place-items-center rounded-full bg-[#25D366] shadow-[0_12px_24px_rgba(0,0,0,.2)] transition-transform hover:-translate-y-px"
      style={{ right: 20, bottom: 20, zIndex: 2147483647 }}
      aria-label="Abrir WhatsApp Leste"
    ><Image src={whatsappIcon} alt="" width={32} height={32} /></a>;
  }

  return (
    <div
      className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3"
      style={{ right: 20, bottom: 20, zIndex: 2147483647 }}
    >
      {chatOpen || chatMinimized ? (
        <div className={chatOpen ? "" : "hidden"}>
          <LesteChat
            flowId={chatFlowId}
            onBack={() => { setChatOpen(false); setChatMinimized(false); setOpen(showWhatsApp); }}
            onMinimize={() => { setChatOpen(false); setChatMinimized(true); setOpen(false); }}
            onClose={() => { setChatOpen(false); setChatMinimized(false); setOpen(false); }}
          />
        </div>
      ) : open && showWhatsApp ? (
        <div className="w-[min(calc(100vw-40px),360px)] overflow-hidden rounded-2xl border border-black/10 bg-white p-3 shadow-[0_16px_40px_rgba(0,0,0,.16)]">
          <div className="mb-2 flex items-center justify-between px-1">
            <div>
              <p className="text-sm font-bold text-darkgreen">Atendimento Leste</p>
              <p className="text-xs text-graylight">Escolha uma opção para continuar</p>
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
              {/*<button type="button" onClick={() => { setChatOpen(true); setChatMinimized(false); setOpen(false); }} className="flex min-h-16 w-full items-center gap-3 rounded-xl border border-graylighter bg-light px-4 py-3 text-left text-sm font-semibold text-darkgreen transition-colors hover:border-primary hover:text-primary">*/}
              {/*  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">*/}
              {/*    <Image src={atendimentoIcon} alt="" className="h-6 w-6 object-contain" />*/}
              {/*  </span>*/}
              {/*  <span>Assine por aqui</span>*/}
              {/*</button>*/}
              <a href={whatsappLink("Olá! Preciso de atendimento da Leste.")} target="_blank" rel="noopener noreferrer" className="flex min-h-16 items-center gap-3 rounded-xl border border-graylighter bg-light px-4 py-3 text-left text-sm font-semibold text-darkgreen transition-colors hover:border-primary hover:text-primary">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
                  <Image src={whatsappIcon} alt="" className="h-6 w-6 object-contain" />
                </span>
                <span>Precisa de atendimento? Fale com a gente.</span>
              </a>
          </div>
        </div>
      ) : null}

      {!chatOpen ? <button
        type="button"
        onClick={() => {
          if (chatMinimized) {
            setChatOpen(true);
            setChatMinimized(false);
          } else if (!showWhatsApp) {
            setChatOpen(true);
          } else {
            setOpen((value) => !value);
          }
        }}
        className="relative grid h-16 w-16 place-items-center rounded-full bg-[#25D366] shadow-[0_12px_24px_rgba(0,0,0,.2)] transition-transform hover:-translate-y-px"
        aria-label={chatMinimized ? "Restaurar chat" : !showWhatsApp ? "Abrir atendimento" : open ? "Fechar opções de atendimento" : "Abrir opções de atendimento"}
        aria-expanded={showWhatsApp && !chatMinimized ? open : false}
      >
        {chatMinimized || !showWhatsApp ? <Headphones className="h-8 w-8 text-white" /> : open ? <MessageCircle className="h-8 w-8 text-white" /> : <Image src={whatsappIcon} alt="WhatsApp" width={32} height={32} />}
      </button> : null}
    </div>
  );
}
