import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Posso suspender ou reativar meu plano? | Leste",
  description: "Regras para suspensão temporária e reativação de plano da Leste.",
};

export default function ComoPossoBloquearMeuPlano() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Posso suspender ou reativar meu plano?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Sim, você pode solicitar a suspensão temporária ou a reativação do
              seu plano pelos canais de atendimento, como telefone ou WhatsApp{" "}
              <strong className="font-bold text-darkgreen">
                (021) 2020-1300
              </strong>
              .
            </p>

            <p>
              A suspensão pode ser feita uma vez a cada 12 meses, sem custo, por
              um período mínimo de 30 dias e máximo de 120 dias.
            </p>

            <p>
              Para reativar, basta solicitar o retorno do serviço. Caso a
              reativação seja solicitada após o período de suspensão, ou após
              cancelamento do plano, poderão ser aplicadas as condições vigentes
              no momento da solicitação.
            </p>
          </div>

          <FaqNote>
            <p>
              A suspensão não pode ocorrer fora do período permitido. Caso a
              reativação ocorra após 120 dias, poderá ser cobrada taxa de
              religação.
            </p>
            <p>
              Para reativar o serviço, é necessário estar com os débitos
              quitados, realizar a assinatura de novo contrato digital e aceitar
              as condições dos planos disponíveis.
            </p>
            <p>
              Eventuais custos com reparos ou substituição de equipamentos não
              estão incluídos na suspensão ou reativação.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
