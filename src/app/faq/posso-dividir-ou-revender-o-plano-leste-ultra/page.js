import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Posso dividir ou revender o plano Leste Ultra? | Leste",
  description: "Regras de uso individual do Leste Ultra.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Posso dividir ou revender o plano Leste Ultra?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Não. Os planos Leste Ultra são exclusivos para uso individual e não
              podem ser compartilhados, divididos ou revendidos entre diferentes
              pessoas ou endereços.
            </p>
          </div>
          <FaqNote>
            <p>
              O uso do serviço é vinculado ao endereço e às condições aprovadas
              na instalação.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
