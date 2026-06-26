"use client";

import Image from "next/image";
import {useState} from "react";
import HeroSlide from "@/pageComponents/home/HeroSlide";
import CardBanner from "@/components/cards/CardBanner";
import ModalViabilidade from "@/components/layout/ModalViabilidade";
import bannerAssineOnline from "@/assets/svg-melhorcaminho.png";
import localizacaoIcon from "@/assets/Localizacao.svg";
import areaCoberturaImage from "@/assets/areaCobertura.png";
import pinIcon from "@/assets/icons/pin.svg";
import checkIcon from "@/assets/check.svg";
import {SalesProviderNew} from "@/contexts/SalesContextNew";

const COVERAGE_ITEMS = [
  "Internet 100% fibra ótica",
  "Atendimento em cidades do Leste Fluminense",
  "Consulta por CEP e número",
];

const COVERAGE_MAPS = [
  {
    label: "Maricá",
    query: "Maricá, RJ",
    zoom: 12,
  },
  {
    label: "Itaboraí",
    query: "Itaboraí, RJ",
    zoom: 13,
  },
  {
    label: "Mage / Guapimirim",
    query: "Magé e Guapimirim, RJ",
    zoom: 11,
  },
  {
    label: "Rio Bonito",
    query: "Rio Bonito, RJ",
    zoom: 13,
  },
  {
    label: "Tanguá",
    query: "Tanguá, RJ",
    zoom: 13,
  },
  {
    label: "Niterói",
    query: "Niterói, RJ",
    zoom: 13,
  },
  {
    label: "Niterói | Região Oceânica",
    query: "Região Oceânica, Niterói, RJ",
    zoom: 13,
  },
].map((item) => ({
  ...item,
  viewerUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.query)}`,
  embedUrl: `https://www.google.com/maps?q=${encodeURIComponent(item.query)}&z=${item.zoom}&output=embed`,
}));

