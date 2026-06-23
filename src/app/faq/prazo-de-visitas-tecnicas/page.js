import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Qual é o prazo da visita técnica? | Leste",
  description:
    "Informações sobre prazo de visita técnica, situacoes de atraso e condições operacionais.",
};

export default function PrazoVisita() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Qual é o prazo da visita técnica?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O prazo para realização da visita técnica é de até 48 horas úteis
              (sem contar domingos e feriados), conforme previsto em contrato.
            </p>

            <p>
              Esse prazo pode sofrer alteração em algumas situações, como
              condições climáticas adversas (chuvas ou ventanias), riscos na
              rede elétrica, interferências de segurança pública que limitem o
              acesso ou a atuação das equipes.
            </p>

            <p>
              Nesses casos, podem ocorrer restrições de horário, impossibilidade
              de atendimento em determinados períodos ou necessidade de
              reprogramação.
            </p>
          </div>

          <FaqNote>
            <p>
              As visitas técnicas são realizadas em horário comercial, das 8h
              às 18h, conforme as condições operacionais e priorizando a
              segurança das equipes.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
