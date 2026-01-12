import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Migração para novos planos - oferta, regras e condições. | Leste",
    description: "Migração para novos planos - oferta, regras e condições..",
};

export default function ContratoDigitaisAssinatura(props) {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>Migração para novos planos - oferta, regras e condições.</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>Todos os planos ofertados em nosso site estão disponíveis para migração para qualquer cliente.</p>
                    <br/>
                    <p>Condições específicas para mudança automática de velocidade/upgrade:</p>
                    <ol>
                        <li>1-  Para oferta de novos planos com velocidades maiores, a CONTRATADA poderá realizar automaticamente a migração dos clientes antigos para o novo plano. O CONTRATANTE mediante o prazo estabelecido contratualmente, conforme cláusula 3.6 do Contrato de Prestação de serviço, poderá aceitar ou recusar a oferta.</li>
                        <li>2-  Somente neste caso a mudança será automática para um plano superior, sem aumento na mensalidade, e havendo anuência a novo contrato de prestação de serviço ocorrerá um novo prazo para reajuste anual.</li>
                        <li>3-  Caso o CONTRATANTE opte por não permanecer no novo plano, poderá solicitar o retorno ao plano antigo com suas regras, condições, data de vigência e reajustes já estabelecidos no prazo de até 45 (quarenta e cinco), a contar do primeiro e-mail de informação sobre a mudança automática de velocidade/upgrade, considerando que após este prazo sem manifestação do CONTRATANTE ocorrerá a anuência tácita ao upgrade.</li>
                    </ol>
                    <br/>
                    <p>Condições gerais e obrigatórias para migração de novos planos:</p>
                    <ol>
                        <li>1-  Na migração, o cliente adere ao novo contrato de prestação de serviço vigente - disponível para consulta em nosso site.</li>
                        <li>2-  Se existir pendência de documentos do cliente, como identidade e CPF, estes deverão ser enviados para regularização do cadastro - ESSA É UMA EXIGÊNCIA LEGAL.</li>
                        <li>3-  O cliente pode retornar ao plano de origem em até 45 (quarenta e cinco) dias, a contar da mudança. Após esse prazo o plano será definitivamente desativado e apenas os planos em oferta no site serão elegíveis.</li>
                    </ol>
                    <p>Todas as informações são passadas no atendimento de solicitação de migração - junto a nossa central de atendimento.</p>
                    <p>Pedimos atenção para os tópicos abordados em nosso FAQ, que são condições indissociáveis das ofertas de planos ao varejo que estão em nosso site.</p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 06/11/24
                </p>
            </div>

            <SupportFooter />
            <Footer />
        </main>
    );
}
