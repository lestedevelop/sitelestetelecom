import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Regras da promoçã | Leste",
    description: '"MIGRAÇÃO GRÁTIS".',
};

export default function RegrasMigracaoGratis(props) {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>Regras da promoção "MIGRAÇÃO GRÁTIS".</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        A promoção "MIGRAÇÃO GRÁTIS" é pontual, limitada por localidade, possui prazo de validade por promoção e conta com números de portas disponíveis (número máximo de contemplados)!
                    </p>
                    <p>
                        A promoção "MIGRAÇÃO GRÁTIS" não é oferta aberta e irrestrita.
                    </p>
                    <p>
                        Agendamentos de instalação com promoção "MIGRAÇÃO GRÁTIS" serão devidamente identificados no agendamento e e-mail de boas vindas.
                    </p>
                    <p>
                        ATENÇÃO:
                        Algumas praças (cidades) não são cobertas pela promoção.
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 06/11/24
                </p>
            </div>

            <SupportFooter />
            <Footer />
        </main>
    );
}
