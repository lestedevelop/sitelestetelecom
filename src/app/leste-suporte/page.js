"use client";

import HomeHeroBanner from "@/pageComponents/home/HomeHeroBanner";
import SectionApp from "@/pageComponents/leste-suporte/SectionApp";
import bannerApps from "@/assets/app/banner-apps.png";
import {useHomeSections} from "@/hooks/useHomeSections";
import {resolveImageSrc} from "@/utils/imageSrc";

export default function LesteSuporte() {
  const {getAdverts} = useHomeSections();
  const advert = getAdverts("lesteSuporte")[0];
  const image = resolveImageSrc(advert, bannerApps);

  return (
    <div className="min-h-full ">
      <section className="w-full">
        <HomeHeroBanner
          href={advert?.cta?.href}
          alt={advert?.title || "Banner Leste Suporte"}
          className="!aspect-[390/608] !h-auto !max-h-none md:!aspect-[1024/512] lg:!aspect-[1440/400]"
          contentClassName="container flex h-full flex-col justify-center text-light"
          desktopImage={image}
          tabletImage={image}
          mobileImage={image}
          desktopImageClassName="!object-cover"
          tabletImageClassName="!object-cover"
          mobileImageClassName="!object-cover"
        />
      </section>

      <SectionApp />
    </div>
  );
}
