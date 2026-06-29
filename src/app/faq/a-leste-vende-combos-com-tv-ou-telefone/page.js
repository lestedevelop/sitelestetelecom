import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "A Leste vende combos com TV ou telefone? | Leste",
  description:
    "Informações sobre disponibilidade de combos com TV, telefone fixo e serviços oferecidos pela Leste.",
};

export default function ALesteVendeCombosComTVOuTelefone() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>A Leste vende combos com TV ou telefone?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A Leste não oferece combos com TV ou telefone fixo.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Serviços disponíveis
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>Internet fixa</li>
                <li>Internet móvel</li>
                <li>Soluções de casa conectada, como Leste UP e Leste Câmeras</li>
              </ul>
            </div>
          </div>

          <FaqNote>
            <p>
              A Leste atua com serviços voltados à conectividade e soluções
              digitais, não oferecendo pacotes combinados com TV ou telefonia
              fixa.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
