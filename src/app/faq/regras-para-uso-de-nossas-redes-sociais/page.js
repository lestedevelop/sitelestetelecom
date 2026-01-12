import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Regras para uso de nossas redes sociais (Facebook, Instagram, Twitter...) | Leste",
    description: "Regras para uso de nossas redes sociais (Facebook, Instagram, Twitter...).",
};

export default function RegrasParaUsoRedes(props) {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>Regras para uso de nossas redes sociais (Facebook, Instagram, Twitter...)</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        O atendimento pelas redes sociais funciona de maneira simples. Você pode interagir conosco via comentário em nossas postagens ou, pelo método mais recomendável, enviando uma mensagem para nosso Inbox, direct ou mencionando nossa página. Responderemos sua solicitação no menor tempo possível.
                    </p><br/>
                    <p>
                        Nosso atendimento tem os seguintes horários: segunda a sexta de 6h às 00h e sábados, domingos e feriados de 8h às 20h.
                    </p><br/>
                   <p>Facebook: <a href="http://www.facebook.com/lestetelecom"></a>http://www.facebook.com/lestetelecom</p>
                   <p>Instagram: <a href="https://www.instagram.com/lestetelecom"></a>https://www.instagram.com/lestetelecom</p>
                   <p>Twitter: <a href="https://twitter.com/lestetelecom"></a>https://twitter.com/lestetelecom</p>
                </div>

                <div className="mt-10 text-base leading-7 text-dark">
                <p>Regras para o contato nas mídias:</p>
                    <ul className="list-disc">
                        <li>
                            Usamos uma plataforma com vários colaboradores e temos velocidade e interação com o nosso Call Center, por isso solicitamos que seja enviado o máximo de informação possível em uma única mensagem - para dinamizar seu atendimento. Mensagens quebradas atrapalham muito o fluxo de informações e tomam mais tempo para as respostas.
                        </li>
                        <li>
                            Envie todos os números de telefones em que podemos encontrá-lo (Ex. se tiver mais de um celular, forneça os dois números). Retornamos todos os contados por telefone. Pode até informar qual o melhor horário para o retorno.
                        </li>
                        <li>
                            NUNCA envie qualquer dado pessoal em comentários de postagens! É para sua proteção! Para isso, use somente as mensagens Inbox e direct das nossas páginas oficiais ou nosso e-mail oficial sac@lestetelecom.com.br
                        </li>
                        <li>
                            Nossas páginas nas mídias sociais são apenas para alertas, promoções, informações básicas sobre nossos planos, área de cobertura e informações sobre a Internet em geral.
                        </li>
                        <li>
                            Críticas e sugestões são sempre analisadas, mas pedimos para serem enviadas apenas por Inbox ou e-mail.
                        </li>
                        <li>
                            Propagandas de empresas parceiras, institucionais, e referências a sites de terceiros só podem ser postados pelos administradores da página.
                        </li>
                        <li>
                            Palavrões e ofensas não são tolerados em hipótese alguma. O mesmo vale para qualquer imagem postada em comentário que tenha caráter ofensivo.
                        </li>
                        <li>
                            Múltiplas postagens em comentários, com o mesmo texto ou intenção, também não serão tolerados.
                        </li>
                        <li>
                            Nos reservamos o direito de bloquear o acesso de qualquer usuário que desrespeite as regras estabelecidas.
                        </li>
                        <li>
                            Para toda postagem/comentário, com reclamações, solicitamos por Inbox a identificação do usuário para que possamos tratar o problema. É de nosso total interesse resolver os problemas. Se não houver essa identificação, o usuário será impedido de fazer novas postagens/comentários.
                        </li>
                    </ul>
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
