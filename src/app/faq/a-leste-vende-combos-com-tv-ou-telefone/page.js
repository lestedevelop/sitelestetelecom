import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "A Leste vende combos com TV ou telefone? | Leste",
  description:
    "Informacoes sobre disponibilidade de combos com TV, telefone fixo e servicos oferecidos pela Leste.",
};

export default function ALesteVendeCombosComTVOuTelefone() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>A Leste vende combos com TV ou telefone?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A Leste nao oferece combos com TV ou telefone fixo.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Servicos disponiveis
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>Internet fixa</li>
                <li>Internet movel</li>
                <li>Solucoes de casa conectada, como Leste UP e Leste Cameras</li>
              </ul>
            </div>
          </div>

          <FaqNote>
            <p>
              A Leste atua com servicos voltados a conectividade e solucoes
              digitais, nao oferecendo pacotes combinados com TV ou telefonia
              fixa.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
