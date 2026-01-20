// src/pageComponents/vendas/PaymentBox.jsx
"use client";

import {useEffect, useMemo, useState} from "react";
import PagamentoSelect from "@/pageComponents/vendas/form/PagamentoSelect";
import {clampPercent, toBRL} from "@/utils/Format";


export default function PagamentoBox({value, onChange, taxaCheia = 300, taxaNormal = 250, pixOffPercent = 0}) {
    const isPix = value === "pix_instalacao";
    const isParcelado = value === "credito_parcelado";

    const PAYMENT_OPTIONS = [
        { value: "pix_instalacao", label: "Pix na instalação",taxa:taxaNormal },
        { value: "credito_instalacao", label: "Crédito na instalação",taxa:taxaNormal },
        { value: "debito_instalacao", label: "Débito na instalação",taxa:taxaNormal },
        { value: "credito_parcelado", label: "Crédito 10x na instalação",taxa:taxaCheia },
    ];

    const computed = useMemo(() => {
        const full = Number(taxaCheia || 0);
        const normal = Number(taxaNormal || 0);
        const pct = clampPercent(taxaCheia/taxaNormal) * 10;

        const pixPrice = normal ? normal * (1 - pct / 100) : 0;
        const parceladoPrice = full;

        const final = isParcelado ? parceladoPrice : normal;
        const strike = isParcelado ? parceladoPrice : full;

        return { full, normal, pct, parceladoPrice, final, strike };
    }, [taxaCheia, taxaNormal, isParcelado]);

    return (
        <div className="space-y-3">
            {/* Select */}
            <PagamentoSelect
                value={value}
                onChange={onChange}
                options={PAYMENT_OPTIONS}
            />

            {/* Caixa verde */}
            <div className="rounded-xl overflow-hidden border border-emerald-700/20">
                <div className="bg-primary px-4 py-4 text-white flex items-center justify-between gap-4">
                    <div className="flex flex-col gap-2">
                        {!isParcelado ? (
                            <span className="inline-flex w-fit rounded-md bg-emerald-800/60 px-3 py-1 text-xs font-bold">
                {computed.pct.toFixed(1)}% OFF
              </span>
                        ) : null}

                        <div className="text-lg font-semibold leading-tight">Taxa de Adesão</div>
                    </div>

                    <div className="text-right">
                        {/* riscado: */}
                        {computed.strike > 0 && computed.strike !== computed.final ? (
                            <div className="text-sm opacity-80 line-through">{toBRL(computed.strike)}</div>
                        ) : null}

                        <div className="text-2xl font-bold">{toBRL(computed.final)}</div>
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
