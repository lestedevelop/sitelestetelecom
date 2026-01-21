"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect, useId, useMemo, useRef, useState} from "react";
import logo from "@/assets/logo.png";

/**
 * Menu no estilo "Brisanet-like" (igual ao mockup gerado):
 * - Desktop: barra superior + barra de categorias com dropdown (Internet)
 * - Mobile: header compacto + drawer que abre e, dentro, accordion do "Internet" aberto por padrão
 *
 * Observações:
 * - Mantive seus links (TOP_LINKS e MAIN_LINKS) e criei subitens do Internet (FIBRA/VIABILIDADE/TESTE/LOJAS)
 * - Você pode trocar textos/links nos arrays logo abaixo
 */

const TOP_ACTIONS = [
    {href: "#cidade", label: "Selecione sua cidade", icon: "pin"},
    {href: "/assine", label: "Assine já", icon: "chev"},
    {href: "https://portal.lestetelecom.com.br/login", label: "Área do Cliente", icon: "none"},
    {href: "/login", label: "Loginho", icon: "user", caret: true},
];

const PRIMARY_TABS = [
    {key: "internet", label: "Internet", hasDropdown: true},
    {key: "movel", label: "Móvel", href: "/movel"},
    {key: "combos", label: "Combos", href: "/combos"},
    {key: "app", label: "App", href: "/leste-suporte"},
    {key: "indique", label: "Indique e Ganhe", href: "/indique-e-ganhe-leste"},
    {key: "seguranca", label: "Segurança", href: "/seguranca"},
    {key: "faq", label: "FAQ", href: "/faq"},
    {key: "corp", label: "Área Corporativa", href: "/corporate", alignRight: true},
];

const INTERNET_DROPDOWN = [
    {href: "/fibra", label: "Fibra"},
    {href: "/viabilidade", label: "Viabilidade"},
    {href: "/testedevelocidade", label: "Teste de Velocidade"},
    {href: "/lojas", label: "Lojas"},
];

export default function AppBarBrisaLike() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [internetOpen, setInternetOpen] = useState(false); // desktop dropdown
    const [mobileInternetOpen, setMobileInternetOpen] = useState(true); // mobile accordion (aberto por padrão)
    const navRef = useRef(null);
    const dropdownRef = useRef(null);
    const uid = useId();

    // fecha dropdown ao clicar fora / ESC
    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") {
                setMobileOpen(false);
                setInternetOpen(false);
            }
        }

        function onClickOutside(e) {
            const nav = navRef.current;
            const dd = dropdownRef.current;
            if (!nav) return;

            // se clique fora do menu, fecha o dropdown
            if (internetOpen && dd && !dd.contains(e.target)) {
                setInternetOpen(false);
            }
        }

        document.addEventListener("keydown", onKey);
        document.addEventListener("mousedown", onClickOutside);
        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("mousedown", onClickOutside);
        };
    }, [internetOpen]);

    // trava scroll quando drawer mobile abre
    useEffect(() => {
        if (!mobileOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [mobileOpen]);

    const closeMobile = () => setMobileOpen(false);

    return (
        <>
            {/* backdrop mobile */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-[80] bg-black/40 md:hidden"
                    onClick={closeMobile}
                    aria-hidden="true"
                />
            )}

            <header ref={navRef} className="fixed top-0 left-0 right-0 z-[90]">
                <div className="container">
                    <div className="border rounded-3xl border-graylighter bg-white shadow backdrop-blu">
                        {/* TOP BAR */}
                        <div className="flex items-center justify-between px-6 py-4">
                            <Link href="/" className="shrink-0">
                                <Image src={logo} alt="Leste" width={120} height={48} priority/>
                            </Link>

                            {/* Top actions desktop */}
                            <div className="hidden md:flex items-center gap-6 text-[15px] text-darkgreen">
                                {TOP_ACTIONS.map((a) => (
                                    <TopAction key={a.label} href={a.href} label={a.label} icon={a.icon}
                                               caret={a.caret}/>
                                ))}

                                <button type="button" className="p-2 rounded-full hover:bg-black/5" aria-label="Buscar">
                                    <IconSearch className="h-5 w-5"/>
                                </button>

                                <div className="h-8 w-px bg-graylighter"/>

                                <button
                                    type="button"
                                    className="p-2 rounded-full hover:bg-black/5"
                                    aria-label="Fechar"
                                >
                                    <IconX className="h-5 w-5"/>
                                </button>
                            </div>

                            {/* Mobile hamburger */}
                            <button
                                type="button"
                                className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-black/5"
                                onClick={() => setMobileOpen(true)}
                                aria-label="Abrir menu"
                            >
                                <IconMenu className="h-7 w-7 text-[#00997b]"/>
                            </button>
                        </div>

                        <div className="h-px bg-graylighter"/>

                        {/* TABS BAR (desktop) */}
                        <div className="hidden md:flex items-center gap-10 px-6 py-4 text-[18px] text-darkgreen">
                            {PRIMARY_TABS.filter((t) => !t.alignRight).map((t) => {
                                if (t.key === "internet") {
                                    return (
                                        <div key={t.key} className="relative" ref={dropdownRef}>
                                            <button
                                                type="button"
                                                onClick={() => setInternetOpen((v) => !v)}
                                                className="inline-flex items-center gap-2 font-semibold text-darkgreen hover:text-dark"
                                                aria-expanded={internetOpen}
                                                aria-controls={`internet-dd-${uid}`}
                                            >
                                            <span className="relative">
                                              Internet
                                              <span className="absolute -bottom-1 left-0 h-[3px] w-14 rounded-full bg-primary"/>
                                            </span>
                                                <IconChevronDown
                                                    className={`h-4 w-4 transition-transform ${internetOpen ? "rotate-180" : ""}`}/>
                                            </button>

                                            {internetOpen && (
                                                <InternetDropdown
                                                    id={`internet-dd-${uid}`}
                                                    items={INTERNET_DROPDOWN}
                                                    onClose={() => setInternetOpen(false)}
                                                />
                                            )}
                                        </div>
                                    );
                                }

                                return (
                                    <NavLink key={t.key} href={t.href} label={t.label}/>
                                );
                            })}

                            {/* Right aligned */}
                            <div className="ml-auto">
                                <NavLink href={PRIMARY_TABS.find((t) => t.alignRight)?.href || "/corporate"}
                                         label="Área Corporativa"/>
                            </div>
                        </div>

                        {/* MOBILE DRAWER */}
                        <MobileDrawer
                            open={mobileOpen}
                            onClose={closeMobile}
                            mobileInternetOpen={mobileInternetOpen}
                            setMobileInternetOpen={setMobileInternetOpen}
                        />
                    </div>
                </div>
            </header>

            {/* spacer para não cobrir o conteúdo */}
            <div className="h-[110px] md:h-[170px]"/>
        </>
    );
}

