"use client"

import JaeClienteSection from "@/pageComponents/home/JaeClienteSection";
import AmaisPremiadaDoEstado from "@/pageComponents/home/AmaisPremiadaDoEstado";
import NovidadesSection from "@/pageComponents/home/NovidadesSection";
import {useHomeSections} from "@/hooks/useHomeSections";
import {HomeManagedSection} from "@/pageComponents/home/sectionComponents";
import PreviewPlansCarousel from "@/pageComponents/vendas/PreviewPlansCarousel";

export default function PreviewCardHome() {
    const {getAdverts} = useHomeSections();

    return (
        <div className="min-h-full bg-light">
            <PreviewPlansCarousel/>
            <HomeManagedSection sectionKey="bannerCentral" adverts={getAdverts("bannerCentral")}/>
            <JaeClienteSection />
            <HomeManagedSection sectionKey="jaClienteLeste" adverts={getAdverts("jaClienteLeste")}/>
            <AmaisPremiadaDoEstado />
            <HomeManagedSection sectionKey="outrosServicos" adverts={getAdverts("outrosServicos")}/>
            <HomeManagedSection sectionKey="indiqueGanheCard" adverts={getAdverts("indiqueGanheCard")}/>
            <NovidadesSection />
        </div>
    );
}
