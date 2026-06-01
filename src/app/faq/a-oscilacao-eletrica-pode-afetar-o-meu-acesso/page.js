import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Oscilação elétrica pode afetar minha internet? | Leste",
  description:
    "Informacoes sobre oscilacoes na rede eletrica, impacto na conexao e recomendacoes de protecao.",
};

export default function OcilacaoEletrica() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Oscilação elétrica pode afetar minha internet?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Sim, oscilações na rede elétrica podem afetar o funcionamento da
              sua internet, impactando diretamente os equipamentos, como a ONU
              e o roteador.
            </p>

            <p>
              Nessas situações, os dispositivos podem reiniciar, perder
              configurações ou apresentar instabilidade na conexão.
            </p>

            <p>
              Para reduzir esse tipo de problema, é recomendado utilizar
              no-break ou estabilizador de tensão e manter os equipamentos
              protegidos.
            </p>
          </div>

          <FaqNote>
            <p>
              A Leste fornece os dados necessários para configuração dos
              roteadores, que pode ser realizada pelo cliente ou por terceiros.
              Caso a configuração seja solicitada à Leste, poderá haver cobrança
              de visita técnica.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
