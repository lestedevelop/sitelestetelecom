import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/configurando-wifi-da-leste6.png"
import image2 from "@/assets/faq/configurando-wifi-da-leste5.png"
import image3 from "@/assets/faq/configurando-wifi-da-leste4.png"
import image4 from "@/assets/faq/configurando-wifi-da-leste3.png"
import image6 from "@/assets/faq/configurando-wifi-da-leste.png"
import image7 from "@/assets/faq/configurando-wifi-da-leste2.png"
import image5 from "@/assets/faq/configurando-wifi-da-leste7.png"
import Image from "next/image";

export const metadata = {
    title: "Configurando o Wi-Fi do conversor ótico da Leste! | Leste",
    description: "Configurando o Wi-Fi do conversor ótico da Leste!.",
};

export default function ConfigWIFIDaLeste() {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Configurando o Wi-Fi <br/>do conversor ótico da Leste!</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Agora você pode trocar sozinho o nome da rede WI-FI e a senha para conversores óticos (ONU com WIFI integrado) pelo autoatendimento no WhatsApp e Telegram.
                        Veja como é simples e rápido:
                    </p>
                    <div className="py-4 flex flex-col items-center md:items-start">
                        <p>1° Inicie o atendimento mandando uma mensagem.</p>
                        <Image src={image1} alt={""} className={"py-4 w-[70%] md:w-[245px]"} />
                    </div>
                    <div className="py-4 flex flex-col items-center md:items-start">
                        <p>2° Confirme que já é assinante enviando "1"</p>
                        <Image src={image2} alt={""} className={"py-4 w-[70%] md:w-[245px]"} />
                    </div>
                    <div className="py-4 flex flex-col items-center md:items-start">
                        <p>3° Para identificação, envie seu CPF, sem traços. Assim que seu nome for identificado, envie sua data de nascimento.</p>
                        <Image src={image3} alt={""} className={"py-4 w-[70%] md:w-[245px]"} />
                    </div>
                    <div className="py-4 flex flex-col items-center md:items-start">
                        <p>4° Nessa etapa você vai confirmar que o número que você está utilizando é um número seguro. Envie "2".</p>
                        <Image src={image4} alt={""} className={"py-4 w-[70%] md:w-[245px]"} />
                    </div>
                    <div className="py-4 flex flex-col items-center md:items-start">
                        <p>5° Para iniciar a configuração envie "6".</p>
                        <Image src={image5} alt={""} className={"py-4 w-[70%] md:w-[245px]"} />
                    </div>
                    <div className="py-4 flex flex-col items-center md:items-start">
                        <p>6° Escolha qual plano (ponto) você deseja configurar enviando o número correspondente e em seguida qual configuração você deseja alterar: Nome da rede ou a senha de acesso.</p>
                        <Image src={image6} alt={""} className={"py-4 w-[70%] md:w-[245px]"} />
                    </div>
                    <div className="py-4 flex flex-col items-center md:items-start">
                        <p>
                            7° Agora é só responder com sua nova senha e nome de rede, aguardar a verificação do sistema e pronto, sua rede foi configurada!</p>
                        <Image src={image7} alt={""} className={"py-4 w-[70%] md:w-[245px]"} />
                    </div>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 22/10/25
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
