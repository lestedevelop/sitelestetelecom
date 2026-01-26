import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/testevelocicade1.png"
import image2 from "@/assets/faq/testevelocicade2.png"
import image3 from "@/assets/faq/testevelocicade3.png"

import Image from "next/image";

export const metadata = {
    title: "Como testar a velocidade da minha conexão? | Leste",
    description: "Como testar a velocidade da minha conexão?.",
};

export default function TesteDeVelocidadeFaq() {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Como testar a velocidade da minha conexão?</>}/>
               <div className={"py-4"}>
                   <p className="mb-4">
                       <span className={"font-bold"}>Aviso importante:</span> Encontramos limitações na plataforma do Minha Conexão, via navegador, que impedem a realização de testes em velocidades superiores a 800 Mbps.
                       Entramos em contato com a empresa e fomos informados de que estão desenvolvendo um aplicativo nativo para Windows, o qual permitirá testes em altas velocidades.
                   </p>
                   <a className={"text-primary font-bold italic mt-8 underline"} href={"https://play.google.com/store/apps/details?id=org.zwanoo.android.speedtest&hl=pt_BR&pli=1"} target="_blank">
                       Até que essa solução técnica esteja disponível, limitaremos os testes ao aplicativo nativo do Speedtest (Ookla) para Windows.
                   </a>
               </div>
                <div className="mt-10 text-base leading-7">
                    <p>Para realizar o teste de velocidade com precisão você precisa
                       <span className={"font-bold"}> <br/>conectar o cabo de rede que sai da ONU (Optical Network Unit) direto no computador.</span></p>
                    <div className="py-6 flex flex-col items-center md:items-start">
                        <p>1°  Acesso o site <a href="https://www.minhaconexao.com.br/?provider=LESTE%20TELECOM">http://www.minhaconexao.com.br/ </a>.</p>
                        <Image src={image1} alt={""} className={"py-6 max-w-[280px] md:max-w-[600px]"} />
                    </div>
                    <div className="py-6 flex flex-col items-center md:items-start">
                        <p>2°  Confirme se o servidor da Leste Telecom foi selecionado.</p>
                        <Image src={image2} alt={""} className={"py-6 max-w-[280px] md:max-w-[600px]"} />
                    </div>
                    <div className="py-6 flex flex-col items-center md:items-start">
                        <p>3°  Pronto! Agora é só conferir o resultado.</p>
                        <Image src={image3} alt={""} className={"py-6 max-w-[280px] md:max-w-[600px]"} />
                    </div>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 08/04/25
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
