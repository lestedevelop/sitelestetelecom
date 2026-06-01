import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Eu preciso devolver os equipamentos? | Leste",
  description:
    "Informacoes sobre devolucao de equipamentos fornecidos pela Leste.",
};

export default function EuPrecisoDevolverOsEquipamentos() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Eu preciso devolver os equipamentos?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Sim. Os equipamentos fornecidos pela Leste sao disponibilizados
              em regime de comodato durante a prestacao do servico.
            </p>

            <p>
              Isso significa que os equipamentos nao sao vendidos nem doados e
              devem ser devolvidos em caso de cancelamento ou encerramento do
              contrato.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                O que deve ser devolvido
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>Equipamentos instalados</li>
                <li>Fontes de alimentacao</li>
                <li>Cordao optico</li>
              </ul>
            </div>

            <p>
              A devolucao deve seguir as orientacoes da empresa para cada tipo
              de encerramento.
            </p>
          </div>

          <FaqNote>
            <p>
              A nao devolucao ou a devolucao com danos pode gerar cobranca de
              multa, conforme previsto em contrato.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
