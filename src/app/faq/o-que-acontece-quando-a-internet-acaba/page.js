import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "O que acontece quando a internet acaba? | Leste",
  description: "O que ocorre quando a franquia de internet termina.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>O que acontece quando a internet acaba?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Quando a franquia de internet do plano é totalmente utilizada, a
              navegação é interrompida automaticamente.
            </p>
            <p>
              Para continuar utilizando a internet, é necessário realizar uma nova
              recarga ou renovar o plano.
            </p>
          </div>
          <FaqNote>
            <p>
              Não há consumo adicional fora da franquia contratada.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
