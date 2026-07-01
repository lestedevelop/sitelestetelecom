"use client";

import Image from "next/image";
import Link from "next/link";

import bannerHomeDesktop from "@/assets/home/15-05-2026/BannerDesktop.png";
import bannerHomeTablet from "@/assets/home/15-05-2026/BannerTablet.png";
import bannerHomeMobile from "@/assets/home/15-05-2026/BannerMobile.png";

export default function HomeHeroBanner({
    href,
    alt = "Banner principal da Leste Telecom",
    priority = false,
    className = "",
    contentClassName = "",
    desktopImage,
    tabletImage,
    mobileImage,
    desktopImageClassName = "",
    children,
}) {
    const resolvedDesktopImage = desktopImage ?? bannerHomeDesktop;
    const resolvedTabletImage = tabletImage ?? bannerHomeTablet;
    const resolvedMobileImage = mobileImage ?? bannerHomeMobile;
    const hasCustomBanner = Boolean(desktopImage || tabletImage || mobileImage);
    const showDesktopGlow = !hasCustomBanner;

    const content = (
        <div className={`relative aspect-[640/388] max-h-[388px] overflow-hidden bg-primary md:aspect-auto md:h-[380px] lg:h-[460px] xl:h-[520px] ${className}`}>
            {showDesktopGlow ? (
                <Image
                    src={bannerHomeDesktop}
                    alt=""
                    fill
                    priority={priority}
                    aria-hidden="true"
                    className="pointer-events-none hidden scale-110 object-cover object-center opacity-45 blur-2xl lg:block 2xl:scale-[1.18]"
                    sizes="100vw"
                />
            ) : null}
            <Image
                src={resolvedDesktopImage}
                alt={alt}
                fill
                priority={priority}
                unoptimized
                className={`hidden object-cover object-center lg:block ${desktopImageClassName || "2xl:object-contain"}`}
                sizes="100vw"
            />
            <Image
                src={resolvedTabletImage}
                alt={alt}
                fill
                priority={priority}
                unoptimized
                className="hidden object-cover object-center md:block lg:hidden"
                sizes="100vw"
            />
            <Image
                src={resolvedMobileImage}
                alt={alt}
                fill
                priority={priority}
                unoptimized
                className="object-contain object-center md:hidden"
                sizes="100vw"
            />
            {children ? (
                <div className={`relative z-10 h-full w-full ${contentClassName}`}>
                    {children}
                </div>
            ) : null}
        </div>
    );

    if (!href) {
        return content;
    }

    return (
        <Link href={href} className="block h-full w-full" aria-label={alt}>
            {content}
        </Link>
    );
}
