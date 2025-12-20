import Image from "next/image";
import AppBar from "@/components/layout/AppBar";
import Section from "@/components/layout/Section";
import CarrouselSection from "@/pageComponents/home/CarrouselSection";
import PlanosSection from "@/pageComponents/home/PlanosSection";
import AreaCoberturaSection from "@/pageComponents/home/AreaCoberturaSection";
import JaeClienteSection from "@/pageComponents/home/JaeClienteSection";
import BeneficiosSection from "@/pageComponents/home/BeneficiosSection";
import CanaisAtendimentosSection from "@/pageComponents/home/CanaisAtendimentosSection";
import Footer from "@/components/layout/Footer";
import BannerUltraSection from "@/pageComponents/home/BannerUltraSection";

export default function Home() {
  return (
      <div className="min-h-full bg-[#f2f2f2]">

        <AppBar/>
        <CarrouselSection/>
        <PlanosSection/>
        <BannerUltraSection/>
        <JaeClienteSection/>
        <AreaCoberturaSection/>
        <BeneficiosSection/>
        <CanaisAtendimentosSection/>
        <Footer/>

      </div>
  );
}
