"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect, useId, useRef, useState} from "react";
import logo from "@/assets/logo.png";
import lupaIcon from "@/assets/icons/lupa.svg";
import menuOpenIcon from "@/assets/icons/menuicon.svg"
import arrowDown from "@/assets/icons/arrowDown.svg"
import InternetDropdown from "@/components/new/InternetDropdown";
import NavLink from "@/components/new/NavLink";
import TopAction from "@/components/new/TopAction";
import MobileDrawer from "@/components/new/MobileDrawer";
import pinIcon from "@/assets/icons/pin.svg";
import {useSite} from "@/contexts/SiteContext";
import {usePathname} from "next/dist/client/components/navigation";
import {SalesProviderNew} from "@/contexts/SalesContextNew";
import ModalViabilidade from "@/components/layout/ModalViabilidade";
import {findCodCidByName} from "@/utils/cidade";
import {cidadesMock} from "@/mocks/cidadesMock";
import {getLocationByIP} from "@/utils/getLocationByIP";
import ModalConfirmCity from "@/components/layout/ModalConfirmCity";
import { useUiStore } from "@/store/useUiStore";

const TOP_ACTIONS = [
    {href: "https://portal.lestetelecom.com.br/login", label: "Area do Cliente", icon: "none"},
    // {href: "#cidade", label: "Selecione sua cidade", icon: "pin"},
    {href: "/vendas", label: "Assine já", icon: "chev"},
    // {href: "/login", label: "Login", icon: "user", caret: true},
];

const PRIMARY_TABS = [
    {key: "internet", label: "Internet", hasDropdown: true},
    {key: "movel", label: "Movel", href: "/movel"},
    // {key: "combos", label: "Combos", href: "/combos"},
    {key: "app", label: "App", href: "/leste-suporte"},
    {key: "indique", label: "Indique e Ganhe", href: "/indique-e-ganhe-leste"},
    {key: "para-empresa", label: "Para Empresas", href: "/pme"},
    {key: "corporate", label: "Area Corporativa", href: "/corporate"},
    {key: "trabalhe-conosco", label: "Trabalhe na Leste", href: "https://lestetelecom.vagas.solides.com.br/"},
    {key: "faq", label: "FAQ", href: "/faq", alignRight: true},
];

const INTERNET_DROPDOWN = [
    {href: "/fibra", label: "Fibra"},
    {href: "/viabilidade", label: "Viabilidade"},
    {href: "/faq/teste-de-velocidade", label: "Teste de Velocidade"},
    {href: "/faq/lojas", label: "Lojas"},
];

