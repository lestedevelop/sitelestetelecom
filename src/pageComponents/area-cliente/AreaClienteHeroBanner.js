"use client";

import { useHomeSections } from "@/hooks/useHomeSections";
import { HomeManagedSection } from "@/pageComponents/home/sectionComponents";
import BannerHome from "@/pageComponents/home/BannerHome";

export default function AreaClienteHeroBanner() {
  const { getAdverts } = useHomeSections();

  return (
    <BannerHome
      sectionKey="bannerAreaCliente"
      fallback={
        <HomeManagedSection
          sectionKey="bannerCentral"
          adverts={getAdverts("bannerCentral")}
        />
      }
      alt="Banner da Área do Cliente"
      desktopImageClassName="2xl:object-cover"
      mobileImageClassName="object-cover"
    />
  );
}
