"use client";

import Image from "next/image";
import {Plus} from "lucide-react";
import {useId, useState} from "react";
import StreamingChannelsModal from "@/pageComponents/home/StreamingChannelsModal";
import ChannelCountBadge from "@/components/streaming/ChannelCountBadge";
import TrackedLink from "@/components/links/TrackedLink";

import canaisStart from "@/assets/home/streaming-plan/canais_start.svg";
import canais800 from "@/assets/home/streaming-plan/canais_800.svg";
import canais1Giga from "@/assets/home/streaming-plan/canais_1g.svg";
import canaisFamily from "@/assets/home/streaming-plan/canais_family.svg";
import canaisStartSales from "@/assets/home/streaming-plan/canais_start_sales.svg";
import canais800Sales from "@/assets/home/streaming-plan/canais_800_sales.svg";
import canais1GigaSales from "@/assets/home/streaming-plan/canais_1g_sales.svg";
import canaisFamilySales from "@/assets/home/streaming-plan/canais_family_sales.svg";
import lesteClubeSkeelo from "@/assets/home/streaming-plan/leste-clube-skeelo.svg";
import lestePlay from "@/assets/home/streaming-plan/leste-play.svg";
import streamingByWatch from "@/assets/home/streaming-plan/streaming-by-watch.svg";
import wifi5 from "@/assets/home/streaming-plan/wifi-5.svg";
import wifi6 from "@/assets/home/streaming-plan/super-wifi-6.svg";
import {getPlanoButtonId} from "@/lib/gtm/vendas";
import {startChannelSections} from "@/mocks/startChannels";
import {sportsChannelSections} from "@/mocks/sportsChannels";
import {cineChannelSections} from "@/mocks/cineChannels";
import {familyChannelSections} from "@/mocks/familyChannels";
import {useLestePlayChannels} from "@/hooks/useLestePlayChannels";
import {
    getFeaturedChannelsLayout,
    getChannelBadgeCount,
    getPlanDataForCard,
} from "@/lib/lestePlayChannelsShared.mjs";

const channelArtwork = {
    start: canaisStart,
    sports: canais800,
    cine: canais1Giga,
    family: canaisFamily,
};

const salesChannelArtwork = {
    start: canaisStartSales,
    sports: canais800Sales,
    cine: canais1GigaSales,
    family: canaisFamilySales,
};

const channelSectionsByType = {
    start: startChannelSections,
    sports: sportsChannelSections,
    cine: cineChannelSections,
    family: familyChannelSections,
};

const visibleChannelLogos = {
    start: 3,
    sports: 5,
    cine: 5,
    family: 5,
};

const additionalChannelOffsets = {
    sports: 1,
    family: 1,
};

function getAdditionalChannelCount(channel) {
    const total = (channelSectionsByType[channel] || []).reduce(
        (sum, section) => sum + section.channels.length,
        0
    );

    return Math.max(
        0,
        total - (visibleChannelLogos[channel] || 0) + (additionalChannelOffsets[channel] || 0)
    );
}

const channelArtworkAlt = {
    start: "Canais do Leste Play Start",
    sports: "Canais do Leste Play Sports",
    cine: "Canais do Leste Play Cine + HBO",
    family: "Canais do Leste Play Family",
};

