import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Por que o Wi-Fi não cobre toda a casa? | Leste",
  description:
    "Entenda os fatores que reduzem a cobertura do Wi-Fi e como melhorar o alcance do sinal.",
};

export default function WiFiNaoCobreCasa() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Por que o Wi-Fi não cobre toda a casa?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O Wi-Fi não cobre toda a casa de forma uniforme porque o sinal
              sofre interferências e perdas ao se propagar pelo ambiente.
            </p>

            <h2 className="pt-2 text-xl font-semibold text-dark md:text-2xl">
              Fatores que impactam o sinal
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Distância do roteador</li>
              <li>Obstáculos físicos, como paredes, móveis, espelhos e estruturas</li>
              <li>
                Materiais do ambiente, como concreto e metal, que reduzem mais o
                sinal
              </li>
              <li>Posicionamento do equipamento, altura e proximidade de objetos</li>
              <li>Número de dispositivos conectados e uso simultâneo da rede</li>
            </ul>

            <h2 className="pt-2 text-xl font-semibold text-dark md:text-2xl">
              Interferências comuns
            </h2>
            <p>
              Diversos equipamentos podem causar interferência por operarem nas
              mesmas frequências de 2.4 GHz e 5 GHz, como:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Dispositivos Bluetooth</li>
              <li>Telefones sem fio</li>
              <li>Câmeras e monitores sem fio</li>
              <li>Micro-ondas</li>
              <li>Redes Wi-Fi próximas, como as dos vizinhos</li>
            </ul>

            <h2 className="pt-2 text-xl font-semibold text-dark md:text-2xl">
              Limitações técnicas
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Muitos dispositivos operam apenas em 2.4 GHz</li>
              <li>Nem todos suportam redes dual band</li>
              <li>A qualidade da recepção varia entre dispositivos</li>
              <li>
                Uso simultâneo de streaming, jogos online e videochamadas pode
                sobrecarregar a rede
              </li>
            </ul>

            <h2 className="pt-2 text-xl font-semibold text-dark md:text-2xl">
              Como melhorar a cobertura
            </h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Posicione o roteador em local central e aberto</li>
              <li>Evite barreiras físicas próximas ao equipamento</li>
              <li>Afaste de fontes de interferência</li>
              <li>Sempre que possível, utilize conexão via cabo Ethernet</li>
              <li>Utilize cabos Cat5e ou superior, principalmente em alto consumo</li>
            </ul>
          </div>

          <FaqNote>
            <p>
              O Wi-Fi utiliza frequências abertas e está sujeito a interferências
              externas, não sendo possível garantir cobertura total do sinal. A
              garantia de velocidade contratada é válida apenas para conexões via
              cabo, diretamente na ONU.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
