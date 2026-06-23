import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Onde comprar o chip? | Leste",
  description: "Locais de compra do chip Leste Móvel.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Onde comprar o chip?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O chip Leste Móvel pode ser adquirido nas lojas físicas da Leste,
              nos stands autorizados ou em bancas de jornais.
            </p>
            <p>As formas de pagamento podem variar conforme o local de compra:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Lojas: dinheiro e Pix</li>
              <li>Stand: cartão de crédito ou débito e Pix</li>
              <li>Bancas de jornais: conforme disponibilidade do local</li>
            </ul>
          </div>
          <FaqNote>
            <p>
              Após a compra, o chip deve ser ativado por meio da primeirá recarga
              para começar a funcionar.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
