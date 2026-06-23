import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Posso usar a internet para atividades críticas? | Leste",
  description:
    "Informações sobre uso da internet em atividades críticas, SLA e disponibilidade.",
};

export default function PossoUsarAInternetParaAtividadesCriticas() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Posso usar a internet para atividades críticas?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A conexão por fibra e segura e confiável, mas não e indicada como
              única solução para atividades críticas.
            </p>

            <p>
              O serviço não possui SLA além do previsto em contrato e pode
              sofrer interrupcoes, especialmente por fatores externos como
              danos, interferencias ou situacoes na rede.
            </p>

            <p>
              Por isso, não deve ser utilizado como solução exclusiva para
              aplicacoes como sistemas de venda, alarmes, monitoramento
              (incluindo home care) ou sistemas de segurança.
            </p>

            <p>
              Para esses casos, e recomendado utilizar conexoes de backup ou
              solucoes redundantes para garantir maior disponibilidade.
            </p>
          </div>

          <FaqNote>
            <p>
              O serviço e prestado conforme as condições contratuais e não e
              destinado a aplicacoes críticas que exijam alta disponibilidade
              continua.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
