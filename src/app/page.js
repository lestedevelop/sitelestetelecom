"use client"
import AppBar from "@/components/layout/AppBar";
import PlanosSection from "@/pageComponents/home/PlanosSection";
import AreaCoberturaSection from "@/pageComponents/home/AreaCoberturaSection";
import JaeClienteSection from "@/pageComponents/home/JaeClienteSection";
import BeneficiosSection from "@/pageComponents/home/BeneficiosSection";
import CanaisAtendimentosSection from "@/pageComponents/home/CanaisAtendimentosSection";
import Footer from "@/components/layout/Footer";
import BannerUltraSection from "@/pageComponents/home/BannerUltraSection";
import HeroSlider from "@/pageComponents/home/HeroSlide";
import CardBanner from "@/components/cards/CardBanner";
import bannerAssineOnline from "@/assets/cardBanner.png";
import SelectCity from "@/components/cards/SelectCity";
import {useHomeData} from "@/src/hooks/useHomeData";

export default function Home() {
    const { city, data, loading } = useHomeData();
    console.log(city)

    return (
      <div className="min-h-full bg-light">
        <AppBar/>
        <HeroSlider />
        <PlanosSection/>
        <BannerUltraSection/>
        <JaeClienteSection/>
        <AreaCoberturaSection/>
        <BeneficiosSection/>
        <CanaisAtendimentosSection/>
        <CardBanner className={"py-10 pb-0 md:py-20"} image={bannerAssineOnline} title={"Vem para o melhor caminho!"} buttonText={"Assine Online"} link={"https://vendas.lestetelecom.com.br/"} />
        <Footer/>
        <SelectCity></SelectCity>
      </div>
  );
}
