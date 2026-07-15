"use client"
import AppBar from "@/components/layout/AppBar";
import PlanosSection from "@/pageComponents/home/PlanosSection";
import AreaCoberturaSection from "@/pageComponents/home/AreaCoberturaSection";
import JaeClienteSection from "@/pageComponents/home/JaeClienteSection";
import BeneficiosSection from "@/pageComponents/home/BeneficiosSection";
import CanaisAtendimentosSection from "@/pageComponents/home/CanaisAtendimentosSection";
import AmaisPremiadaDoEstado from "@/pageComponents/home/AmaisPremiadaDoEstado";
import NovidadesSection from "@/pageComponents/home/NovidadesSection";
import Footer from "@/components/layout/Footer";
import BannerUltraSection from "@/pageComponents/home/BannerUltraSection";
import CardBanner from "@/components/cards/CardBanner";
import bannerAssineOnline from "@/assets/cardBanner.webp";
import {useHomeSections} from "@/hooks/useHomeSections";
import {HomeManagedSection} from "@/pageComponents/home/sectionComponents";

export default function Home() {
    const {getAdverts} = useHomeSections();

    return (
        <div className="min-h-full bg-light">
            <HomeManagedSection sectionKey="bannerCentral" adverts={getAdverts("bannerCentral")}/>
            <PlanosSection  />
            {/*<BannerUltraSection/>*/}
            <JaeClienteSection/>
            <HomeManagedSection sectionKey="jaClienteLeste" adverts={getAdverts("jaClienteLeste")}/>
            <AmaisPremiadaDoEstado />
            <HomeManagedSection sectionKey="outrosServicos" adverts={getAdverts("outrosServicos")}/>
            <HomeManagedSection sectionKey="indiqueGanheCard" adverts={getAdverts("indiqueGanheCard")}/>
            <NovidadesSection />
            {/*<AreaCoberturaSection/>*/}
            {/*<BeneficiosSection/>*/}
            {/*<CanaisAtendimentosSection/>*/}
            {/*<CardBanner className={"py-10 pb-0 md:py-20"} image={bannerAssineOnline} title={"Vem para o melhor caminho!"} buttonText={"Assine Online"} link={"/vendas"} />*/}
        </div>
    );
}

