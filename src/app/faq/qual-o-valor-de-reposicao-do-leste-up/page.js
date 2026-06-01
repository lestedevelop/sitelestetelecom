import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Qual o valor de reposição do Leste UP? | Leste",
  description: "Valor de reposição do Leste UP.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Qual o valor de reposição do Leste UP?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Em caso de perda, roubo ou dano irreparável do equipamento, será
              cobrado o valor de reposição conforme previsto nas condições de
              garantia e contrato.
            </p>
            <p>
              O valor de reposição do modelo NoBreak K3PS e KP3 é de R$ 370,00.
            </p>
          </div>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
