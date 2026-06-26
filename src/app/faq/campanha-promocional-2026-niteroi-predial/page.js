import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Campanha Promocional 2026 - Niterói Predial | Leste",
  description:
    "Informações sobre a campanha promocional 2026 para Niterói Predial, planos, valores e condições.",
};

export default function CampanhaPromocional2026NiteróiPredial() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Campanha Promocional 2026 - Niterói Predial</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Esta oferta promocional possui condições especiais para novos
              assinantes em migração de outro provedor.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Plano e valor da campanha
              </h2>
              <div className="mt-4 space-y-2">
                <p>600MB + Wi-Fi 5</p>
                <p>R$ 69,99 durante os 3 primeiros meses</p>
                <p>Após o período promocional: R$ 99,99</p>
              </div>
            </div>

            <p>
              A oferta é destinada exclusivamente para clientes da cidade de
              Niterói em instalações prediais e válida apenas para novos
              assinantes em processo de migração de outro provedor, mediante
              comprovação.
            </p>

            <p>
              A contratação possui fidelidade de 12 meses e está sujeita a
              análise e disponibilidade técnica no endereço.
            </p>

            <p>
              Imóveis com instalação horizontal (casas/rua) e demais cidades
              atendidas pela Leste não participam desta campanha e permanecem
              com suas ofertas e condições específicas vigentes.
            </p>
          </div>

          <FaqNote>
            <p>
              A oferta é válida até 30/06/2026 e segue as condições comerciais,
              disponibilidade técnica e regras contratuais vigentes.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
