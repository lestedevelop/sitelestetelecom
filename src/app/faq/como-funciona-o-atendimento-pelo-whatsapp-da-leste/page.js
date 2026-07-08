import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funciona o atendimento pelo WhatsApp da Leste | Leste",
  description:
    "Informações sobre limitações e uso do atendimento pelo WhatsApp da Leste.",
};

export default function ComoFuncionaOAtendimentoPeloWhatsappDaLeste() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funciona o atendimento pelo WhatsApp da Leste</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O atendimento via WhatsApp pode apresentar limitações, conforme o
              funcionamento do canal.
            </p>

            <p>
              O canal não aceita envio de áudios, vídeos ou arquivos em
              formatos diferentes de PDF ou PNG.
            </p>

            <p>
              O envio de imagens deve ser feito apenas dentro das opções
              específicas do menu de atendimento, como no envio de documentos.
              Imagens enviadas diretamente no chat não são processadas sem antes
              passar pelo fluxo do bot.
            </p>
          </div>

          <FaqNote>
            <p>
              O canal pode passar por ajustes durante o período de testes.
              Para solicitações com resposta formal, utilize o e-mail{" "}
              <a
                className="font-semibold text-primary hover:underline"
                href="mailto:sac@lestetelecom.com.br"
              >
                sac@lestetelecom.com.br
              </a>
              .
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
