import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como recebo meus boletos? | Leste",
  description: "Informações sobre o envio de boletos por e-mail e WhatsApp.",
};

export default function ComoReceboMeusBoletos() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como recebo meus boletos?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Os boletos são enviados automaticamente para o e-mail cadastrado
              e também podem ser enviados pelo WhatsApp.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Para garantir o recebimento:
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Verifique seu e-mail cadastrado</li>
                <li>Confirá também a caixa de spam</li>
                <li>No WhatsApp, aceite o envio (opt-in)</li>
                <li>Adicione o número (21) 3940-0130 aos seus contatos</li>
              </ul>
            </div>

            <p>
              O envio por WhatsApp pode ocorrer automaticamente até 2 dias antes
              do vencimento.
            </p>

            <p>
              Caso não receba, é possível solicitar o reenvio ou cadastrar
              outro e-mail para recebimento.
            </p>
          </div>

          <FaqNote>
            <p>
              O envio dos boletos segue as configurações de contato cadastradas
              e pode ser influenciado por filtros de e-mail ou pela não
              confirmação do recebimento via WhatsApp. O não envio ou não
              recebimento do boleto não isenta o cliente da responsabilidade
              pelo pagamento da fatura.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
