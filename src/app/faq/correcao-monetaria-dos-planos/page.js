import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Correção monetária dos Planos. | Leste",
    description: "Correção monetária dos Planos..",
};

export default function ContratoDigitaisAssinatura(props) {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>Correção monetária dos Planos.</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Todos os planos da empresa possuem reajuste anual como permite a lei.</p>
                    <p>
                        Tal definição está clara em nosso contrato, cláusula 8.
                    </p>
                    <p>
                        O índice utilizado é o IGP-M: <a href="http://www.portalbrasil.net/igpm.htm" target={"_blank"}>http://www.portalbrasil.net/igpm.htm</a>
                    </p>
                    <p>
                        Os clientes podem, a qualquer tempo, fazer alterações para planos de velocidade superiores se estes estiverem mais atrativos.
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 20/05/16
                </p>
            </div>

            <SupportFooter />
            <Footer />
        </main>
    );
}
