import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Oferta limitada de 1GB - 2025 | Leste",
  description:
    "Informacoes sobre a campanha Oferta limitada de 1GB - 2025, planos, valores e condicoes.",
};

export default function OfertaLimitadaDe1GB2025() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Oferta limitada de 1GB - 2025</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A oferta limitada de 1GB foi uma campanha promocional com
              condicoes especificas, valida por tempo determinado e disponivel
              para a cidade de Niteroi.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Quais planos estavam disponiveis?
              </h2>

              <div className="mt-4 space-y-4">
                <section>
                  <h3 className="font-semibold text-darkgreen">
                    Plano de 1 GIGA + Super Wi-Fi 6 AX
                  </h3>
                  <p className="mt-2">Valor: R$ 139,99/mês</p>
                </section>

                <section>
                  <h3 className="font-semibold text-darkgreen">
                    Plano de 1 GIGA + Super Wi-Fi 6 AX + Mesh
                  </h3>
                  <p className="mt-2">Valor: R$ 169,99/mês</p>
                </section>
              </div>
            </div>

            <p>A oferta foi valida ate 30/09/2025, conforme as condicoes da campanha.</p>

            <p>
              O plano com Super Wi-Fi 6 AX + Mesh possuia contrato com
              fidelidade de 12 meses.
            </p>
          </div>

          <FaqNote>
            <p>
              A oferta esteve sujeita a disponibilidade tecnica, condicoes
              comerciais e regras vigentes durante o periodo da campanha.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
