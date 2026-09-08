"use client";

import Image from "next/image";
import banner from "@/assets/cameras/bannercameras.webp";
import bannerMobile from "@/assets/cameras/banner-mobile.png";
import logo from "@/assets/cameras/logocameras.webp";
import whatsIcon from "@/assets/whatsIcon.svg";
import HomeHeroBanner from "@/pageComponents/home/HomeHeroBanner";
import BannerHome from "@/pageComponents/home/BannerHome";

const CAMERAS_WHATSAPP_URL = "https://bit.ly/4khdcOO";

export default function CamerasHero() {
  const fallback = (
    <section className="w-full">
      <HomeHeroBanner
        alt="Banner de câmeras"
        className="aspect-[640/974] max-h-none md:aspect-auto md:min-h-[640px]"
        mobileImageClassName="object-cover object-center"
        contentClassName="flex items-start pt-8 pb-8 md:items-center md:pb-0 md:pt-0"
        desktopImage={banner}
        tabletImage={bannerMobile}
        mobileImage={bannerMobile}
        desktopImageClassName="2xl:object-cover"
      >
        <div className="container h-full px-6 md:h-[300px] md:px-16">
            <div className="flex h-full flex-col items-center justify-between gap-y-4 text-center text-white md:block md:max-w-[530px] md:text-left">
              <div>
                <Image
                  src={logo}
                  alt="Leste Câmeras"
                  className="ml-4 w-[190px] md:ml-0 md:w-[260px]"
                />

                <h1 className="mt-4 whitespace-pre-line text-[1.85rem] font-semibold leading-[0.98] text-white md:mt-6 md:text-5xl">
                  {"Acompanhe\nquem você ama\nem tempo real."}
                </h1>
              </div>

              <a
                href={CAMERAS_WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex w-fit items-center gap-2 rounded-full bg-lightgreen px-6 py-2.5 text-lg font-semibold text-darkgreen transition hover:opacity-90 md:mt-5 md:px-8 md:py-3 md:text-[1.1rem]"
              >
                <Image src={whatsIcon} alt="WhatsApp" width={18} height={18}/>
                Contrate agora!
              </a>
            </div>
          </div>
      </HomeHeroBanner>
    </section>
  );

  return (
    <BannerHome
      sectionKey="bannerCameras"
      fallback={fallback}
      alt="Banner de câmeras"
      className="aspect-[640/974] max-h-none md:aspect-auto md:min-h-[640px]"
      mobileImageClassName="object-cover object-center"
      desktopImageClassName="2xl:object-cover"
    />
  );
}
