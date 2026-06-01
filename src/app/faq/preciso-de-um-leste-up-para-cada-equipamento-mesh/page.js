import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Preciso de um Leste UP para cada equipamento Mesh? | Leste",
  description: "Uso do Leste UP com equipamentos Mesh.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Preciso de um Leste UP para cada equipamento Mesh?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Sim. Cada repetidor Mesh precisa de um Leste UP próprio para manter
              a cobertura durante quedas de energia.
            </p>
            <p>
              A contratação e cobrança são feitas por dispositivo.
            </p>
          </div>
          <FaqNote>
            <p>
              Sem um Leste UP para cada equipamento, apenas a área de cobertura do
              equipamento principal continuará funcionando.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
