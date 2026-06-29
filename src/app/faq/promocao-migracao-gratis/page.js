import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funciona a promoção Migração Grátis? | Leste",
  description:
    "Informações sobre disponibilidade, limites, elegibilidade e condições da promoção Migração Grátis.",
};

export default function PromocaoMigracaoGratis() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funciona a promoção Migração Grátis?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A promoção "Migração Grátis" é uma condição especial, com
              disponibilidade limitada por região e sujeita a prazo de
              validade.
            </p>

            <p>
              A oferta depende da quantidade de portas disponíveis no momento da
              solicitação, podendo ter número máximo de contemplados.
            </p>

            <p>
              Nem todas as cidades são elegíveis para a promoção.
            </p>

            <p>
              Os agendamentos realizados com essa condição são identificados no
              momento da contratação e no e-mail de boas-vindas.
            </p>
          </div>

          <FaqNote>
            <p>
              A disponibilidade da promoção pode variar conforme a região,
              capacidade técnica e regras comerciais vigentes no momento da
              solicitação.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
