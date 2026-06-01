import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "O envio de documentos pode ser solicitado? | Leste",
  description:
    "Informações sobre solicitação de documentos no pré-agendamento e ativação.",
};

export default function OEnvioDeDocumentosPodeSerSolicitado() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>O envio de documentos pode ser solicitado?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O envio de documentos pode ser solicitado durante o processo de
              pré-agendamento ou ativação do serviço, para validação do
              cadastro.
            </p>

            <p>
              Durante o pré-agendamento, também pode ser solicitada a assinatura
              do termo de pré-ativação, realizada por meio de validação com
              biometria facial e envio de documentos oficiais.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">Podem ser solicitados:</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>CPF</li>
                <li>RG</li>
                <li>Comprovante de residência</li>
              </ul>
            </div>

            <p>
              Caso haja dúvidas ou insegurança sobre a solicitação, é possível
              entrar em contato com os canais de atendimento para confirmação
              antes de realizar o envio.
            </p>
          </div>

          <FaqNote>
            <p>
              O envio de documentos pode ser exigido conforme regulamentação da
              Anatel, com o objetivo de garantir a correta identificação do
              titular e a regularidade do cadastro.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
