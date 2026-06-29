import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";
import Image from "next/image";
import tabelaLesteFriday from "@/assets/faq/tabela-leste-friday.png";

export const metadata = {
  title: "Leste Friday 2025 | Leste",
  description:
    "Informações sobre a campanha Leste Friday 2025, fases, planos, valores e regras.",
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

              <div className="mt-4 overflow-x-auto rounded-xl border border-primary">
                <Image
                  src={tabelaLesteFriday}
                  alt="Tabela com planos e valores da campanha Leste Friday 2025 por cidade"
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
                  <p className="mt-2">Após o período promocional: R$ 199,99</p>
                </section>

                <section>
                  <h3 className="font-semibold text-darkgreen">
                    Niterói, Maricá, Rio Bonito e Tanguá
                  </h3>
                  <p className="mt-2">1GB + Wi-Fi 6 AX por R$ 74,99 nos 3 primeiros meses</p>
                  <p className="mt-2">Após o período promocional: R$ 149,99</p>
                  <p className="mt-2">1GB + Wi-Fi 6 AX MESH por R$ 99,99 nos 3 primeiros meses</p>
                  <p className="mt-2">Após o período promocional: R$ 199,99</p>
                </section>
              </div>
            </div>

            <p>
              Os descontos foram válidos por 3 meses, com contrato de fidelidade
              de 12 meses.
            </p>

            <p>
              A adesão foi exclusiva para novos clientes ou migração de outro
              provedor, mediante comprovação e assinatura digital.
            </p>

            <p>
              Alterações de plano permitiam apenas upgrade. Em caso de
              downgrade, aplicavam-se as condições contratuais.
            </p>

            <p>
              Em situações de troca de equipamentos, o desconto era aplicado
              após a substituição.
            </p>

            <p>
              Os planos variavam conforme cidade, tipo de imóvel e tecnologia
              disponível.
            </p>
          </div>

          <FaqNote>
            <p>
              A campanha seguiu condições comerciais, disponibilidade técnica e
              regras contratuais vigentes.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
