import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/boletowhatsapp1.png"
import image2 from "@/assets/faq/boletowhatsapp2.png"
import image3 from "@/assets/faq/boletowhatsapp3.png"
import image4 from "@/assets/faq/boletowhatsapp4.png"
import image5 from "@/assets/faq/boletowhatsapp5.png"
import image6 from "@/assets/faq/boletowhatsapp6.png"
import image7 from "@/assets/faq/boletowhatsapp7.png"
import image8 from "@/assets/faq/boletowhatsapp8.png"


import Image from "next/image";

export const metadata = {
    title: "Como retirar seu boleto pelo WhatsApp? | Leste",
    description: "Como retirar seu boleto pelo WhatsApp?.",
};

export default function RetirandoBoletoPeloWhatsapp(props) {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Como retirar seu boleto pelo WhatsApp?</>}/>
                <div className="mt-10 text-base leading-7">

                    <div className="py-6 flex flex-col items-center md:items-start">
                        <p>
                            1° Inicie uma conversa no WhatsApp mandando uma mensagem para o nosso número (21) 2020-1300
                        </p>
                        <Image src={image1} alt={""} className={"py-6 max-w-[280px]"} />
                    </div>
                    <div className="py-6 flex flex-col items-center md:items-start">
                        <p>
                            2° Responda  "1" para sinalizar que você já é um assinante da Leste.
                        </p>
                        <Image src={image2} alt={""} className={"py-6 max-w-[280px]"} />
                    </div>
                    <div className="py-6 flex flex-col items-center md:items-start">
                       <p>3°  Digite seu CPF ou CNPJ</p>
                        <Image src={image3} alt={""} className={"py-6 max-w-[280px]"} />
                    </div>
                    <div className="py-6 flex flex-col items-center md:items-start">
                       <p>4° Digite sua senha de acesso. Caso não tenha uma, o chat irá solicitar a criação da senha.</p>
                        <Image src={image4} alt={""} className={"py-6 max-w-[280px]"} />
                    </div>
                    <div className="py-6 flex flex-col items-center md:items-start">
                       <p>5° Responda "1" para assegurar que o número pertence a você e prosseguir o atendimento</p>
                        <Image src={image5} alt={""} className={"py-6 max-w-[280px]"} />
                    </div>
                    <div className="py-6 flex flex-col items-center md:items-start">
                       <p>6° Responda "5" para consultar as faturas em aberto</p>
                        <Image src={image6} alt={""} className={"py-6 max-w-[280px]"} />
                    </div>
                    <div className="py-6 flex flex-col items-center md:items-start">
                       <p>7° Responda com o número correspondente ao plano que você deseja obter a fatura</p>
                        <Image src={image7} alt={""} className={"py-6 max-w-[280px]"} />
                    </div>
                    <div className="py-6 flex flex-col items-center md:items-start">
                       <p>8° Pronto. Agora você pode copiar o código de barras, pagar pelo PIX ou baixar o PDF da fatura.</p>
                        <Image src={image8} alt={""} className={"py-6 max-w-[280px]"} />
                    </div>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 27/05/19
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
