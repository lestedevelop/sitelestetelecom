"use client";

import Image from "next/image";
import {Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import TrackedLink from "@/components/links/TrackedLink";
import {resolveImageSrc} from "@/utils/imageSrc";

import "swiper/css";
import "swiper/css/pagination";

function Advert({advert}) {
    const image = resolveImageSrc(advert, null);
    if (!image) return null;

    const content = (
        <article className="container py-8 md:py-12">
            <div className="relative aspect-[640/388] overflow-hidden rounded-3xl md:aspect-[1280/420] lg:aspect-[1905/520]">
                <Image
                    src={image}
                    alt={advert.title || advert.description || "Conteudo Leste Telecom"}
                    fill
                    className="object-cover"
                    sizes="100vw"
                />
            </div>
        </article>
    );

    if (!advert.cta?.href) return content;
    return (
        <TrackedLink href={advert.cta.href} aria-label={advert.cta.label || advert.title} className="block">
            {content}
        </TrackedLink>
    );
}

export default function ManagedAdvertSection({adverts = [], fallback: Fallback = null}) {
    const renderableAdverts = adverts.filter((advert) => resolveImageSrc(advert, null));
    if (!renderableAdverts.length) return Fallback ? <Fallback/> : null;

    if (renderableAdverts.length === 1) return <Advert advert={renderableAdverts[0]}/>;

    return (
        <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            pagination={{clickable: true}}
            className="[&_.swiper-pagination]:!bottom-3 [&_.swiper-pagination-bullet-active]:!bg-primary"
        >
            {renderableAdverts.map((advert) => (
                <SwiperSlide key={advert.id}>
                    <Advert advert={advert}/>
                </SwiperSlide>
            ))}
        </Swiper>
    );
}
