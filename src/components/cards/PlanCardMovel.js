// PlanCard.jsx
import React from "react";
import Link from "next/link";
//
export default function PlanCardMovel({plan, className}) {


    const [inteiro, centavos] = plan?.price?.toFixed(2).split(".");

    return (
        <div
            className={`flex h-[480px] w-[240px] flex-col items-center rounded-3xl bg-white px-4 py-6 ${className}`}>
            {/* título */}
            <div className="text-5xl font-semibold leading-none text-primary">
                {plan?.titleNumber}
            </div>
            {plan?.bonus && (
                <div className="mt-3 flex min-h-10 items-center text-center text-[13px] font-bold leading-snug text-darkgreen">
                    {plan.bonus}
                </div>
            )}
            <div className="mt-1 min-h-10 whitespace-pre-line text-center text-[11px] font-bold uppercase leading-relaxed text-dark">
                {plan?.titlePlan}
            </div>

            {/* perks */}
            <div className="mt-2 w-full space-y-2">
                {plan?.perks?.map((perk, i) => (<div
                    key={i}
                    className="px-3 text-[14px] font-semibold leading-5 text-darkgreen"
                >
                    {perk}
                </div>))}
            </div>
            {/* preço */}
            <div className="relative mt-auto w-full px-3">
                <p className="text-sm text-dark">Por apenas</p>
                <div className="mt-1 flex items-end">
                    <span className="mr-1 text-sm text-dark">R$</span>
                    <span className="text-5xl font-semibold leading-none text-dark"> {inteiro}</span>
                    <span className="pb-1 text-lg font-semibold text-dark">,{centavos}</span>
                    <span className="pb-1 ml-1 text-sm text-dark">/Mês</span>
                </div>
            </div>

            {/* CTA */}
            <Link
                href="/movel/chip"
                type="button"
                className="mt-4 w-full rounded-xl bg-primary px-4 py-3 text-center font-semibold text-white transition hover:brightness-95 active:scale-[.99]"
            >
                {plan?.cta}
            </Link>

            {/* rodapé */}
            <div className="text-xs text-gray-500 text-center">{plan?.footnote}</div>
        </div>);
}
