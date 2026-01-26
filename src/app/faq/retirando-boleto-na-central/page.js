import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/retiradaboleto1.png"
import image2 from "@/assets/faq/retiradaboleto2.png"
import image3 from "@/assets/faq/retiradaboleto3.png"

import Image from "next/image";

export const metadata = {
    title: "Como retirar seu boleto pelo site? | Leste",
    description: "Como retirar seu boleto pelo site?.",
};

export default function RetiradoBoletoNaCentral(props) {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Como retirar seu boleto pelo site?</>}/>
               <div className={"py-4"}>
                   <p className="mb-4">
                       1° Acesse o site da Leste e clique em <span className={"font-bold"}>“Central do Assinante” </span> ou vá direto para: <a href={"https://portal.lestetelecom.com.br/login"}>portal.lestetelecom.com.br/login</a>
                   </p>
               </div>
                <div className="mt-10 text-base leading-7">

                    <div className="py-6 flex flex-col items-center md:items-start">
                        <p>2° Na aba <span className={"font-bold"}>“Portal do Assinante”</span>, insira suas informações de CPF/CNPJ e senha e clique em <span className={"font-bold"}>“Fazer Login”</span></p>
                        <Image src={image1} alt={""} className={"py-6 max-w-[280px] md:max-w-[485px]"} />
                    </div>
                    <div className="py-6 flex flex-col items-center md:items-start">
                        <p>3° No menu lateral, clique em <span className={"font-bold"}>“Faturas”.</span></p>
                        <Image src={image2} alt={""} className={"py-6 max-w-[280px] md:max-w-[485px]"} />
                    </div>
                    <div className="py-6 flex flex-col items-center md:items-start">
                        <p>4° Clique em <span className={"font-bold"}>“Pagar agora”</span> na fatura em aberto e escolha a opção <span className={"font-bold"}>“Boleto”</span> para fazer o download.</p>
                        <Image src={image3} alt={""} className={"py-6 max-w-[280px] md:max-w-[485px]"} />
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
