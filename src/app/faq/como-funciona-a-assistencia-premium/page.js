import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funciona a Assistência Premium? | Leste",
  description:
    "Informações sobre niveis de atendimento, visitas técnicas, prazos e condições da Assistencia Premium.",
};

export default function ComoFuncionaAAssistenciaPremium() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funciona a Assistência Premium?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A Assistência Premium oferece níveis de atendimento com prazos e
              benefícios definidos em contrato.
            </p>

            <p>
              Cada nível inclui condições específicas, como quantidade de
              visitas técnicas gratuitas por ano: 1 no nível I, 2 no nível II e
              3 no nível III. No nível III, também está incluída 1 mudança de
              endereço sem custo.
            </p>

            <p>O atendimento funciona 24 horas por dia.</p>

            <p>
              O prazo padrão para reparo é de até 48 horas úteis, sem contar
              domingos e feriados, podendo sofrer alterações em casos como
              chuvas, problemas de segurança pública, limitações de atuação
              noturna ou restrições de horário em determinadas regiões.
            </p>

            <p>
              As visitas técnicas inclusas não cobrem danos causados por mau
              uso dos equipamentos.
            </p>
          </div>

          <FaqNote>
            <p>
              Os prazos e condições seguem o contrato e a regulamentação da
              Anatel.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
