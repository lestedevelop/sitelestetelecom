import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "O que é considerado uso indevido? | Leste",
  description: "Entenda o que é considerado uso indevido no Leste Móvel.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>O que é considerado uso indevido?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O uso indevido ou fraudulento ocorre quando o serviço é utilizado
              fora das condições previstas no plano contratado.
            </p>
            <p>
              Isso inclui uso fora do padrão de consumo pessoal, como uso comercial
              abusivo ou práticas que violem as regras do plano.
            </p>
          </div>
          <FaqNote>
            <p>
              Para mais informações sobre as regras de uso, consulte o termo
              disponível no link oficial da operadora parceira.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
