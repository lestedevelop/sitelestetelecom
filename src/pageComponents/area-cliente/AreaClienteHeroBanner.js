"use client";

import { useHomeSections } from "@/hooks/useHomeSections";
import { HomeManagedSection } from "@/pageComponents/home/sectionComponents";

export default function AreaClienteHeroBanner() {
  const { getAdverts } = useHomeSections();

  return (
    <HomeManagedSection
      sectionKey="bannerCentral"
      adverts={getAdverts("bannerCentral")}
    />
  );
}
