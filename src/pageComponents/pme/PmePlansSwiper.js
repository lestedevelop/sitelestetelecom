"use client";

import {Swiper, SwiperSlide} from "swiper/react";
import {Pagination} from "swiper/modules";
import PmePlanCard from "@/pageComponents/pme/PmePlanCard";

import "swiper/css";
import "swiper/css/pagination";

export default function PmePlansSwiper({plans = []}) {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        modules={[Pagination]}
        slidesPerView="auto"
        centeredSlides={false}
        spaceBetween={24}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        breakpoints={{
          768: {
            spaceBetween: 28,
          },
          1280: {
            spaceBetween: 32,
          },
        }}
        className="!overflow-visible px-2 py-10 [&_.swiper-pagination]:!bottom-0 [&_.swiper-pagination]:flex [&_.swiper-pagination]:justify-center [&_.swiper-pagination]:gap-1.5 [&_.swiper-pagination-bullet]:m-0 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:bg-primary/30 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:!bg-primary"
      >
        {plans.map((plan) => (
          <SwiperSlide
            key={`${plan.titleNumber}-${plan.titleUnit}`}
            className="!w-[300px] sm:!w-[330px]"
          >
            <PmePlanCard plan={plan} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
