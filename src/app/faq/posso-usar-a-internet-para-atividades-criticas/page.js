import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Posso usar a internet para atividades críticas? | Leste",
  description:
    "Informacoes sobre uso da internet em atividades criticas, SLA e disponibilidade.",
};

export default function PossoUsarAInternetParaAtividadesCriticas() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Posso usar a internet para atividades críticas?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A conexao por fibra e segura e confiavel, mas nao e indicada como
              unica solucao para atividades criticas.
            </p>

            <p>
              O servico nao possui SLA alem do previsto em contrato e pode
              sofrer interrupcoes, especialmente por fatores externos como
              danos, interferencias ou situacoes na rede.
            </p>

            <p>
              Por isso, nao deve ser utilizado como solucao exclusiva para
              aplicacoes como sistemas de venda, alarmes, monitoramento
              (incluindo home care) ou sistemas de seguranca.
            </p>

            <p>
              Para esses casos, e recomendado utilizar conexoes de backup ou
              solucoes redundantes para garantir maior disponibilidade.
            </p>
          </div>

          <FaqNote>
            <p>
              O servico e prestado conforme as condicoes contratuais e nao e
              destinado a aplicacoes criticas que exijam alta disponibilidade
              continua.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
