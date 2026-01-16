"use client";
import React, {useMemo} from "react";
import {formatPrice} from "@/utils/Format";
import Image from "next/image";
import addIcon from "@/assets/icons/addIconVendas.svg"
import PerkCard from "@/pageComponents/vendas/PerkCard";

function getBadge(plan) {
    if (Number(plan?.predio) === 1 && Number(plan?.residencial === 0)) return "Plano exclusivo predial";

    const f = plan?.fidelidade;
    if (f) {
        const meses = Number(f);
        if (!Number.isNaN(meses) && meses > 0) return `Fidelidade de ${meses} meses`;
        return "Fidelidade";
    }

    return null;
}

function getTitle(plan) {

    const down = Number(plan?.down || 0);

    if (down >= 1024) {
        const g = down / 1024;
        return {titleNumber: String(g).replace(".0", ""), titleUnit: "GIGA"};
    }

    if (down > 0) return {titleNumber: String(down), titleUnit: "MEGA"};
    return {titleNumber: "—", titleUnit: ""};
}

export default function PlanCardVendas({plan, selected, onSelect}) {
    const badge = useMemo(() => getBadge(plan), [plan]);
    const wifiText = plan?.descri_ser_bot || plan?.descri_ser;
    const {titleNumber, titleUnit} = useMemo(() => getTitle(plan), [plan]);
    const priceValue = plan?.valor - plan?.valor_desconto;
    const {inteiro, centavos} = formatPrice(priceValue);
    const isSelected = !!selected;

    return (
        <div className={"relative py-12"}>
            <div
                className="rounded-3xl bg-white px-6 min-h-[588px] shadow-lg ring-1 ring-black/5 flex flex-col justify-between items-center">
                {/* Badge topo */}
                {badge ? (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <span
                      className="flex w-48 items-center justify-center rounded-md bg-primary px-2  py-2 text-xs font-semibold text-white shadow">
                    {badge}
                  </span>
                        <div
                            className="mx-auto h-0 w-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-primary"/>
                    </div>
                ) : null}
                {/*fidelidade*/}

                {/* título */}
                <div className="mt-6 text-7xl font-semibold leading-none text-primary">
                    {titleNumber}
                </div>
                <div className="mt-1 text-3xl tracking-[0.15em] font-semibold uppercase text-primary">
                    {titleUnit}
                </div>

                {/* separador com + */}
                <div className="mt-3 flex w-full items-center gap-3 text-primary">
                    <span className="h-[2px] flex-1 bg-primary"/>
                    <Image src={addIcon} alt={""} width={48}/>
                    <span className="h-[2px] flex-1 bg-primary"/>
                </div>

                {/* Wi-Fi */}
                <div className="mt-3 flex items-center gap-2 text-sm font-semibold text-primary text-center">
                    <svg viewBox="0 0 22 22" aria-hidden className="h-10 w-10 translate-y-[-10px]" fill="none"
                         stroke="#002920" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
                        <path d="M8.5 16a6 6 0 0 1 7 0"/>
                        <path d="M12 20h.01"/>
                    </svg>
                    <span className="uppercase text-[#002920]">{wifiText}</span>
                </div>


                <div className="mt-4 w-full flex gap-y-3 flex-col-reverse">
                    {plan?.SVAs?.map((sva) => (
                        <PerkCard key={sva.codsimp} descri_simp={sva.descri_simp}/>
                    ))}
                </div>


                <div className="mt-1 flex items-end text-darkgreen">
              <span className="flex flex-col mr-1">
                  <span className="mt-6  text-sm">Por</span>
                  <span className="mr-1 text-sm ">R$</span>
              </span>
                    <span className="text-5xl leading-none">
                  {inteiro}
                </span>
                    <span className="flex flex-col">
                    <span className="text-lg">,{centavos}</span>
                    <span className="ml-1 text-sm">/Mês</span>
                </span>
                </div>

                <button
                    type="button"
                    onClick={() => onSelect?.(plan)}
                    className={[
                        "mt-5 w-[calc(100%+3rem)] -mx-6 rounded-b-3xl px-4 py-4 text-center font-semibold transition",
                        selected ? "bg-primary text-white" : "bg-[#8F8F8F] text-white hover:bg-gray-500",
                    ].join(" ")}
                >
                    Selecionar
                </button>

            </div>
        </div>
    );
}
