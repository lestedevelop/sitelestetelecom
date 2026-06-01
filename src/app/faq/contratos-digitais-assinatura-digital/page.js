import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Preciso assinar contrato digital? | Leste",
  description: "Obrigatoriedade da assinatura digital de contratos da Leste.",
};

export default function ContratoDigitaisAssinatura() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Preciso assinar contrato digital?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Sim, a assinatura é obrigatória para contratar, alterar ou
              atualizar seu plano.
            </p>

            <p>
              O contrato é enviado para assinatura eletrônica via WhatsApp ou
              e-mail. Caso necessário, também pode ser solicitado o envio de
              documentos para completar o cadastro.
            </p>

            <p>
              Sem a assinatura ou com cadastro incompleto, não é possível
              concluir a solicitação.
            </p>
          </div>

          <FaqNote>
            <p>
              Todos os contratos da Leste são digitais e não possuem versão em
              papel. A assinatura é obrigatória para ativações, reativações,
              alterações de planos e demais serviços.
            </p>
            <p>
              A ausência de assinatura ou da documentação pode impedir a
              execução da solicitação e, em alguns casos, resultar na suspensão
              do serviço.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
