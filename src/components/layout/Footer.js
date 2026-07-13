"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import logoLeste from "@/assets/lestelogocapabranco.png";
import telIcon from "@/assets/telIcon.svg";
import whatsIcon from "@/assets/whatsIcon.svg";
import facebook from "@/assets/icons/footer/facebook.svg";
import insta from "@/assets/icons/footer/insta.svg";
import linkedin from "@/assets/icons/footer/linkedin.svg";
import tiktok from "@/assets/icons/footer/tiktok.svg";
import twitter from "@/assets/icons/footer/twitter.svg";
import socialWhatsIcon from "@/assets/icons/footer/whatsapp.svg";
import youtube from "@/assets/icons/footer/youtube.svg";
import portalLeste from "@/assets/portalLeste.svg";
import appLeste from "@/assets/appLeste.svg";
import topoFooter from "@/assets/icons/footer/topo.svg";
import TrackedLink from "@/components/links/TrackedLink";

const socialLinks = [
    {href: "https://api.whatsapp.com/send/?phone=552120201300", label: "WhatsApp", icon: socialWhatsIcon},
    {href: "https://www.facebook.com/LesteTelecom/", label: "Facebook", icon: facebook},
    {href: "https://www.instagram.com/lestetelecom/", label: "Instagram", icon: insta},
    {href: "https://www.tiktok.com/@leste.oficial", label: "TikTok", icon: tiktok},
    {href: "https://x.com/lestetelecom", label: "X", icon: twitter},
    {href: "https://www.linkedin.com/company/lestetelecom/posts", label: "LinkedIn", icon: linkedin},
    {href: "https://www.youtube.com/@LesteTelecom", label: "YouTube", icon: youtube},
];

const footerLinks = [
    {href: "https://vendas.lestetelecom.com.br/vendas", label: "Contratação on-line"},
    {href: "/faq/canal-oficial-de-atendimento", label: "Central de atendimento"},
    {href: "https://portal.lestetelecom.com.br/login", label: "2ª via da conta"},
    {href: "/faq", label: "Precisa de ajuda? FAQ"},
    {href: "/faq/lojas", label: "Nossas lojas"},
    {href: "https://lestetelecom.vagas.solides.com.br/", label: "Trabalhe na Leste"},
    {href: "/info-legal", label: "Contrato e regulamentos"},
    {href: "/leste-suporte", label: "Conheça os aplicativos"},
];

const supportPhones = [
    {
        href: "https://api.whatsapp.com/send/?phone=552120201300&text&app_absent=0",
        icon: whatsIcon,
        label: "(021) 2020-1300",
    },
    {href: "tel:+552108000531300", icon: telIcon, label: "(021) 0800 053 1300"},
    {href: "tel:+552139400130", icon: telIcon, label: "(021) 3940-0130"},
];

