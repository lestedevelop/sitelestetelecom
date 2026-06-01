import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Qual o valor e como funciona a contratação do Leste UP? | Leste",
  description: "Valor e contratação do Leste UP.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Qual o valor e como funciona a contratação do Leste UP?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O Leste UP é um equipamento locado, com cobrança mensal por
              dispositivo.
            </p>
            <p>
              O valor é de R$ 39,90 por mês para cada unidade, independentemente
              do plano de internet contratado.
            </p>
          </div>
          <FaqNote>
            <p>A contratação possui fidelidade de 12 meses.</p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
