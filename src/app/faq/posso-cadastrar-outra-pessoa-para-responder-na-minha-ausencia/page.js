import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Posso cadastrar outra pessoa para responder na minha ausência? | Leste",
    description: "Posso cadastrar outra pessoa para responder na minha ausência?.",
};

export default function PossoCadastrarOutraPessoa(prop) {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Posso cadastrar outra pessoa para responder na minha ausência?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Sim. O segundo responsável tem os mesmos poderes que o titular em questões financeiras, inclusive cancelamento e reativação de planos e serviços.
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
