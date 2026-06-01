import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funciona a campanha Mês do Consumidor 2026? | Leste",
  description:
    "Informacoes sobre a campanha Mes do Consumidor 2026, cidades atendidas, valores e condicoes promocionais.",
};

export default function MesDoConsumidor2026() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funciona a campanha Mês do Consumidor 2026?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A campanha Mês do Consumidor 2026 oferece planos com condicoes
              promocionais por tempo limitado, em comemoracao ao Dia do
              Consumidor (15 de marco).
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Quais planos estao disponiveis?
              </h2>

              <div className="mt-4 space-y-4">
                <section>
                  <h3 className="font-semibold text-darkgreen">
                    Itaborai, Mage e Guapimirim
                  </h3>
                  <p className="mt-2">1GB + Wi-Fi 6 AX por R$ 99,99 nos 3 primeiros meses</p>
                  <p className="mt-2">Apos o periodo promocional, o valor passa para R$ 199,99</p>
                </section>

                <section>
                  <h3 className="font-semibold text-darkgreen">
                    Niteroi, Marica, Rio Bonito, Tangua e Sao Goncalo
                  </h3>
                  <p className="mt-2">1GB + Wi-Fi 6 AX por R$ 74,99 nos 3 primeiros meses</p>
                  <p className="mt-2">Apos o periodo promocional, o valor passa para R$ 149,99</p>
                </section>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Condicoes da promocao
              </h2>
              <p className="mt-4">
                Os planos promocionais oferecem desconto na assinatura por 3
                meses, com contrato de fidelidade de 12 meses.
              </p>
              <p className="mt-4">
                Alteracoes de plano sao permitidas apenas para planos de maior
                valor, mantendo a fidelidade proporcional. Em caso de migracao
                para plano inferior, pode ser aplicada multa conforme contrato.
              </p>
              <p className="mt-4">
                A oferta e exclusiva para novos clientes que migram de outros
                provedores, mediante comprovacao.
              </p>
              <p className="mt-4">
                Os planos podem variar conforme a cidade (Niteroi, Marica,
                Itaborai, Tangua, Rio Bonito, Mage e Guapimirim), de acordo com
                disponibilidade tecnica e modelo de atendimento.
              </p>
              <p className="mt-4">
                A adesao a promocao pode exigir assinatura digital de
                documentos. Em alguns casos, a aplicacao do desconto depende da
                troca de equipamentos.
              </p>
              <p className="mt-4">
                As condicoes tambem podem variar conforme o tipo de instalacao
                (casas/lojas ou predios/condominios), devido a tecnologia
                utilizada.
              </p>
            </div>
          </div>

          <FaqNote>
            <p>
              A campanha segue condicoes comerciais, disponibilidade tecnica e
              regras contratuais vigentes.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
