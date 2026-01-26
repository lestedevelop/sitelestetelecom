import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/ledvermelho1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "LED vermelho piscando na ONU. O que devo fazer? | Leste",
    description: "Há um LED vermelho piscando na ONU. O que devo fazer?.",
};

export default function LedVermelho(props) {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Há um LED vermelho piscando na ONU. O que devo fazer?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <div className="py-4 flex flex-col items-center md:items-start">
                        <p>1° Reinicie o Conversor Óptico (ONU) e o roteador.</p>
                        <Image src={image1} alt={""} className={"py-4 max-w-[280px] md:max-w-[890px]"} />
                    </div>
                    <div className="py-4 flex flex-col items-center md:items-start">
                        <p>2° Confira se todos cabos estão conectados corretamente.</p>
                        <Image src={image2} alt={""} className={"py-4 max-w-[280px] md:max-w-[890px]"} />
                    </div>
                    <div className="py-4 flex flex-col items-center md:items-start">
                        <p>3° Caso o problema persista, entre em contato conosco através dos nossos canais de atendimento</p>
                    </div>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 20/05/26
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
