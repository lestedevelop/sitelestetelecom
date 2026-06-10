"use client";

import Image from "next/image";
import Link from "next/link";
import bebanca from "@/assets/icons/bebanca.svg";
import lesteClube from "@/assets/lesteclube.svg";
import skeelo from "@/assets/icons/skelolivros.svg";
import wifi5icon from "@/assets/vendas/icons/wifi-5.svg";
import wifi6axicon from "@/assets/vendas/icons/wifi-6ax.svg";
import wifi6axmeshicon from "@/assets/vendas/icons/wifi-6axmesh.svg";
import dourado from "@/assets/dourado.png";
import { getPlanoButtonId } from "@/lib/gtm/vendas";
import { formatPrice } from "@/utils/Format";
import { getTitle } from "@/utils/utils";

function getWifiIcon(label = "") {
    const normalized = String(label).toLowerCase();

    if (normalized.includes("mesh")) return wifi6axmeshicon;
    if (normalized.includes("6 ax")) return wifi6axicon;
    return wifi5icon;
}

function Benefit({ children }) {
    return (
        <div className="flex h-11 w-full items-center justify-center rounded-xl bg-[#006B59] px-5">
            {children}
        </div>
    );
}

export default function PromotionalPlanCardVendas({
    plan,
    selected,
    onSelect,
    actionHref,
    actionLabel = "Selecionar",
    className = "",
    compactTop = false,
}) {
    const { titleNumber, titleUnit } = getTitle(plan);
    const grossPrice = formatPrice(plan?.valor);
    const discountedPrice = formatPrice(plan?.valor_desconto ?? plan?.valor);
    const wifiText = String(plan?.descri_ser_bot || plan?.descri_ser || "SUPER WI-FI 6 AX")
        .replace(/\s+/g, " ")
        .trim();

    return (
        <div className={`relative w-full ${compactTop ? "pt-6 pb-12" : "py-12"} ${className}`}>
            <article
                className={[
                    "relative flex h-[588px] w-full flex-col items-center overflow-visible rounded-[24px]",
                    "border-[3px] border-transparent px-5 pt-8 text-white shadow-lg",
                ].join(" ")}
                style={{
                    backgroundImage: `linear-gradient(#007B67, #007B67), url(${dourado.src})`,
                    backgroundClip: "padding-box, border-box",
                    backgroundOrigin: "border-box",
                    backgroundPosition: "center",
                    backgroundSize: "auto, cover",
                }}
            >
                <div
                    className="absolute left-1/2 top-0 z-50 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-xl bg-cover bg-center px-5 py-2 text-sm font-extrabold text-black shadow-sm"
                    style={{ backgroundImage: `url(${dourado.src})` }}
                >
                    3 MESES COM DESCONTO
                </div>

                <div className="text-8xl font-semibold leading-none text-white">
                    {titleNumber}
                </div>
                <div className="-mt-2 text-5xl font-semibold uppercase leading-none tracking-[0.15em]">
                    {titleUnit}
                </div>

                <div className="mt-2 flex min-h-[94px] items-center justify-center">
                    <Image
                        src={getWifiIcon(wifiText)}
                        alt={wifiText || "Wi-Fi incluso"}
                        width={183}
                        className="h-auto w-[183px] brightness-0 invert"
                    />
                </div>

                <div className="mt-3 flex w-full flex-col gap-2">
                    <Benefit>
                        <Image
                            src={skeelo}
                            alt="Skeelo livros"
                            className="h-8 w-auto object-contain brightness-0 invert"
                        />
                    </Benefit>
                    <Benefit>
                        <Image
                            src={bebanca}
                            alt="Bebanca"
                            className="h-8 w-auto object-contain [filter:brightness(0)_saturate(100%)_invert(81%)_sepia(91%)_saturate(1000%)_hue-rotate(337deg)_brightness(103%)_contrast(101%)]"
                        />
                    </Benefit>
                    <Benefit>
                        <Image src={lesteClube} alt="Leste Clube" className="h-8 w-auto object-contain" />
                    </Benefit>
                </div>

                <div className="relative mt-4 text-center text-xl font-light leading-none text-[#10C6A8]">
                    De {grossPrice.inteiro},{grossPrice.centavos}
                    <span
                        aria-hidden="true"
                        className="absolute left-[-4px] right-[-4px] top-1/2 h-[3px] -translate-y-1/2 rotate-[-4deg] bg-cover bg-center"
                        style={{ backgroundImage: `url(${dourado.src})` }}
                    />
                </div>

                <div className="mt-2 flex items-end justify-center">
                    <div className="mb-1 mr-2 text-left text-xl font-medium leading-[1.05]">
                        <div>Por</div>
                        <div>R$</div>
                    </div>
                    <span className="text-[4.4rem] font-semibold leading-[0.78] tracking-[-0.06em]">
                        {discountedPrice.inteiro}
                    </span>
                    <div className="ml-1 flex flex-col pb-0.5">
                        <span className="text-2xl font-semibold leading-none">
                            ,{discountedPrice.centavos}
                        </span>
                        <span className="mt-2 text-[11px] leading-[1.05]">
                            /por 3
                            <br />
                            <strong>meses</strong>
                        </span>
                    </div>
                </div>

                <p className="mt-4 text-center text-sm">*Fidelidade de 12 meses</p>

                {actionHref ? (
                    <Link
                        id={getPlanoButtonId(plan)}
                        href={actionHref}
                        data-gtm-plan-codser={plan?.codser || ""}
                        data-gtm-plan-name={plan?.nome_exibicao || `${titleNumber} ${titleUnit}`.trim()}
                        className="mt-auto w-[calc(100%+2.5rem)] -mx-5 rounded-b-[20px] bg-cover bg-center px-4 py-4 text-center text-xl font-extrabold text-black transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        style={{ backgroundImage: `url(${dourado.src})` }}
                    >
                        {actionLabel}
                    </Link>
                ) : (
                    <button
                        id={getPlanoButtonId(plan)}
                        type="button"
                        aria-pressed={!!selected}
                        onClick={() => onSelect?.(plan)}
                        data-gtm-plan-codser={plan?.codser || ""}
                        data-gtm-plan-name={plan?.nome_exibicao || `${titleNumber} ${titleUnit}`.trim()}
                        className="mt-auto w-[calc(100%+2.5rem)] -mx-5 rounded-b-[20px] bg-cover bg-center px-4 py-4 text-center text-xl font-extrabold text-black transition hover:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                        style={{ backgroundImage: `url(${dourado.src})` }}
                    >
                        {selected ? "Selecionado" : actionLabel}
                    </button>
                )}
            </article>
        </div>
    );
}
