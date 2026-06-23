import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "SVA aumentam o valor do plano? | Leste",
  description:
    "Informações sobre impacto dos SVA no valor do plano e discriminacao em fatura.",
};

export default function SVAAumentamOValorDoPlano() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>SVA aumentam o valor do plano?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Nao. Os SVA não aumentam o valor do plano e não possuem cobrança
              adicional.
            </p>

            <p>
              Os valores podem aparecer discriminados na fatura, mas fazem parte
              do serviço contratado. Na prática, você continua pagando apenas o
              valor do plano.
            </p>

            <p>
              Os SVA não podem ser removidos, pois fazem parte da composição do
              serviço.
            </p>
          </div>

          <FaqNote>
            <p>
              A discriminacao dos SVA na fatura não representa cobrança extra,
              apenas a composição contratual do serviço.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
