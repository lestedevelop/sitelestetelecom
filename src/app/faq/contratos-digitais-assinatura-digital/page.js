import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Contratos Digitais – Assinatura Digital – Obrigatoriedade do uso / assinatura | Leste",
    description: "Contratos Digitais – Assinatura Digital – Obrigatoriedade do uso / assinatura.",
};

export default function ContratoDigitaisAssinatura(props) {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Contratos Digitais – Assinatura Digital – Obrigatoriedade do uso / assinatura</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Todos os contratos da empresa são digitais, enviados por e-mail para assinatura eletrônica.
                    </p>
                    <p>
                        A empresa é legalmente obrigada a manter os documentos e contratos assinados de todos os clientes em sua base de dados.
                    </p>
                    <p>
                        Todas as interações (ativações, reativações, mudanças de plano, termos de comodato, troca de equipamentos, fidelidade, autorizações de acesso, entre outras) devem sempre ter seus respectivos contratos digitais devidamente assinados.
                    </p>
                    <p>
                        A não assinatura dos contratos digitais poderá resultar na suspensão do plano.
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 06/11/24
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
