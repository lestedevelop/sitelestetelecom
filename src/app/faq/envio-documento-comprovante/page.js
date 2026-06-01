import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Onde envio o comprovante de pagamento? | Leste",
  description: "Onde envio o comprovante de pagamento?",
};

export default function EnvioDocumentoComprovante() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Onde envio o comprovante de pagamento?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Você pode enviar o comprovante de pagamento pelos canais de
              atendimento da Leste:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                E-mail:{" "}
                <a
                  href="mailto:sac@lestetelecom.com.br"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  sac@lestetelecom.com.br
                </a>
              </li>
              <li>WhatsApp e telefone: (21) 2020-1300</li>
              <li>Aplicativo: Leste - Central do Assinante</li>
              <li>Telegram: @leste_bot</li>
              <li>Redes sociais: mensagem privada</li>
            </ul>
          </div>

          <FaqNote>
            <p>
              O envio do comprovante pode ser solicitado quando o pagamento
              ainda não estiver identificado no sistema, geralmente devido ao
              prazo de compensação bancária.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
