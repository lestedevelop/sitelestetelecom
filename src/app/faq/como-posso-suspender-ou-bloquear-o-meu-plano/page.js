import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Como posso suspender ou bloquear o meu plano? | Leste",
    description: "Como posso suspender ou bloquear o meu plano?.",
};

export default function ComoPossoBloquearMeuPlano(props) {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Como posso suspender ou bloquear o meu plano?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        O contratante pode suspender o serviço, para reativação no mesmo endereço, sem ônus, uma vez a cada 12 meses, por prazo não inferior a 30 dias e não superior a 120 dias. Se for necessário realizar reparos ou trocas nos cabos e/ou equipamentos do ponto cliente, haverá cobrança destes itens em separado, não constituindo tal cobrança taxa de reativação, mas contraprestação pela troca destes itens.
                    </p>
                    <br/>
                    <p>
                        O pedido para suspensão tem de ser feito por e-mail, central de atendimento ou ponto de atendimento da contratada.
                    </p>
                    <p>
                        Se for feito pedido de reativação fora do prazo de 120 dias, haverá necessidade de pagamento de taxa de religação, como se ocorresse uma novo pedido após um cancelamento.
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
