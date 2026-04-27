"use client";
import React, {useEffect, useMemo, useState} from "react";
import {formatPrice} from "@/utils/Format";
import Image from "next/image";
import addIcon from "@/assets/icons/addIconVendas.svg"
import PerkCard from "@/pageComponents/vendas/PerkCard";
import Link from "next/link"
import {getBadge, getTitle} from "@/utils/utils";
import alertIcon from "@/assets/vendas/icons/alert.svg"
import wifi5icon from "@/assets/vendas/icons/wifi-5.svg"
import wifi6axicon from "@/assets/vendas/icons/wifi-6ax.svg"
import wifi6axmeshicon from "@/assets/vendas/icons/wifi-6axmesh.svg"

function getWifiIcon(label = "") {
    const normalized = String(label).toLowerCase();

    if (normalized.includes("mesh")) return wifi6axmeshicon;
    if (normalized.includes("6 ax")) return wifi6axicon;
    return wifi5icon;
}

function SimplePlanModal({open, title, onClose, children}) {
    useEffect(() => {
        if (!open) return;

        function handleKeyDown(event) {
            if (event.key === "Escape") onClose?.();
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[80]  flex items-center justify-center p-4">
            <button
                type="button"
                aria-label="Fechar modal"
                onClick={onClose}
                className="absolute inset-0 bg-black/50 rounded-3xl"
                style={{animation: "plan-modal-fade 180ms ease-out"}}
            />

            <div
                className="relative z-10 w-full max-w-lg rounded-2xl bg-white shadow-2xl ring-1 ring-black/10"
                style={{animation: "plan-modal-pop 220ms ease-out"}}
            >
                <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
                    <h3 className="text-xl font-semibold text-darkgreen">{title}</h3>
                    <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full text-graylight transition hover:bg-light"
                        aria-label="Fechar"
                    >
                        x
                    </button>
                </div>

                <div className="px-5 py-5 text-dark">
                    {children}
                </div>
            </div>

            <style jsx>{`
                @keyframes plan-modal-fade {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes plan-modal-pop {
                    from {
                        opacity: 0;
                        transform: translateY(10px) scale(0.96);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0) scale(1);
                    }
                }
            `}</style>
        </div>
    );
}

export default function PlanCardVendas({plan, selected, onSelect}) {
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [selectedSva, setSelectedSva] = useState("");
    const badge = useMemo(() => getBadge(plan), [plan]);
    const wifiText = plan?.descri_ser_bot || plan?.descri_ser;
    const {titleNumber, titleUnit} = useMemo(() => getTitle(plan), [plan]);
    const priceValue = plan?.valor - plan?.valor_desconto;
    const {inteiro, centavos} = formatPrice(priceValue);
    const isSelected = !!selected;

    return (
        <div className={"relative py-12 -mt-12"}>
            <div
                className="rounded-3xl pb-8 border border-primary bg-white px-6 min-h-[588px] shadow-lg ring-1 ring-black/5 flex flex-col justify-between items-center">

                {/* título */}
                <div className="mt-6 text-8xl font-semibold leading-none text-primary">
                    {titleNumber}
                </div>
                <div className="-mt-2 text-5xl tracking-[0.15em] font-semibold uppercase text-primary">
                    {titleUnit}
                </div>
                <div>
                    <Image src={getWifiIcon(wifiText)} alt="wifi" width={181}/>
                </div>

                <div className="mt-4 w-full flex gap-y-3 flex-col-reverse">
                    {plan?.SVAs?.map((sva) => (
                        <PerkCard
                            key={sva.codsimp}
                            descri_simp={sva.descri_simp}
                            onClick={(label) => setSelectedSva(label)}
                        />
                    ))}
                </div>


                <div className="flex items-end text-darkgreen py-2 font-bold">
              <span className="flex flex-col mr-1">
                  <span className="mt-6  text-base">Por</span>
                  <span className="mr-1 text-base mb-2 ">R$</span>
              </span>
                    <span className="text-7xl leading-none">
                  {inteiro}
                </span>
                    <span className="flex flex-col">
                    <span className="text-lg">,{centavos}</span>
                    <span className="ml-1 mt-2 text-sm mb-2">/Mês</span>
                </span>
                </div>

                    <Link
                        href={"/vendas"}
                        className={"w-full -mx-6 rounded-2xl px-4 py-3 text-center font-semibold transition border border-darkgreen bg-primary text-white"}
                    >
                        Assine agora!
                    </Link>

                    <button
                        type="button"
                        onClick={() => setDetailsOpen(true)}
                        className={"mt-2 w-full -mx-6 rounded-2xl px-4 py-2 text-center font-semibold  border border-darkgreen transition bg-light text-darkgreen"}
                    >
                        Mais Detalhes
                    </button>


                {/* Badge topo */}
                {badge ? (
                    <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
                        <span
                            className="flex w-60 items-center justify-center gap-2 rounded-2xl border border-primary bg-white px-3 py-2 text-xs font-semibold text-primary shadow">
                            <Image src={alertIcon} alt="" width={14} height={14}/>
                            <span>{badge}</span>
                        </span>
                    </div>
                ) : null}
            </div>

            <SimplePlanModal
                open={detailsOpen}
                title="Mais detalhes do plano"
                onClose={() => setDetailsOpen(false)}
            >
                <p className="text-base">
                    Modal basico de detalhes para teste.
                </p>
            </SimplePlanModal>

            <SimplePlanModal
                open={!!selectedSva}
                title={selectedSva || "Beneficio do plano"}
                onClose={() => setSelectedSva("")}
            >
                <p className="text-base">
                    Modal basico do beneficio para teste.
                </p>
            </SimplePlanModal>
        </div>
    );
}
