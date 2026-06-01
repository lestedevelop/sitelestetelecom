import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Por que meu plano teve reajuste? | Leste",
  description: "Informações sobre reajuste anual de planos da Leste Telecom.",
};

export default function CorrecaoMonetariaDosPlanos() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Por que meu plano teve reajuste?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O valor do seu plano pode ser reajustado periodicamente conforme
              previsto em contrato.
            </p>

            <p>
              Esse reajuste é anual e segue um índice econômico que acompanha a
              variação dos custos, como o IGP-M.
            </p>

            <p>
              Se preferir, você pode solicitar a alteração do seu plano para
              outra opção disponível, de acordo com a sua necessidade,
              respeitando o intervalo mínimo de 30 dias entre mudanças ou
              ativações.
            </p>
          </div>

          <FaqNote>
            <p>
              O reajuste anual é permitido por lei e está previsto em contrato
              (cláusula 8). O índice utilizado é o IGP-M, que pode ser
              consultado em{" "}
              <a
                href="http://www.portalbrasil.net/igpm.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-primary underline-offset-4 hover:underline"
              >
                http://www.portalbrasil.net/igpm.htm
              </a>
              .
            </p>
            <p>
              A alteração de plano pode ser solicitada, conforme opções
              disponíveis, respeitando o intervalo mínimo entre mudanças.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
