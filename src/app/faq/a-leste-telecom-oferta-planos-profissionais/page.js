import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "A Leste Telecom oferta planos profissionais (síncronos)? | Leste",
    description: "A Leste Telecom oferta planos profissionais (síncronos)?.",
};

export default function OfertasPlanosProfissionaisSicronos() {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>A Leste Telecom oferta planos profissionais (síncronos)?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Os planos ofertados na página da Leste Telecom são todos assíncronos - possuem sempre a velocidade de upload menor que a de download, e não visam a sua utilização para servidores ou atividades críticas. Todos os planos possuem as portas baixas (abaixo de 1024) bloqueadas para conexões entrantes. Para mais detalhes consulte nosso contrato de prestação de serviço (rodapé da nossa página principal). A empresa oferece planos Profissionais (síncronos) por meio de sua unidade Corporate.
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 04/01/18
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
