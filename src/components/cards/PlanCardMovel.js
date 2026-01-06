// PlanCard.jsx
import React from "react";
//
export default function PlanCardMovel({plan, className}) {


    const [inteiro, centavos] = plan?.price?.toFixed(2).split(".");

    return (
        <div
            className={`w-55 rounded-3xl h-[440px] bg-white px-4 py-6 flex flex-col items-center gap-y-2 justify-between ${className}`}>
            {/* título */}
            <div className="text-5xl font-semibold leading-none text-primary">
                {plan?.titleNumber}
            </div>
            <div className="text-[15px] tracking-[0.15em] font-bold uppercase text-darkgreen">
                {plan?.bonus}
            </div>
            <div className="text-[11px] font-bold uppercase text-dark">
                {plan?.titlePlan}
            </div>

            {/* perks */}
            <div className="w-full space-y-2">
                {plan?.perks?.map((perk, i) => (<div
                    key={i}
                    className="px-3 text-[15px] font-semibold text-darkgreen "
                >
                    {perk}
                </div>))}
            </div>
            {/* preço */}
            <div className="relative">
                <p className="mt-5 -ml-6 text-dark text-sm">Por apenas</p>
                <div className="mt-1 flex items-end">
                    <span className="mr-1 text-sm text-dark">R$</span>
                    <span className="text-5xl font-semibold leading-none text-dark"> {inteiro}</span>
                    <span className="pb-1 text-lg font-semibold text-dark">,{centavos}</span>
                    <span className="pb-1 ml-1 text-sm text-dark">/Mês</span>
                </div>
            </div>

            {/* CTA */}
            <button
                type="button"
                className="mt-4 w-full rounded-xl bg-primary px-4 py-3 text-center text-white font-semibold hover:bg-primartext-primary active:scale-[.99] transition"
            >
                {plan?.cta}
            </button>

            {/* rodapé */}
            <div className="text-xs text-gray-500 text-center">{plan?.footnote}</div>
        </div>);
}
