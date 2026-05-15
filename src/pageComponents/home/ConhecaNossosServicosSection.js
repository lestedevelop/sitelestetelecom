"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { getLesteServices } from "@/mocks/lesteServices";
import {isDataImageSrc, resolveImageSrc} from "@/utils/imageSrc";

import "swiper/css";
import "swiper/css/pagination";

function ServiceCard({ service }) {
  const imageSrc = resolveImageSrc(service, service.image);

  return (
    <Link href={service.href} className="mx-auto block w-full max-w-[360px]">
      <article className="flex min-h-[450px] flex-col overflow-hidden rounded-2xl bg-light transition duration-200 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative h-[200px] w-full">
          <Image
            src={imageSrc}
            alt={service.title}
            fill
            className="object-cover"
            unoptimized={isDataImageSrc(imageSrc)}
          />
        </div>

        <div className="flex flex-1 flex-col px-6 pb-4 pt-8">
          <h3 className="text-[28px] font-bold leading-[0.95] tracking-[-0.05em] text-primary">
            {service.title}
          </h3>

          <p className="mt-8 text-[19px] leading-[1.15] text-corporate">
            {service.excerpt}
          </p>

          <span className="mt-auto pt-4 text-base font-bold text-primary">
            {service.cta}
          </span>
        </div>
      </article>
    </Link>
  );
}

export default function ConhecaNossosServicosSection() {
  const swiperRef = useRef(null);
  const services = getLesteServices();

  return (
    <section className="w-full bg-light">
      <div className="container py-8">
        <div className="overflow-hidden rounded-2xl bg-white px-6 py-8 md:px-10 md:py-12 lg:px-14 xl:px-16">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:items-center lg:gap-10 xl:grid-cols-[480px_minmax(0,1fr)]">
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <header>
                <h2 className="text-3xl font-bold leading-[1.02] tracking-[-0.04em] text-primary md:text-[4rem] lg:text-6xl">
                  Outros serviços
                  <br />
                  da Leste
                </h2>
                <p className="mt-3 hidden pb-8 text-[32px] leading-7 text-darkgreen md:text-lg md:leading-none lg:block">
                  Para diferentes necessidades.
                </p>
              </header>

              <div className="mt-6 hidden gap-3 lg:flex">
                <button
                  type="button"
                  aria-label="Ver servico anterior"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-graylighter text-darkgreen transition hover:bg-primary hover:text-light"
                  onClick={() => swiperRef.current?.slidePrev()}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4">
                    <path
                      d="M15 18l-6-6 6-6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  aria-label="Ver proximo servico"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-graylighter text-darkgreen transition hover:bg-primary hover:text-light"
                  onClick={() => swiperRef.current?.slideNext()}
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4">
                    <path
                      d="M9 6l6 6-6 6"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </button>
              </div>
            </div>

            <div className="relative min-w-0">
              <Swiper
                modules={[Pagination]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                slidesPerView={1}
                centeredSlides
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    centeredSlides: false,
                    spaceBetween: 16,
                  },
                  1280: {
                    slidesPerView: 2.1,
                    centeredSlides: false,
                    spaceBetween: 16,
                  },
                }}
                className="overflow-visible pb-8 md:pb-0 [&_.swiper-pagination]:!bottom-0 [&_.swiper-pagination]:flex [&_.swiper-pagination]:justify-center [&_.swiper-pagination]:gap-1.5 lg:[&_.swiper-pagination]:hidden [&_.swiper-pagination-bullet]:m-0 [&_.swiper-pagination-bullet]:h-2 [&_.swiper-pagination-bullet]:w-2 [&_.swiper-pagination-bullet]:bg-primary/30 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:!bg-primary"
              >
                {services.map((service) => (
                  <SwiperSlide key={service.id} className="max-h-[550px]">
                    <ServiceCard service={service} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-24 bg-gradient-to-l from-white via-white/85 to-transparent backdrop-blur-[2px] lg:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
