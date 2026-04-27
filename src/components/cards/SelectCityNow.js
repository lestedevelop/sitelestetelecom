"use client";

import Image from "next/image";
import {useEffect, useRef, useState} from "react";
import {useSite} from "@/contexts/SiteContext";
import pinIcon from "@/assets/icons/pin.svg";
import {getLocation} from "@/utils/getLocation";
import {cidadesMock} from "@/mocks/cidadesMock";
import {findCodCidByName} from "@/utils/cidade";

export default function SelectCityNow({visible, setVisible, confirm}) {
    const {
        site,
        setCity,
        cityLabel,
        codcid,
        hydrated,
    } = useSite();

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const containerRef = useRef(null);

    useEffect(() => {
        if (!visible) return;

        const onClickOutside = (e) => {
            if (!containerRef.current) return;
            if (!containerRef.current.contains(e.target)) setIsDropdownOpen(false);
        };

        document.addEventListener("mousedown", onClickOutside);
        return () => document.removeEventListener("mousedown", onClickOutside);
    }, [visible]);

    useEffect(() => {
        if (!hydrated) return;
        if (!site?.city?.value) setVisible(true);
    }, [hydrated, site?.city?.value, setVisible]);

    function chooseCity(option) {
        setCity({value: option.codcid, label: option.nome_cid});
        confirm();
    }

    if (!visible) return null;

    const selectedLabel = cityLabel || "Escolha sua cidade";

    async function handleSearchCity() {
        try {
            const location = await getLocation();
            const payload = location.data[0];
            const cityName = payload?.cidade;
            const cityCode = findCodCidByName(cityName, cidadesMock);

            if (cityCode && cityName) setCity({value: cityCode, label: cityName});
            confirm();
        } catch (err) {
            return null;
        }
    }

    return (
        <div ref={containerRef} className="relative">
            <div className="rounded-[1.25rem] border border-white/30 bg-[linear-gradient(180deg,rgba(14,172,143,.95),rgba(7,137,114,.92))] p-4 text-white shadow-[0_20px_50px_rgba(0,0,0,.18)]">
                <button
                    type="button"
                    onClick={() => setIsDropdownOpen((v) => !v)}
                    className="flex w-full items-center justify-between rounded-full bg-white px-5 py-3 text-left"
                >
                    <span className="inline-flex items-center gap-3 text-lg font-semibold text-primary">
                        <Image src={pinIcon} alt="" className="h-5 w-5"/>
                        {selectedLabel}
                    </span>

                    <svg
                        className={`h-5 w-5 text-primary transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                    >
                        <path
                            d="M5 8l5 5 5-5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                {isDropdownOpen && (
                    <div
                        role="listbox"
                        className="mt-4 rounded-[1rem] border border-black/25 bg-[linear-gradient(180deg,rgba(11,154,128,.92),rgba(9,128,107,.92))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,.12)]"
                    >
                        <div className="max-h-[360px] space-y-1 overflow-y-auto pr-1">
                            {cidadesMock.map((city) => {
                                const isSelected = city.codcid === codcid;

                                return (
                                    <button
                                        key={city.codcid}
                                        type="button"
                                        role="option"
                                        aria-selected={isSelected}
                                        onClick={() => chooseCity(city)}
                                        className={[
                                            "w-full rounded-xl px-5 py-2 text-left text-[1.05rem] font-semibold text-white transition",
                                            isSelected ? "border border-white/35 bg-darkgreen/70" : "hover:bg-white/10",
                                        ].join(" ")}
                                    >
                                        {city.nome_cid}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}

                <button
                    type="button"
                    onClick={() => handleSearchCity()}
                    className="mt-3 w-full rounded-full border border-white/20 bg-white/12 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-white/18"
                >
                    Usar localizacao automatica
                </button>
            </div>

            <div className="pointer-events-none absolute inset-0 -z-10 rounded-[1.25rem] bg-white/10 blur-2xl"/>
        </div>
    );
}
