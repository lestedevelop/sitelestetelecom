import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como cancelar meu plano de internet? | Leste",
  description: "Orientações para cancelamento de plano de internet da Leste.",
};

export default function ComoCancelarOMeuPlano() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como cancelar meu plano de internet?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Para cancelar seu plano, entre em contato com a central de
              atendimento pelo telefone ou WhatsApp{" "}
              <strong className="font-bold text-darkgreen">
                (021) 2020-1300
              </strong>
              .
            </p>

            <p>
              Após a solicitação, serão tratadas as informações necessárias para
              o encerramento do contrato, incluindo questões financeiras e a
              devolução dos equipamentos.
            </p>

            <p>
              A devolução pode ser realizada em uma das lojas da Leste ou,
              quando aplicável, pode ser agendada a retirada no local, conforme
              viabilidade de atendimento.
            </p>
          </div>

          <FaqNote>
            <p>
              Após o cancelamento (rescisão do contrato), o assinante tem até 30
              dias para devolver os equipamentos. A devolução em loja é a forma
              mais rápida de concluir o processo.
            </p>
            <p>
              O cancelamento deve ser solicitado pelos canais de atendimento
              disponíveis.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
