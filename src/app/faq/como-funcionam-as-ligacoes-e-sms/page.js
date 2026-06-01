import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funcionam as ligações e SMS? | Leste",
  description: "Regras de ligações e SMS no Leste Móvel.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funcionam as ligações e SMS?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              As ligações são ilimitadas para números fixos e móveis em todo o
              Brasil, desde que realizadas com o código 41 e dentro do período de
              validade do plano.
            </p>
            <p>
              O SMS está incluído conforme o plano contratado e pode ser enviado
              para números móveis nacionais.
            </p>
          </div>
          <FaqNote>
            <p>
              Ligações internacionais, uso fora do Brasil e chamadas para números
              especiais não estão inclusos e podem gerar cobrança adicional.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
