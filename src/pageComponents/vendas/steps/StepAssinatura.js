"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSales } from "@/contexts/SalesContextNew";
import CountdownBar from "@/pageComponents/vendas/components/CountdownBar";
import { calcCountdown, msToMMSS } from "@/utils/assinatura";
import SocialIconButton from "@/pageComponents/vendas/components/SocialIconButton";
import Image from "next/image";
import whatsappIcon from "@/assets/whatsIconGreen.svg"
import mailIcon from "@/assets/icons/mailIcon.svg"
import linkedin from "@/assets/linkedin.svg"
import facebook from "@/assets/facebook.svg"
import tiktok from "@/assets/tiktok.svg"
import twitter from "@/assets/twitter.svg"
import instagram from "@/assets/insta.svg"

export default function StepAssinatura({ onNext, onBack, onAssinar }) {
    const { data } = useSales();

    const ticket = data?.agendamento?.TicketNumber
    const assinaturaUrl = "https://wa.me/551142000444"
    const TOTAL_MS = 10 * 60 * 1000;
    const startAtRef = useRef(Date.now());
    const [tick, setTick] = useState(0);

    useEffect(() => {
        const id = setInterval(() => setTick((t) => t + 1), 1000);
        return () => clearInterval(id);
    }, []);

    const { remainingMs, progress } = useMemo(() => {
        return calcCountdown(startAtRef.current, TOTAL_MS);
    }, [tick]);

    const timeLabel = msToMMSS(remainingMs);

    const isExpired = remainingMs <= 0

    return (
        <div className="w-full max-w-[980px] mx-auto px-4 md:px-0">
            <div className="flex flex-col gap-y-4 md:flex-row md:items-center justify-between mt-6 md:mt-10">
                <h2 className="text-dark md:text-xl md:text-3xl font-extrabold">
                    Falta pouco!
                </h2>

                <div className="md:text-xl md:text-base text-dark font-bold">
                    Seu ticket:
                    <span className="text-primary ml-2 rounded font-extrabold bg-white px-4 py-2">
            {ticket ? `#${ticket}` : "-"}
          </span>
                </div>
            </div>

            {/* Card WhatsApp */}
            <div className="mt-6 bg-white border border-graylighter rounded-2xl shadow-sm p-5 md:p-7">
                <div className="flex items-start gap-3">
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <h3 className="text-primary font-extrabold text-lg md:text-xl">
                                Agora é no WhatsApp
                            </h3>
                            <span className="text-primary">
                                <Image src={whatsappIcon} alt={""} width={24} />
                            </span>
                        </div>

                        <p className="mt-2 text-graylight text-sm md:text-base leading-relaxed">
                            Enviamos um WhatsApp com o termo de pré-ativação para você assinar.
                            Você também receberá um checklist com o detalhamento do seu pedido.
                        </p>

                        <div className="mt-4 text-graylight text-sm">
                            O tempo para você assinar acaba em:
                        </div>

                        <div className="mt-1 text-primary font-extrabold text-2xl md:text-3xl tabular-nums">
                            {timeLabel}
                        </div>

                        <div className="mt-4">
                            <CountdownBar progress={progress} />
                        </div>

                        <div className="mt-5 flex items-center gap-3">
                            <a
                                href={assinaturaUrl}
                                className="bg-primary text-white font-extrabold px-10 py-3 rounded-md disabled:opacity-50"
                            >
                                Assinar
                            </a>

                            {isExpired ? (
                                <div className="text-[#d65a4a] text-sm">
                                    Tempo expirado. Gere um novo link.
                                </div>
                            ) : null}
                        </div>

                        <div className="mt-4 flex items-center gap-2 text-[#d65a4a] text-xs md:text-sm">
                          <span className="inline-flex min-w-5 h-5 rounded-full border border-[#d65a4a] items-center justify-center">
                            !
                          </span>
                            <span>Atenção, seu pedido será validado somente após a assinatura.</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Rodapé */}
            <div className="mt-8 md:mt-10">
                <h4 className="text-dark font-extrabold">
                    A Leste agradece o seu interesse!
                </h4>
                <p className="text-graylight mt-2">
                    Você pode falar com a gente através dos contatos abaixo:
                </p>

                <div className="mt-4 flex flex-col md:flex-row md:items-center gap-3 md:gap-6">
                    <a
                        href="mailto:sac@lestetelecom.net.br"
                        className="inline-flex items-center gap-2 border border-graylighter bg-white rounded-xl px-4 py-3 hover:bg-light transition"
                    >
                        <Image src={mailIcon} alt={""} width={20} />
                        <span className="text-primary">sac@lestetelecom.net.br</span>
                    </a>

                    <a
                        href="tel:+552120201300"
                        className="inline-flex items-center gap-2 border border-graylighter bg-white rounded-xl px-4 py-3 hover:bg-light transition"
                    >
                        <Image src={whatsappIcon} alt={""} width={16} />
                        <span className="text-primary">(21) 2020-1300</span>
                    </a>

                    <div className="flex items-center gap-2 md:ml-auto">
                        <SocialIconButton href="http://www.facebook.com/lestetelecom" icon={facebook}>f</SocialIconButton>
                        <SocialIconButton href="https://www.instagram.com/lestetelecom" icon={instagram}>i</SocialIconButton>
                        <SocialIconButton href="https://www.tiktok.com/@leste.oficial" icon={tiktok}>t</SocialIconButton>
                        <SocialIconButton href="https://twitter.com/lestetelecom" icon={twitter}>x</SocialIconButton>
                        <SocialIconButton href="https://br.linkedin.com/company/lestetelecom" icon={linkedin}>in</SocialIconButton>
                    </div>
                </div>
            </div>
        </div>
    );
}