export default function ViabilidadePage() {
  const [modalViabilidadeOpen, setModalViabilidadeOpen] = useState(false);
  const [activeMap, setActiveMap] = useState(COVERAGE_MAPS[0]);

  return (
    <main className="min-h-full bg-light">
      <HeroSlide />

      <section className="relative overflow-hidden bg-light py-12 md:py-18 lg:py-22">
        <div className="pointer-events-none absolute -right-32 top-18 hidden h-[420px] w-[420px] rounded-full bg-light blur-3xl lg:block" />
        <div className="pointer-events-none absolute -left-40 bottom-8 hidden h-[360px] w-[360px] rounded-full bg-white blur-3xl lg:block" />

        <div className="container relative">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-[3rem] font-bold leading-none tracking-[-0.04em] text-primary md:text-[5rem] lg:text-[5.6rem]">
              Área de cobertura
            </h1>
            <p className="mx-auto mt-4 max-w-3xl text-[1.35rem] leading-tight text-darkgreen md:text-2xl">
              Consulte a disponibilidade no seu endereço.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:gap-8">
            <aside className="relative overflow-hidden rounded-2xl bg-primary p-6 text-white shadow-[0_22px_55px_rgba(0,84,65,.18)] md:p-8 lg:rounded-[2.4rem] lg:p-10">
              <div
                className="absolute inset-0 opacity-[0.18]"
                style={{
                  backgroundImage: `url(${areaCoberturaImage.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div className="absolute -right-24 -top-20 h-56 w-56 rounded-full border-[34px] border-white/10" />
              <div className="absolute -bottom-24 left-10 h-48 w-48 rounded-full bg-darkgreen/40 blur-2xl" />

              <div className="relative">
                <div className="flex h-18 w-18 items-center justify-center rounded-3xl bg-white/95 shadow-[0_18px_35px_rgba(0,0,0,.12)]">
                  <Image src={localizacaoIcon} alt="" className="h-10 w-10" />
                </div>

                <h2 className="mt-7 text-[2.5rem] font-bold leading-none tracking-[-0.04em] md:text-[3.6rem]">
                  Localização
                </h2>
                <p className="mt-4 max-w-[27rem] text-[1.15rem] leading-7 text-white/92 md:text-[1.35rem]">
                  Informe seu CEP e número para verificar a disponibilidade técnica no seu endereço.
                </p>

                <button
                  type="button"
                  onClick={() => setModalViabilidadeOpen(true)}
                  className="mt-8 inline-flex min-h-16 w-full items-center justify-center rounded-full bg-white px-8 text-xl font-bold text-primary shadow-[inset_0_1px_0_rgba(255,255,255,.75),0_18px_38px_rgba(0,0,0,.16)] transition hover:-translate-y-px hover:bg-[#f7fffc] md:w-auto"
                >
                  Consultar viabilidade
                </button>

                <div className="mt-7 space-y-3">
                  {COVERAGE_ITEMS.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-base font-semibold text-white/95 md:text-lg">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary">
                        <Image src={checkIcon} alt="" className="h-3.5 w-3.5" />
                      </span>
                      {item}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => setModalViabilidadeOpen(true)}
                  className="mt-8 inline-flex min-h-14 w-full items-center justify-center rounded-full bg-darkgreen px-8 text-xl font-bold text-white shadow-[inset_0_1px_0_rgba(255,255,255,.16)] transition hover:-translate-y-px hover:bg-[#004333] md:w-auto"
                >
                  planos disponíveis
                </button>
              </div>
            </aside>

            <section className="overflow-hidden rounded-2xl border border-primary/20 bg-white p-4 shadow-[0_24px_60px_rgba(0,84,65,.10)] md:p-5 lg:rounded-[2.4rem]">
              <div className="flex flex-col gap-4 pb-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary/75">
                    Mapa de cobertura
                  </p>
                  <h2 className="mt-1 text-2xl font-bold leading-none tracking-[-0.04em] text-darkgreen md:text-[2.8rem]">
                    {activeMap.label}
                  </h2>
                </div>
                <div className="inline-flex w-fit items-center gap-2 rounded-full bg-light px-4 py-2 text-sm font-bold text-primary md:text-base">
                  <Image src={pinIcon} alt="" className="h-4 w-4" />
                  RJ
                </div>
              </div>

              <div className="mb-5 flex flex-wrap gap-2">
                {COVERAGE_MAPS.map((map) => (
                  <button
                    key={map.label}
                    type="button"
                    onClick={() => setActiveMap(map)}
                    className={[
                      "rounded-full px-4 py-2 text-sm font-semibold transition",
                      activeMap.label === map.label
                        ? "bg-primary text-white shadow-[0_10px_22px_rgba(0,147,115,.20)]"
                        : "bg-light text-darkgreen hover:bg-lightgreenBackground",
                    ].join(" ")}
                  >
                    {map.label}
                  </button>
                ))}
              </div>

              <div className="relative overflow-hidden rounded-xl bg-light lg:rounded-2xl">
                <iframe
                  title={`Mapa de cobertura - ${activeMap.label}`}
                  src={activeMap.embedUrl}
                  className="h-[420px] w-full border-0 md:h-[520px] lg:h-[640px]"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <a
                href={activeMap.viewerUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex min-h-11 items-center justify-center rounded-full border border-primary/25 px-5 text-sm font-bold text-primary transition hover:bg-primary hover:text-white"
              >
                Abrir mapa em tela cheia
              </a>
            </section>
          </div>
        </div>
      </section>

      <CardBanner
        className="bg-light pb-8 translate-y-8 lg:translate-y-0 lg:pb-24 xl:pb-48"
        image={bannerAssineOnline}
        title="Vem para o melhor caminho!"
        buttonText="Assine Online"
        link="https://vendas.lestetelecom.com.br/"
      />

      <SalesProviderNew>
        <ModalViabilidade open={modalViabilidadeOpen} onClose={setModalViabilidadeOpen} />
      </SalesProviderNew>
    </main>
  );
}
