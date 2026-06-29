import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "O que são serviços adicionais (SVA)? | Leste",
  description:
    "Informações sobre Serviços de Valor Agregado (SVA), composição do plano e cobrança.",
};

export default function OQueSaoServicosAdicionaisSVA() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>O que são serviços adicionais (SVA)?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Os Serviços de Valor Agregado (SVA) são recursos extras incluídos
              no plano, como aplicativos, conteúdos digitais, segurança e
              outros benefícios.
            </p>

            <p>
              Eles fazem parte da composição do serviço contratado e têm como
              objetivo complementar o uso da internet, sem alterar o valor final
              pago.
            </p>
          </div>

          <FaqNote>
            <p>
              Os SVA podem aparecer discriminados na fatura como parte da
              composição do serviço, sem custo adicional.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
