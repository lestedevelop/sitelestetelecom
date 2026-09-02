"use client";

import {useEffect, useMemo, useState} from "react";
import {createPortal} from "react-dom";
import Image from "next/image";
import TrackedLink from "@/components/links/TrackedLink";
import PerkCard from "@/pageComponents/vendas/PerkCard";
import wifi5icon from "@/assets/vendas/icons/wifi-5.svg";
import wifi6axicon from "@/assets/vendas/icons/wifi-6ax.svg";
import wifi6axmeshicon from "@/assets/vendas/icons/wifi-6axmesh.svg";
import {getPlanoButtonId} from "@/lib/gtm/vendas";
import {formatPrice} from "@/utils/Format";
import {getPerkByCodsimp} from "@/utils/getPerkByCodsimp";
import {getTitle} from "@/utils/utils";

function getWifiIcon(label = "") {
    const normalized = String(label).toLowerCase();
    if (normalized.includes("mesh")) return wifi6axmeshicon;
    if (normalized.includes("6 ax")) return wifi6axicon;
    return wifi5icon;
}

function getSvaLabel(sva) {
    return getPerkByCodsimp(sva?.descri_simp) ||
        getPerkByCodsimp(sva?.name) ||
        sva?.name ||
        sva?.descri_simp ||
        "";
}

