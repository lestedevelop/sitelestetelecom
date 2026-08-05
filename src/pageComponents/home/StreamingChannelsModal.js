"use client";

import Image from "next/image";
import {useEffect} from "react";
import {createPortal} from "react-dom";
import {X} from "lucide-react";

import lestePlay from "@/assets/home/streaming-plan/leste-play.svg";
import {sportsChannelSections} from "@/mocks/sportsChannels";
import {cineChannelSections} from "@/mocks/cineChannels";
import {familyChannelSections} from "@/mocks/familyChannels";

const channelTitles = {
    start: "Start",
    cine: "Cine + HBO",
    sports: "Sports",
    family: "Family",
};

const channelSections = {
    sports: sportsChannelSections,
    cine: cineChannelSections,
    family: familyChannelSections,
};

export default function StreamingChannelsModal({open, channel, onClose}) {
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

    const sections = channelSections[channel] || [];

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
                                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-13">
                                    {section.channels.map((item) => (
                                        <Image
                                            key={item.id}
                                            src={item.src}
                                            alt={item.alt}
                                            width={77}
                                            height={57}
                                            unoptimized
                                            className="h-auto w-full"
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
