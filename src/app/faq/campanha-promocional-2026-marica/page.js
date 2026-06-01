import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Campanha Promocional 2026 - Maricá | Leste",
  description:
    "Informacoes sobre a campanha promocional 2026 para Marica, planos, valores e condicoes.",
};

export default function CampanhaPromocional2026Marica() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Campanha Promocional 2026 - Maricá</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Esta oferta promocional possui condicoes especiais para novos
              assinantes em migracao de outro provedor.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Plano e valor da campanha
              </h2>
              <div className="mt-4 space-y-2">
                <p>1GB + Wi-Fi 6</p>
                <p>R$ 99,99 durante os 3 primeiros meses</p>
                <p>Apos o periodo promocional: R$ 149,99</p>
              </div>
            </div>

            <p>
              A oferta e destinada exclusivamente para clientes da cidade de
              Marica e valida apenas para novos assinantes em processo de
              migracao de outro provedor, mediante comprovacao.
            </p>

            <p>
              A contratacao possui fidelidade de 12 meses e esta sujeita a
              analise e disponibilidade tecnica no endereco.
            </p>

            <p>
              Demais cidades atendidas pela Leste nao participam desta campanha
              e permanecem com suas ofertas e condicoes especificas vigentes.
            </p>
          </div>

          <FaqNote>
            <p>
              A oferta e valida ate 30/06/2026 e segue as condicoes comerciais,
              disponibilidade tecnica e regras contratuais vigentes.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
