import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "A Leste Telecom oferece wi-fi grátis aos novos assinantes? | Leste",
    description: "A Leste Telecom oferece wi-fi grátis aos novos assinantes?.",
};

export default function WifiGratis() {
    return (
        <main className="bg-light">
            <AppBar/>

            <div className="container py-12">
                <TitleFaq title={<>A Leste Telecom oferece wi-fi grátis aos novos assinantes?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>Para os planos ofertados COM WI-FI, fornecemos o roteador wi-fi especificado na propaganda. Sem
                        especificação ofertamos um roteador simples para dar cobertura e suporte sem fio básico aos
                        nossos novos assinantes. Não damos qualquer garantia quanto a área de cobertura, alcance e
                        intensidade do sinal - além de não sermos responsáveis por interferências de outros equipamentos
                        (da residência ou externos). Existem planos ofertados SEM ROTEADOR WI-FI.</p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 01/01/17
                </p>
            </div>

            <SupportFooter/>
            <Footer/>
        </main>
    );
}
