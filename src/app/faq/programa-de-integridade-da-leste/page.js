import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "O que é o programa de integridade da Leste? | Leste",
  description:
    "Informacoes sobre o programa de integridade, compliance, LGPD, canal de denuncias e governanca da Leste.",
};

export default function ProgramaDeIntegridadeDaLeste() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>O que é o programa de integridade da Leste?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O Programa de Integridade da Leste reúne praticas de etica,
              compliance e governanca que orientam a atuacao da empresa,
              garantindo transparencia, seguranca e conformidade em todas as
              relacoes.
            </p>

            <p>
              Ele foi estruturado para assegurar o cumprimento das legislacoes
              vigentes e das normas do setor de telecomunicacoes, alem de
              orientar processos internos, operacionais e estrategicos.
            </p>

            <p>
              A Leste atua com base em principios de responsabilidade, respeito
              e confianca, adotando padroes alinhados as melhores praticas do
              mercado.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Praticas de compliance
              </h2>
              <p className="mt-4">
                A empresa adota medidas continuas para prevencao de riscos e
                condutas inadequadas, incluindo compliance anticorrupcao,
                monitoramento de riscos, revisao de controles internos e due
                diligence de fornecedores.
              </p>
              <p className="mt-4">
                Sao repudiadas condutas como corrupcao, fraude, conflito de
                interesses, suborno e favorecimento indevido.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Codigo de Etica e Conduta
              </h2>
              <p className="mt-4">
                O Codigo de Etica e Conduta estabelece diretrizes para
                colaboradores, gestores, parceiros e prestadores, com foco em
                respeito e honestidade, imparcialidade, cumprimento das leis,
                sigilo profissional, uso responsavel de recursos, prevencao de
                assedio e confidencialidade.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Protecao de dados (LGPD)
              </h2>
              <p className="mt-4">
                A Leste cumpre integralmente a Lei Geral de Protecao de Dados
                (LGPD), adotando medidas tecnicas e administrativas como
                criptografia, controle de acesso, monitoramento continuo e
                retencao adequada de dados.
              </p>
              <p className="mt-4">
                Os dados sao tratados com base legal, transparencia e garantia
                dos direitos dos titulares.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Compliance tecnico e regulatorio
              </h2>
              <p className="mt-4">
                A empresa segue normas da Anatel e legislacoes do setor,
                garantindo padronizacao, mitigacao de riscos e aderencia
                regulatoria em suas operacoes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Canal de denuncias
              </h2>
              <p className="mt-4">
                A Leste disponibiliza um canal seguro e confidencial para
                denuncias, acessivel a colaboradores, clientes, fornecedores e
                publico em geral.
              </p>
              <p className="mt-4">
                O canal garante sigilo da identidade, proibicao de retaliacao e
                analise tecnica e imparcial.
              </p>
              <p className="mt-4">
                Todos os relatos sao investigados, podendo gerar medidas
                corretivas e disciplinares.
              </p>
            </div>
          </div>

          <FaqNote>
            <p>
              O Programa de Integridade da Leste abrange todas as areas da
              empresa e esta alinhado as legislacoes vigentes, incluindo a Lei
              no 14.133/2021 e a Lei Geral de Protecao de Dados (LGPD).
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
