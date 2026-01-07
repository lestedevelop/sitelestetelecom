"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import logo from "@/assets/logolestemovel.png";
import LinkLeste from "@/components/links/LinkLeste";

const MAIN_LINKS = [
    { href: "/movel", label: "Início" },
    { href: "/movel/chip", label: "Comprar" },
    { href: "https://wa.me/5511933019327", label: "Suporte" },
    { href: "https://tim.img.com.br/mapa-cobertura/", label: "Mapa de Cobertura" },
];

export default function AppBarMovel() {
    const [isSticky, setIsSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const lastScrollY = useRef(0);
    const lastToggleY = useRef(0);
    const visibleRef = useRef(true);
    const ticking = useRef(false);

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

        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    const handleClickMenu = (e) => {
        setMenuOpen(!menuOpen)
        setIsSticky(!isSticky)
    }
    return (
        <header>
            {menuOpen && (<div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={handleClickMenu}/>)}
            <nav className={`fixed top-0 left-0 right-0 z-50
            transition-transform duration-300 ease-out bg-white
            ${visible ? "translate-y-0" : "-translate-y-full"}`}>
                <div className={`container`}>
                    <div className="flex items-center justify-between py-4 sm:py-10">
                        <Link href="/" className="shrink-0">
                            <Image src={logo} alt="Leste" width={203} height={43} priority />
                        </Link>
                        <div className={`flex flex-col gap-y-8 z-50 md:relative fixed transition-all duration-450 ${menuOpen ? ' w-[75%] top-0 right-0 py-6 px-6 bg-light h-dvh shadow-2xl' : '-right-96 md:right-0'}`}>
                            {menuOpen && (
                                <button
                                    type="button"
                                    className="md:hidden flex justify-end"
                                    onClick={handleClickMenu}
                                    aria-label="Fechar menu"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#00997b"
                                        strokeWidth="1.5"
                                        className="h-10 w-10 ml-4"
                                    >
                                        <path
                                            d="M6 18 18 6M6 6l12 12"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </button>
                            )}
                            <div className="flex flex-col md:flex-row items-baseline gap-6">
                                {MAIN_LINKS.map((item) => (
                                    <LinkLeste key={item.href} href={item.href} className="md:font-semibold text-dark md:text-primary md:hover:text-black">
                                        {item.label}
                                    </LinkLeste>
                                ))}
                            </div>
                        </div>

                        {!menuOpen && <button
                            type="button"
                            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-black/5"
                            onClick={handleClickMenu}>
                            <svg viewBox="0 0 24 24" fill="none" stroke="#00997b" strokeWidth="1.5" className="h-10 w-10">
                                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>}
                    </div>
                </div>
            </nav>
        </header>

    );
}
