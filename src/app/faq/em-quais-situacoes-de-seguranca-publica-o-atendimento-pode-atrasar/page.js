import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Em quais situações de segurança pública o atendimento pode atrasar? | Leste",
  description:
    "Informações sobre atrasos de atendimento por situacoes de segurança pública e critérios operacionais.",
};

export default function EmQuaisSituacoesDeSegurancaPublicaOAtendimentoPodeAtrasar() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq
          title={
            <>
              Em quais situações de segurança pública o atendimento pode
              atrasar?
            </>
          }
        />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O atendimento pode sofrer atraso quando situações de segurança
              pública impedem ou limitam a atuação das equipes em determinadas
              regiões.
            </p>

            <p>
              Isso pode ocorrer, por exemplo, em casos de operações policiais,
              bloqueios de acesso, restrições de circulação ou outras situações
              que representem risco à integridade das equipes durante o
              deslocamento ou execução do serviço.
            </p>

            <p>
              Essas situações podem afetar não apenas o local do atendimento,
              mas também os acessos e os horários disponíveis, podendo gerar
              necessidade de reprogramação.
            </p>

            <p>
              Como as condições mudam conforme a região e o momento, não há uma
              delimitação fixa de áreas afetadas. Sempre que necessário, a Leste
              informa os clientes sobre ocorrências que possam impactar o
              atendimento.
            </p>
          </div>

          <FaqNote>
            <p>
              As decisões de atendimento consideram a segurança das equipes e
              seguem critérios operacionais.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
