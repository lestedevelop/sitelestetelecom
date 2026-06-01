import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Leste Friday 2025 | Leste",
  description:
    "Informacoes sobre a campanha Leste Friday 2025, fases, planos, valores e regras.",
};

export default function LesteFriday2025() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Leste Friday 2025</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A Leste Friday 2025 foi uma campanha promocional com ofertas por
              tempo limitado, dividida em duas fases:
            </p>

            <ul className="list-disc space-y-2 pl-5">
              <li>Esquenta (01/11 a 08/11): ofertas para clientes atuais</li>
              <li>Leste Friday (08/11 a 30/11): ofertas para novos clientes</li>
            </ul>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Planos e valores da campanha
              </h2>

              <div className="mt-4 space-y-4">
                <section>
                  <h3 className="font-semibold text-darkgreen">
                    Itaborai, Mage e Guapimirim
                  </h3>
                  <p className="mt-2">1GB + Wi-Fi 6 AX por R$ 99,99 nos 3 primeiros meses</p>
                  <p className="mt-2">Apos o periodo promocional: R$ 199,99</p>
                </section>

                <section>
                  <h3 className="font-semibold text-darkgreen">
                    Niteroi, Marica, Rio Bonito e Tangua
                  </h3>
                  <p className="mt-2">1GB + Wi-Fi 6 AX por R$ 74,99 nos 3 primeiros meses</p>
                  <p className="mt-2">Apos o periodo promocional: R$ 149,99</p>
                  <p className="mt-2">1GB + Wi-Fi 6 AX MESH por R$ 99,99 nos 3 primeiros meses</p>
                  <p className="mt-2">Apos o periodo promocional: R$ 199,99</p>
                </section>
              </div>
            </div>

            <p>
              Os descontos foram validos por 3 meses, com contrato de fidelidade
              de 12 meses.
            </p>

            <p>
              A adesao foi exclusiva para novos clientes ou migracao de outro
              provedor, mediante comprovacao e assinatura digital.
            </p>

            <p>
              Alteracoes de plano permitiam apenas upgrade. Em caso de
              downgrade, aplicavam-se as condicoes contratuais.
            </p>

            <p>
              Em situacoes de troca de equipamentos, o desconto era aplicado
              apos a substituicao.
            </p>

            <p>
              Os planos variavam conforme cidade, tipo de imovel e tecnologia
              disponivel.
            </p>
          </div>

          <FaqNote>
            <p>
              A campanha seguiu condicoes comerciais, disponibilidade tecnica e
              regras contratuais vigentes.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
