import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Como funciona a forma de cobrança da Leste? | Leste",
    description: "Como funciona a forma de cobrança da Leste?.",
};

export default function ComoFuncionaAFormaDeCobranca(props) {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Como funciona a forma de cobrança da Leste?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        As mensalidades são referentes ao mês corrente (trinta dias), o mês de referência e vencimento é sempre o mês de utilização do serviço, sendo efetuados os pagamentos ao início de cada mês, na data escolhida pelo CONTRATANTE.
                    </p>
                    <br/>
                    <p>
                        Ex.: O vencimento escolhido foi dia 5, então pagará pelos 5 dias utilizados e os 25 dias que irá utilizar.
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 20/05/16
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
