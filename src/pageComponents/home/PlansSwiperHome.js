"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PlansSwiperHome({plans = [], renderPlan, onPrev, onNext,}) {
    if (!plans.length) return null;

    return (
        <div className="container flex items-center">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={32}
                slidesPerView="auto"
                centeredSlides={false}
                pagination={{
                    clickable: true,
                    dynamicMainBullets: true,
                }}
                className="py-10"
            >
                {plans.map((plan) => (
                    <SwiperSlide key={plan.id} className="flex justify-center min-h-[588px] md:w-[330px]!">
                        {renderPlan(plan)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
