'use-client'
import Section from "@/components/layout/Section";
import bannerLeste from "@/assets/LesteUltraBanner.png"
import LogoLesteBranco from "@/assets/lestelogocapabranco.png"
import Image from "next/image";
import VelocidadeBanner from "@/components/typoraphy/SloganTitle";
import BotaoSaibaMais from "@/components/Buttons/ButtonGoTo";


export default function BannerUltraSection() {
    return (
        <Section>
           <div style={{backgroundImage:`url(${bannerLeste.src})`}} className="w-full h-100 bg-center rounded-3xl">
            <div className="flex justify-items-start flex-col pl-15 p-8 gap-5">
                <div className="flex">
                    <Image alt='Logo leste' className="w-35 mt-10" src={LogoLesteBranco}  />  
                </div>
                <VelocidadeBanner/>
                <div className="w-50">
                <BotaoSaibaMais/>
                </div>
            </div>
           
            </div>



        </Section>
    )
}