"use client";

import {useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import cardServico from "@/assets/home/card-servico.png";

const services = [
    {
        title: "Leste Up",
        href: "/lesteup",
        image: cardServico,
        alt: "Card do servico Leste Up",
    },
    {
        title: "Leste Up",
        href: "/lesteup",
        image: cardServico,
        alt: "Card promocional do servico Leste Up",
    },
    {
        title: "Leste Up",
        href: "/lesteup",
        image: cardServico,
        alt: "Card do servico Leste Up com botao saiba mais",
    },
];

function ServiceCard({service}) {
    return (
        <Link href={service.href} className="mx-auto block w-full max-w-[360px]">
            <article className="overflow-hidden rounded-[3rem]">
                <Image
                    src={service.image}
                    alt={service.alt}
                    className="h-auto w-full"
                    sizes="(min-width: 1280px) 360px, (min-width: 768px) 320px, 280px"
                />
            </article>
        </Link>
    );
}

export default function ConhecaNossosServicosSection() {
    const swiperRef = useRef(null);

    return (
        <section className="w-full bg-light">
            <div className="container py-8">
                <div className="overflow-hidden rounded-[2rem] bg-white px-6 py-8 md:px-10 md:py-12 lg:px-14 xl:px-16">
                    <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:items-center lg:gap-10 xl:grid-cols-[480px_minmax(0,1fr)]">
                        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                            <header>
                                <h2 className="text-3xl font-bold leading-[1.02] tracking-[-0.04em] text-primary md:text-[4rem] lg:text-6xl">
                                    Conheca nossos
                                    <br />
                                    servicos
                                </h2>
                                <p className="mt-3 hidden pb-8 text-3xl leading-7 text-darkgreen lg:block md:text-[2rem] md:leading-none">
                                    Confira solucoes e experiencias da Leste
                                </p>
                            </header>

                            <div className="mt-6 hidden gap-3 lg:flex">
                                <button
                                    type="button"
                                    aria-label="Ver servico anterior"
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-graylighter text-darkgreen transition hover:bg-primary hover:text-light"
                                    onClick={() => swiperRef.current?.slidePrev()}
                                >
                                    <svg viewBox="0 0 24 24" className="h-4 w-4">
                                        <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                </button>

                                <button
                                    type="button"
                                    aria-label="Ver proximo servico"
                                    className="flex h-8 w-8 items-center justify-center rounded-full bg-graylighter text-darkgreen transition hover:bg-primary hover:text-light"
                                    onClick={() => swiperRef.current?.slideNext()}
                                >
                                    <svg viewBox="0 0 24 24" className="h-4 w-4">
                                        <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2"/>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="relative min-w-0">
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
                                        slidesPerView: 2.5,
                                        centeredSlides: false,
                                        spaceBetween: 16,
                                    },
                                }}
                                className="overflow-visible pb-8 md:pb-0 [&_.swiper-pagination]:!bottom-0 [&_.swiper-pagination]:flex [&_.swiper-pagination]:justify-center [&_.swiper-pagination]:gap-1.5 lg:[&_.swiper-pagination]:hidden [&_.swiper-pagination-bullet]:m-0 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:bg-primary/30 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:!bg-primary"
                            >
                                {services.map((service) => (
                                    <SwiperSlide key={service.alt} className="h-auto">
                                        <ServiceCard service={service}/>
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
