import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/roteador1.png"
import image2 from "@/assets/faq/roteador2.png"
import image3 from "@/assets/faq/roteador3.png"
import image4 from "@/assets/faq/roteador4.png"
import image5 from "@/assets/faq/roteador5.png"
import image6 from "@/assets/faq/roteador6.png"
import image7 from "@/assets/faq/roteador7.png"
import image8 from "@/assets/faq/roteador8.png"
import image9 from "@/assets/faq/roteador9.png"
import image10 from "@/assets/faq/roteador10.png"

import Image from "next/image";

export const metadata = {
    title: "Configurar o roteador para obter acesso à Internet? | Leste",
    description: "Como configurar o roteador para obter acesso à Internet?.",
};

export default function ConfigRotador() {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>Como configurar o roteador para obter acesso à Internet?</>}/>
                    <p className={"py-2"}>Selecione o modelo do roteador e siga as instruções.</p>
                <div className="mt-10 text-base leading-7 text-dark">

                    <div className="py-4 flex flex-wrap items-center justify-center gap-2">
                        <a target={"_blank"} href="https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/17df7f_81697d66da6044f488cf020a59bff25c.pdf">
                            <Image src={image1} alt="" className={"max-w-[237]"} />
                        </a>
                        <a target={"_blank"} href="https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/17df7f_98042a059d284b65a67e203652c5c39a.pdf">
                            <Image src={image2} alt="" className={"max-w-[237]"} />
                        </a>
                        <a target={"_blank"} href="https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/17df7f_61dfd0bd44d54984845983587e1f60b5.pdf">
                            <Image src={image3} alt="" className={"max-w-[237]"} />
                        </a>
                        <a target={"_blank"} href="https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/19591b_0001922803584215859ed9a4763f2fbe.pdf">
                            <Image src={image4} alt="" className={"max-w-[237]"} />
                        </a>
                        <a target={"_blank"} href="https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/17df7f_497fcb28edfe4640b7586777f3c0b553.pdf">
                            <Image src={image5} alt="" className={"max-w-[237]"} />
                        </a>
                        <a target={"_blank"} href="https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/19591b_cca5f7f229f4499eacc7316989b7629f.pdf">
                            <Image src={image6} alt="" className={"max-w-[237]"} />
                        </a>
                        <a target={"_blank"} href="https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/19591b_5985b3408da0409789cd0233333bd8e8.pdf">
                            <Image src={image7} alt="" className={"max-w-[237]"} />
                        </a>
                        <a target={"_blank"} href="https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/17df7f_e61139ed2bf54c058073d57b925f3091.pdf">
                            <Image src={image8} alt="" className={"max-w-[237]"} />
                        </a>
                        <a target={"_blank"} href="https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/19591b_9041ec8ad52643d8b97bd79ea440a885.pdf">
                            <Image src={image9} alt="" className={"max-w-[237]"} />
                        </a>
                        <a target={"_blank"} href="https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/b3185e_6430413cd8db4d3497f39d230b3aed75.pdf">
                            <Image src={image10} alt="" className={"max-w-[237]"} />
                        </a>
                    </div>
                </div>

                <p className="mt-12 text-md text-graylight">
                    <span className={"font-bold"}>ATENÇÃO:</span> Todo material aqui apresentado foi desenvolvido pela empresa sem nenhum fim lucrativo.
                    Nosso objetivo é apenas orientar nossos clientes a como configurar seus roteadores sem a necessidade de intervenção de terceiros.
                    O presente material é voltado para configuração básica de acesso - não visando qualquer orientação as políticas de segurança que devem ser adotadas individualmente por usuário
                </p>
            </div>

            <SupportFooter />
            <Footer />
        </main>
    );
}
