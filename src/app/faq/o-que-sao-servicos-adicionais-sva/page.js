import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "O que são serviços adicionais (SVA)? | Leste",
  description:
    "Informacoes sobre Servicos de Valor Agregado (SVA), composicao do plano e cobranca.",
};

export default function OQueSaoServicosAdicionaisSVA() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>O que são serviços adicionais (SVA)?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Os Servicos de Valor Agregado (SVA) sao recursos extras incluidos
              no plano, como aplicativos, conteudos digitais, seguranca e
              outros beneficios.
            </p>

            <p>
              Eles fazem parte da composicao do servico contratado e tem como
              objetivo complementar o uso da internet, sem alterar o valor final
              pago.
            </p>
          </div>

          <FaqNote>
            <p>
              Os SVA podem aparecer discriminados na fatura como parte da
              composicao do servico, sem custo adicional.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
