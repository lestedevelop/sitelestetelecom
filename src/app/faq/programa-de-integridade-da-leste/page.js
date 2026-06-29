import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "O que é o programa de integridade da Leste? | Leste",
  description:
    "Informações sobre o programa de integridade, compliance, LGPD, canal de denúncias e governança da Leste.",
};

export default function ProgramaDeIntegridadeDaLeste() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>O que é o programa de integridade da Leste?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O Programa de Integridade da Leste reúne práticas de ética,
              compliance e governança que orientam a atuação da empresa,
              garantindo transparência, segurança e conformidade em todas as
              relações.
            </p>

            <p>
              Ele foi estruturado para assegurar o cumprimento das legislações
              vigentes e das normas do setor de telecomunicações, além de
              orientar processos internos, operacionais e estratégicos.
            </p>

            <p>
              A Leste atua com base em princípios de responsabilidade, respeito
              e confiança, adotando padrões alinhados às melhores práticas do
              mercado.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Práticas de compliance
              </h2>
              <p className="mt-4">
                A empresa adota medidas contínuas para prevenção de riscos e
                condutas inadequadas, incluindo compliance anticorrupção,
                monitoramento de riscos, revisão de controles internos e due
                diligence de fornecedores.
              </p>
              <p className="mt-4">
                São repudiadas condutas como corrupção, fraude, conflito de
                interesses, suborno e favorecimento indevido.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Código de Ética e Conduta
              </h2>
              <p className="mt-4">
                O Código de Ética e Conduta estabelece diretrizes para
                colaboradores, gestores, parceiros e prestadores, com foco em
                respeito e honestidade, imparcialidade, cumprimento das leis,
                sigilo profissional, uso responsável de recursos, prevenção de
                assédio e confidencialidade.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Proteção de dados (LGPD)
              </h2>
              <p className="mt-4">
                A Leste cumpre integralmente a Lei Geral de Proteção de Dados
                (LGPD), adotando medidas técnicas e administrativas como
                criptografia, controle de acesso, monitoramento contínuo e
                retenção adequada de dados.
              </p>
              <p className="mt-4">
                Os dados são tratados com base legal, transparência e garantia
                dos direitos dos titulares.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Compliance técnico e regulatório
              </h2>
              <p className="mt-4">
                A empresa segue normas da Anatel e legislações do setor,
                garantindo padronização, mitigação de riscos e aderência
                regulatória em suas operações.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Canal de denúncias
              </h2>
              <p className="mt-4">
                A Leste disponibiliza um canal seguro e confidencial para
                denúncias, acessível a colaboradores, clientes, fornecedores e
                público em geral.
              </p>
              <p className="mt-4">
                O canal garante sigilo da identidade, proibição de retaliação e
                análise técnica e imparcial.
              </p>
              <p className="mt-4">
                Todos os relatos são investigados, podendo gerar medidas
                corretivas e disciplinares.
              </p>
            </div>
          </div>

          <FaqNote>
            <p>
              O Programa de Integridade da Leste abrange todas as áreas da
              empresa e está alinhado às legislações vigentes, incluindo a Lei
              nº 14.133/2021 e a Lei Geral de Proteção de Dados (LGPD).
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
