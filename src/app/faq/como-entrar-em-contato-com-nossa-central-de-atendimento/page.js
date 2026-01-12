import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Como entrar em contato com nossa central de atendimento? | Leste",
    description: "omo entrar em contato com nossa central de atendimento?",
};

export default function ComoEntrarEmContatoComACentral(props) {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>Como entrar em contato com nossa central de atendimento?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Nossa central de atendimento está disponível através dos números (021) 2020-1300, (021) 0800 053 1300 e (021) 3940-0130.
                    </p><br/>
                    <p>
                        Nosso atendimento para suporte técnico é 24 horas.
                    </p><br/>
                    <p>
                        O atendimento financeiro funciona de Segunda à Sexta-feira de 8 às 23h, Sábados e feriados de 8 às 20h.
                    </p><br/>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 03/02/25
                </p>
            </div>

            <SupportFooter />
            <Footer />
        </main>
    );
}
