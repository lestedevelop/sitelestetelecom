import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funciona a forma de cobrança da Leste? | Leste",
  description: "Como funciona a forma de cobrança da Leste?",
};

export default function ComoFuncionaAFormaDeCobranca() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funciona a forma de cobrança da Leste?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A cobrança é feita com base no mês corrente de utilização do
              serviço, considerando um período de 30 dias.
            </p>

            <p>
              O pagamento é realizado na data de vencimento escolhida pelo
              cliente e corresponde ao uso do mês corrente.
            </p>
          </div>

          <FaqNote>
            <p>
              O mês de referência e o vencimento correspondem ao próprio período
              de utilização.
            </p>
            <p>
              Por exemplo, o vencimento no dia 5 inclui os dias já utilizados e
              os dias que ainda serão utilizados até completar os 30 dias.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}

