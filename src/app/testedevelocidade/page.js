import AppBar from "@/components/layout/AppBar";
import velocidadeBanner from "@/assets/testevelocidade.webp";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import arrow from "@/assets/arrowright.svg";
import BannerDownloadNow from "@/components/cards/BannerDownloadNow";


const PREPARATION_STEPS = [
  {
    number: "01",
    text: "Feche todos os programas e pause as atualizações",
  },
  {
    number: "02",
    text: "Interrompa qualquer serviço que use a internet.",
  },
  {
    number: "03",
    text: "Conecte o cabo de rede diretamente no seu computador",
  },
];

const METRICS = [
  {
    title: "Download",
    description:
      "A velocidade de download mostra a rapidez com que os dados chegam ao seu dispositivo.",
    detail:
      "Ela influencia atividades como acessar sites, assistir a vídeos e fazer downloads de arquivos.",
    conclusion:
      "Quanto maior a taxa em Mbps, melhor tende a ser a sua navegação.",
  },
  {
    title: "Upload",
    description:
      "A velocidade de upload indica a rapidez com que você envia dados para a internet.",
    detail:
      "Ela influencia ações como videochamadas, envio de imagens e transferência de arquivos.",
    conclusion:
      "Quanto maior o valor, mais estável tende a ser a sua conexão.",
  },
  {
    title: "Ping",
    description:
      "O ping mede o tempo de resposta entre o seu dispositivo e o servidor do teste.",
    detail:
      "Ele impacta atividades em tempo real, como jogos online, chamadas e transmissões ao vivo.",
    conclusion:
      "Quanto menor o valor em ms, melhor tende a ser a resposta da conexão.",
  },
];

export default function TesteDeVelocidade() {
  return (
    <div className="min-h-full bg-light">
      <section className="w-full bg-darkgreen pt-8 md:pt-12">
        <div className="container overflow-hidden  text-light">
          <div className="flex flex-col gap-8 px-8 py-10 md:flex-row md:items-center md:justify-between md:px-14 md:py-16">
            <div className="max-w-[28rem]">
              <h1 className="max-w-sm text-5xl font-bold leading-[0.95] md:text-[5rem]">
                Teste sua Velocidade
              </h1>
            </div>

            <div className="flex md:justify-end">
              <a
                href="https://www.speedtest.net/pt"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 min-w-52 items-center justify-center rounded-full border border-[#1f8f79] bg-[#0f6f5f] px-8 text-2xl font-semibold text-light shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#137a68]"
              >
                Iniciar Teste
              </a>
            </div>
          </div>

          <div className="flex justify-center pb-3">
            <span className="text-2xl tracking-[0.4em] text-light/80">....</span>
          </div>
        </div>
      </section>

      <section className="w-full bg-light">
        <div className="container px-8 py-12 md:px-16 md:py-16">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold leading-tight text-primary md:text-[3.25rem]">
              Teste sua internet com precisão!
            </h2>
            <p className="mt-4 max-w-3xl text-2xl leading-tight text-darkgreen md:text-[2rem]">
              Mas antes de iniciar, para garantir a precisão dos testes,
              recomendamos que siga os seguintes passos:
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
            {PREPARATION_STEPS.map((step) => (
              <article
                key={step.number}
                className="flex items-center gap-4 rounded-2xl bg-primary px-5 py-5 text-light"
              >
                <span className="text-5xl font-bold leading-none text-[#7ef0d5]">
                  {step.number}
                </span>
                <p className="max-w-[13rem] text-xl leading-tight">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-8 sm:pb-12 lg:pb-24 xl:pb-36 bg-lightgreenBackground">
        <div className="container relative px-8 py-12 md:px-16 md:py-16">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold leading-tight text-primary md:text-[3.25rem]">
              Como interpretar os dados do seu teste?
            </h2>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-6">
            {METRICS.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-darkgreen p-6 text-light"
              >
                <h3 className="text-3xl font-semibold text-[#7ef0d5]">
                  {item.title}
                </h3>
                <div className="mt-5 space-y-4 text-sm leading-6 md:text-base">
                  <p>{item.description}</p>
                  <p>{item.detail}</p>
                  <p>{item.conclusion}</p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-10 max-w-6xl text-sm leading-6 text-darkgreen md:text-base">
            O Speedtest permite testar a velocidade da sua internet em tempo real,
            avaliando o desempenho da conexão e identificando possíveis lentidões.
            Ao fazer o teste de velocidade, você vê se a internet que está
            chegando para você está dentro do esperado para o seu plano.
          </p>
        </div>
      </section>
    </div>
  );
}
