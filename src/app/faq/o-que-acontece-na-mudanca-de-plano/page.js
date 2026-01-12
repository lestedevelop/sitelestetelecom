import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "O que acontece na mudança de plano? | Leste",
    description: "O que acontece na mudança de plano?.",
};

export default function OqueAconteceNaMudancaDePlano(props) {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>O que acontece na mudança de plano?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Além da mudança para maior ou menor velocidade (ou valor), ao alterar seu plano para outro, em qualquer condição de valor ou velocidade, as condições, limites e e regras passam a ser a do novo contrato de prestação de serviço vigente (disponível em nosso site).
                    </p>
                    <p>
                        Somente a mudança para novo plano acarreta a adesão ao contrato vigente, não ocorrendo tal fato na simples adição de serviços.
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 03/01/18
                </p>
            </div>

            <SupportFooter />
            <Footer />
        </main>
    );
}
