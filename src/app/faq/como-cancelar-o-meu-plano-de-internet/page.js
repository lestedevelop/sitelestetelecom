import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Como cancelar o meu plano de internet? | Leste",
    description: "Como cancelar o meu plano de internet?.",
};

export default function ComoCancelarOMeuPlano(props) {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Como cancelar o meu plano de internet?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Basta entrar em contato com nossa conosco através da nossa Central de Atendimento para efetuar o cancelamento e agendar a retirada dos equipamentos.
                    </p>
                    <p>
                        Como entrar em contato com a Leste Telecom:
                    </p><br/>
                    <p>
                        Você pode entrar conosco pelo telefone através de nossa Central de Atendimento
                    </p><br/>
                    <p>
                        Via Facebook através do Messenger (inbox).
                    </p><br/>
                    <p>
                        Ou visitando um de nossas lojas.
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 28/03/23
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