function normalizeSvaKey(value) {
    return String(value || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();
}

function getBenefitItems(svas = []) {
    const seen = new Set();

    return svas.filter((sva) => {
        const key = normalizeSvaKey(getSvaLabel(sva));
        if (!key || seen.has(key)) return false;
        seen.add(key);
        return true;
    });
}

function getPromotionMonths(plan) {
    const value = Number(
        plan?.meses_desconto ??
        plan?.duracao_desconto ??
        plan?.promotional_months ??
        3
    );

    return Number.isFinite(value) && value > 0 ? value : 3;
}

function PromotionDetailsModal({open, onClose, plan, titleNumber, titleUnit, wifiText, benefits}) {
    useEffect(() => {
        if (!open) return;

        function handleKeyDown(event) {
            if (event.key === "Escape") onClose();
        }

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, onClose]);

    if (!open || typeof document === "undefined") return null;

    const grossPrice = formatPrice(plan?.valor);
    const discountedPrice = formatPrice(plan?.valor_desconto);
    const fidelity = Number(plan?.fidelidade) > 0 ? Number(plan.fidelidade) : 12;

    return createPortal(
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
            <button
                type="button"
                aria-label="Fechar modal"
                onClick={onClose}
                className="absolute inset-0 bg-black/55"
            />
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="promotion-plan-details-title"
                className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl ring-1 ring-black/10"
            >
                <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
                    <h3 id="promotion-plan-details-title" className="text-xl font-semibold text-darkgreen">
                        Mais detalhes do plano
                    </h3>
                    <button
                        type="button"
                        onClick={onClose}
                        className="inline-flex size-9 items-center justify-center rounded-full text-graylight transition hover:bg-light"
                        aria-label="Fechar"
                    >
                        x
                    </button>
                </div>
                <div className="px-5 py-5 text-dark md:px-7">
                    <p className="text-sm leading-relaxed text-darkgreen">
                        Plano {titleNumber} {titleUnit} {wifiText}.
                    </p>

                    {benefits.length ? (
                        <div className="mt-5">
                            <h4 className="text-sm font-bold uppercase tracking-wide text-darkgreen">
                                Benefícios inclusos
                            </h4>
                            <div className="mt-4 flex flex-col-reverse gap-y-3">
                                {benefits.map((sva) => (
                                    <PerkCard
                                        key={normalizeSvaKey(getSvaLabel(sva))}
                                        item={sva}
                                        descri_simp={sva.descri_simp}
                                        fullWidth
                                    />
                                ))}
                            </div>
                        </div>
                    ) : null}

                    <dl className="mt-5 overflow-hidden rounded-xl border border-primary/15 text-sm">
                        {[
                            ["Mensalidade", `R$ ${grossPrice.inteiro},${grossPrice.centavos}`],
                            ["Preço promocional", `R$ ${discountedPrice.inteiro},${discountedPrice.centavos}`],
                            ["Período promocional", `${getPromotionMonths(plan)} meses`],
                            ["Fidelidade", `${fidelity} meses`],
                        ].map(([label, value]) => (
                            <div key={label} className="grid grid-cols-[2fr_3fr] border-b border-primary/10 last:border-b-0">
                                <dt className="bg-light px-4 py-3 font-semibold text-darkgreen">{label}</dt>
                                <dd className="px-4 py-3">{value}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>,
        document.body
    );
}

export default function PromotionalPlanCardVendas({
    plan,
    selected,
    onSelect,
    actionHref,
    actionLabel = "Selecionar",
    className = "",
    cardClassName = "",
    compactTop = false,
    emphasizedBenefits = false,
}) {
    const [detailsOpen, setDetailsOpen] = useState(false);
    const {titleNumber, titleUnit} = getTitle(plan);
    const grossPrice = formatPrice(plan?.valor);
    const discountedPrice = formatPrice(plan?.valor_desconto ?? plan?.valor);
    const promotionMonths = getPromotionMonths(plan);
    const fidelity = Number(plan?.fidelidade) > 0 ? Number(plan.fidelidade) : 12;
    const wifiText = String(plan?.descri_ser_bot || plan?.descri_ser || "WI-FI 5")
        .replace(/\s+/g, " ")
        .trim();
    const benefits = useMemo(() => getBenefitItems(plan?.SVAs || []), [plan]);
    const planName = plan?.nome_exibicao || `${titleNumber} ${titleUnit}`.trim();
    const actionClasses = "mt-3 flex min-h-12 w-full cursor-pointer items-center justify-center rounded-lg border border-darkgreen bg-primary px-4 py-3 text-center text-lg font-bold text-white transition hover:-translate-y-px hover:brightness-110 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

    return (
        <div className={`relative w-full ${compactTop ? "pt-6 pb-12" : onSelect ? "z-20 h-[588px]" : "py-12 -mt-12"} ${className}`}>
            <article
                className={`relative flex w-full flex-col items-center rounded-3xl border border-primary bg-white px-6 pb-8 text-primary shadow-lg ring-1 ring-black/5 ${onSelect ? "h-full min-h-0" : "min-h-[588px]"} ${cardClassName}`}
            >
                <div className="mt-6 text-8xl font-semibold leading-none tracking-[-0.04em]">
                    {titleNumber}
                </div>
                <div className="-mt-2 text-5xl font-semibold uppercase leading-none tracking-[0.1em]">
                    {titleUnit}
                </div>

                <div className="mt-3 flex min-h-[94px] items-center justify-center">
                    <Image
                        src={getWifiIcon(wifiText)}
                        alt={wifiText || "Wi-Fi incluso"}
                        width={181}
                        className="h-auto w-[150px]"
                    />
                </div>

                <div className="mt-2 flex w-full flex-col-reverse gap-y-3">
                    {benefits.map((sva) => (
                        <PerkCard
                            key={normalizeSvaKey(getSvaLabel(sva))}
                            item={sva}
                            descri_simp={sva.descri_simp}
                            emphasized={emphasizedBenefits}
                        />
                    ))}
                </div>

                <div className="mt-auto flex flex-col items-center pt-3 text-darkgreen">
                    <div className="relative text-base leading-none">
                        De R$ {grossPrice.inteiro},{grossPrice.centavos}
                        <span aria-hidden="true" className="absolute -left-1 -right-1 top-1/2 h-[2px] -rotate-6 bg-[#d62b2b]" />
                    </div>

                    <div className="mt-1 flex items-end justify-center font-bold">
                        <div className="mb-1 mr-2 text-left text-xl font-medium leading-[1.05]">
                            <div>Por</div>
                            <div>R$</div>
                        </div>
                        <span className="text-[4.65rem] leading-[0.82] tracking-[-0.06em]">
                            {discountedPrice.inteiro}
                        </span>
                        <div className="ml-1 flex flex-col pb-0.5">
                            <span className="text-2xl leading-none">,{discountedPrice.centavos}</span>
                            <span className="mt-2 text-[10px] font-normal leading-[1.05]">
                                /por {promotionMonths}
                                <br />
                                <strong>meses</strong>
                            </span>
                        </div>
                    </div>
                    <p className="mt-2 text-center text-xs font-normal">*Fidelidade de {fidelity} meses</p>
                </div>

                {actionHref ? (
                    <TrackedLink
                        id={getPlanoButtonId(plan)}
                        href={actionHref}
                        data-gtm-plan-codser={plan?.codser || ""}
                        data-gtm-plan-name={planName}
                        className={actionClasses}
                    >
                        {actionLabel}
                    </TrackedLink>
                ) : (
                    <button
                        id={getPlanoButtonId(plan)}
                        type="button"
                        aria-pressed={!!selected}
                        onClick={() => onSelect?.(plan)}
                        data-gtm-plan-codser={plan?.codser || ""}
                        data-gtm-plan-name={planName}
                        className={actionClasses}
                    >
                        {selected ? "Selecionado" : actionLabel}
                    </button>
                )}

                {!onSelect ? (
                    <button
                        type="button"
                        onClick={() => setDetailsOpen(true)}
                        className="mt-4 cursor-pointer text-sm font-semibold text-darkgreen underline underline-offset-4 transition hover:text-primary"
                    >
                        Mais Detalhes
                    </button>
                ) : null}
            </article>

            <PromotionDetailsModal
                open={detailsOpen}
                onClose={() => setDetailsOpen(false)}
                plan={plan}
                titleNumber={titleNumber}
                titleUnit={titleUnit}
                wifiText={wifiText}
                benefits={benefits}
            />
        </div>
    );
}
