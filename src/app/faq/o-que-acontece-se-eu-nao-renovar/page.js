import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "O que acontece se eu não renovar? | Leste",
  description: "O que acontece quando o plano Leste Móvel não é renovado.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>O que acontece se eu não renovar?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Caso o plano não seja renovado, os serviços são suspensos de forma
              gradual.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Até 30 dias: internet, ligações e SMS ficam indisponíveis</li>
              <li>Até 60 dias: todos os serviços são bloqueados</li>
              <li>Após esse período, a linha pode ser cancelada definitivamente</li>
            </ul>
          </div>
          <FaqNote>
            <p>
              Para evitar a perda do número, é necessário manter o plano ativo por
              meio de recargas dentro do prazo.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
