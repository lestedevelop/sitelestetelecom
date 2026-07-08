"use client";

import Image from "next/image";
import TrackedLink from "@/components/links/TrackedLink";

export default function IndiqueHeroBanner({
  href,
  alt = "Banner da pagina Indique e Ganhe",
  className = "",
  desktopImage,
  tabletImage,
  mobileImage,
  priority = false,
}) {
  const content = (
    <div className={`relative overflow-hidden bg-primary ${className}`}>
      <Image
        src={desktopImage}
        alt={alt}
        fill
        priority={priority}
        unoptimized
        className="hidden h-full w-full object-cover object-center lg:block"
        sizes="100vw"
      />
      <Image
        src={tabletImage ?? desktopImage}
        alt={alt}
        fill
        priority={priority}
        unoptimized
        className="hidden h-full w-full object-cover object-center md:block lg:hidden"
        sizes="100vw"
      />
      <Image
        src={mobileImage ?? tabletImage ?? desktopImage}
        alt={alt}
        fill
        priority={priority}
        unoptimized
        className="block h-full w-full object-cover object-center md:hidden"
        sizes="100vw"
      />
    </div>
  );

  if (!href) {
    return content;
  }

  return (
    <TrackedLink href={href} className="block h-full w-full" aria-label={alt}>
      {content}
    </TrackedLink>
  );
}
