import Image from "next/image";
import Link from "next/link";
import logoLeste from "@/assets/lestelogocapabranco.png";
import telIcon from "@/assets/telIcon.svg";
import whatsIcon from "@/assets/whatsIcon.svg";
import facebook from "@/assets/icons/footer/facebook.svg";
import insta from "@/assets/icons/footer/insta.svg";
import linkedin from "@/assets/icons/footer/linkedin.svg";
import tiktok from "@/assets/icons/footer/tiktok.svg";
import twitter from "@/assets/icons/footer/twitter.svg";
import youtube from "@/assets/icons/footer/youtube.svg";
import portalLeste from "@/assets/portalLeste.svg";
import appLeste from "@/assets/appLeste.svg";
import reclameAqui from "@/assets/icons/footer/img.png";
import topoFooter from "@/assets/icons/footer/topo.svg";

const socialLinks = [
    {href: "https://wa.me/552120201300", label: "WhatsApp", icon: whatsIcon},
    {href: "https://www.facebook.com/lestetelecom", label: "Facebook", icon: facebook},
    {href: "https://www.instagram.com/lestetelecom/", label: "Instagram", icon: insta},
    {href: "https://www.tiktok.com/", label: "TikTok", icon: tiktok},
    {href: "https://x.com/", label: "X", icon: twitter},
    {href: "https://www.linkedin.com/", label: "LinkedIn", icon: linkedin},
    {href: "https://www.youtube.com/", label: "YouTube", icon: youtube},
];

const footerLinks = [
    {href: "/vendas", label: "Contratacao on-line"},
    {href: "/leste-suporte", label: "Central de atendimento"},
    {href: "/faq/area-de-cobertura", label: "Mapa de cobertura"},
    {href: "https://portal.lestetelecom.com.br/login", label: "2a via da conta"},
    {href: "/faq", label: "Precisa de ajuda? FAQ"},
    {href: "/faq/lojas", label: "Nossas lojas"},
    {href: "https://lestetelecom.vagas.solides.com.br/", label: "Trabalhe na Leste"},
    {href: "/faq/contratos", label: "Contrato e regulamentos"},
    {href: "/leste-suporte", label: "Conheca os aplicativos"},
];

const supportPhones = [
    {icon: whatsIcon, label: "021 2020-1300"},
    {icon: telIcon, label: "021 0800 053 1300"},
    {icon: telIcon, label: "021 3940-0130"},
];

export default function Footer() {
    return (
        <footer className="relative w-full z-50 bg-[#003B2E] mt-[5%] text-white">
            <div className="w-full absolute top-0 -translate-y-[50%]">
                <Image
                    src={topoFooter}
                    alt=""
                    className="w-full"
                />
            </div>

            <div className="container pt-14 pb-16 md:pt-18 md:pb-20 lg:pt-24 lg:pb-24">
                <div className="grid gap-10 md:grid-cols-2 md:gap-x-10 md:gap-y-12 lg:grid-cols-[1.35fr_.9fr_.8fr] lg:gap-12">
                    <div className="space-y-10">
                        <div className="flex flex-wrap items-center gap-3">
                            {socialLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="flex h-12 w-12 items-center justify-center rounded-full bg-primary transition-transform hover:-translate-y-px"
                                    aria-label={item.label}
                                >
                                    <Image src={item.icon} alt="" className="h-6 w-6"/>
                                </Link>
                            ))}
                        </div>

                        <div className="space-y-5">
                            <h2 className="text-2xl font-medium tracking-[-0.02em] md:text-[1.75rem] lg:text-2xl">
                                Baixe agora os nossos Apps!
                            </h2>

                            <div className="grid gap-4 sm:grid-cols-2 lg:flex lg:flex-row">
                                <Link href="/leste-suporte" className="flex items-center gap-3">
                                    <Image src={appLeste} alt="Leste Central" className="h-[52px] w-[52px] rounded-xl"/>
                                    <div className="leading-tight">
                                        <div className="text-sm text-white/75">Baixar</div>
                                        <div className="text-2xl font-semibold">Leste Central</div>
                                    </div>
                                </Link>

                                <Link href="/leste-suporte" className="flex items-center gap-3">
                                    <Image src={portalLeste} alt="Leste Suporte" className="h-[52px] w-[52px] rounded-xl"/>
                                    <div className="leading-tight">
                                        <div className="text-sm text-white/75">Baixar</div>
                                        <div className="text-2xl font-semibold">Leste Suporte</div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-2xl font-medium tracking-[-0.02em] md:text-[1.75rem] lg:text-2xl">
                                Verificados pelo Reclame Aqui
                            </h2>

                            <div className="max-w-[390px] overflow-hidden rounded-2xl bg-white md:max-w-full lg:max-w-[390px]">
                                <Image
                                    src={reclameAqui}
                                    alt="Reclame Aqui"
                                    className="h-25 w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-5 md:col-span-1">
                        <h2 className="text-[2.35rem] font-semibold leading-none tracking-[-0.03em] md:text-[2rem] lg:text-[2.6rem]">
                            Pra voce
                        </h2>

                        <div className="space-y-1 text-base leading-8 md:text-[1.02rem] lg:text-[1.08rem]">
                            {footerLinks.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="block transition-opacity hover:opacity-80"
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-8 md:col-span-2 md:grid md:grid-cols-2 md:gap-10 md:space-y-0 lg:col-span-1 lg:block lg:space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-[2.35rem] font-semibold leading-none tracking-[-0.03em] md:text-[2rem] lg:text-[2.6rem]">
                                Suporte 24h
                            </h2>

                            <div className="space-y-3">
                                {supportPhones.map((item) => (
                                    <div key={item.label} className="flex items-center gap-3 text-[1.05rem] font-semibold md:text-[1rem] lg:text-[1.15rem]">
                                        <Image src={item.icon} alt="" className="h-6 w-6"/>
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-[2.35rem] font-semibold leading-none tracking-[-0.03em] md:text-[2rem] lg:text-[2.6rem]">
                                Leste Vendas
                            </h2>

                            <div className="flex items-center gap-3 text-[1.05rem] font-semibold md:text-[1rem] lg:text-[1.15rem]">
                                <Image src={whatsIcon} alt="" className="h-6 w-6"/>
                                <span>021 2020-1303</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-[220px_1fr] md:items-start lg:mt-16 lg:grid-cols-[320px_1fr_180px] lg:items-end lg:pt-10">
                    <div className="max-w-[220px] md:max-w-[200px] lg:max-w-[280px]">
                        <Image src={logoLeste} alt="Leste" className="h-auto w-full"/>
                    </div>

                    <div className="space-y-2">
                        <div className="text-xl font-semibold leading-none tracking-[-0.03em] md:text-[1.45rem] lg:text-2xl">
                            LESTE FLU SERVICOS DE TELECOM LTDA
                        </div>
                        <div className="text-sm md:text-[0.95rem] lg:text-base">
                            Todos os direitos reservados. (c)Leste Telecom 2026
                        </div>
                        <div className="max-w-[680px] text-sm leading-6 md:text-[0.95rem] lg:text-base">
                            02.533.755/0001-87 | Avenida Almirante Tamandare, 600 - Piratininga - Niteroi - RJ - 24350-380
                        </div>
                    </div>

                    <div className="text-left text-[2.4rem] font-semibold leading-none tracking-[-0.04em] text-primary md:col-span-2 md:text-[2.8rem] lg:col-span-1 lg:text-right lg:text-[3rem]">
                        FAQ
                    </div>
                </div>
            </div>
        </footer>
    );
}
