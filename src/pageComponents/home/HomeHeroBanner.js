"use client";

import Image from "next/image";
import Link from "next/link";

import bannerHomeDesktop from "@/assets/bannernovohome.png";
import bannerHomeMobile from "@/assets/bannernovomobile.png";

export default function HomeHeroBanner({
    href,
    alt = "Banner principal da Leste Telecom",
    priority = false,
    className = "",
    contentClassName = "",
    children,
}) {
    const content = (
        <div className={`relative h-[calc(100dvh-93px)] overflow-hidden md:h-[380px] lg:h-[460px] xl:h-[520px] ${className}`}>
            <Image
                src={bannerHomeDesktop}
                alt={alt}
                fill
                priority={priority}
                className="hidden object-cover lg:block"
                sizes="100vw"
            />
            <Image
                src={bannerHomeMobile}
                alt={alt}
                fill
                priority={priority}
                className="object-cover lg:hidden"
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
