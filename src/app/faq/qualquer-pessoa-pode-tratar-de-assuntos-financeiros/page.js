import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Qualquer pessoa pode tratar de assuntos financeiros? | Leste",
    description: "Qualquer pessoa pode tratar de assuntos financeiros?.",
};

export default function QualQuerPessoaPodeTratarAssuntosFinanceiros(props) {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Qualquer pessoa pode tratar de assuntos financeiros?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Não. Apenas o assinante e pessoas cadastradas como responsáveis poderão realizar transações e receber a equipe no dia da ativação.
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 20/05/16
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
