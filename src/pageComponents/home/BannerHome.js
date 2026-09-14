"use client";

import {Autoplay, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import HomeHeroBanner from "@/pageComponents/home/HomeHeroBanner";
import {useHomeSections} from "@/hooks/useHomeSections";
import {resolveImageSrc} from "@/utils/imageSrc";

import "swiper/css";
import "swiper/css/pagination";

function getHref(value) {
    const href = String(value || "").trim();
    if (!href || href === "undefined" || href === "null") return "";
    if (/^https?:\/\//i.test(href) || href.startsWith("/")) return href;
    return /^[a-z0-9][a-z0-9\-_/]*(\?.*)?(#.*)?$/i.test(href) ? `/${href}` : "";
}

function BannerSlide({advert, priority, alt, bannerProps}) {
    const image = resolveImageSrc(advert, null);

    return (
        <HomeHeroBanner
            {...bannerProps}
            href={getHref(advert.cta?.href)}
            alt={advert.title || advert.description || alt}
            priority={priority}
            desktopImage={image}
            tabletImage={image}
            mobileImage={image}
        />
    );
}

/**
 * Renders a banner section supplied by the home API. The `sectionKey` must be
 * the API key (never its display label). Existing page banners remain visible
 * through `fallback` whenever the selected device has no usable API image.
 */
export default function BannerHome({
    sectionKey,
    adverts: suppliedAdverts,
    fallback = null,
    alt = "Banner Leste Telecom",
    ...bannerProps
}) {
    const {getAdverts} = useHomeSections();
    const adverts = suppliedAdverts ?? getAdverts(sectionKey);
    const renderableAdverts = adverts.filter((advert) => Boolean(resolveImageSrc(advert, null)));

    if (!renderableAdverts.length) return fallback;

    if (renderableAdverts.length === 1) {
        return <BannerSlide advert={renderableAdverts[0]} priority alt={alt} bannerProps={bannerProps}/>;
    }

    return (
        <section className="w-full">
            <Swiper
                modules={[Autoplay, Pagination]}
                slidesPerView={1}
                loop
                autoplay={{delay: 5000, disableOnInteraction: false}}
                pagination={{clickable: true}}
                className="w-full overflow-hidden [&_.swiper-pagination]:absolute [&_.swiper-pagination]:inset-x-0 [&_.swiper-pagination]:bottom-5 [&_.swiper-pagination]:z-20 [&_.swiper-pagination]:flex [&_.swiper-pagination]:justify-center [&_.swiper-pagination]:gap-2 lg:[&_.swiper-pagination]:bottom-8 [&_.swiper-pagination-bullet]:m-0 [&_.swiper-pagination-bullet]:h-2.5 [&_.swiper-pagination-bullet]:w-2.5 [&_.swiper-pagination-bullet]:rounded-full [&_.swiper-pagination-bullet]:border [&_.swiper-pagination-bullet]:border-white/70 [&_.swiper-pagination-bullet]:bg-white/35 [&_.swiper-pagination-bullet]:opacity-100 [&_.swiper-pagination-bullet-active]:!w-8 [&_.swiper-pagination-bullet-active]:!rounded-full [&_.swiper-pagination-bullet-active]:!bg-white"
            >
                {renderableAdverts.map((advert, index) => (
                    <SwiperSlide key={advert.id}>
                        <BannerSlide advert={advert} priority={index === 0} alt={alt} bannerProps={bannerProps}/>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}
