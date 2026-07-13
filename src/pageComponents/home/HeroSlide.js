"use client";

import {useEffect, useState} from "react";
import {Autoplay, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import bannerLesteCameras from "@/assets/home/08-07-2026/banner_site_leste-cameras_1905x520.png";
import bannerLesteCamerasMobile from "@/assets/home/01-07-2026/banner-leste-cameras-mobile.png";
import bannerLesteUp from "@/assets/home/08-07-2026/banner_site_leste-up_1905x520.png";
import bannerLesteUpMobile from "@/assets/home/01-07-2026/banner-leste-up-mobile.png";
import bannerOfertaEmCampo from "@/assets/home/01-07-2026/banner-oferta-em-campo.png";
import bannerOfertaEmCampoMobile from "@/assets/home/01-07-2026/banner-oferta-em-campo-mobile.png";
import HomeHeroBanner from "@/pageComponents/home/HomeHeroBanner";
import {resolveImageSrc} from "@/utils/imageSrc";

const heroSlides = [
    {
        id: "home-leste-cameras",
        alt: "Banner Leste Câmeras",
        href: "/cameras",
        image: bannerLesteCameras,
        mobileImage: bannerLesteCamerasMobile,
    },
    {
        id: "home-leste-up", alt: "Banner Leste Up",
        href: "/lesteup",
        image: bannerLesteUp,
        mobileImage: bannerLesteUpMobile,
    },
    {
        id: "home-oferta-em-campo",
        alt: "Banner Oferta em Campo da Leste Telecom",
        href: "https://vendas.lestetelecom.com.br/vendas",
        image: bannerOfertaEmCampo,
        mobileImage: bannerOfertaEmCampoMobile,
    },
];

function normalizeText(value = "") {
    return String(value)
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
}

function getValidUrl(value) {
    const url = String(value || "").trim();
    if (!url || url === "undefined" || url === "null") return "";

    if (/^https?:\/\//i.test(url)) return url;
    if (url.startsWith("/")) return url;
    if (/^[a-z0-9][a-z0-9\-_/]*(\?.*)?(#.*)?$/i.test(url)) return `/${url}`;

    return "";
}

function getDeviceType(item) {
    return Number(item?.deviceType || item?.device_type || item?.typeDispositivo || 0);
}

function getRelatedBanner(desktop, banners) {
    const title = normalizeText(desktop?.title);

    if (title.includes("camera")) {
        return banners.find((item) => normalizeText(item?.title).includes("camera"));
    }

    if (title.includes("oferta") || title.includes("campo")) {
        return banners.find((item) => normalizeText(item?.title).includes("campo"));
    }

    if (title.includes("leste") || title.includes("up")) {
        return banners.find((item) => {
            const itemTitle = normalizeText(item?.title);
            return itemTitle.includes("leste") || itemTitle.includes("up");
        });
    }

    return banners.find((item) => item?.order === desktop?.order) || banners[0] || null;
}

function mapCoreBannersToSlides(banners = []) {
    const validBanners = banners.filter((item) => resolveImageSrc(item, null));
    const desktopBanners = validBanners.filter((item) => getDeviceType(item) === 1);
    const mobileBanners = validBanners.filter((item) => getDeviceType(item) === 2);
    const tabletBanners = validBanners.filter((item) => getDeviceType(item) === 3);
    const sortedDesktopBanners = desktopBanners
        .sort((a, b) => (Number(a?.order) || 0) - (Number(b?.order) || 0) || (Number(a?.id) || 0) - (Number(b?.id) || 0));

    return sortedDesktopBanners.map((banner) => {
        const tabletBanner = getRelatedBanner(banner, tabletBanners);
        const mobileBanner = getRelatedBanner(banner, mobileBanners);
        const image = resolveImageSrc(banner, null);
        const tabletImage = resolveImageSrc(tabletBanner, image);
        const mobileImage = resolveImageSrc(mobileBanner, image);

        return {
            id: `core-banner-${banner.id}`,
            alt: banner?.title || banner?.text || "Banner Leste Telecom",
            href: getValidUrl(banner?.button_url),
            ctaLabel: banner?.button_label || "",
            image,
            tabletImage,
            mobileImage,
        };
    });
}

function HeroSlideItem({slide, priority = false}) {
    return (
        <HomeHeroBanner
            href={slide.href}
            alt={slide.alt}
            priority={priority}
            desktopImage={slide.image}
            tabletImage={slide.tabletImage || slide.image}
            mobileImage={slide.mobileImage}
            desktopImageClassName="2xl:object-cover"
        />
    );
}

export default function HeroSlider({slides = heroSlides}) {
    const [coreSlides, setCoreSlides] = useState(null);
    const activeSlides = coreSlides?.length ? coreSlides : slides;

    useEffect(() => {
        let isActive = true;

        async function loadCoreSlides() {
            try {
                const res = await fetch("/api/debug/core-test");
                const data = await res.json();
                const mappedSlides = mapCoreBannersToSlides(Array.isArray(data?.banner) ? data.banner : []);

                if (isActive && mappedSlides.length) {
                    setCoreSlides(mappedSlides);
                }
            } catch {
                if (isActive) setCoreSlides(null);
            }
        }

        loadCoreSlides();

        return () => {
            isActive = false;
        };
    }, []);

    return (
        <section className="w-full">
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop
                autoplay={{delay: 5000, disableOnInteraction: false}}
                pagination={{
                    clickable: true,
                }}
                className="w-full overflow-hidden [&_.swiper-pagination]:absolute [&_.swiper-pagination]:inset-x-0 [&_.swiper-pagination]:bottom-5 [&_.swiper-pagination]:z-20 [&_.swiper-pagination]:flex [&_.swiper-pagination]:justify-center [&_.swiper-pagination]:gap-2 lg:[&_.swiper-pagination]:bottom-8 [&_.swiper-pagination-bullet]:m-0 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:border [&_.swiper-pagination-bullet]:border-white/70 [&_.swiper-pagination-bullet]:bg-white/35 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:!w-8 [&_.swiper-pagination-bullet-active]:!rounded-full [&_.swiper-pagination-bullet-active]:!bg-white"
            >
                {activeSlides.map((slide, index) => (
                    <SwiperSlide key={slide.id}>
                        <HeroSlideItem slide={slide} priority={index === 0}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
