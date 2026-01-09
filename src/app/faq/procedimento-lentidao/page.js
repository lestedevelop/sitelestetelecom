import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/lentidao1.png"
import image2 from "@/assets/faq/lentidao2.png"
import image3 from "@/assets/faq/lentidao3.png"

import Image from "next/image";

export const metadata = {
    title: "Minha internet esta Lenta | Leste",
    description: "Em caso de lentidão, o que fazer?.",
};

export default function TesteDeVelocidadeFaq() {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>Em caso de lentidão, o que fazer?</>}/>
               <div className={"py-4"}>
                   <p>Para realizar o teste de velocidade com precisão você precisa estar conectado com o cabo de rede direto no computador</p>
               </div>
                <div className="mt-10 text-base leading-7">
                    <div className="py-6 flex flex-col items-center md:items-start">
                        <p>1° Limpe o histórico de navegação do seu navegador.</p>
                        <Image src={image1} alt={""} className={"py-6 max-w-[280px] md:max-w-[600px]"} />
                        <Image src={image2} alt={""} className={"py-6 max-w-[280px] md:max-w-[600px]"} />
                        <Image src={image3} alt={""} className={"py-6 max-w-[280px] md:max-w-[600px]"} />
                    </div>
                    <div className="py-6 flex flex-col items-center md:items-start">
                        <p>2° Desligue e ligue a <span className={"font-bold"}>ONU</span> e o <span className={"font-bold"}>roteador</span>.</p>
                    </div>
                    <div className="py-6 flex flex-col items-center md:items-start">
                        <p>3° Ainda com o cabo no computador, realize um novo teste de velocidade, acesse 3 sites diferentes ao mesmo tempo, e caso ainda persista a lentidão, por favor realize contato com a central de atendimento.</p>
                    </div>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 08/04/25
                </p>
            </div>

            <SupportFooter />
            <Footer />
        </main>
    );
}
