"use client";

import Image from "next/image";
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import logo from "@/assets/logo.png";
import LinkLeste from "../links/LinkLeste";
import {log} from "next/dist/server/typescript/utils";

const TOP_LINKS = [
    { href: "/ultra", label: "Para sua casa" },
    { href: "/pme", label: "Para empresas" },
    { href: "/trabalhe-na-leste", label: "Trabalhe na Leste" },
];

const MAIN_LINKS = [
    { href: "/ultra", label: "Ultra" },
    { href: "/movel", label: "Móvel" },
    { href: "/app", label: "App" },
    { href: "/indique-e-ganhe", label: "Indique e Ganhe" },
    { href: "/central-do-assinante", label: "Central do Assinante" },
    { href: "/faq", label: "FAQ" },
    { href: "/link-corporativo", label: "Link Corporativo" },
];

export default function AppBar() {
    const [isSticky, setIsSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const lastY = useRef(0);
    const ticking = useRef(false);

    useEffect(() => {
        lastY.current = window.scrollY;
        const onScroll = () => {
            const currentY = window.scrollY;
            if (!ticking.current) {
                window.requestAnimationFrame(() => {
                    const goingDown = currentY > lastY.current;
                    const goingUp = currentY < lastY.current;
                    if (currentY < 10) {
                        setVisible(true);
                    } else if (goingDown) {
                        setVisible(false);
                    } else if (goingUp) {
                        setVisible(true);
                    }
                    lastY.current = currentY;
                    ticking.current = false;
                });
                ticking.current = true;
            }
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
            transition-transform duration-300 ease-out bg-light
            ${visible ? "translate-y-0" : "-translate-y-full"}`}>
               <div className={`container`}>
                   <div className="flex items-center justify-between py-4 sm:py-10">
                       <Link href="/" className="shrink-0">
                           <Image src={logo} alt="Leste" width={120} height={60} priority />
                       </Link>
                       <div className={`flex flex-col gap-y-8  z-50 md:relative fixed transition-all duration-450 ${menuOpen ? ' w-[75%] top-0 right-0 py-6 px-6 bg-light h-dvh shadow-2xl' : '-right-96 md:right-0'}`}>
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

                           <div className="flex md:flex-row flex-col justify-end gap-6">
                               {TOP_LINKS.slice(0, 2).map((item) => (
                                   <LinkLeste
                                       key={item.href}
                                       href={item.href}
                                       className="relative transition-all after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#00997b] after:transition-all after:duration-300 hover:after:w-full hover:font-semibold"
                                   >
                                       {item.label}
                                   </LinkLeste>
                               ))}

                               <LinkLeste
                                   href={TOP_LINKS[2].href}
                                   className="relative transition-all after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#00997b] after:transition-all after:duration-300 hover:after:w-full hover:font-semibold"
                               >
                                   {TOP_LINKS[2].label}
                               </LinkLeste>
                           </div>

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
