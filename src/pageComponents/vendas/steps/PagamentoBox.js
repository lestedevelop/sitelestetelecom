// src/pageComponents/vendas/PaymentBox.jsx
"use client";

import { useMemo } from "react";
import PagamentoSelect from "@/pageComponents/vendas/form/PagamentoSelect";

function formatBRL(v) {
    const n = Number(v || 0);
    return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function clampPercent(p) {
    const n = Number(p || 0);
    if (!Number.isFinite(n)) return 0;
    return Math.max(0, Math.min(100, n));
}

export default function PagamentoBox({value, onChange, taxaCheia = 300, taxaNormal = 250, pixOffPercent = 40, options = [{ value: "pix_instalacao", label: "Pix na instalação" }, { value: "credito_instalacao", label: "Crédito na instalação" }, { value: "debito_instalacao", label: "Débito na instalação" },
                                       ],
                                   }) {
    const isPix = value === "pix_instalacao";

    const computed = useMemo(() => {
        const full = Number(taxaCheia || 0);
        const normal = Number(taxaNormal || 0);
        const pct = clampPercent(pixOffPercent);

        const pixPrice = normal ? normal * (1 - pct / 100) : 0;

        const final = isPix ? pixPrice : normal;
        const strike = isPix ? normal : full;

        return { full, normal, pct, pixPrice, final, strike };
    }, [taxaCheia, taxaNormal, pixOffPercent, isPix]);

    return (
        <div className="space-y-3">
            {/* Select */}
            <PagamentoSelect
                value={value}
                onChange={onChange}
            />

            {/* Caixa verde */}
            <div className="rounded-xl overflow-hidden border border-emerald-700/20">
                <div className="bg-primary px-4 py-4 text-white flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-2">
                        {isPix ? (
                            <span className="inline-flex w-fit rounded-md bg-emerald-800/60 px-3 py-1 text-xs font-bold">
                {computed.pct.toFixed(1)}% OFF
              </span>
                        ) : null}

                        <div className="text-lg font-semibold leading-tight">Taxa de Adesão</div>
                    </div>

                    <div className="text-right">
                        {/* riscado: */}
                        {computed.strike > 0 && computed.strike !== computed.final ? (
                            <div className="text-sm opacity-80 line-through">{formatBRL(computed.strike)}</div>
                        ) : null}

                        <div className="text-2xl font-bold">{formatBRL(computed.final)}</div>
                    </div>
                </div>

                {/* Aviso */}
                <div className="bg-white px-4 py-4">
                    <div className="flex gap-3 rounded-xl border border-emerald-600/50 p-4">
                        <div className="text-primary text-2xl leading-none">💲</div>
                        <div className="text-sm text-gray-700">
                            <span className="font-semibold">Fique atento!</span> O total de custos da instalação técnica{" "}
                            <span className="text-primary underline">(Taxa de adesão)</span> deverá ser quitado com o método de
                            pagamento que você já escolheu.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
