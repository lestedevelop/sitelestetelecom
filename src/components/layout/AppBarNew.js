"use client";

import Image from "next/image";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useId, useRef, useState} from "react";
import logo from "@/assets/logo.png";
import pinIcon from "@/assets/icons/pin.svg";
import ModalConfirmCity from "@/components/layout/ModalConfirmCity";
import ModalViabilidade from "@/components/layout/ModalViabilidade";
import {SalesProviderNew} from "@/contexts/SalesContextNew";
import {useSite} from "@/contexts/SiteContext";
import {cidadesMock} from "@/mocks/cidadesMock";
import {useUiStore} from "@/store/useUiStore";
import {findCodCidByName} from "@/utils/cidade";
import {getLocationByIP} from "@/utils/getLocationByIP";

const TOP_LINKS = [
    {href: "/", label: "Para Você"},
    {href: "/pme", label: "Para empresas"},
];

const SERVICES_MENU = [
    {href: "/fibra", label: "Internet Fibra"},
    {href: "/movel", label: "Leste Movel"},
    {href: "/cameras", label: "Cameras"},
    {href: "/lesteup", label: "Leste Up"},
];

const LEARN_MENU = [
    {href: "/faq", label: "FAQ"},
    {href: "/corporate", label: "Link corporativo"},
    {href: "/faq/lojas", label: "Lojas"},
    {href: "/faq/teste-de-velocidade", label: "Teste de velocidade"},
];

const MOBILE_LEARN_MENU = [
    ...LEARN_MENU,
    {href: "https://lestetelecom.vagas.solides.com.br/", label: "Trabalhe na Leste"},
];

function ChevronDown({className = ""}) {
    return (
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className}>
            <path
                d="M5 7.5 10 12.5 15 7.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function MenuIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-7 w-7">
            <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        </svg>
    );
}

function CloseIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-6 w-6">
            <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
            />
        </svg>
    );
}

function splitItems(items = []) {
    const midpoint = Math.ceil(items.length / 2);
    return [items.slice(0, midpoint), items.slice(midpoint)];
}

