"use client";

import {useRef} from "react";
import Image from "next/image";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import seloRa1000 from "@/assets/home/SELO-RA.png";
import seloMaisPremiado from "@/assets/home/SELO-MAISPREMIADO.png";

const seals = [
    {
        description: "*Premio de melhor atendimento pelo Reclame Aqui 2025",
        image: seloRa1000,
        alt: "Selo RA1000 de melhor atendimento de 2025",
    },
    {
        description: "*Selo de provedor mais premiado pelo MelhorPlano em 2025",
        image: seloMaisPremiado,
        alt: "Selo de 28 premios em 2025 do MelhorPlano",
    },
    {
        description: "*Selo de provedor premiado pelo MelhorPlano em 2025",
        image: seloMaisPremiado,
        alt: "Selo de provedor premiado pelo MelhorPlano em 2025",
    },
    {
        description: "*Selo de provedor premiado pelo MelhorPlano em 2025",
        image: seloMaisPremiado,
        alt: "Selo de provedor premiado pelo MelhorPlano em 20252",
    },
    {
        description: "*Selo de provedor premiado pelo MelhorPlano em 2025",
        image: seloMaisPremiado,
        alt: "Selo de provedor premiado pelo MelhorPlano em 20251",
    },
    {
        description: "*Premio de melhor atendimento pelo Reclame Aqui 2025",
        image: seloRa1000,
        alt: "Selo RA1000 de melhor atendimento de 20255",
    },
];

function SealCard({seal}) {
    return (
        <article className="mx-auto flex max-w-[210px] pb-6 flex-col items-center text-center">
            <div className="relative flex h-[164px] w-[164px] items-center justify-center md:h-[176px] md:w-[176px] lg:h-[188px] lg:w-[188px]">
                <Image
                    src={seal.image}
                    alt={seal.alt}
                    className="object-contain"
                />
            </div>

            <p className="mt-4 min-h-10 text-sm leading-4 text-darkgreen md:text-[15px]">
                {seal.description}
            </p>
        </article>
    );
}

export default function AmaisPremiadaDoEstado() {
    const swiperRef = useRef(null);

    return (
        <section className="w-full bg-light">
            <div className="container py-8 md:py-16">
                <div className="overflow-hidden rounded-[2rem] bg-white px-6 py-8 md:px-10 md:py-12 lg:px-14 xl:px-16">
                    <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:items-center lg:gap-10 xl:grid-cols-[480px_minmax(0,1fr)]">
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                            <header>
                                <h2 className="text-3xl lg:text-6xl font-bold leading-[1.02] tracking-[-0.04em] text-primary md:text-[4rem]">
                                    A mais Premiada
                                    <br />
                                    do Estado!
                                </h2>
                                <p className="mt-3 hidden lg:block text-3xl leading-7 pb-8 text-darkgreen md:text-[2rem] md:leading-none">
                                    Confira os nossos premios
                                </p>
                            </header>

                            <div className="mt-6 hidden gap-3 lg:flex">
                                <button
                                    type="button"
                                    aria-label="Ver selo anterior"
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-graylighter text-darkgreen transition hover:bg-primary hover:text-light"
                                    onClick={() => swiperRef.current?.slidePrev()}
                                >
                                    <svg viewBox="0 0 24 24" className="h-4 w-4">
                                        <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    aria-label="Ver proximo selo"
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-graylighter text-darkgreen transition hover:bg-primary hover:text-light"
                                    onClick={() => swiperRef.current?.slideNext()}
                                >
                                    <svg viewBox="0 0 24 24" className="h-4 w-4">
                                        <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="relative min-w-1/2">
                            <Swiper
                                modules={[Pagination]}
                                onSwiper={(swiper) => {
                                    swiperRef.current = swiper;
                                }}
                                slidesPerView={1}
                                centeredSlides
                                pagination={{
                                    clickable: true,
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 2,
                                        centeredSlides: false,
                                        spaceBetween: 16,
                                    },
                                    1280: {
                                        slidesPerView: 2.8,
                                        centeredSlides: false,
                                        spaceBetween: 16,
                                    },
                                }}
                                className="overflow-visible pb-8 md:pb-0 [&_.swiper-pagination]:!bottom-0 [&_.swiper-pagination]:flex [&_.swiper-pagination]:justify-center [&_.swiper-pagination]:gap-1.5 lg:[&_.swiper-pagination]:hidden [&_.swiper-pagination-bullet]:m-0 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:bg-primary/30 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:!bg-primary"
                            >
                                {seals.map((seal) => (
                                    <SwiperSlide key={seal.alt} className="h-auto">
                                        <SealCard seal={seal}/>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-white via-white/85 to-transparent backdrop-blur-[2px] lg:block" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
