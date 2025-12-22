// PlanCard.jsx
import React from "react";
//
export default function PlanCard({plan}) {

    
    const [inteiro, centavos] = plan?.price?.toFixed(2).split(".");

    return (
        <div className="w-65 rounded-3xl bg-white p-6 shadow-lg ring-1 ring-black/5 flex flex-col items-center">
            {/* título */}
            <div className="text-6xl font-semibold leading-none text-primary">
                {plan?.titleNumber}
            </div>
            <div className="mt-1 text-xl tracking-[0.15em] font-semibold uppercase text-primary">
                {plan?.titleUnit}
            </div>

            {/* separador com + */}
            <div className="mt-3 flex w-full items-center gap-3 text-primary">
                <span className="h-px flex-1 bg-emerald-200" />
                <span className="text-lg font-bold">+</span>
                <span className="h-px flex-1 bg-emerald-200" />
            </div>

            {/* Wi-Fi */}
            <div className="mt-3 flex items-center gap-2 text-sm font-medium text-primary">
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
                <span className="uppercase">{plan?.wifiText}</span>
            </div>

            {/* perks */}
            <div className="mt-3 w-full space-y-2">
                {plan?.perks?.map((perk, i) => (
                    <div
                        key={i}
                        className="mx-auto h-8 w-44 rounded-md bg-gray-100/90 px-3 text-sm font-medium text-dark flex items-center justify-center"
                    >
                        {perk}
                    </div>
                ))}
            </div>

            {/* preço */}
            <div className="mt-5 text-dark text-sm">Por</div>
            <div className="mt-1 flex items-end">
                <span className="mr-1 text-sm text-dark">R$</span>
                <span className="text-5xl font-semibold leading-none text-primary">
          {inteiro}
        </span>
                <span className="pb-1 text-lg font-semibold text-primary">
          ,{centavos}
        </span>
                <span className="pb-1 ml-1 text-sm text-dark">/Mês</span>
                
            </div>

            {/* CTA */}
            <button
                type="button"
                className="mt-4 w-full rounded-xl bg-primary px-4 py-3 text-center text-white font-semibold hover:bg-primartext-primary active:scale-[.99] transition"
            >
                {plan?.cta}
            </button>

            {/* rodapé */}
            <div className="mt-3 text-xs text-gray-500 text-center">{plan?.footnote}</div>
        </div>
    );
}
