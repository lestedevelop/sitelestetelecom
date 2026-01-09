import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "A oscilação elétrica pode afetar o meu acesso? | Leste",
    description: "A oscilação elétrica pode afetar o meu acesso?.",
};

export default function OcilacaoEletrica(props) {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>A oscilação elétrica pode afetar o meu acesso?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                <p>Roteadores wi-fi podem sofrer travamentos e até perderem as configurações por oscilações na rede elétrica. Recomendamos o uso de no-break (ou no mínimo um estabilizador de tensão) para manter tanto a ONU quanto o roteador protegidos de oscilações. A empresa fornece todos os dados necessários para a configuração dos roteadores por parte do usuário e ou técnicos de terceiros. A empresa também fornece esse serviço, sendo cobrada a visita para tal fim.</p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 01/01/17
                </p>
            </div>

            <SupportFooter />
            <Footer />
        </main>
    );
}
