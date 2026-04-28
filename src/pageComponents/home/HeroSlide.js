"use client";

import {Autoplay, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import HomeHeroBanner from "@/pageComponents/home/HomeHeroBanner";

const heroSlides = [
    {
        id: "home-main",
        alt: "Banner principal da Leste Telecom",
        href: "/fibra",
    },
    {
        id: "home-offer",
        alt: "Banner de ofertas da Leste Telecom",
        href: "/movel",
    },
];

function HeroSlideItem({slide, priority = false}) {
    return (
        <HomeHeroBanner href={slide.href} alt={slide.alt} priority={priority} />
    );
}

export default function HeroSlider({slides = heroSlides}) {
    return (
        <section className="w-full">
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop
                autoplay={{delay: 5000, disableOnInteraction: false}}
                pagination={{
                    clickable: true,
                }}
                className="w-full overflow-hidden [&_.swiper-pagination]:absolute [&_.swiper-pagination]:inset-x-0 [&_.swiper-pagination]:bottom-5 [&_.swiper-pagination]:z-20 [&_.swiper-pagination]:flex [&_.swiper-pagination]:justify-center [&_.swiper-pagination]:gap-2 lg:[&_.swiper-pagination]:bottom-8 [&_.swiper-pagination-bullet]:m-0 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:border [&_.swiper-pagination-bullet]:border-white/70 [&_.swiper-pagination-bullet]:bg-white/35 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:!w-8 [&_.swiper-pagination-bullet-active]:!rounded-full [&_.swiper-pagination-bullet-active]:!bg-white"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <HeroSlideItem slide={slide} priority={index === 0}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
