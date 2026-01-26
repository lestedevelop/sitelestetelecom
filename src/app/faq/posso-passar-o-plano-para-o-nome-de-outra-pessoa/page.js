import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Posso passar o plano para o nome de outra pessoa? | Leste",
    description: "Posso passar o plano para o nome de outra pessoa?.",
};

export default function PossoPassarOPlanoParaOutraPessoa(props) {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Posso passar o plano para o nome de outra pessoa?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        A mudança de Titularidade só poderá ser solicitada pelo Assinante, devendo comparecer em um de nossos escritórios juntamente com o futuro titular portando seus documentos pessoais em mãos ( RG, CPF, comprovante de residência)
                    </p>
                    <p>
                        Em casos de pessoa jurídica a mudança de titularidade pode ocorrer com o contrato social em mãos e com os sócios presentes. Em casos onde os sócios que constam no contrato social não possam comparecer em nossos escritórios, o funcionário responsável possuindo procuração autenticada em cartório, também responde pela empresa e pode realizar a mudança de titularidade.
                    </p>
                    <p>
                        Caso não seja possível comparecer no escritório, pode realizar a solicitação por e-mail para sac@lestetelecom.com.br com os dados do novo e do atual assinante além dos documentos acima solicitados em anexo, telefones para contato. Tal solicitação por e-mail está sujeito a análise do setor jurídico.
                    </p><br/>
                    <p>Para dar inicio na troca de titularidade a mensalidade do mês deve estar paga.</p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 28/03/23
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
