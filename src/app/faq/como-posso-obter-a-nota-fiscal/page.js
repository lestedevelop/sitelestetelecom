import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Como posso obter a nota fiscal? | Leste",
    description: "Como posso obter a nota fiscal?.",
};

export default function ComoObterANotaFiscal(props) {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>Como posso obter a nota fiscal?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        1° No nosso site, na menu superior, clique na aba "Central do Assinantes".
                    </p>
                    <p>
                        2° Digite o CPF do titular da assinatura e como senha os 5 primeiros dígitos do CPF e o último dígito.
                    </p>
                    <p>
                        3° Clique na aba "Nota Fiscal".
                    </p>
                    <p>
                        4° Clique em "Ver Nota Fiscal" e gere sua nota em PDF.
                    </p><br/>
                    <p>
                        Atenção: Não esqueça de desbloquear os pop-ups.
                    </p>
                    <p>
                        Observação: Caso a nota fiscal não esteja disponível no site, poderá realizar o contato conosco a fim de realizar a solicitação, prazo de envio de até 5 dias úteis.
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 28/03/23
                </p>
            </div>

            <SupportFooter />
            <Footer />
        </main>
    );
}
