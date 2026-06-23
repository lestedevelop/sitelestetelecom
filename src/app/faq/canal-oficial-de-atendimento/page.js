import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Qual é o canal oficial de atendimento? | Leste",
  description: "Canais oficiais de atendimento da Leste Telecom.",
};

export default function CanalOficialDeAtendimento() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Qual é o canal oficial de atendimento?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Você pode entrar em contato com a central de atendimento pelos
              telefones{" "}
              <strong className="font-bold text-darkgreen">(021) 2020-1300</strong>,{" "}
              <strong className="font-bold text-darkgreen">0800 053 1300</strong>{" "}
              e{" "}
              <strong className="font-bold text-darkgreen">(021) 3940-0130</strong>.
            </p>

            <p>
              O atendimento funciona nos seguintes horários: suporte técnico 24
              horas por dia; financeiro de segunda a sexta, das 8h às 23h, e aos
              sábados e feriados, das 8h às 20h.
            </p>

            <p>
              Para solicitações com resposta por escrito, utilize o e-mail{" "}
              <a
                href="mailto:sac@lestetelecom.com.br"
                className="font-bold text-primary underline-offset-4 hover:underline"
              >
                sac@lestetelecom.com.br
              </a>
              , que é o canal oficial de atendimento.
            </p>
          </div>

          <FaqNote>
            <p>
              Como prestadora de pequeno porte (PPP), a Leste não possui
              obrigação regulatória de manter ouvidoria, conforme a Resolução nº
              765/2023 da Anatel (Regulamento Geral de Direitos do Consumidor -
              RGC).
            </p>
            <p>
              Ainda assim, a empresa mantém canais de atendimento e comúnicação
              conforme previsto em contrato. Chamados realizados por telefone
              podem ter retorno pela mesma forma de contato.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
