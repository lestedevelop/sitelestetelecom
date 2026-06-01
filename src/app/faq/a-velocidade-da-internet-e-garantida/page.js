import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "A velocidade da internet é garantida? | Leste",
  description:
    "Entenda como funcionam os parâmetros de velocidade da internet e como medir corretamente.",
};

export default function VelocidadeDaInternetEGarantida() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>A velocidade da internet é garantida?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A velocidade da internet segue parâmetros definidos pela Anatel,
              que estabelecem limites mínimos de desempenho.
            </p>

            <p>Como referência, considera-se:</p>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Velocidade média mensal: pelo menos 80% da velocidade contratada
              </li>
              <li>
                Velocidade em testes de velocidade, no download ou upload:
                pelo menos 40% da velocidade contratada
              </li>
            </ul>

            <p>
              Exemplo: em um plano de 10 Mbps, a média mensal esperada é de 8 Mbps.
              Em testes de velocidade, o valor não deve ser inferior a 4 Mbps.
            </p>

            <p>
              Para uma medição correta, o teste deve ser realizado via cabo
              (rede ethernet), diretamente na ONU. Testes realizados por Wi-Fi
              podem sofrer interferências e não refletem com precisão a
              velocidade contratada.
            </p>
          </div>

          <FaqNote>
            <p>
              Os parâmetros seguem a Resolução nº 717/2019 da Anatel.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
