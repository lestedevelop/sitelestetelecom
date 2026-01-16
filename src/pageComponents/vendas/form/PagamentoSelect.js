"use client";

import { useEffect, useRef, useState } from "react";

const PAYMENT_OPTIONS = [
    { value: "pix_instalacao", label: "Pix na instalação" },
    { value: "credito_instalacao", label: "Crédito na instalação" },
    { value: "debito_instalacao", label: "Débito na instalação" },
];

export default function PagamentoSelect({ value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef(null);

    const selected = PAYMENT_OPTIONS.find((o) => o.value === value);

    function choose(option) {
        onChange?.(option.value);
        setIsOpen(false);
    }

    useEffect(() => {
        function handleClickOutside(e) {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={containerRef} className="relative w-full">
            <label className="mb-2 block text-sm font-semibold text-darkgreen">
                Forma de Pagamento
            </label>

            <button
                type="button"
                onClick={() => setIsOpen((v) => !v)}
                className="w-full rounded-xl bg-white px-6 py-5 text-left border border-gray-300
                   flex items-center justify-between"
            >
        <span className={`text-lg ${selected ? "text-primary" : "text-gray-400"}`}>
          {selected ? selected.label : "Clique e escolha"}
        </span>

                <svg
                    className={`h-5 w-5 text-primary transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
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

            {isOpen && (
                <div
                    role="listbox"
                    className="absolute left-0 right-0 mt-2 overflow-hidden rounded-2xl bg-white
                     border border-black/10 shadow-[0_10px_24px_rgba(0,0,0,0.20)] z-20"
                >
                    <div className="max-h-72 overflow-y-auto py-2">
                        {PAYMENT_OPTIONS.map((opt) => {
                            const isSelected = opt.value === value;
                            return (
                                <button
                                    key={opt.value}
                                    type="button"
                                    role="option"
                                    aria-selected={isSelected}
                                    onClick={() => choose(opt)}
                                    className={[
                                        "w-full px-6 py-3 text-left text-lg text-primary hover:bg-emerald-50",
                                        isSelected ? "bg-light font-semibold" : "",
                                    ].join(" ")}
                                >
                                    {opt.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