export default function Footer() {
    const isExternalLink = (href) => href.startsWith("http");

    function scrollToTop() {
        window.scrollTo({top: 0, behavior: "smooth"});
    }

    return (
        <footer className="relative w-full bg-[#003B2E] text-white">
            <button
                type="button"
                onClick={scrollToTop}
                aria-label="Voltar ao topo"
                className="absolute top-0 z-40 w-full -translate-y-[50%] cursor-pointer"
            >
                <Image
                    src={topoFooter}
                    alt=""
                    className="w-full xl:mb-24"
                />
            </button>

            <div className="container relative z-50 pt-14 pb-16 md:pt-18 md:pb-20 lg:pt-24 lg:pb-24">
                <div
                    className="grid gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-[1.35fr_.9fr_.8fr] lg:gap-12">
                    <div className="space-y-10">
                        <div className="flex flex-wrap items-center gap-3">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary transition-transform hover:-translate-y-px"
                                    aria-label={item.label}
                                >
                                    <Image src={item.icon} alt="" className="h-7 w-7"/>
                                </a>
                            ))}
                        </div>

                        <div className="space-y-5">
                            <h2 className="text-2xl font-medium tracking-[-0.02em] md:text-[1.75rem] lg:text-2xl">
                                Baixe agora os nossos Apps!
                            </h2>

                            <div className="grid gap-4 sm:grid-cols-2 lg:flex lg:flex-row">
                                <a
                                    href="https://onelink.to/lestecentral"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3"
                                >
                                    <Image src={appLeste} alt="Leste Central" className="h-[52px] w-[52px] rounded-xl"/>
                                    <div className="leading-tight">
                                        <div className="text-sm text-white/75">Baixar</div>
                                        <div className="text-2xl font-semibold">Leste Central</div>
                                    </div>
                                </a>

                                <a
                                    href="https://onelink.to/lestesuporte"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3"
                                >
                                    <Image src={portalLeste} alt="Leste Suporte"
                                           className="h-[52px] w-[52px] rounded-xl"/>
                                    <div className="leading-tight">
                                        <div className="text-sm text-white/75">Baixar</div>
                                        <div className="text-2xl font-semibold">Leste Suporte</div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-medium tracking-[-0.02em] md:text-[1.75rem] lg:text-2xl">
                                Verificados pelo Reclame Aqui
                            </h2>

                            <div className="flex min-h-[118px] flex-wrap items-center justify-start gap-4">
                                <div className="flex h-[118px] w-full max-w-[390px] shrink-0 items-center justify-start overflow-hidden sm:w-[390px]">
                                    <div
                                        id="ra-verified-seal"
                                        className="flex h-full w-full items-center justify-start [&_iframe]:!h-full [&_iframe]:!max-h-full [&_iframe]:!w-full [&_img]:!h-auto [&_img]:!max-h-full [&_img]:!max-w-full"
                                    />
                                </div>
                                <Script
                                    id="ra-embed-verified-seal"
                                    src="https://s3.amazonaws.com/raichu-beta/ra-verified/bundle.js"
                                    data-id="MTA0Nzk5Omxlc3RlLXRlbGVjb20="
                                    data-target="ra-verified-seal"
                                    data-model="2"
                                    strategy="afterInteractive"
                                />
                                <span
                                    id="siteseal"
                                    className="flex min-h-[90px] shrink-0 items-center justify-start [&_img]:!h-auto [&_img]:!max-h-[100px] [&_img]:!max-w-[150px]"
                                />
                                <Script
                                    id="godaddy-site-seal"
                                    src="https://seal.godaddy.com/getSealBasic?sealID=aIb4nl8iEHq3oqfN10lyVMnM7EzGmjq27ExqTCsHRy0DgZNFk86Lj94378tM"
                                    strategy="afterInteractive"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5 md:col-span-1">
                        <h2 className="text-[2.35rem] font-semibold leading-none tracking-[-0.03em] md:text-[2rem] lg:text-[2.6rem]">
                            Para você
                        </h2>

                        <div className="space-y-1 text-base leading-8 md:text-[1.02rem] lg:text-[1.08rem]">
                            {footerLinks.map((item) => (
                                item.href.includes("vendas.lestetelecom.com.br") ? (
                                    <TrackedLink
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block transition-opacity hover:opacity-80"
                                    >
                                        {item.label}
                                    </TrackedLink>
                                ) : isExternalLink(item.href) ? (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block transition-opacity hover:opacity-80"
                                    >
                                        {item.label}
                                    </a>
                                ) : (
                                    <Link
                                        key={item.label}
                                        href={item.href}
                                        className="block transition-opacity hover:opacity-80"
                                    >
                                        {item.label}
                                    </Link>
                                )
                            ))}
                        </div>
                    </div>

                    <div
                        className="space-y-8 md:col-span-2 md:grid md:grid-cols-2 md:gap-10 md:space-y-0 lg:col-span-1 lg:block lg:space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-[2.35rem] font-semibold leading-none tracking-[-0.03em] md:text-[2rem] lg:text-[2.6rem]">
                                Suporte 24h
                            </h2>

                            <div className="space-y-3">
                                {supportPhones.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target={isExternalLink(item.href) ? "_blank" : undefined}
                                        rel={isExternalLink(item.href) ? "noopener noreferrer" : undefined}
                                        className="flex items-center gap-3 text-[1.05rem] font-semibold transition-opacity hover:opacity-80 md:text-[1rem] lg:text-[1.15rem]"
                                    >
                                        <Image src={item.icon} alt="" className="h-6 w-6"/>
                                        <span>{item.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-[2.35rem] font-semibold leading-none tracking-[-0.03em] md:text-[2rem] lg:text-[2.6rem]">
                                Leste Vendas
                            </h2>

                            <div
                                className="flex items-center gap-3 text-[1.05rem] font-semibold md:text-[1rem] lg:text-[1.15rem]">
                                <Image src={whatsIcon} alt="" className="h-6 w-6"/>
                                <span>(021) 2020-1303</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className="mt-14 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[220px_1fr] md:items-start lg:mt-16 lg:grid-cols-[320px_1fr_180px] lg:items-end lg:pt-10">
                    <div className="max-w-[220px] md:max-w-[200px] lg:max-w-[280px]">
                        <Image src={logoLeste} alt="Leste" className="h-auto w-full"/>
                    </div>

                    <div className="space-y-2">
                        <div
                            className="text-xl font-semibold leading-none tracking-[-0.03em] md:text-[1.45rem] lg:text-2xl">
                            LESTE FLU SERVIÇOS DE TELECOM LTDA
                        </div>
                        <div className="text-sm md:text-[0.95rem] lg:text-base">
                            Todos os direitos reservados. (c)Leste Telecom 2026
                        </div>
                        <div className="max-w-[680px] text-sm leading-6 md:text-[0.95rem] lg:text-base">
                            Avenida Almirante Tamandaré, 600 - Piratininga - Niterói - RJ - 24350-380
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}
