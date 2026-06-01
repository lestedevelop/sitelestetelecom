import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Recebi duas notas fiscais, isso está correto? | Leste",
  description:
    "Informações sobre emissão de duas notas fiscais por separação de serviços.",
};

export default function RecebiDuasNotasFiscaisIssoEstaCorreto() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Recebi duas notas fiscais, isso está correto?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>Sim. A emissão de duas notas fiscais pode ocorrer normalmente.</p>

            <p>
              Isso acontece porque a cobrança pode ser separada por tipo de
              serviço, como parte referente ao SCM (Serviço de Comunicação
              Multimídia) e parte ao SVA (Serviço de Valor Agregado).
            </p>
          </div>

          <FaqNote>
            <p>
              As notas fiscais podem ser emitidas por empresas diferentes e
              separadas por questões tributárias.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
