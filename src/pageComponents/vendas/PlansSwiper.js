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
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={32}
                slidesPerView={1.25}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                    dynamicMainBullets: true,
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
