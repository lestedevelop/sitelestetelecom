"use client";

import Image from "next/image";
import {useEffect} from "react";
import {createPortal} from "react-dom";
import {X} from "lucide-react";

import lestePlay from "@/assets/home/streaming-plan/leste-play.svg";
import {sportsChannelSections} from "@/mocks/sportsChannels";
import {cineChannelSections} from "@/mocks/cineChannels";
import {familyChannelSections} from "@/mocks/familyChannels";
import {startChannelSections} from "@/mocks/startChannels";
import {buildApiChannelSections} from "@/lib/lestePlayChannelsShared.mjs";

const channelTitles = {
    start: "Start",
    cine: "Cine + HBO",
    sports: "Sports",
    family: "Family",
};

const channelSections = {
    start: startChannelSections,
    sports: sportsChannelSections,
    cine: cineChannelSections,
    family: familyChannelSections,
};

function ChannelCard({item}) {
    const title = item.title || item.alt || "Canal";
    const label = String(title).toUpperCase();

    return (
        <div className="relative mx-auto h-[56.18px] w-[76.68px]">
            <div className="absolute inset-x-0 bottom-0 h-[23.53px] w-[76.68px] rounded-[4px] border border-[#03F7A4] bg-[linear-gradient(to_bottom_right,#00B78E,rgba(0,155,121,0))] backdrop-blur-[4px]"/>
            <div className="absolute left-1/2 top-0 z-10 h-[42.62px] w-[76.31px] -translate-x-1/2 overflow-hidden rounded-[4px] border border-[#03F7A4] bg-white">
                <Image
                    src={item.image?.url || item.src}
                    alt={title}
                    width={76}
                    height={43}
                    unoptimized
                    className="h-full w-full object-contain"
                />
            </div>
            <span
                className="pointer-events-none absolute inset-x-0 bottom-[3.5px] z-20 block truncate px-1 text-center text-[7px] font-bold uppercase leading-none text-white"
            >
                {label}
            </span>
        </div>
    );
}

export default function StreamingChannelsModal({open, channel, apiPlanData, categoryOrder, onClose}) {
    useEffect(() => {
        if (!open) return undefined;

        function handleKeyDown(event) {
            if (event.key === "Escape") onClose();
        }

        document.addEventListener("keydown", handleKeyDown);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [open, onClose]);

    if (!open) return null;

    const sections = buildApiChannelSections(apiPlanData, categoryOrder) ?? channelSections[channel] ?? [];

    return createPortal(
        <div
            className="fixed inset-0 z-[100] overflow-y-auto bg-black/75 p-3 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={`Canais Leste Play ${channelTitles[channel]}`}
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) onClose();
            }}
        >
            <div className="relative mx-auto min-h-full w-full max-w-[1600px] rounded-3xl border border-[#19efc6] bg-primary px-5 py-7 text-white shadow-2xl md:px-12 md:py-10">
                <div className="flex items-center gap-3 pr-14">
                    <Image src={lestePlay} alt="Leste Play" className="h-auto w-[145px] md:w-[190px]"/>
                    <span className="text-xl font-bold uppercase text-[#15edc4] md:text-3xl">
                        {channelTitles[channel]}
                    </span>
                </div>

                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Fechar lista de canais"
                    className="absolute right-5 top-5 flex size-11 items-center justify-center rounded-xl bg-white text-primary transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-10 md:top-8 md:size-14"
                >
                    <X aria-hidden="true" size={34} strokeWidth={2.5}/>
                </button>

                {sections.length ? (
                    <div className="mt-8 space-y-10">
                        {sections.map((section) => (
                            <section key={section.title}>
                                <h3 className="mb-3 text-xl font-bold uppercase md:text-2xl">{section.title}</h3>
                                <div className="grid grid-cols-3 gap-[6px] sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-13">
                                    {section.channels.map((item, index) => (
                                        <ChannelCard
                                            key={`${item.id ?? item.title}-${index}`}
                                            item={item}
                                        />
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>
                ) : (
                    <p className="mt-12 text-lg font-semibold">Lista de canais em preparação.</p>
                )}
            </div>
        </div>,
        document.body
    );
}