export default function AppBarNew({}) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [internetOpen, setInternetOpen] = useState(false);
    const [mobileInternetOpen, setMobileInternetOpen] = useState(true);
    const [visible, setVisible] = useState(true);
    const [searchOpen, setSearchOpen] = useState(false);
    const navRef = useRef(null);
    const dropdownRef = useRef(null);
    const lastScrollY = useRef(0);
    const lastToggleY = useRef(0);
    const visibleRef = useRef(true);
    const ticking = useRef(false);
    const uid = useId();
    const {site, setCity, hydrated, setCityConfirmed} = useSite();
    const {
        openSelectCity,
        closeSelectCity,
        openConfirmCity,
        closeConfirmCity,
        isSelectCityOpen,
        isConfirmCityOpen,
    } = useUiStore();
    const pathname = usePathname();
    const [ipChecked, setIpChecked] = useState(false);
    const [modalViabilidadeOpen, setModalViabilidadeOpen] = useState(false);

    useEffect(() => {
        closeSelectCity();
        closeConfirmCity();
    }, [pathname, closeSelectCity, closeConfirmCity]);

    useEffect(() => {
        if (!hydrated) return;

        if (isConfirmCityOpen || isSelectCityOpen) return;

        if (!site?.city?.value) {
            if (isConfirmCityOpen && !isSelectCityOpen) closeConfirmCity();
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
        const THRESHOLD = 150;

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
                    if (distFromToggle >= THRESHOLD) {
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
                setInternetOpen(false);
                setSearchOpen(false);
            }
        }

        function onClickOutside(e) {
            const nav = navRef.current;
            const dd = dropdownRef.current;
            if (!nav) return;

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

    useEffect(() => {
        if (!mobileOpen) return;
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [mobileOpen]);

    const closeMobile = () => setMobileOpen(false);

    useEffect(() => {
        let cancelled = false;
        if (!hydrated) return;
        if (site?.city?.value || site?.city?.label) return;

        (async () => {
                const cidade = await getLocationByIP();
                const codcid = findCodCidByName(cidade.cidade, cidadesMock);
                setCity({value: codcid, label: cidade.cidade});
        })();

        return () => {
            cancelled = true;
        };
    }, [hydrated, site?.city?.value, site?.city?.label, setCity, setCityConfirmed]);


    return (
        <>
            {mobileOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black/40 md:hidden"
                    onClick={closeMobile}
                    aria-hidden="true"
                />
            )}
            <header
                ref={navRef}
                className={`fixed top-0 md:mt-2 left-0 right-0 z-50 transition-transform duration-300 ease-out ${
                    visible ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="container">
                    <div className="border rounded-3xl border-graylighter bg-white shadow backdrop-blu">
                        {/* TOP BAR */}
                        <div className="flex items-center justify-between px-6 py-4">
                            <Link href="/" className="shrink-0">
                                <Image src={logo} alt="Leste" width={120} height={48} priority/>
                            </Link>

                            {/* Top actions desktop */}
                            <div className="relative hidden md:flex items-center gap-6 text-[15px] text-darkgreen">
                                <div className="relative flex items-center">
                                    <div
                                        className={`overflow-hidden transition-all duration-200 ${
                                            searchOpen ? "w-56 opacity-100 mr-2" : "w-0 opacity-0"
                                        }`}
                                    >
                                        <input
                                            type="text"
                                            placeholder="Buscar..."
                                            className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-primary"
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        className="p-2 rounded-full hover:bg-black/5"
                                        aria-label="Buscar"
                                        onClick={() => setSearchOpen((v) => !v)}
                                    >
                                        <Image src={lupaIcon} className="h-5 w-5" alt={""}/>
                                    </button>
                                </div>

                                <div className="h-8 w-px bg-graylighter"/>

                                <button
                                    onClick={() => {
                                        openConfirmCity();
                                        openSelectCity();
                                    }}
                                        className="inline-flex items-center gap-2 hover:text-black transition-colors">
                                    <Image src={pinIcon} alt={""} className="h-5 -mt-2 w-5 text-primary"/>
                                    {site?.city?.label || "Selecione sua Cidade"}
                                </button>
                                {TOP_ACTIONS.map((a) => (
                                    <TopAction key={a.label} href={a.href} label={a.label} icon={a.icon}
                                               caret={a.caret}/>
                                ))}
                                <ModalConfirmCity />
                            </div>

                            <button
                                type="button"
                                className="md:hidden inline-flex items-center justify-center rounded-xl p-2 hover:bg-black/5"
                                onClick={() => setMobileOpen(true)}
                                aria-label="Abrir menu"
                            >
                                <Image src={menuOpenIcon} alt={""} className="h-7 w-7 text-[#00997b]"/>
                            </button>
                        </div>

                        <div className="h-px hidden md:block bg-graylighter"/>

                        <div
                            className="hidden md:flex items-center gap-10 px-6 py-4 text-xs lg:text-[18px] text-darkgreen">
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
                                                  <span
                                                      className="absolute -bottom-1 left-0 h-[3px] w-14 rounded-full bg-primary"/>
                                                </span>
                                                <Image src={arrowDown} alt={""}
                                                       className={`h-4 w-4 transition-transform ${internetOpen ? "rotate-180" : ""}`}/>
                                            </button>

                                            {internetOpen && (
                                                <InternetDropdown
                                                    id={`internet-dd-${uid}`}
                                                    items={INTERNET_DROPDOWN}
                                                    onClose={() => setInternetOpen(false)}
                                                    setModalViabilidadeOpen={setModalViabilidadeOpen}
                                                />
                                            )}
                                        </div>
                                    );
                                }

                                return (
                                    <NavLink key={t.key} href={t.href} label={t.label}/>
                                );
                            })}

                            <div className="ml-auto">
                                <NavLink href="/faq" key="faq" label="FAQ"/>
                            </div>
                        </div>

                        <MobileDrawer
                            INTERNET_DROPDOWN={INTERNET_DROPDOWN}
                            open={mobileOpen}
                            onClose={closeMobile}
                            mobileInternetOpen={mobileInternetOpen}
                            setMobileInternetOpen={setMobileInternetOpen}
                            setModalViabilidadeOpen={setModalViabilidadeOpen}
                        />
                    </div>
                </div>
            </header>

            <div className="h-[110px] md:h-[170px]"/>
            <SalesProviderNew>
                <ModalViabilidade open={modalViabilidadeOpen} onClose={setModalViabilidadeOpen}/>
            </SalesProviderNew>
           <div className={"absolute md:hidden top-0 left-[50%] -translate-x-[50%] z-1000"}>
               <ModalConfirmCity />
           </div>
        </>
    );
}
