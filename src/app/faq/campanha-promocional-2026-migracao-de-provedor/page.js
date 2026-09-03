import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Campanha Promocional 2026 - Migração de Provedor | Leste",
  description:
    "Condições da campanha promocional 2026 para novos assinantes em migração de outro provedor.",
};

export default function CampanhaPromocional2026MigracaoDeProvedor() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq
          title={<>Campanha Promocional 2026 - Migração de Provedor</>}
        />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Esta oferta promocional possui condições especiais para novos
              assinantes em migração de outro provedor.
            </p>

            <p>
              A campanha é válida para as cidades de Itaboraí, Magé,
              Guapimirim, Rio Bonito e Tanguá, contemplando todos os planos
              disponíveis nessas cidades.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Condição da campanha
              </h2>
              <p className="mt-4 font-bold">
                50% de desconto no proporcional e nos 3 primeiros meses
              </p>
            </div>

            <p>
              Após o período promocional, o valor da mensalidade será
              normalizado de acordo com o plano contratado.
            </p>

            <p>
              A oferta é destinada exclusivamente para novos assinantes
              provenientes de migração de outro provedor.
            </p>

            <p>
              A contratação possui fidelidade de 12 meses e está sujeita à
              análise e disponibilidade técnica no endereço.
            </p>

            <p>
              Demais cidades atendidas pela Leste não participam desta campanha
              e permanecem com suas ofertas e condições específicas vigentes.
            </p>
          </div>

          <FaqNote>
            <p>
              A oferta é válida até 30/11/2026 e segue as condições comerciais,
              disponibilidade técnica e regras contratuais vigentes.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
