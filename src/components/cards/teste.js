// PlanCard.jsx
import React from "react";
//
export default function PlanCard({
                                     titleNumber = "1",
                                     titleUnit = "GIGA",
                                     wifiText = "SUPER WI-FI 6 AX MESH",
                                     perks = ["Skeelo livros", "bebanca", "leste CLUBE"],
                                     price = 199.99,
                                     cta = "Assinar agora",
                                     footnote = "Fidelidade de 12 meses",
                                 }) {
    const [inteiro, centavos] = price.toFixed(2).split(".");

    return (
        <div className="w-[260px] rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5 flex flex-col items-center">
            {/* título */}
            <div className="text-6xl font-semibold leading-none text-emerald-700">
                {titleNumber}
            </div>
            <div className="mt-1 text-xl tracking-[0.15em] font-semibold uppercase text-emerald-700">
                {titleUnit}
            </div>

            {/* separador com + */}
            <div className="mt-3 flex w-full items-center gap-3 text-emerald-700">
                <span className="h-px flex-1 bg-emerald-200" />
                <span className="text-lg font-bold">+</span>
                <span className="h-px flex-1 bg-emerald-200" />
            </div>

            {/* Wi-Fi */}
            <div className="mt-3 flex items-center gap-2 text-sm font-medium text-emerald-900">
                <svg
                    viewBox="0 0 24 24"
                    aria-hidden
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M5 12.55a11 11 0 0 1 14.08 0" />
                    <path d="M8.5 16a6 6 0 0 1 7 0" />
                    <path d="M12 20h.01" />
                </svg>
                <span className="uppercase">{wifiText}</span>
            </div>

            {/* perks */}
            <div className="mt-3 w-full space-y-2">
                {perks.map((perk, i) => (
                    <div
                        key={i}
                        className="mx-auto h-8 w-44 rounded-md bg-gray-100/90 px-3 text-sm font-medium text-gray-700 flex items-center justify-center"
                    >
                        {perk}
                    </div>
                ))}
            </div>

            {/* preço */}
            <div className="mt-5 text-gray-700 text-sm">Por</div>
            <div className="mt-1 flex items-end">
                <span className="mr-1 text-sm text-gray-700">R$</span>
                <span className="text-5xl font-semibold leading-none text-emerald-800">
          {inteiro}
        </span>
                <span className="pb-1 text-lg font-semibold text-emerald-800">
          ,{centavos}
        </span>
                <span className="pb-1 ml-1 text-sm text-gray-600">/Mês</span>
            </div>

            {/* CTA */}
            <button
                type="button"
                className="mt-4 w-full rounded-xl bg-emerald-700 px-4 py-3 text-center text-white font-semibold hover:bg-emerald-800 active:scale-[.99] transition"
            >
                {cta}
            </button>

            {/* rodapé */}
            <div className="mt-3 text-xs text-gray-500 text-center">{footnote}</div>
        </div>
    );
}
