import BackToIndexButton from "@/pageComponents/faq/BackToIndexButton";
import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";

export const metadata = {
    title: "Política de privacidade - Uso de dados | Leste",
    description: "Política de privacidade e uso de dados da Leste Telecom.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-light">
            

            <div className="container px-6 py-12">
                <TitleFaq title={<>Política de privacidade - Uso de dados.</>}/>

                <ol className="mt-10 max-w-5xl list-decimal space-y-3 pl-6 text-[15px] leading-7 text-dark">
                    <li>
                        Informações que os usuários passarem serão coletadas e guardadas de acordo
                        com padrões rígidos de segurança e confidencialidade.
                    </li>
                    <li>
                        As informações dos usuários nunca serão transferidas a terceiros — exceto
                        nos casos de ordem legal ou judicial;
                    </li>
                    <li>
                        A empresa utilizará os dados coletados/informados para promoções, eventos,
                        divulgações, comunicações, informes técnicos, avisos técnicos, etc., utilizando
                        e-mail, aplicativos, programas, redes sociais, sistemas de mensagens e comunicações
                        (SMS, Whatsapp, Messenger, etc) — todos ligados à sua operação ou prestação do
                        serviço de provimento à internet e cobertura de sinal WI-FI — ou em casos de amplo
                        interesse público. A base de dados NÃO SERÁ VENDIDA.
                    </li>
                    <li>
                        O acesso às informações dos usuários está restrito apenas a funcionários autorizados
                        para o uso adequado dessas informações.
                    </li>
                    <li>
                        Sempre que outras organizações forem contratadas para prover serviços de apoio, será
                        exigida a adequação aos padrões de privacidade aqui dispostos.
                    </li>
                    <li>
                        Para fins administrativos, eventualmente a empresa pode utilizar “cookies” (pequeno
                        arquivo colocado em seu computador para rastrear movimentos dentro dos websites),
                        sendo que o usuário pode, a qualquer instante, ativar em seu navegador mecanismos
                        para informá-lo quando os mesmos estiverem acionados ou para evitar que sejam acionados.
                    </li>
                    <li>
                        Todo o conteúdo do site, da fan page no Facebook, assim como de todas as plataformas
                        digitais utilizadas pertence a Leste Telecom — não podendo ser copiado, reproduzido,
                        distribuído, apresentado, anunciado ou transmitido de nenhuma maneira ou por nenhum meio,
                        salvo por expressa autorização da empresa ou do titular dos direitos autorais (se for o caso).
                    </li>
                </ol>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 10/03/20
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
