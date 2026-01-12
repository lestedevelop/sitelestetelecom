import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Assinatura Digital - Novos Contratos. | Leste",
    description: "Assinatura Digital - Novos Contratos..",
};

export default function AssinaturaDigitalNovosContratos(props) {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>Assinatura Digital - Novos Contratos.</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Para mudanças de planos a partir de 22/10/2019 será obrigatória a assinatura eletrônica do novo contrato de prestação de serviços para migração.
                    </p>
                    <p>
                        Será necessário também o envio dos documentos obrigatórios, identidade e CPF, no caso destes já não estarem arquivados no sistema.
                    </p>
                    <p>
                        A falta do contrato assinado digitalmente ou da regularização do cadastro dos documentos impedirá a migração/alteração para novos planos.
                    </p>
                    <p>
                        Não haverá  versão em papel do contrato, sendo a assinatura digital obrigatória.
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 23/10/19
                </p>
            </div>

            <SupportFooter />
            <Footer />
        </main>
    );
}
