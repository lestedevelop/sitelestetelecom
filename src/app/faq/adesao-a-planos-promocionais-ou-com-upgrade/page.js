import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Adesão a planos promocionais ou com upgrade (troca) de equipamentos - condições: | Leste",
    description: "Adesão a planos promocionais ou com upgrade (troca) de equipamentos - condições:.",
};

export default function AdesaoAPlanosPromocionais(props) {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Adesão a planos promocionais ou com upgrade (troca) de equipamentos - condições:</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Adesão a novos planos promocionais ou troca para um plano diferente que envolva troca de equipamento (upgrade) só podem ser realizadas para clientes ADIMPLENTES,
                    </p>
                    <p>
                        Clientes com faturas ou valores em aberto não podem solicitar alteração de plano até o devido adimplemento.
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
