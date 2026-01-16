"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PlansSwiper({plans = [], renderPlan, onPrev, onNext,}) {
    if (!plans.length) return null;

    return (
        <div className="">
            <button
                type="button"
                aria-label="Anterior"
                className="swiper-plans-prev hidden md:flex items-center justify-center absolute left-[-56px] top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 z-10"
                onClick={onPrev}
            >
                ‹
            </button>

            <button
                type="button"
                aria-label="Próximo"
                className="swiper-plans-next hidden md:flex items-center justify-center absolute right-[-56px] top-1/2 -translate-y-1/2 h-10 w-10 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 z-10"
                onClick={onNext}
            >
                ›
            </button>

            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={32}
                slidesPerView={1.25}
                centeredSlides={false}
                navigation={{
                    prevEl: ".swiper-plans-prev",
                    nextEl: ".swiper-plans-next",
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                breakpoints={{
                    640: {slidesPerView: 2},
                    768: {slidesPerView: 3},
                }}
                className="py-10"
            >
                {plans.map((plan) => (
                    <SwiperSlide key={plan.id} className="flex justify-center">
                        {renderPlan(plan)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
