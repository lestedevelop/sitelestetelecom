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
    <section className="w-full md:mt-[160px] mt-[90px]">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop
        navigation
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full"
      >
        <SwiperSlide>
          <div className="relative h-60 sm:h-90 md:h-120 lg:h-135">
            <Image src={banner} alt="Banner 1" fill priority className="object-cover" />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative h-60 sm:h-90 md:h-120 lg:h-135">
            <Image src={banner2} alt="Banner 2" fill className="object-cover" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
