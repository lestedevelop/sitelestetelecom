import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Como posso fazer uma reclamação? | Leste",
    description: "Como posso fazer uma reclamação?.",
};

export default function ComoPossoFazerUmaReclamacao(props) {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>Como posso fazer uma reclamação?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Os canais oficiais de relacionamento da Leste Telecom são: o e-mail do SAC - sac@lestetelecom.com.br e nossa Central nos telefones (021) 2020-1300 e (021) 0800 053 1300
                    </p>
                    <p>
                        Pelo Facebook também retornamos por mensagem INBOX (envie todos os telefones para retorno/contato).

                        É extremamente necessário descrever o problema com objetividade e informar o nome completo do assinante e o CPF em todos os canais escritos.                    </p>
                    <p>
                        Todos os e-mails e mensagens são lidos e tratados.
                    </p>
                    <p>
                        No Facebook usamos uma plataforma com vários colaboradores e temos velocidade e interação com o call center como objetivo - retornamos os contatos para esclarecer dúvidas e/ou fazer agendamentos.
                    </p>
                    <p>
                        Atenção:
                        O canal oficial para respostas escritas é apenas o e-mail do SAC: sac@lestetelecom.com.br                    </p><br/>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 20/05/16
                </p>
            </div>

            <SupportFooter />
            <Footer />
        </main>
    );
}
