// PlanCard.jsx
"use client";
import React, { useMemo } from "react";

function formatPrice(value) {
    const n = Number(value || 0);
    const [inteiro, centavos] = n.toFixed(2).split(".");
    return { inteiro, centavos };
}

function getBadge(plan) {
    // 1) predial
    if (Number(plan?.predio) === 1) return "Plano exclusivo predial";

    // 2) fidelidade (se vier em meses ou boolean)
    const f = plan?.fidelidade;
    if (f) {
        const meses = Number(f);
        if (!Number.isNaN(meses) && meses > 0) return `Fidelidade de ${meses} meses`;
        return "Fidelidade";
    }

    return null;
}

function buildWifiText(plan) {
    // ajuste conforme seu backend
    if (plan?.ax) return "SUPER WI-FI 6 AX GRÁTIS";
    if (plan?.ac) return "SUPER WI-FI 5 AC GRÁTIS";
    if (plan?.wifi) return "WI-FI GRÁTIS";
    return "WI-FI";
}

function buildPerks(plan) {
    // Você pode substituir pelos seus itens reais (Skeelo, bebanca, Leste Clube)
    const perks = [];

    // exemplo: se existir flags no backend
    if (plan?.skeelo) perks.push("Skeelo livros");
    if (plan?.bebanca) perks.push("bebanca");
    if (plan?.leste_clube) perks.push("Leste Clube");

    // fallback igual print (sempre mostra)
    if (perks.length === 0) {
        perks.push("Skeelo livros");
        perks.push("bebanca");
        perks.push("Leste Clube");
    }

    return perks;
}

function getTitle(plan) {
    // exemplo:
    // - se down >= 1000 -> 1 GIGA
    // - senão -> {down} MEGA
    const down = Number(plan?.down || 0);

    if (down >= 1000) {
        const g = down / 1000;
        return { titleNumber: String(g).replace(".0", ""), titleUnit: "GIGA" };
    }

    if (down > 0) return { titleNumber: String(down), titleUnit: "MEGA" };

    // fallback se vier algo diferente
    return { titleNumber: "—", titleUnit: "" };
}

export default function PlanCardVendas({ plan, selected, onSelect }) {
    const badge = useMemo(() => getBadge(plan), [plan]);
    const wifiText = useMemo(() => buildWifiText(plan), [plan]);
    const perks = useMemo(() => buildPerks(plan), [plan]);
    const { titleNumber, titleUnit } = useMemo(() => getTitle(plan), [plan]);

    const priceValue =
        plan?.valor_desconto != null ? plan.valor_desconto : plan?.valor;

    const { inteiro, centavos } = formatPrice(priceValue);

    const isSelected = !!selected;

    return (
        <div className="relative rounded-3xl bg-white px-6 shadow-lg ring-1 ring-black/5 flex flex-col items-center">
            {/* Badge topo */}
            {badge ? (
                <div className="absolute -top-16 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center rounded-md bg-emerald-700 px-4 py-2 text-xs font-semibold text-white shadow">
            {badge}
          </span>
                    {/* triangulinho */}
                    <div className="mx-auto h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-emerald-700" />
                </div>
            ) : null}

            {/* título */}
            <div className="mt-6 text-7xl font-semibold leading-none text-primary">
                {titleNumber}
            </div>
            <div className="mt-1 text-3xl tracking-[0.15em] font-semibold uppercase text-primary">
                {titleUnit}
            </div>

            {/* separador com + */}
            <div className="mt-3 flex w-full items-center gap-3 text-primary">
                <span className="h-px flex-1 bg-emerald-200" />
                <span className="text-lg font-bold">+</span>
                <span className="h-px flex-1 bg-emerald-200" />
            </div>

            {/* Wi-Fi */}
            <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary text-center">
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
            <div className="mt-4 w-full space-y-2">
                {perks.map((perk, i) => (
                    <div
                        key={i}
                        className="mx-auto h-9 w-44 rounded-md bg-gray-100/90 px-3 text-sm font-medium text-dark flex items-center justify-center"
                    >
                        {perk}
                    </div>
                ))}
            </div>

            {/* preço */}
            <div className="mt-6 text-dark text-sm">Por</div>
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

            {/* CTA (igual print: botão cinza embaixo) */}
            <button
                type="button"
                onClick={() => onSelect?.(plan)}
                className={[
                    "mt-5 w-[calc(100%+3rem)] -mx-6 rounded-b-3xl px-4 py-4 text-center font-semibold transition",
                    selected ? "bg-emerald-700 text-white" : "bg-gray-400 text-white hover:bg-gray-500",
                ].join(" ")}
            >
                Selecionar
            </button>

            {/* rodapé opcional */}
            {plan?.valor_desconto ? (
                <div className="mt-3 text-xs text-gray-500 text-center">
                    Desconto aplicado
                </div>
            ) : null}
        </div>
    );
}
