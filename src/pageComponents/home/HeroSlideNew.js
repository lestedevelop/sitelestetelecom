"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import banner from "@/assets/bannerhome-01-2026.png";
import banner2 from "@/assets/bannehome-01-2026-1.png";


export default function HeroSlider() {
  return (
    <section className=" relative container rounded-2xl ">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full rounded-2xl "
      >
        <SwiperSlide>
          <div className="relative h-60 sm:h-90 md:h-120 min-lg:h-135">
            <Image src={banner} alt="Banner 1" fill priority className=" rounded-2xl object-cover" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-60 sm:h-90 md:h-120 min-lg:h-135">
            <Image src={banner2} alt="Banner 2" fill className="object-cover rounded-2xl" />
          </div>
        </SwiperSlide>
      </Swiper>

      <button className="swiper-prev nav-btn left-12 xl:left-6 !hidden lg:flex!">
        <svg viewBox="0 0 24 24" className="h-5 w-5">
          <path d="M15 18l-6-6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      <button className="swiper-next nav-btn right-12 xl:right-6 !hidden lg:flex!">
        <svg viewBox="0 0 24 24" className="h-5 w-5">
          <path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

    </section>
  );
}
