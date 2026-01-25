"use client"
import AppBar from "@/components/layout/AppBar";
import PlanosSection from "@/pageComponents/home/PlanosSection";
import AreaCoberturaSection from "@/pageComponents/home/AreaCoberturaSection";
import JaeClienteSection from "@/pageComponents/home/JaeClienteSection";
import BeneficiosSection from "@/pageComponents/home/BeneficiosSection";
import CanaisAtendimentosSection from "@/pageComponents/home/CanaisAtendimentosSection";
import Footer from "@/components/layout/Footer";
import BannerUltraSection from "@/pageComponents/home/BannerUltraSection";
import HeroSliderNew from "@/pageComponents/home/HeroSlideNew";
import CardBanner from "@/components/cards/CardBanner";
import bannerAssineOnline from "@/assets/cardBanner.png";
import SelectCity from "@/components/cards/SelectCity";
import AppBarNew from "@/components/layout/AppBarNew";
import {SalesProviderNew} from "@/contexts/SalesContextNew";
import ModalViabilidade from "@/components/layout/ModalViabilidade";
import {useState} from "react";

export default function Home() {
    const [modalViabilidadeOpen, setModalViabilidadeOpen] = useState(false);

    return (
        <div className="min-h-full bg-light">
            {/*<AppBar/>*/}
            <AppBarNew setModalViabilidadeOpen={setModalViabilidadeOpen} />
            <HeroSliderNew />
            <PlanosSection  />
            <BannerUltraSection/>
            <JaeClienteSection/>
            <AreaCoberturaSection/>
            <BeneficiosSection/>
            <CanaisAtendimentosSection/>
            <CardBanner className={"py-10 pb-0 md:py-20"} image={bannerAssineOnline} title={"Vem para o melhor caminho!"} buttonText={"Assine Online"} link={"/vendas"} />
            <Footer/>
            <SalesProviderNew>
                <ModalViabilidade open={modalViabilidadeOpen} onClose={setModalViabilidadeOpen} />
            </SalesProviderNew>
            {/*<SelectCity></SelectCity>*/}
        </div>
    );
}
