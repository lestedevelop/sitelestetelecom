"use client";

import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import charLeste from "@/assets/charleste.png";
import {useCity} from "@/contexts/CityContext";

const CITIES = [
    {value: "niteroi", label: "Niterói"},
    {value: "marica", label: "Maricá"},
    {value: "itaborai", label: "Itaboraí"},
    {value: "tangua", label: "Tanguá"},
    {value: "rio-bonito", label: "Rio Bonito"},
    {value: "mage", label: "Magé"},
];

export default function SelectCity() {
    const {city, setCity} = useCity();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const containerRef = useRef(null);

    useEffect(() => {
        if (city) setVisible(false);
    }, [city]);

    useEffect(() => {
        if (!visible) return;

        const scrollY = window.scrollY;
        const body = document.body;

        const prevOverflow = body.style.overflow;
        const prevPosition = body.style.position;
        const prevTop = body.style.top;
        const prevWidth = body.style.width;

        body.style.overflow = "hidden";
        body.style.position = "fixed";
        body.style.top = `-${scrollY}px`;
        body.style.width = "100%";

        return () => {
            body.style.overflow = prevOverflow;
            body.style.position = prevPosition;
            body.style.top = prevTop;
            body.style.width = prevWidth;
            window.scrollTo(0, scrollY);
        };
    }, [visible]);

    useEffect(() => {
        if (!visible) return;

        const onClickOutside = (e) => {
            if (!containerRef.current) return;
            if (!containerRef.current.contains(e.target)) setIsDropdownOpen(false);
        };

        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, [visible]);

    const chooseCity = async (value) => {
        setCity(value);
        fetch(`/api/home?city=${encodeURIComponent(value)}`).catch(() => {});
        setIsDropdownOpen(false);
        setVisible(false);
    };


    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-1001 bg-primary p-8">
            <div
                className="mx-auto grid gap-x-4 h-full w-full max-w-4xl md:-mt-32 grid-cols-1 items-center md:grid-cols-2">
                <div className="mx-auto max-w-full">
                    <h2 className="text-6xl font-bold tracking-[-0.05em] text-light md:text-[80px]/[1.05]">
                        Selecione<br/>a&nbsp;sua&nbsp;cidade!
                    </h2>

                    <div className="w-full max-w-sm pt-8 md:pt-24">
                        <div ref={containerRef} className="relative">
                            <button
                                type="button"
                                onClick={() => setIsDropdownOpen((v) => !v)}
                                className=" w-full rounded-2xl bg-light px-6 py-5 text-left border border-black/10 shadow-[0_6px_18px_rgba(0,0,0,0.18)] flex items-center justify-between"           >
                                <span className="text-lg text-primary">Clique e escolha</span>

                                <svg className={`h-5 w-5 text-primary transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="none" aria-hidden="true"
                                >
                                    <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    />
                                </svg>
                            </button>

                            {isDropdownOpen && (
                                <div role="listbox" className="absolute left-0 right-0 mt-2 overflow-hidden rounded-2xl bg-light border border-black/10 shadow-[0_10px_24px_rgba(0,0,0,0.20)]
                  "
                                >
                                    <div className="max-h-72 overflow-y-auto py-2">
                                        {CITIES.map((c) => {
                                            const isSelected = c.value === city;
                                            return (
                                                <button
                                                    key={c.value}
                                                    type="button"
                                                    role="option"
                                                    aria-selected={isSelected}
                                                    onClick={() => chooseCity(c.value)}
                                                    className={[
                                                        "w-full px-6 py-3 text-left text-lg text-primary hover:bg-emerald-50",
                                                        isSelected ? "bg-light font-semibold" : "",
                                                    ].join(" ")}
                                                >
                                                    {c.label}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mx-auto w-full max-w-96 md:mt-0">
                    <Image src={charLeste} alt="Personagem Leste" className="h-auto w-full" priority/>
                </div>
            </div>
        </div>
    );
}
