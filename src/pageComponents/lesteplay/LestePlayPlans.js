"use client";

import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import LestePlayPlanCard from "@/pageComponents/lesteplay/LestePlayPlanCard";
import {LESTE_PLAY_PLANS} from "@/pageComponents/lesteplay/lestePlayData";

import "swiper/css";
import "swiper/css/pagination";

export default function LestePlayPlans() {
  return (
    <section id="planos" className="flex w-full flex-col items-center gap-8 overflow-hidden bg-white py-[60px] lg:gap-[60px] lg:py-20">
      <h2 className="max-w-[332px] px-4 text-center text-[32px] leading-[1.05] tracking-[-0.96px] text-primary md:max-w-none lg:text-[64px] lg:tracking-[-1.92px]">
        Qual Leste Play <strong className="font-bold">combina com você?</strong>
      </h2>

      <div className="w-full text-[12.8px] md:text-base min-[1320px]:hidden">
        <Swiper
          modules={[Pagination]}
          slidesPerView="auto"
          centeredSlides
          spaceBetween={15}
          breakpoints={{768: {centeredSlides: false, slidesOffsetBefore: 32, slidesOffsetAfter: 32}}}
          pagination={{clickable: true}}
          className="w-full [&_.swiper-pagination]:!static [&_.swiper-pagination]:!mt-8 [&_.swiper-pagination]:flex [&_.swiper-pagination]:justify-center [&_.swiper-pagination]:gap-1 [&_.swiper-pagination-bullet]:!m-0 [&_.swiper-pagination-bullet]:!size-[6.724px] [&_.swiper-pagination-bullet]:!bg-[#c2c2c2] [&_.swiper-pagination-bullet]:!opacity-100 [&_.swiper-pagination-bullet-active]:!bg-primary"
        >
          {LESTE_PLAY_PLANS.map((plan) => (
            <SwiperSlide key={plan.id} className="!w-auto">
              <LestePlayPlanCard plan={plan}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden gap-[15.643px] min-[1320px]:flex">
        {LESTE_PLAY_PLANS.map((plan) => (
          <LestePlayPlanCard key={plan.id} plan={plan}/>
        ))}
      </div>
    </section>
  );
}
