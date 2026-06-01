import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como solicitar a instalação do Leste Ultra? | Leste",
  description: "Passo a passo para solicitar a instalação do Leste Ultra.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como solicitar a instalação do Leste Ultra?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Para solicitar a instalação, é necessário realizar um pré-cadastro.
            </p>
            <p>
              Após isso, o pedido passa por análise técnica e avaliação de
              viabilidade. A instalação só será realizada após validação das
              condições no local.
            </p>
          </div>
          <FaqNote>
            <p>
              A viabilidade técnica deve ser confirmada caso a caso com o
              atendimento.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
