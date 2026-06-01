import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Posso trocar o titular ou substituir o chip? | Leste",
  description: "Troca de titularidade e substituição do chip no Leste Móvel.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Posso trocar o titular ou substituir o chip?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Sim. A troca de titularidade pode ser solicitada pelo suporte no
              aplicativo e leva alguns dias para conclusão.
            </p>
            <p>A substituição do chip pode ser feita em caso de perda ou defeito.</p>
          </div>
          <FaqNote>
            <p>
              Em caso de troca de chip, os benefícios são mantidos desde que o
              plano esteja ativo.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
