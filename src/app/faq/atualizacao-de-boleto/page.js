import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Planos Prediais cidade de Niterói | Leste",
    description: "Planos Prediais cidade de Niterói.",
};

export default function AtualizacaoDeBoleto(props) {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Planos Prediais cidade de Niterói</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Você sabia, que você agora pode efetuar o pagamento da sua fatura em qualquer agência bancária, após o vencimento?
                    </p>
                    <p>
                        Após alteração das regras pela FEBRABAN, a partir de Novembro/2018, os boletos bancários devem ser registrados junto ao banco, antes da disponibilização aos clientes.
                    </p>
                    <p>
                        Com essa ação, em até 45 dias após o vencimento escolhido da fatura, você pode efetuar o pagamento em qualquer agência bancária com o mesmo boleto sem precisar atualiza-lo.
                    </p>
                    <p>
                        Após 45 dias, um novo boleto precisa ser confeccionado e registrado junto ao banco.
                    </p><br/>
                    <p>
                        Boletos registrados pelo BANCO SANTANDER E ITAÚ atualmente tem prazo de validade de até 45 dias APÓS O VENCIMENTO.
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 28/03/23
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
