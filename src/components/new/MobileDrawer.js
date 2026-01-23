import Image from "next/image";
import closeIcon from "@/assets/icons/close.svg";
import Link from "next/link";
import pinIcon from "@/assets/icons/pin.svg";
import arrowDown from "@/assets/icons/arrowDown.svg";
import logo from "@/assets/logo.png";
import MobileRow from "@/components/new/MobileRow";
import lupaIcon from "@/assets/icons/lupa.svg";
import { useSite } from "@/contexts/SiteContext";
import { SalesProviderNew } from "@/contexts/SalesContextNew";
import ModalViabilidade from "@/components/layout/ModalViabilidade";
import { useState } from "react";

export default function MobileDrawer({
    open,
    onClose,
    mobileInternetOpen,
    setMobileInternetOpen,
    INTERNET_DROPDOWN,
    setOpenSelectCity,
}) {
    const { site } = useSite();
    const [modalViabilidadeOpen, setModalViabilidadeOpen] = useState(false);

    return (
        <div
            className={[
                "fixed md:hidden top-0 right-0 z-[90] h-dvh w-full max-w-full",
                "bg-white shadow-2xl border-l border-graylight",
                "transition-transform duration-300 ease-out",
                "flex flex-col",
                open ? "translate-x-0" : "translate-x-full",
            ].join(" ")}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
        >
            <div className="flex items-center justify-between px-5 py-4 border-b border-graylight">
                <Image src={logo} alt="Leste" width={110} height={44} priority />
                <button
                    type="button"
                    className="rounded-full p-2 hover:bg-black/5"
                    onClick={onClose}
                    aria-label="Fechar menu"
                >
                    <Image src={closeIcon} alt={""} className="h-6 w-6 text-darkgreen" />
                </button>
            </div>

            <div className="flex-1 overflow-y-auto">
                {/* top action: cidade */}
                <div className="px-5 py-4">
                    <button
                        type="button"
                        className="w-full rounded-xl border border-graylight bg-light px-4 py-3 text-left text-darkgreen"
                    >
                        <div className="flex items-center justify-between" onClick={() => setOpenSelectCity(true)}>
                            <span className="inline-flex items-center gap-2 hover:text-black transition-colors">
                                <Image src={pinIcon} alt={""} className="h-5 -mt-2 w-5 text-primary" />
                                {site?.city?.label || "Selecione sua Cidade"}
                            </span>
                            <Image src={arrowDown} alt={""} className="h-5 w-5 text-primary" />
                        </div>
                    </button>
                </div>

                {/* busca */}
                <div className="px-5 pb-4">
                    <div className="w-full rounded-xl border border-graylight bg-light px-4 py-3 text-left text-darkgreen">
                        <div className="flex items-center gap-3">
                            <Image src={lupaIcon} alt={""} className="h-5 w-5 text-primary" />
                            <input
                                type="text"
                                placeholder="Buscar..."
                                className="w-full bg-transparent text-[15px] outline-none placeholder:text-graylight"
                            />
                        </div>
                    </div>
                </div>

                <div className="px-5 pb-5">
                    {/* Internet accordion (aberto por padrão) */}
                    <div className="rounded-xl border border-graylight overflow-hidden">
                        <button
                            type="button"
                            onClick={() => setMobileInternetOpen((v) => !v)}
                            className="w-full bg-light px-4 py-3 text-left text-darkgreen"
                            aria-expanded={mobileInternetOpen}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                                    <span className="font-semibold">Internet</span>
                                </div>
                                <Image
                                    src={arrowDown}
                                    alt={""}
                                    className={`h-5 w-5 text-primary transition-transform ${mobileInternetOpen ? "rotate-180" : ""}`}
                                />
                            </div>
                        </button>

                        {mobileInternetOpen && (
                            <div className="bg-white px-4 py-3">
                                <ul className="space-y-3 text-[#2b2b2b]">
                                    {INTERNET_DROPDOWN.map((it) => (
                                        <li key={it.href} className="flex items-center gap-3">
                                            <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                                            <Link href={it.href} onClick={onClose} className="text-[16px]">
                                                {it.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => {
                                        setModalViabilidadeOpen(true);
                                    }}
                                    className="mt-4 block rounded-xl bg-primary px-4 py-3 text-center font-semibold text-white shadow-[0_10px_20px_rgba(30,107,93,.25)]"
                                >
                                    Consultar Viabilidade
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Outros itens (espelhando o mock) */}
                    <div className="mt-4 rounded-xl border border-graylight bg-white">
                        <ul className="divide-y divide-dark text-[#2b2b2b]">
                            <MobileRow href="/movel" onClick={onClose} label="Móvel" />
                            <MobileRow href="/leste-suporte" onClick={onClose} label="App" />
                            <MobileRow href="/indique-e-ganhe-leste" onClick={onClose} label="Indique e Ganhe" />
                            <MobileRow href="/pme" onClick={onClose} label="Para Empresas" />
                            <MobileRow href="/corporate" onClick={onClose} label="Área Corporativa" />
                            <MobileRow href="/faq" onClick={onClose} label="FAQ" />
                            <MobileRow href="https://lestetelecom.vagas.solides.com.br/" onClick={onClose} label="Trabalhe na Leste" />
                        </ul>
                    </div>

                    {/* bottom bar: Assine já + search */}
                    <div className="mt-5 flex items-center gap-3 rounded-2xl bg-primary px-4 py-3 text-white shadow-[0_14px_30px_rgba(30,107,93,.25)]">
                        <button type="button" className="flex-1 text-left font-semibold">
                            Assine já
                        </button>
                        <Image src={arrowDown} alt={""} className="h-5 w-5 opacity-90" />
                        <button type="button" className="rounded-full bg-white/10 p-2" aria-label="Buscar">
                            <Image src={lupaIcon} alt={""} className="h-5 w-5" />
                        </button>
                    </div>

                    <Link
                        href="https://portal.lestetelecom.com.br/login"
                        onClick={onClose}
                        className="mt-3 block rounded-2xl border border-graylight bg-light px-4 py-3 text-center font-medium text-darkgreen"
                    >
                        Área do Cliente
                    </Link>
                </div>
            </div>
            <SalesProviderNew>
                <ModalViabilidade open={modalViabilidadeOpen} onClose={setModalViabilidadeOpen} />
            </SalesProviderNew>
        </div>
    );
}
