import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";

export const metadata = {
  title: "Prazo de visitas tecnicas | Leste",
  description: "Informacoes sobre prazo de visitas tecnicas.",
};

export default function PrazoVisita() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Prazo de visitas tecnicas</>} />

        <article className="mt-8 max-w-5xl">
          <div className="max-w-4xl space-y-8 text-lg leading-8 text-darkgreen md:text-[22px] md:leading-[1.55]">
            <p>
              O prazo para atendimento de visitas tecnicas e de ate 48 horas
              uteis, podendo variar conforme a disponibilidade de agenda e a
              regiao atendida.
            </p>

            <p>
              As visitas sao realizadas em horario comercial. Caso seja
              necessario reagendar, o assinante deve entrar em contato com a
              Central de Atendimento.
            </p>

            <p>
              Em situacoes de grande demanda, fatores climaticos, seguranca
              publica ou eventos externos que impactem a operacao, o prazo
              podera sofrer alteracoes.
            </p>
          </div>

          <p className="mt-10 text-sm font-medium uppercase tracking-[0.18em] text-graylight">
            Ultima revisao em 23/10/2019
          </p>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