/* ----------------------------- Subcomponents ----------------------------- */

function MobileDrawer({open, onClose, mobileInternetOpen, setMobileInternetOpen}) {
    return (
        <div
            className={[
                "fixed md:hidden top-0 right-0 z-[90] h-dvh w-[86%] max-w-[360px]",
                "bg-white shadow-2xl border-l border-graylight",
                "transition-transform duration-300 ease-out",
                open ? "translate-x-0" : "translate-x-full",
            ].join(" ")}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
        >
            <div className="flex items-center justify-between px-5 py-4 border-b border-graylight">
                <Image src={logo} alt="Leste" width={110} height={44} priority/>
                <button
                    type="button"
                    className="rounded-full p-2 hover:bg-black/5"
                    onClick={onClose}
                    aria-label="Fechar menu"
                >
                    <IconX className="h-6 w-6 text-darkgreen"/>
                </button>
            </div>

            {/* top action: cidade */}
            <div className="px-5 py-4">
                <button
                    type="button"
                    className="w-full rounded-xl border border-graylight bg-light px-4 py-3 text-left text-darkgreen"
                >
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <IconPin className="h-5 w-5 text-primary"/>
                            <span className="font-medium">Selecione sua cidade</span>
                        </div>
                        <IconChevronDown className="h-5 w-5 text-primary"/>
                    </div>
                </button>
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
                                <span className="h-2.5 w-2.5 rounded-full bg-primary"/>
                                <span className="font-semibold">Internet</span>
                            </div>
                            <IconChevronDown
                                className={`h-5 w-5 text-primary transition-transform ${mobileInternetOpen ? "rotate-180" : ""}`}/>
                        </div>
                    </button>

                    {mobileInternetOpen && (
                        <div className="bg-white px-4 py-3">
                            <ul className="space-y-3 text-[#2b2b2b]">
                                {INTERNET_DROPDOWN.map((it) => (
                                    <li key={it.href} className="flex items-center gap-3">
                                        <span className="h-2.5 w-2.5 rounded-full bg-primary"/>
                                        <Link href={it.href} onClick={onClose} className="text-[16px]">
                                            {it.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="/viabilidade"
                                onClick={onClose}
                                className="mt-4 block rounded-xl bg-primary px-4 py-3 text-center font-semibold text-white shadow-[0_10px_20px_rgba(30,107,93,.25)]"
                            >
                                Consultar Viabilidade
                            </Link>
                        </div>
                    )}
                </div>

                {/* Outros itens (espelhando o mock) */}
                <div className="mt-4 rounded-xl border border-graylight bg-white">
                    <ul className="divide-y divide-dark text-[#2b2b2b]">
                        <MobileRow href="/movel" onClick={onClose} label="Móvel"/>
                        <MobileRow href="/combos" onClick={onClose} label="Combos"/>
                        <MobileRow href="/leste-suporte" onClick={onClose} label="App"/>
                        <MobileRow href="/indique-e-ganhe-leste" onClick={onClose} label="Indique e Ganhe"/>
                    </ul>
                </div>

                {/* bottom bar: Assine já + search */}
                <div
                    className="mt-5 flex items-center gap-3 rounded-2xl bg-primary px-4 py-3 text-white shadow-[0_14px_30px_rgba(30,107,93,.25)]">
                    <button type="button" className="flex-1 text-left font-semibold">
                        Assine já
                    </button>
                    <IconChevronDown className="h-5 w-5 opacity-90"/>
                    <button type="button" className="rounded-full bg-white/10 p-2" aria-label="Buscar">
                        <IconSearch className="h-5 w-5"/>
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
    );
}

function InternetDropdown({id, items, onClose}) {
    return (
        <div
            id={id}
            className="absolute left-0 mt-4 w-[340px] translate-y-4 rounded-2xl border border-graylight bg-white shadow-[0_24px_70px_rgba(0,0,0,.18)] overflow-hidden"
            role="menu"
        >
            <div className="px-5 py-4 bg-gradient-to-b from-light to-white">
                <ul className="space-y-3 text-[18px]">
                    {items.map((it) => (
                        <li key={it.href} className="flex items-center gap-3">
                            <IconPin className="h-5 w-5 text-primary"/>
                            <Link href={it.href} onClick={onClose} className="text-[#1b4f45] hover:text-black">
                                {it.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <Link
                    href="/viabilidade"
                    onClick={onClose}
                    className="mt-5 block rounded-xl bg-primary px-4 py-3 text-center text-[18px] font-semibold text-white shadow-[0_12px_20px_rgba(30,107,93,.22)]"
                >
                    Consultar Viabilidade
                </Link>
            </div>
        </div>
    );
}

function NavLink({href, label}) {
    return (
        <Link
            href={href}
            className="text-[#1e5b50] hover:text-black transition-colors"
        >
            {label}
        </Link>
    );
}

function TopAction({href, label, icon, caret}) {
    const content = (
        <span className="inline-flex items-center gap-2 hover:text-black transition-colors">
      {icon === "pin" && <IconPin className="h-5 -mt-3 w-5 text-primary"/>}
            {icon === "user" && <IconUser className="h-5 w-5 text-primary"/>}
            <span>{label}</span>
            {(icon === "chev" || caret) && <IconChevronDown className="h-4 w-4 text-primary"/>}
    </span>
    );

    // external vs internal
    const isExternal = href?.startsWith("http");
    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noreferrer noopener">
                {content}
            </a>
        );
    }
    return <Link href={href}>{content}</Link>;
}

function MobileRow({href, label, onClick}) {
    return (
        <li>
            <Link
                href={href}
                onClick={onClick}
                className="flex items-center gap-3 px-4 py-3"
            >
                <span className="h-2.5 w-2.5 rounded-full bg-primary"/>
                <span className="text-[16px]">{label}</span>
                <span className="ml-auto text-black/30">›</span>
            </Link>
        </li>
    );
}

/* ----------------------------- Tiny Icons (inline) ----------------------------- */

function IconMenu({className}) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round"/>
        </svg>
    );
}

function IconX({className}) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M6 18 18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function IconChevronDown({className}) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
}

function IconSearch({className}) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"/>
            <path d="M16.5 16.5 21 21" strokeLinecap="round"/>
        </svg>
    );
}

function IconUser({className}) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z"/>
            <path d="M4 20a8 8 0 0 1 16 0" strokeLinecap="round"/>
        </svg>
    );
}

function IconPin({className}) {
    return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path
                d="M12 21s7-5.2 7-12a7 7 0 1 0-14 0c0 6.8 7 12 7 12Z"
                strokeLinejoin="round"
            />
            <path d="M12 11a2 2 0 1 0-2-2 2 2 0 0 0 2 2Z"/>
        </svg>
    );
}
