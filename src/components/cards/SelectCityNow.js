"use client";

import {useEffect, useRef, useState} from "react";
import {useSite} from "@/contexts/SiteContext";
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
    }, [hydrated, site?.city?.value]);

    function chooseCity(option) {
        setCity({value: option.codcid, label: option.nome_cid});
        confirm();
    }

    if (!visible) return null;

    const selectedLabel = cityLabel || "Clique e escolha";

    async function handleSearchCity() {
       try {
           const location = await getLocation();

           const payload = location.data[0];
           const cityName = payload?.cidade;
           const codcid = findCodCidByName(cityName, cidadesMock);

           if (codcid && cityName) setCity({value: codcid, label: cityName});
           confirm()
       } catch (err) {
           return null
       }

    }

    return (
        <div className="">
            <div className="">
                <div ref={containerRef} className="relative flex flex-col gap-y-4">
                    <button
                        type="button"
                        onClick={() => setIsDropdownOpen((v) => !v)}
                        className="w-full rounded-lg bg-light px-6 py-1 text-left border border-graylight  flex items-center justify-between"
                    >
                        <span className="text-md text-primary">{selectedLabel}</span>

                        <svg
                            className={`h-5 w-5 text-primary transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                            viewBox="0 0 20 20" fill="none" aria-hidden="true">
                            <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </button>

                    {isDropdownOpen && (
                        <div role="listbox"
                             className="mt-2 overflow-hidden rounded-lg bg-light border border-graylight">
                            <div className="py-2">
                                {cidadesMock.map((c) => {
                                    const isSelected = c.codcid === codcid;

                                    return (
                                        <button key={c.codcid} type="button" role="option"
                                                aria-selected={isSelected} onClick={() => chooseCity(c)}
                                                className={["w-full px-6 py-1 text-left text-md text-graylight hover:bg-white", isSelected ? "bg-white font-extrabold" : "",].join(" ")}>
                                            {c.nome_cid}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                    <div>
                        <button
                            type="button"
                            onClick={() => handleSearchCity()}
                            className="w-full rounded-lg py-1 text-center text-primary cursor-pointer"
                        >Usar localização automática
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
