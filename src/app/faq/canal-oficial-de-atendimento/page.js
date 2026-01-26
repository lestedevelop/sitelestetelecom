import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Canal oficial de atendimento - Email. | Leste",
    description: "Canal oficial de atendimento - Email..",
};

export default function CanalOficialDeatendimento() {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Canal oficial de atendimento - Email.</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Conforme as Resoluções n° 632/2014 e 717/2019, § 10° da Anatel, a obrigação de constituir Ouvidoria não se aplica às PPPs.
                    </p><br/>
                    <p>
                        No entanto, mantemos mecanismos de transparência e canais de comunicação com nossos clientes, e como consta em nosso contrato, o canal oficial de atendimento da empresa para respostas escritas é o e-mail SAC:
                        <br/>
                        <a href="mail:SAC@LESTETELECOM.COM.BR.">SAC@LESTETELECOM.COM.BR.</a>
                    </p><br/>
                    <p>
                        Ressaltamos que chamados feitos pela central de atendimento (ligação telefônica) podem ter sua resposta por meio de ligação telefônica.
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 15/11/18
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