function FeaturedChannelTile({channel}) {
    const gradientId = useId().replaceAll(":", "");

    return (
        <span className="relative flex h-[47px] w-[59px] shrink-0 items-center justify-center">
            <Image
                src={channel.image.url}
                alt={channel.title}
                width={52}
                height={40}
                unoptimized
                className="relative z-10 h-10 w-[52px] rounded-[4px] object-contain"
            />
            <svg
                viewBox="0 0 59 47"
                fill="none"
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[45.6px] w-[57.7px] -translate-x-1/2 -translate-y-1/2"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M39.8027.3057c4.3605 0 7.662-.001 10.211.3418 2.5578.3439 4.4046 1.0384 5.8281 2.4619 1.4233 1.4234 2.118 3.2695 2.4619 5.8271.3427 2.549.3418 5.8504.3418 10.211v8.5546c0 4.3607.0009 7.662-.3418 10.211-.3439 2.5576-1.0386 4.4037-2.4619 5.8271-1.4235 1.4235-3.2703 2.1181-5.8281 2.4619-2.549.3427-5.8505.3418-10.211.3418H19.1475c-4.3606 0-7.662.001-10.211-.3418-2.5577-.3438-4.4037-1.0384-5.8271-2.4619-1.4235-1.4234-2.118-3.2694-2.4619-5.8271-.3427-2.549-.3418-5.8503-.3418-10.211v-8.5546c0-4.3606-.001-7.662.3418-10.211.3439-2.5577 1.0385-4.4037 2.4619-5.8271C4.5328 1.6859 6.3788.9914 8.9365.6475 11.4855.3048 14.7869.3057 19.1475.3057h20.6552Z"
                    fill="white"
                    stroke={`url(#${gradientId}-stroke)`}
                    strokeWidth=".61"
                />
                <defs>
                    <linearGradient id={`${gradientId}-fill`} x1="14.0665" y1="6.0367" x2="66.0583" y2="28.5539" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#01FFA7"/>
                        <stop offset="1" stopColor="#04AC84" stopOpacity="0"/>
                    </linearGradient>
                    <linearGradient id={`${gradientId}-stroke`} x1="12.2001" y1="10.6349" x2="47.1913" y2="53.4889" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#03FFA9"/>
                        <stop offset="1" stopColor="#189986" stopOpacity="0"/>
                    </linearGradient>
                </defs>
            </svg>
        </span>
    );
}

function Toggle({active, label, onChange}) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={active}
            aria-label={`${active ? "Remover" : "Adicionar"} pacote ${label}`}
            onClick={onChange}
            className={`relative block h-[18px] w-8 cursor-pointer rounded-full transition hover:scale-105 hover:ring-2 hover:ring-[#10f4c9]/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${active ? "bg-[#0ddab7]" : "bg-[#002d26]"}`}
        >
            <span className={`absolute top-0.5 size-3.5 rounded-full bg-white ${active ? "right-0.5" : "left-0.5"}`} />
        </button>
    );
}

