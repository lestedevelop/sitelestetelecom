import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/telaapp1.png"
import image2 from "@/assets/faq/telaapp2.png"
import image3 from "@/assets/faq/telaapp3.png"
import image4 from "@/assets/faq/telaapp4.png"
import image5 from "@/assets/faq/telaapp5.png"


import Image from "next/image";

export const metadata = {
    title: "Como emitir seu boleto no app da Leste | Leste",
    description: "Como emitir seu boleto no app da Leste.",
};

export default function RetirandoBoletoPeloApp(props) {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Como emitir seu boleto no app da Leste</>}/>
                <div className="mt-10 text-base leading-7">

                    <div className="py-6 flex flex-col items-center md:items-start">
                        <p>
                            1º Baixe o app da Leste na Play Store.
                        </p>
                        <Image src={image1} alt={""} className={"py-6 max-w-[280px]"} />
                    </div>
                    <div className="py-6 flex flex-col items-center md:items-start">
                        <p>
                            2° Abra o app e faça login com seus dados cadastrais.
                        </p>
                        <Image src={image2} alt={""} className={"py-6 max-w-[280px]"} />
                    </div>
                    <div className="py-6 flex flex-col items-center md:items-start">
                       <p>3° Clique na opção “Pagar fatura” na página principal do aplicativo.</p>
                        <Image src={image3} alt={""} className={"py-6 max-w-[280px]"} />
                    </div>
                    <div className="py-6 flex flex-col items-center md:items-start">
                       <p>4° Escolha a opção de pagamento desejada (PIX ou Boleto)</p>
                        <Image src={image4} alt={""} className={"py-6 max-w-[280px]"} />
                    </div>
                    <div className="py-6 flex flex-col items-center md:items-start">
                       <p>5° Para opção boleto, você pode:
                            <ul>
                                <li>Copiar o código de barras para pagar no app do seu banco</li>
                                <li>Ou baixar a fatura no seu celular</li>
                            </ul>
                       </p>
                        <Image src={image5} alt={""} className={"py-6 max-w-[280px]"} />
                    </div>
                    <p className={"font-bold"}>Simples e direto no seu celular, sem precisar falar com o atendimento!</p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 13/12/24
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
