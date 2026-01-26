import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Foi solicitado o envio de documentos no ato da ativação, é mesmo necessário? | Leste",
    description: "Foi solicitado o envio de documentos no ato da ativação, é mesmo necessário?.",
};

export default function SolicitadoEnvioDocumentos() {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Foi solicitado o envio de documentos no ato da ativação, é mesmo necessário?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>Sim. É exigido pela ANATEL cópias da documentação como CPF, RG e comprovante de residência para evitar qualquer tipo de fraude.</p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 05/20/16
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
