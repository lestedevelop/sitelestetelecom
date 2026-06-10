"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PlansSwiperHome({
    plans = [],
    renderPlan,
    loading = false,
    renderSkeleton,
    skeletonCount = 3,
}) {
    const items = loading
        ? Array.from({ length: skeletonCount }, (_, index) => ({
              __skeleton: true,
              id: `plan-skeleton-${index}`,
          }))
        : plans;
    const shouldCenterDesktop = items.length < 4;

    return (
        <div className="w-full min-w-0 overflow-x-clip">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={24}
                slidesPerView={1.15}
                centeredSlides={false}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 4 },
                }}
                pagination={{
                    clickable: true,
                    dynamicMainBullets: true,
                }}
                className={[
                    "overflow-visible! px-1 py-10 [&_.swiper-pagination]:!bottom-0",
                    shouldCenterDesktop ? "lg:[&_.swiper-wrapper]:justify-center" : "",
                ].join(" ")}
            >
                {items.map((plan) => (
                    <SwiperSlide
                        key={plan.id}
                        className="flex min-h-[588px] justify-center"
                    >
                        {plan.__skeleton ? renderSkeleton?.() : renderPlan(plan)}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
