import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como enviar documentos para contratação do serviço? | Leste",
  description:
    "Canais para envio de documentos na contratação ou ativação do serviço da Leste Telecom.",
};

const channels = [
  "E-mail: sac@lestetelecom.com.br",
  "WhatsApp e telefone: (021) 2020-1300",
  "Aplicativo: Leste - Central do Assinante",
  "Telegram: @leste_bot",
  "Redes sociais (mensagem privada)",
];

const documents = [
  "Documento de identificação (RG ou CPF)",
  "Comprovante de residência",
];

export default function SolicitadoEnvioDocumentos() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq
          title={<>Como enviar documentos para contratação do serviço?</>}
        />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Para contratar ou ativar seu serviço, a validação cadastral é
              feita, normalmente, por meio de assinatura digital. Nesse processo,
              já é solicitada a foto dos documentos do titular.
            </p>

            <p>
              Em alguns casos específicos, pode ser necessário o envio de
              documentos pelos canais de atendimento da Leste, como por exemplo
              em situações de falha na assinatura digital, inconsistência
              cadastral ou necessidade de validação complementar.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Canais para envio
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {channels.map((channel) => (
                  <li key={channel}>{channel}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Documentos geralmente solicitados
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {documents.map((document) => (
                  <li key={document}>{document}</li>
                ))}
              </ul>
            </div>
          </div>

          <FaqNote>
            <p>
              O envio é necessário para validar seus dados e garantir a
              segurança da contratação, conforme exigências do setor regulado
              pela ANATEL.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
