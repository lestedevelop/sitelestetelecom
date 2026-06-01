import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funciona a promoção Migração Grátis? | Leste",
  description:
    "Informacoes sobre disponibilidade, limites, elegibilidade e condicoes da promocao Migracao Gratis.",
};

export default function PromocaoMigracaoGratis() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funciona a promoção Migração Grátis?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A promocao “Migracao Grátis” e uma condicao especial, com
              disponibilidade limitada por regiao e sujeita a prazo de
              validade.
            </p>

            <p>
              A oferta depende da quantidade de portas disponiveis no momento da
              solicitacao, podendo ter numero maximo de contemplados.
            </p>

            <p>
              Nem todas as cidades sao elegiveis para a promocao.
            </p>

            <p>
              Os agendamentos realizados com essa condicao sao identificados no
              momento da contratacao e no e-mail de boas-vindas.
            </p>
          </div>

          <FaqNote>
            <p>
              A disponibilidade da promocao pode variar conforme a regiao,
              capacidade tecnica e regras comerciais vigentes no momento da
              solicitacao.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
