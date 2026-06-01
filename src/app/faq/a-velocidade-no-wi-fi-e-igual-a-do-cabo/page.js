import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "A velocidade no Wi-Fi é igual à do cabo? | Leste",
  description:
    "Entenda por que Wi-Fi e cabo podem apresentar comportamentos diferentes de velocidade e estabilidade.",
};

export default function VelocidadeWiFiECabo() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>A velocidade no Wi-Fi é igual à do cabo?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Não. A conexão via Wi-Fi pode apresentar variações de velocidade e
              estabilidade, pois depende de fatores do ambiente e de
              interferências externas.
            </p>

            <h2 className="pt-2 text-xl font-semibold text-dark md:text-2xl">
              Fatores que podem impactar o desempenho
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Paredes, móveis e estruturas físicas</li>
              <li>Dispositivos sem fio, como telefones, câmeras e transmissores</li>
              <li>Outras redes Wi-Fi próximas</li>
              <li>Distância entre o dispositivo e o roteador</li>
            </ul>

            <p>
              Por isso, o Wi-Fi pode apresentar oscilações, menor velocidade ou
              instabilidade.
            </p>

            <h2 className="pt-2 text-xl font-semibold text-dark md:text-2xl">
              Para melhor desempenho
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Utilize conexão via cabo Ethernet sempre que possível</li>
              <li>
                Priorize o cabo para dispositivos que exigem estabilidade, como
                Smart TVs, videogames e computadores
              </li>
            </ul>
          </div>

          <FaqNote>
            <p>
              A garantia de velocidade contratada é válida apenas para conexões
              via cabo, diretamente na ONU, e o Wi-Fi não possui garantia de
              velocidade ou cobertura.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
