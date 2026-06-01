import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "O plano inclui benefícios? | Leste",
  description: "Benefícios que podem ser incluídos no Leste Móvel.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>O plano inclui benefícios?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Sim. Alguns planos do Leste Móvel podem incluir WhatsApp sem consumo
              da franquia de internet, além de benefícios adicionais.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>LigDoctor</li>
              <li>EadPlay</li>
              <li>Skeelo, disponível apenas nos planos Turbo</li>
            </ul>
          </div>
          <FaqNote>
            <p>
              A disponibilidade dos benefícios varia conforme o plano contratado e
              as condições da oferta vigente.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
