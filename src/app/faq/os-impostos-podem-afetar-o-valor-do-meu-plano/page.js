import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Os impostos podem afetar o valor do meu plano? | Leste",
  description:
    "Informações sobre ajustes de preço por impostos, encargos e mudanças regulatórias.",
};

export default function OsImpostosPodemAfetarOValorDoMeuPlano() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Os impostos podem afetar o valor do meu plano?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Sim. Alterações em impostos, encargos ou regras do setor podem
              impactar o valor do seu plano.
            </p>

            <p>
              Isso inclui mudanças decorrentes da reforma tributária, criação de
              novas taxas, contribuições ou alterações de alíquotas, que podem
              ser aplicadas conforme determinação legal.
            </p>

            <p>
              Também podem ocorrer ajustes relacionados à composição dos
              serviços, como alterações entre SCM (Serviço de Comunicação
              Multimídia) e SVA (Serviço de Valor Agregado), quando exigidas por
              regulamentação.
            </p>

            <p>
              Nesses casos, os valores podem ser ajustados automaticamente,
              conforme previsto em contrato.
            </p>
          </div>

          <FaqNote>
            <p>
              Todas as alterações são comunicadas por e-mail, sendo o endereço
              cadastrado o canal oficial de comunicação da empresa.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
