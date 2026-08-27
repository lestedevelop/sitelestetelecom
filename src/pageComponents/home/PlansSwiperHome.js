"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import {ChevronLeft, ChevronRight} from "lucide-react";
import {useRef, useState} from "react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function PlansSwiperHome({
    plans = [],
    renderPlan,
    loading = false,
    renderSkeleton,
    skeletonCount = 3,
    slidesPerView = 1,
    breakpoints = {
        640: {slidesPerView: 2},
        1024: {slidesPerView: 3},
        1280: {slidesPerView: 4},
    },
    slideClassName = "",
}) {
    const swiperRef = useRef(null);
    const [navigationState, setNavigationState] = useState({isBeginning: true, isEnd: false});
    const items = loading
        ? Array.from({ length: skeletonCount }, (_, index) => ({
              __skeleton: true,
              id: `plan-skeleton-${index}`,
          }))
        : plans;
    const shouldCenterDesktop = items.length < 4;

    function updateNavigation(swiper) {
        setNavigationState({
            isBeginning: swiper.isBeginning,
            isEnd: swiper.isEnd,
        });
    }

    return (
        <div className="relative w-full min-w-0 overflow-x-clip">
            <Swiper
                modules={[Pagination]}
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    updateNavigation(swiper);
                }}
                onSlideChange={updateNavigation}
                onBreakpoint={updateNavigation}
                onResize={updateNavigation}
                spaceBetween={24}
                slidesPerView={slidesPerView}
                centeredSlides={false}
                breakpoints={breakpoints}
                pagination={{
                    clickable: true,
                    dynamicMainBullets: true,
                }}
                className={[
                    "overflow-visible! px-1 pb-10 [&_.swiper-pagination]:!bottom-0",
                    shouldCenterDesktop ? "lg:[&_.swiper-wrapper]:justify-center" : "",
                ].join(" ")}
            >
                {items.map((plan) => (
                    <SwiperSlide
                        key={plan.id}
                        className={`flex! min-h-[588px] justify-center ${slideClassName}`}
                    >
                        <div className="w-full max-w-[343px] sm:max-w-none">
                            {plan.__skeleton ? renderSkeleton?.() : renderPlan(plan)}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button
                type="button"
                aria-label="Ver planos anteriores"
                disabled={navigationState.isBeginning}
                onClick={() => swiperRef.current?.slidePrev()}
                className="absolute left-2 top-1/2 z-20 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-primary bg-white text-primary shadow-lg transition hover:scale-105 hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-0 md:left-3"
            >
                <ChevronLeft aria-hidden="true" size={24}/>
            </button>

            <button
                type="button"
                aria-label="Ver mais planos"
                disabled={navigationState.isEnd}
                onClick={() => swiperRef.current?.slideNext()}
                className="absolute right-2 top-1/2 z-20 flex size-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-primary bg-white text-primary shadow-lg transition hover:scale-105 hover:bg-primary hover:text-white disabled:pointer-events-none disabled:opacity-0 md:right-3"
            >
                <ChevronRight aria-hidden="true" size={24}/>
            </button>
        </div>
    );
}
