"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PlansSwiper({plans = [], renderPlan, onPrev, onNext,}) {
    if (!plans.length) return null;

    const centerFromTablet = plans.length < 3;
    const centerFromSmallScreen = plans.length < 2;

    return (
        <div className="w-full min-w-0 overflow-x-clip">
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
                className={[
                    "overflow-visible! px-1 pt-10 [&_.swiper-pagination]:!bottom-0",
                    centerFromSmallScreen ? "sm:[&_.swiper-wrapper]:justify-center" : "",
                    centerFromTablet ? "md:[&_.swiper-wrapper]:justify-center" : "",
                ].join(" ")}
            >
                {plans.map((plan) => (
                    <SwiperSlide key={plan.id} className="flex h-auto! justify-center pb-10">
                        {renderPlan(plan)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
