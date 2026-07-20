"use client";

import Image from "next/image";
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import TrackedLink from "@/components/links/TrackedLink";
import {resolveImageSrc} from "@/utils/imageSrc";

import "swiper/css";
import "swiper/css/pagination";

function getContentValue(value) {
    if (typeof value !== "string") return "";

    const content = value.trim();
    if (!content || content.toLowerCase() === "undefined" || content.toLowerCase() === "null") return "";

    return content;
}

function getImage(advert) {
    const image = resolveImageSrc(advert, null);
    if (typeof image !== "string") return image;
    return getContentValue(image) || null;
}

function Advert({advert, showContent}) {
    const image = getImage(advert);
    if (!image) return null;

    const title = getContentValue(advert.title);
    const description = getContentValue(advert.description);
    const ctaHref = getContentValue(advert.cta?.href);
    const ctaLabel = getContentValue(advert.cta?.label);
    const hasVisibleContent = showContent && Boolean(title || description || ctaHref);

    const banner = (
        <div className="relative w-full overflow-hidden bg-black/5 md:aspect-[1280/420] md:rounded-3xl lg:aspect-[1905/520]">
            <Image
                src={image}
                alt={title || description || "Conteudo Leste Telecom"}
                width={640}
                height={388}
                className="block h-auto w-full md:hidden"
                sizes="100vw"
            />
            <Image
                src={image}
                alt=""
                fill
                aria-hidden="true"
                className="hidden object-cover md:block"
                sizes="(min-width: 1280px) 1280px, 100vw"
            />

            {hasVisibleContent && (
                <div className="absolute inset-0 flex items-end md:items-center">
                    <div className="w-full max-w-xl px-6 py-7 text-white md:px-12 md:py-10 lg:px-16">
                        {title && (
                            <h2 className="text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
                                {title}
                            </h2>
                        )}
                        {description && (
                            <p className="mt-2 max-w-md text-sm leading-5 text-white/90 md:mt-3 md:text-base md:leading-6">
                                {description}
                            </p>
                        )}
                        {ctaHref && (
                            <TrackedLink
                                href={ctaHref}
                                className="mt-5 inline-flex rounded-full bg-darkgreen px-7 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-darkgreen/80 md:mt-6"
                            >
                                {ctaLabel || "Saiba mais"}
                            </TrackedLink>
                        )}
                    </div>
                </div>
            )}
        </div>
    );

    return (
        <article className="w-screen max-w-none py-8 md:container md:w-full md:py-12">
            {!showContent && ctaHref ? (
                <TrackedLink href={ctaHref} aria-label={ctaLabel || title || "Acessar oferta"} className="block">
                    {banner}
                </TrackedLink>
            ) : banner}
        </article>
    );
}

export default function ManagedAdvertSection({adverts = [], fallback: Fallback = null, showContent = false}) {
    const renderableAdverts = adverts.filter((advert) => getImage(advert));
    if (!renderableAdverts.length) return Fallback ? <Fallback/> : null;

    if (renderableAdverts.length === 1) {
        return <Advert advert={renderableAdverts[0]} showContent={showContent}/>;
    }

    return (
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
            className="[&_.swiper-pagination]:!bottom-3 [&_.swiper-pagination-bullet-active]:!bg-primary"
        >
            {renderableAdverts.map((advert) => (
                <SwiperSlide key={advert.id}>
                    <Advert advert={advert} showContent={showContent}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
