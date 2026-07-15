import HeroSlide from "@/pageComponents/home/HeroSlide";
import AreaAssinanteSection from "@/pageComponents/home/AreaAssinanteSection";
import ConhecaNossosServicosSection from "@/pageComponents/home/ConhecaNossosServicosSection";
import ManagedAdvertSection from "@/pageComponents/home/ManagedAdvertSection";

function BannerCentral({adverts}) {
    return <HeroSlide adverts={adverts}/>;
}

function JaClienteLeste({adverts}) {
    return <ManagedAdvertSection adverts={adverts} fallback={AreaAssinanteSection}/>;
}

function OutrosServicos({adverts}) {
    return <ConhecaNossosServicosSection adverts={adverts}/>;
}

function IndiqueGanheCard({adverts}) {
    return <ManagedAdvertSection adverts={adverts}/>;
}

export const sectionComponents = {
    bannerCentral: BannerCentral,
    jaClienteLeste: JaClienteLeste,
    outrosServicos: OutrosServicos,
    indiqueGanheCard: IndiqueGanheCard,
};

export function HomeManagedSection({sectionKey, adverts}) {
    const Component = sectionComponents[sectionKey];
    return Component ? <Component adverts={adverts}/> : null;
}