export default function StreamingPlanPreview({plan, variant = "home", initialChannel, selected = false, onSelect, onPackageChange}) {
    const [activeChannel, setActiveChannel] = useState(initialChannel || plan.channels);
    const [channelsModalOpen, setChannelsModalOpen] = useState(false);
    const isSales = variant === "sales";
    const channelsPayload = useLestePlayChannels();
    const apiPlanData = getPlanDataForCard(channelsPayload?.channelsByPlan, activeChannel);
    const apiArtworkLayout = getFeaturedChannelsLayout(apiPlanData);
    const apiChannelBadgeCount = getChannelBadgeCount(apiPlanData);
    const channels = (isSales ? salesChannelArtwork : channelArtwork)[activeChannel];
    const additionalChannelCount = getAdditionalChannelCount(activeChannel);
    const currentPrice = plan.prices?.[activeChannel] || plan.price;
    const activeBackendPlan = plan.backendPlans?.[activeChannel] || plan.backendPlan || plan;
    const wifiArtwork = plan.wifiGeneration === "5" ? wifi5 : wifi6;
    const hasPackages = plan.packages?.length > 0;

    return (
        <article className={[
            "relative shrink-0 overflow-hidden rounded-[22px] shadow-xl",
            isSales
                ? "h-[576px] w-full max-w-[343px] bg-white pt-6 text-primary"
                : "h-[760px] w-full max-w-[343px] border border-[#10f4c9] bg-[#087b60] pb-9 pt-10 text-white",
        ].join(" ")}>
            <header className="text-center">
                <p className={`${isSales ? "text-[76px] tracking-[-5px]" : "text-[100px] tracking-[-7px]"} font-bold leading-[0.72]`}>{plan.speed}</p>
                <p className={`${isSales ? "mt-1 text-[44px] tracking-[-3px]" : "mt-4 text-[58px] tracking-[-4px]"} font-bold leading-none`}>{plan.speedUnit}</p>

                <div className={`${isSales ? "mt-1" : "mt-6"} flex items-center justify-center gap-3`}>
                    <span className={`flex size-[19px] items-center justify-center rounded-[4px] bg-[#18efc5] text-[#00644e] ${plan.wifiGeneration === "5" ? "translate-y-3" : ""}`}>
                        <Plus aria-hidden="true" size={16} strokeWidth={4}/>
                    </span>
                    <Image
                        src={wifiArtwork}
                        alt={`${plan.wifi} ${plan.wifiGeneration}`}
                        className={`${plan.wifiGeneration === "5" ? "h-11 w-[94px]" : "h-10 w-[118px]"} ${isSales ? "[filter:brightness(0)_saturate(100%)_invert(37%)_sepia(86%)_saturate(1031%)_hue-rotate(126deg)_brightness(91%)_contrast(101%)]" : ""}`}
                    />
                </div>

                <Image
                    src={lesteClubeSkeelo}
                    alt="Leste Clube mais Skeelo"
                    className={`mx-auto h-auto w-[163px] ${isSales ? "mt-3 [filter:brightness(0)_saturate(100%)_invert(37%)_sepia(86%)_saturate(1031%)_hue-rotate(126deg)_brightness(91%)_contrast(101%)]" : "mt-6"}`}
                />
            </header>

            <div className={`mx-auto w-[220px] overflow-hidden rounded-xl ${isSales ? "mt-2 bg-[#e4f7f3]" : "mt-5 bg-[#00684f]"}`}>
                <div className="flex h-11 items-center justify-center rounded-xl border border-[#13eac5] bg-[#087b60]">
                    <Image src={lestePlay} alt="Leste Play" className="h-auto w-[115px]"/>
                </div>

                <div className={`flex flex-col items-center ${isSales ? "h-[150px] pt-2" : "h-[204px] pt-3"}`}>
                    {hasPackages ? (
                        <div className={`grid w-full ${plan.packages.length === 3 ? "grid-cols-3" : "grid-cols-2"}`}>
                            {plan.packages.map((item) => (
                                <div
                                    key={item.label}
                                    className={`flex flex-col items-center gap-1.5 ${item.channel === "cine" ? "translate-x-1" : ""}`}
                                >
                                    <span className={`whitespace-nowrap text-[12px] font-semibold uppercase ${isSales ? "text-darkgreen" : "text-[#10f4c9]"}`}>
                                        {item.label}
                                    </span>
                                    <Toggle
                                        active={activeChannel === item.channel}
                                        label={item.label}
                                        onChange={() => {
                                            setActiveChannel(item.channel);
                                            onPackageChange?.({
                                                plan,
                                                channel: item.channel,
                                                package: item,
                                                backendPlan: plan.backendPlans?.[item.channel] || null,
                                                price: plan.prices?.[item.channel] || plan.price,
                                            });
                                        }}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className={`text-[12px] font-semibold uppercase ${isSales ? "text-darkgreen" : "text-[#10f4c9]"}`}>{plan.streamingTier}</p>
                    )}

                    <button
                        type="button"
                        onClick={() => setChannelsModalOpen(true)}
                        aria-label={apiPlanData?.totalChannels !== null && apiPlanData?.totalChannels !== undefined
                            ? `Ver os ${apiPlanData.totalChannels} canais do pacote ${activeChannel}`
                            : `Ver todos os canais do pacote ${activeChannel}`}
                            className={`${hasPackages ? (isSales ? "mt-2" : "mt-4") : (isSales ? "mt-3" : "mt-6")} ${apiPlanData ? ({1: "w-[59px]", 2: "w-[126px]", 3: "w-[191px]"}[apiArtworkLayout.columns]) : (hasPackages ? (isSales ? "w-[145px]" : "w-[191px]") : (isSales ? "w-[105px]" : "w-[126px]"))} relative mb-2 cursor-pointer rounded-lg transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
                    >
                        {apiPlanData ? (
                            <span className="flex min-h-[48px] w-full flex-wrap items-center justify-center gap-1">
                                {apiPlanData.featuredChannels.map((featuredChannel, index) => (
                                    featuredChannel.image?.url ? (
                                        <FeaturedChannelTile
                                            key={`${featuredChannel.id ?? featuredChannel.title}-${index}`}
                                            channel={featuredChannel}
                                        />
                                    ) : null
                                ))}
                                {apiChannelBadgeCount > 0 ? (
                                    <span aria-hidden="true" className="block h-12 w-[59px] shrink-0">
                                        <ChannelCountBadge
                                            count={apiChannelBadgeCount}
                                            isSales={isSales}
                                            className="h-full w-full"
                                        />
                                    </span>
                                ) : null}
                            </span>
                        ) : (
                            <>
                                <Image
                                    src={channels}
                                    alt={`${channelArtworkAlt[activeChannel] || plan.channelsAlt}: mais ${additionalChannelCount} canais`}
                                    className="h-auto w-full"
                                />
                                {additionalChannelCount > 0 ? (
                                    <span
                                        aria-hidden="true"
                                        className={`absolute bottom-0 right-0 h-[47.525%] ${activeChannel === "start" ? "w-[46.825%]" : "w-[30.89%]"}`}
                                    >
                                        <ChannelCountBadge
                                            count={additionalChannelCount}
                                            isSales={isSales}
                                            className="h-full w-full"
                                        />
                                    </span>
                                ) : null}
                            </>
                        )}
                    </button>
                    <Image
                        src={streamingByWatch}
                        alt="Streaming by Watch"
                        className={`mt-auto h-auto ${isSales ? "mb-2 w-[105px] [filter:brightness(0)_saturate(100%)_invert(26%)_sepia(23%)_saturate(1563%)_hue-rotate(120deg)_brightness(88%)_contrast(101%)]" : "mb-3 w-[127px]"}`}
                    />
                </div>
            </div>

            <div className={`${isSales ? "mt-3 text-[#00644e]" : "mt-6"}`}>
                <div className={`flex items-start justify-center ${isSales ? "text-[#00644e]" : "text-white"}`}>
                    <div className="mr-1 pt-1 text-right font-semibold leading-none">
                        <span className="block text-[20px]">Por</span>
                        <span className="mt-2 block text-[32px]">R$</span>
                    </div>
                    <span className={`${isSales ? "text-[58px] tracking-[-4px]" : "text-[75px] tracking-[-5px]"} font-bold leading-[0.86]`}>{currentPrice.integer}</span>
                    <div className="ml-1 pt-1 leading-none">
                        <span className="block text-[30px] font-bold tracking-[-2px]">,{currentPrice.cents}</span>
                        <span className="mt-4 block text-[16px] font-semibold">{currentPrice.period}</span>
                    </div>
                </div>
                {!isSales ? (
                    <p className="mt-2 text-center text-[12px] font-semibold">{plan.loyalty}</p>
                ) : null}
            </div>

            {isSales ? (
                <button
                    id={getPlanoButtonId(activeBackendPlan)}
                    type="button"
                    aria-pressed={selected}
                    data-gtm-plan-codser={activeBackendPlan?.codser || ""}
                    data-gtm-plan-name={activeBackendPlan?.nome_exibicao || activeBackendPlan?.descri_ser || ""}
                    onClick={() => {
                        onSelect?.(activeBackendPlan);
                    }}
                    className={`absolute inset-x-0 bottom-0 flex h-[53px] cursor-pointer items-center justify-center rounded-b-[22px] text-[20px] font-semibold text-white transition hover:brightness-110 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-white ${selected ? "bg-primary" : "bg-[#979797] hover:bg-[#858585]"}`}
                >
                    {selected ? "Selecionado" : "Selecionar"}
                </button>
            ) : (
                <TrackedLink
                    id={getPlanoButtonId(activeBackendPlan)}
                    href={plan.actionHref}
                    data-gtm-plan-codser={activeBackendPlan?.codser || ""}
                    data-gtm-plan-name={activeBackendPlan?.nome_exibicao || activeBackendPlan?.descri_ser || ""}
                    className="mx-auto mt-7 flex min-h-12 w-48 cursor-pointer items-center justify-center rounded-lg bg-[#17efc3] px-4 text-[20px] font-medium text-[#003f34] transition-transform hover:-translate-y-px hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                    {plan.actionLabel}
                </TrackedLink>
            )}

            <StreamingChannelsModal
                open={channelsModalOpen}
                channel={activeChannel}
                apiPlanData={apiPlanData}
                categoryOrder={channelsPayload?.categories}
                onClose={() => setChannelsModalOpen(false)}
            />
        </article>
    );
}
