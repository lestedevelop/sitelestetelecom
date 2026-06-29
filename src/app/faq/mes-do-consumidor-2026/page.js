import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";
import Image from "next/image";
import tabelaConsumidor from "@/assets/faq/tabela-consumidor.png";

export const metadata = {
  title: "Como funciona a campanha Mês do Consumidor 2026? | Leste",
  description:
    "Informações sobre a campanha Mês do Consumidor 2026, cidades atendidas, valores e condições promocionais.",
};

export default function MesDoConsumidor2026() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funciona a campanha Mês do Consumidor 2026?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A campanha Mês do Consumidor 2026 oferece planos com condições
              promocionais por tempo limitado, em comemoração ao Dia do
              Consumidor (15 de março).
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Quais planos estão disponíveis?
              </h2>

              <div className="mt-4 overflow-x-auto rounded-xl border border-primary">
                <Image
                  src={tabelaConsumidor}
                  alt="Tabela com planos disponíveis na campanha Mês do Consumidor 2026 por cidade"
                  className="h-auto min-w-[720px] w-full"
                  priority
                />
              </div>

              <div className="mt-4 space-y-4">
                <section>
                  <h3 className="font-semibold text-darkgreen">
                    Itaboraí, Magé e Guapimirim
                  </h3>
                  <p className="mt-2">1GB + Wi-Fi 6 AX por R$ 99,99 nos 3 primeiros meses</p>
                  <p className="mt-2">Após o período promocional, o valor passa para R$ 199,99</p>
                </section>

                <section>
                  <h3 className="font-semibold text-darkgreen">
                    Niterói, Maricá, Rio Bonito, Tanguá e São Gonçalo
                  </h3>
                  <p className="mt-2">1GB + Wi-Fi 6 AX por R$ 74,99 nos 3 primeiros meses</p>
                  <p className="mt-2">Após o período promocional, o valor passa para R$ 149,99</p>
                </section>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Condições da promoção
              </h2>
              <p className="mt-4">
                Os planos promocionais oferecem desconto na assinatura por 3
                meses, com contrato de fidelidade de 12 meses.
              </p>
              <p className="mt-4">
                Alterações de plano são permitidas apenas para planos de maior
                valor, mantendo a fidelidade proporcional. Em caso de migração
                para plano inferior, pode ser aplicada multa conforme contrato.
              </p>
              <p className="mt-4">
                A oferta é exclusiva para novos clientes que migram de outros
                provedores, mediante comprovação.
              </p>
              <p className="mt-4">
                Os planos podem variar conforme a cidade (Niterói, Maricá,
                Itaboraí, Tanguá, Rio Bonito, Magé e Guapimirim), de acordo com
                disponibilidade técnica e modelo de atendimento.
              </p>
              <p className="mt-4">
                A adesão à promoção pode exigir assinatura digital de
                documentos. Em alguns casos, a aplicação do desconto depende da
                troca de equipamentos.
              </p>
              <p className="mt-4">
                As condições também podem variar conforme o tipo de instalação
                (casas/lojas ou prédios/condomínios), devido à tecnologia
                utilizada.
              </p>
            </div>
          </div>

          <FaqNote>
            <p>
              A campanha segue condições comerciais, disponibilidade técnica e
              regras contratuais vigentes.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
