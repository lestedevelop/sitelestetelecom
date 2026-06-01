import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como ativar o chip? | Leste",
  description: "Ativação do chip Leste Móvel.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como ativar o chip?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Para ativar o chip, é necessário realizar a primeira recarga com o
              plano escolhido.
            </p>
            <p>
              Após a confirmação do pagamento, a ativação ocorre automaticamente
              e o cliente recebe a confirmação por SMS e/ou pelo aplicativo.
            </p>
            <p>O prazo de ativação varia conforme a forma de pagamento:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Pix ou cartão: ativação imediata</li>
              <li>Boleto: até 72 horas para compensação</li>
            </ul>
          </div>
          <FaqNote>
            <p>
              Antes da ativação, não é possível utilizar internet, ligações ou SMS.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
