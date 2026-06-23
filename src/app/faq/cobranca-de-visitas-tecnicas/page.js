import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Quando a visita técnica é cobrada? | Leste",
  description:
    "Informações sobre cobrança de visita técnica, casos de cobrança e valores de reposição.",
};

export default function CobrancaDeVisitas() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Quando a visita técnica é cobrada?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A visita técnica pode ser cobrada quando o problema estiver
              relacionado a equipamentos do cliente ou a danos causados por mau
              uso.
            </p>

            <p>
              Quando a falha estiver no serviço de internet ou em defeitos
              naturais de equipamentos ou materiais, não há cobrança pela
              visita.
            </p>
          </div>

          <FaqNote>
            <p>
              A visita técnica ocasionada por dano ou interrupção no sinal
              provocada direta e exclusivamente por conduta do cliente pode
              gerar cobrança de R$ 80,00. Em caso de dano, mau uso ou extravio
              de equipamentos, também podem ser aplicados custos de reposição
              conforme os valores vigentes. Os valores de reposição podem ser
              consultados em:
              {" "}
              <a
                className="text-primary underline underline-offset-2"
                href="/faq/valores-de-reposicao-dos-equipamentos-cedidos-pela-empresa-e-servicos-extras"
              >
                valores-de-reposição-dos-equipamentos-cedidos-pela-empresa-e-serviços-extras
              </a>
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
