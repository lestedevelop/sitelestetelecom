"use client";

import SocialIconButton from "@/pageComponents/vendas/components/SocialIconButton";
import linkedin from "@/assets/linkedin.svg"
import facebook from "@/assets/facebook.svg"
import tiktok from "@/assets/tiktok.svg"
import twitter from "@/assets/twitter.svg"
import instagram from "@/assets/insta.svg"
import Image from "next/image";
import mailIcon from "@/assets/icons/mailIcon.svg";
import whatsappIcon from "@/assets/whatsIconGreen.svg"
import telIcon from "@/assets/telIcon.svg"

export default function StepSemViabilidade({ onBack }) {
    return (
        <div className="w-full max-w-[980px] mx-auto px-4 md:px-0">
            {/* Top */}
            <div className="mt-6 md:mt-10 flex items-center gap-3">
                <button
                    type="button"
                    onClick={() => onBack?.()}
                    className="text-graylight hover:text-dark transition inline-flex items-center gap-2"
                >
                    <span className="text-lg">‹</span>
                    <span>Voltar</span>
                </button>
            </div>

            {/* Title */}
            <div className="mt-6 flex items-start gap-4">
                <div className="hidden md:grid w-12 h-12 rounded-full bg-primary place-items-center">
                    <Image src={telIcon} alt={""} width={24} />
                </div>

                <div>
                    <h2 className="text-primary text-2xl md:text-4xl font-extrabold">
                        Aguarde nosso contato!
                    </h2>

                    <p className="mt-4 text-darkgreen text-base md:text-lg leading-relaxed max-w-[820px]">
                        Para esse endereço, precisaremos realizar uma análise específica e não
                        será possível concluir seu pré agendamento pelo autoatendimento.
                    </p>
                </div>
            </div>

            {/* Warning box */}
            <div className="mt-8 bg-white border border-graylighter rounded-2xl p-5 md:p-6">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl border border-[#f4b400] grid place-items-center">
                        <span className="text-[#f4b400] text-xl -mt-1">⚠</span>
                    </div>
                    <div className="text-darkgreen text-base md:text-lg">
                        Um de nossos colaboradores fará contato para maiores informações.
                    </div>
                </div>
            </div>

            {/* Footer contacts (igual assinatura) */}
            <div className="mt-10">
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
                        <span className="text-primary">
              sac@lestetelecom.net.br
            </span>
                    </a>

                    <a
                        href="tel:+552120201300"
                        className="inline-flex items-center gap-2 border border-graylighter bg-white rounded-xl px-4 py-3 hover:bg-light transition"
                    >
                        <Image src={whatsappIcon} alt={""} width={20} />
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
