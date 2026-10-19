"use client";

import bannerTesteVelocidade from "@/assets/banner-testevelocidade.png";
import bannerTesteVelocidadeMobile from "@/assets/banner-teste-mobile.png";
import HomeHeroBanner from "@/pageComponents/home/HomeHeroBanner";
import {useHomeSections} from "@/hooks/useHomeSections";
import {resolveImageSrc} from "@/utils/imageSrc";

const PREPARATION_STEPS = [
  {
    number: "01",
    text: "Feche todos os programas e pause as atualizações.",
  },
  {
    number: "02",
    text: "Interrompa qualquer serviço que use a internet.",
  },
  {
    number: "03",
    text: "Conecte o cabo de rede diretamente no seu computador.",
  },
];

const METRICS = [
  {
    title: "Download",
    description:
      "A velocidade de download mostra a rapidez com que os dados chegam no seu dispositivo.",
    detail:
      "Ela influencia atividades como acessar sites, assistir vídeos e fazer downloads de arquivos.",
    conclusion:
      "Quanto maior a taxa em Mbps, melhor tende a ser sua navegação.",
  },
  {
    title: "Upload",
    description:
      "A velocidade de upload indica a rapidez com que você envia dados para a internet.",
    detail:
      "Ela influencia ações como videochamadas, envio de imagens e transferência de arquivos.",
    conclusion:
      "Quanto maior o valor, mais estável tende a ser sua conexão.",
  },
  {
    title: "Ping",
    description:
      "O ping mede o tempo de resposta entre o seu dispositivo e o servidor do teste.",
    detail:
      "Ele impacta atividades em tempo real, como jogos online, chamadas e transmissões ao vivo.",
    conclusion:
      "Quanto menor o valor em ms, melhor tende ser a resposta da conexão.",
  },
];

export default function TesteDeVelocidade() {
  const {getAdverts} = useHomeSections();
  const advert = getAdverts("testeVelocidadeBanner")[0];
  const image = resolveImageSrc(advert, null);

  return (
    <div className="min-h-full bg-light">
      <section className="w-full">
        <HomeHeroBanner
          alt="Banner da página de teste de velocidade"
          className="!aspect-[390/608] !h-auto !max-h-none !w-full md:!aspect-auto md:!h-[350px] md:!max-h-none"
          contentClassName="text-light md:flex md:items-center"
          desktopImage={image || bannerTesteVelocidade}
          tabletImage={image || bannerTesteVelocidade}
          mobileImage={image || bannerTesteVelocidadeMobile}
          mobileImageClassName="!object-contain"
        >
          <div className="container flex h-full flex-col items-center justify-between px-8 pb-8 pt-7 text-center md:block md:h-auto md:px-16 md:py-0 md:text-left">
            <div className="max-w-[250px] md:max-w-md">
              <h1 className="text-[2rem] font-bold leading-none text-light md:text-5xl md:leading-tight">
                {advert?.title || "Teste sua velocidade"}
              </h1>
              <p className="mt-2 text-[0.95rem] font-medium leading-tight text-light/90 md:mt-3 md:text-xl">
                {advert?.description || "Confira agora o desempenho da sua internet em tempo real."}
              </p>
            </div>
            <a
              href={advert?.cta?.href || "https://www.speedtest.net/pt"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-44 items-center justify-center rounded-xl bg-darkgreen px-4 py-3 text-center text-base font-semibold text-light transition hover:bg-primary md:mt-6 md:w-60 md:text-2xl"
            >
              {advert?.cta?.label || "Iniciar teste"}
            </a>
          </div>
        </HomeHeroBanner>
      </section>

      <section className="w-full bg-light">
        <div className="container px-8 py-12 md:px-16 md:py-16">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold leading-tight text-primary md:text-[3.25rem]">
              Teste sua internet com precisão!
            </h2>
            <p className="mt-4 max-w-3xl text-2xl leading-tight text-darkgreen md:text-[2rem]">
              Antes de iniciar, para garantir precisão dos testes, recomendamos que siga os seguintes passos:
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

      <section className="bg-lightgreenBackground pb-8 sm:pb-12 lg:pb-24 xl:pb-36">
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
            *O Speedtest permite testar a velocidade da sua internet em tempo real,
            avaliando o desempenho da conexão e identificando possíveis lentidões.
            Ao fazer o teste de velocidade, você observa se a internet que chega é a
            que está dentro do esperado para o seu plano.
          </p>
        </div>
      </section>
    </div>
  );
}