function MegaMenu({id, title, description, items, onClose, action}) {
    const columns = splitItems(items);

    return (
        <div
            id={id}
            className="fixed left-0 right-0 top-[calc(100%)] z-50 overflow-hidden border-b border-white/20 bg-primary/10 text-white backdrop-blur-2xl"
            role="menu"
        >
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(16,179,148,.78),rgba(4,84,65,.62))]"/>
                <div className="absolute left-[12%] top-10 h-44 w-44 rounded-full bg-white/14 blur-3xl"/>
                <div className="absolute left-[58%] top-8 h-40 w-40 rounded-full bg-lightgreen/20 blur-3xl"/>
                <div className="absolute right-[14%] bottom-2 h-32 w-32 rounded-full bg-white/12 blur-3xl"/>
            </div>

            <div className="container relative py-4">
                <div className="grid gap-8 p-8 min-[1440px]:grid-cols-[420px_320px_1fr] min-[1440px]:items-start min-[1440px]:gap-8 max-[1439px]:grid-cols-2">
                    <div className="h-[188px] rounded-[1.75rem] bg-darkgreen/95"/>

                    <div className="flex min-h-[188px] flex-col justify-between py-6">
                        <div className="space-y-4">
                            <h3 className="text-[2.15rem] font-semibold leading-none tracking-[-0.03em]">
                                {title}
                            </h3>
                            <p className="max-w-[280px] text-[15px] leading-6 text-white/92">
                                {description}
                            </p>
                        </div>

                        {action ? (
                            <button
                                type="button"
                                onClick={() => {
                                    action.onClick();
                                    onClose();
                                }}
                                className="mt-6 inline-flex w-fit rounded-full border border-white/20 bg-white/90 px-5 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-px"
                            >
                                {action.label}
                            </button>
                        ) : null}
                    </div>

                    <div className="col-span-2 grid grid-cols-2 gap-x-12 gap-y-4 px-4 py-4 min-[1440px]:col-span-1">
                        {columns.map((column, index) => (
                            <div key={index} className="space-y-3">
                                {column.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={onClose}
                                        className="block rounded-2xl border border-transparent px-5 py-4 text-[2rem] font-semibold leading-none tracking-[-0.03em] text-white transition hover:border-white/12 hover:bg-white/8"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function AppBarNew() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [learnOpen, setLearnOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [modalViabilidadeOpen, setModalViabilidadeOpen] = useState(false);
    const [ipChecked, setIpChecked] = useState(false);
    const navRef = useRef(null);
    const cityMenuRef = useRef(null);
    const mobileCityModalRef = useRef(null);
    const mobileCityInlineRef = useRef(null);
    const lastScrollY = useRef(0);
    const lastToggleY = useRef(0);
    const visibleRef = useRef(true);
    const ticking = useRef(false);
    const uid = useId();
    const pathname = usePathname();
    const {site, setCity, hydrated, setCityConfirmed} = useSite();
    const {
        openSelectCity,
        closeSelectCity,
        openConfirmCity,
        closeConfirmCity,
        isSelectCityOpen,
        isConfirmCityOpen,
    } = useUiStore();

    useEffect(() => {
        setMobileOpen(false);
        setServicesOpen(false);
        setLearnOpen(false);
        closeSelectCity();
        closeConfirmCity();
    }, [pathname, closeSelectCity, closeConfirmCity]);

    useEffect(() => {
        if (!hydrated) return;
        if (isConfirmCityOpen || isSelectCityOpen) return;

        if (!site?.city?.value) {
            if (ipChecked && !isSelectCityOpen) openSelectCity();
            return;
        }

        if (!site?.cityConfirmed) {
            if (!isConfirmCityOpen) openConfirmCity();
            return;
        }

        if (isConfirmCityOpen) closeConfirmCity();
    }, [
        hydrated,
        site?.city?.value,
        site?.cityConfirmed,
        ipChecked,
        isSelectCityOpen,
        isConfirmCityOpen,
        openSelectCity,
        openConfirmCity,
        closeConfirmCity,
    ]);

    useEffect(() => {
        lastScrollY.current = window.scrollY;
        lastToggleY.current = window.scrollY;
        visibleRef.current = true;
        const threshold = 150;

        const setVisibleSafe = (value) => {
            if (visibleRef.current !== value) {
                visibleRef.current = value;
                setVisible(value);
            }
        };

        const onScroll = () => {
            const currentY = window.scrollY;
            if (ticking.current) return;

            ticking.current = true;
            window.requestAnimationFrame(() => {
                const directionDown = currentY > lastScrollY.current;
                const directionUp = currentY < lastScrollY.current;

                if (currentY < 10) {
                    setVisibleSafe(true);
                    lastToggleY.current = currentY;
                } else {
                    const distFromToggle = Math.abs(currentY - lastToggleY.current);

                    if (distFromToggle >= threshold) {
                        if (directionDown) {
                            setVisibleSafe(false);
                            lastToggleY.current = currentY;
                        } else if (directionUp) {
                            setVisibleSafe(true);
                            lastToggleY.current = currentY;
                        }
                    }
                }

                lastScrollY.current = currentY;
                ticking.current = false;
            });
        };

        window.addEventListener("scroll", onScroll, {passive: true});
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        function onKey(e) {
            if (e.key === "Escape") {
                setMobileOpen(false);
                setServicesOpen(false);
                setLearnOpen(false);
            }
        }

        function onClickOutside(e) {
            if (!navRef.current?.contains(e.target)) {
                setServicesOpen(false);
                setLearnOpen(false);
            }

            if (
                isConfirmCityOpen &&
                cityMenuRef.current &&
                !cityMenuRef.current.contains(e.target) &&
                !mobileCityModalRef.current?.contains(e.target) &&
                !mobileCityInlineRef.current?.contains(e.target)
            ) {
                closeConfirmCity();
                closeSelectCity();
            }
        }

        document.addEventListener("keydown", onKey);
        document.addEventListener("mousedown", onClickOutside);

        return () => {
            document.removeEventListener("keydown", onKey);
            document.removeEventListener("mousedown", onClickOutside);
        };
    }, [isConfirmCityOpen, closeConfirmCity, closeSelectCity]);

    useEffect(() => {
        if (!mobileOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [mobileOpen]);

    useEffect(() => {
        if (!hydrated) return;
        if (site?.city?.value || site?.city?.label) return;

        (async () => {
            try {
                const cidade = await getLocationByIP();
                const cityName = cidade?.cidade || cidade?.city || cidade || "";
                let codcid = findCodCidByName(cityName, cidadesMock);

                if (!codcid) {
                    const fallbackName = "Niteroi";
                    codcid = findCodCidByName(fallbackName, cidadesMock);

                    if (codcid) {
                        setCity({value: codcid, label: fallbackName});
                        setCityConfirmed(false);
                        return;
                    }
                }

                if (codcid && cityName) {
                    setCity({value: codcid, label: cityName});
                    setCityConfirmed(false);
                }
            } finally {
                setIpChecked(true);
            }
        })();
    }, [hydrated, site?.city?.value, site?.city?.label, setCity, setCityConfirmed]);

    const closeMobile = () => setMobileOpen(false);

    const openCityModal = () => {
        openConfirmCity();
        openSelectCity();
        setMobileOpen(false);
    };

    const openCityModalMobile = () => {
        openConfirmCity();
        openSelectCity();
    };

    return (
        <>
            {mobileOpen && (
                <button
                    type="button"
                    className="fixed inset-0 z-40 bg-black/45 lg:hidden"
                    onClick={closeMobile}
                    aria-label="Fechar menu"
                />
            )}

            <header
                ref={navRef}
                className={`fixed left-0 right-0 top-0 z-50 transition-transform duration-300 ease-out ${
                    visible ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="w-full bg-mediumgreen text-white">
                    <div className="container">
                        <div className="flex items-center justify-between py-5 lg:hidden">
                            <Link href="/" className="shrink-0">
                                <Image
                                    src={logo}
                                    alt="Leste"
                                    width={112}
                                    height={40}
                                    priority
                                    className="h-auto w-[112px] brightness-0 invert"
                                />
                            </Link>

                            <div className="flex items-center gap-3">
                                <button
                                    type="button"
                                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white"
                                    onClick={() => setMobileOpen(true)}
                                    aria-label="Abrir menu"
                                >
                                    <MenuIcon/>
                                </button>
                            </div>
                        </div>

                        <div className="hidden py-4 lg:block">
                            <div className="flex items-start justify-between gap-8">
                                <Link href="/" className="shrink-0 pt-2">
                                    <Image
                                        src={logo}
                                        alt="Leste"
                                        width={187}
                                        height={67}
                                        priority
                                        className="h-auto lg:w-[187px] brightness-0 invert"
                                    />
                                </Link>

                                <div className="flex min-w-0 flex-1 flex-col items-end gap-4">
                                    <div className="flex flex-wrap items-center justify-end gap-8 lg:gap-10">
                                        {TOP_LINKS.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="text-[22px] font-semibold tracking-[-0.01em] text-white transition-opacity hover:opacity-80"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}

                                        <Link
                                            href="https://portal.lestetelecom.com.br/login"
                                            className="inline-flex min-h-11 items-center rounded-full border border-[#67ddcd] px-9 text-[22px] font-semibold text-white transition-colors hover:bg-white/8"
                                        >
                                            Ja sou Assinante
                                        </Link>
                                    </div>

                                    <div className="flex w-full items-center justify-end gap-8 lg:gap-12">
                                        <div className="flex items-center gap-8 lg:gap-12">
                                            <div className="relative">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setServicesOpen((prev) => !prev);
                                                        setLearnOpen(false);
                                                    }}
                                                    className="inline-flex items-center gap-2 text-[18px] font-semibold text-white transition-opacity hover:opacity-80"
                                                    aria-expanded={servicesOpen}
                                                    aria-controls={`services-dd-${uid}`}
                                                >
                                                    Servicos
                                                    <ChevronDown
                                                        className={`h-4 w-4 transition-transform ${
                                                            servicesOpen ? "rotate-180" : ""
                                                        }`}
                                                    />
                                                </button>

                                                {servicesOpen && (
                                                    <MegaMenu
                                                        id={`services-dd-${uid}`}
                                                        title="Leste Telecom"
                                                        description="Internet 100% fibra optica, alta velocidade, estabilidade e solucoes completas para sua casa ou empresa. Conheca os produtos da Leste Telecom."
                                                        items={SERVICES_MENU}
                                                        onClose={() => setServicesOpen(false)}
                                                        action={{
                                                            label: "Consultar viabilidade",
                                                            onClick: () => {
                                                                setModalViabilidadeOpen(true);
                                                            },
                                                        }}
                                                    />
                                                )}
                                            </div>

                                            <Link
                                                href="/leste-suporte"
                                                className="text-[18px] font-semibold text-white transition-opacity hover:opacity-80"
                                            >
                                                Baixe o App
                                            </Link>

                                            <div className="relative">
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setLearnOpen((prev) => !prev);
                                                        setServicesOpen(false);
                                                    }}
                                                    className="inline-flex items-center gap-2 text-[18px] font-semibold text-white transition-opacity hover:opacity-80"
                                                    aria-expanded={learnOpen}
                                                    aria-controls={`learn-dd-${uid}`}
                                                >
                                                    Saiba mais
                                                    <ChevronDown
                                                        className={`h-4 w-4 transition-transform ${
                                                            learnOpen ? "rotate-180" : ""
                                                        }`}
                                                    />
                                                </button>

                                                {learnOpen && (
                                                    <MegaMenu
                                                        id={`learn-dd-${uid}`}
                                                        title="Saiba Mais"
                                                        description="Acesse suporte, lojas, informacoes tecnicas e conteudos para conhecer melhor os servicos e canais da Leste."
                                                        items={LEARN_MENU}
                                                        onClose={() => setLearnOpen(false)}
                                                    />
                                                )}
                                            </div>

                                            <Link
                                                href="https://lestetelecom.vagas.solides.com.br/"
                                                className="text-[18px] font-semibold text-white transition-opacity hover:opacity-80"
                                            >
                                                Trabalhe na Leste
                                            </Link>
                                        </div>

                                        <div ref={cityMenuRef} className="relative">
                                            <button
                                                type="button"
                                                onClick={openCityModal}
                                                className="inline-flex h-[40px] items-center gap-3 rounded-full bg-light px-8 text-base font-semibold text-primary transition-transform hover:-translate-y-px"
                                            >
                                                <Image src={pinIcon} alt="" className="h-4 w-4"/>
                                                <span>{site?.city?.label || "Escolha sua cidade"}</span>
                                            </button>

                                            <ModalConfirmCity className="absolute right-0 top-full mt-3 w-[340px] translate-y-0"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    className={[
                        "fixed right-0 top-0 z-50 h-dvh w-full max-w-[360px] bg-white text-darkgreen shadow-2xl transition-transform duration-300 lg:hidden",
                        mobileOpen ? "translate-x-0" : "translate-x-full",
                    ].join(" ")}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Menu principal"
                >
                    <div className="flex items-center justify-between px-5 py-6">
                        <Image src={logo} alt="Leste" width={120} height={48} className="h-auto w-[110px]"/>
                        <button
                            type="button"
                            className="inline-flex h-10 w-10 items-center justify-center text-primary"
                            onClick={closeMobile}
                            aria-label="Fechar menu"
                        >
                            <CloseIcon/>
                        </button>
                    </div>

                    <div className="flex h-[calc(100dvh-88px)] flex-col overflow-y-auto px-4 pb-5">
                        <button
                            type="button"
                            onClick={openCityModalMobile}
                            className="inline-flex min-h-11 items-center justify-between rounded-xl border border-[#d1d5db] bg-light px-4 text-left text-primary shadow-[inset_0_1px_0_rgba(255,255,255,.7)]"
                        >
                            <span className="inline-flex items-center gap-2 text-base font-semibold">
                                <Image src={pinIcon} alt="" className="h-4 w-4"/>
                                {site?.city?.label || "Sua Localizacao"}
                            </span>
                            <ChevronDown className="h-4 w-4"/>
                        </button>

                        {isConfirmCityOpen && (
                            <div ref={mobileCityInlineRef} className="-mt-4">
                                <ModalConfirmCity className="mt-0 w-full translate-y-0 shadow-[0_18px_40px_rgba(0,0,0,.08)]" />
                            </div>
                        )}

                        <div className="mt-3 space-y-2">
                            {TOP_LINKS.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={closeMobile}
                                    className="flex min-h-11 items-center rounded-xl border border-[#d1d5db] bg-[#f2f2f2] px-4 text-[15px] font-semibold text-primary shadow-[inset_0_1px_0_rgba(255,255,255,.7)]"
                                >
                                    {item.label}
                                </Link>
                            ))}

                            <div className="space-y-2">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setServicesOpen((prev) => !prev);
                                        setLearnOpen(false);
                                    }}
                                    className={[
                                        "flex min-h-11 w-full items-center justify-between rounded-xl border px-4 text-left text-[15px] font-semibold transition-colors",
                                        servicesOpen
                                            ? "border-primary bg-primary text-white"
                                            : "border-[#d1d5db] bg-[#f2f2f2] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,.7)]",
                                    ].join(" ")}
                                    aria-expanded={servicesOpen}
                                >
                                    <span>Servicos</span>
                                    <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}/>
                                </button>

                                {servicesOpen && (
                                    <div className="space-y-2 px-3 pb-2">
                                        {SERVICES_MENU.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={closeMobile}
                                                className="block text-[15px] font-semibold text-primary"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}

                                        <button
                                            type="button"
                                            onClick={() => {
                                                setModalViabilidadeOpen(true);
                                                closeMobile();
                                            }}
                                            className="block text-[15px] font-semibold text-primary"
                                        >
                                            Consultar viabilidade
                                        </button>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setLearnOpen((prev) => !prev);
                                        setServicesOpen(false);
                                    }}
                                    className={[
                                        "flex min-h-11 w-full items-center justify-between rounded-xl border px-4 text-left text-[15px] font-semibold transition-colors",
                                        learnOpen
                                            ? "border-primary bg-primary text-white"
                                            : "border-[#d1d5db] bg-[#f2f2f2] text-primary shadow-[inset_0_1px_0_rgba(255,255,255,.7)]",
                                    ].join(" ")}
                                    aria-expanded={learnOpen}
                                >
                                    <span>Saiba Mais</span>
                                    <ChevronDown className={`h-4 w-4 transition-transform ${learnOpen ? "rotate-180" : ""}`}/>
                                </button>

                                {learnOpen && (
                                    <div className="space-y-2 px-3 pb-2">
                                        {MOBILE_LEARN_MENU.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={closeMobile}
                                                className="block text-[15px] font-semibold text-primary"
                                            >
                                                {item.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <Link
                                href="/leste-suporte"
                                onClick={closeMobile}
                                className="flex min-h-11 items-center rounded-xl border border-[#d1d5db] bg-[#f2f2f2] px-4 text-[15px] font-semibold text-primary shadow-[inset_0_1px_0_rgba(255,255,255,.7)]"
                            >
                                Baixe o App
                            </Link>

                            <Link
                                href="https://portal.lestetelecom.com.br/login"
                                onClick={closeMobile}
                                className="flex min-h-11 items-center justify-center rounded-full bg-primary px-4 text-[15px] font-semibold text-white"
                            >
                                Ja sou assinante
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            <div className="h-[93px] lg:h-[132px]"/>

            <SalesProviderNew>
                <ModalViabilidade open={modalViabilidadeOpen} onClose={setModalViabilidadeOpen}/>
            </SalesProviderNew>

            <div
                ref={mobileCityModalRef}
                className={`absolute left-1/2 top-0 z-[1000] -translate-x-1/2 lg:hidden ${mobileOpen ? "hidden" : ""}`}
            >
                <ModalConfirmCity className="translate-y-4"/>
            </div>
        </>
    );
}
