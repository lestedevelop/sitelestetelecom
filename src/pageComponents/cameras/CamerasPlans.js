import Image from "next/image";
import Link from "next/link";
import camera360 from "@/assets/cameras/camera360.png";
import camerafixa from "@/assets/cameras/camerafixa.png";
import plano360 from "@/assets/cameras/plano360.png";
import planofixa from "@/assets/cameras/planofixa.png";
import whatsIcon from "@/assets/whatsIcon.svg";

const PLANS = [
  {
    key: "fixa",
    titleHighlight: "Fixa",
    image: camerafixa,
    cardImage: planofixa,
    imageClassName: "w-[142px] md:w-[164px]",
    price: "39",
    cents: "90",
  },
  {
    key: "360",
    titleHighlight: "360",
    showDegree: true,
    image: camera360,
    cardImage: plano360,
    imageClassName: "w-[164px] md:w-[186px]",
    price: "49",
    cents: "90",
  },
];

const FAQ_URL = "https://www.lestetelecom.com.br/faq-cameras";
const SHOW_IMAGE_CARDS_ONLY = true;

export default function CamerasPlans() {
  return (
    <section className="w-full bg-light">
      <div className="container py-12 md:py-20">
        <div className="mx-auto max-w-[980px]">
          <h3 className="text-center text-3xl font-semibold text-primary md:text-5xl">
            <span className="relative inline-block px-5 py-1 md:px-8">
              <span className="absolute -left-1 -top-1 h-4 w-4 border-l-4 border-t-4 border-lightgreen md:-left-2 md:-top-2 md:h-6 md:w-6" />
              <span className="absolute -bottom-1 -right-1 h-4 w-4 border-b-4 border-r-4 border-lightgreen md:-bottom-2 md:-right-2 md:h-6 md:w-6" />
              Conheca nossos planos
            </span>
          </h3>

          <div className="mt-12 grid justify-items-center gap-12 md:grid-cols-2 md:gap-16">
            {PLANS.map((plan) => (
              <div key={plan.key} className="flex w-full max-w-[320px] flex-col items-center">
                <h4 className="text-center text-[1.95rem] leading-none text-darkgreen md:text-[2.2rem]">
                  Camera{" "}
                  <span className="font-semibold italic">
                    {plan.titleHighlight}
                    {plan.showDegree ? <>&deg;</> : null}
                  </span>
                </h4>

                {SHOW_IMAGE_CARDS_ONLY ? (
                  <Image
                    src={plan.cardImage}
                    alt={`Card do plano camera ${plan.titleHighlight}`}
                    className="mt-5 h-auto w-[296px]"
                  />
                ) : (
                  <div className="relative mt-5 flex w-full flex-col items-center rounded-[28px] border border-primary/70 bg-light px-6 pb-7 pt-28 md:rounded-[30px] md:px-7 md:pb-8 md:pt-32">
                    <div className="absolute -top-10 flex w-full justify-center md:-top-12">
                      <Image
                        src={plan.image}
                        alt={`Plano camera ${plan.titleHighlight}`}
                        className={`h-auto ${plan.imageClassName}`}
                      />
                    </div>

                    <div className="flex items-end justify-center text-primary">
                      <div className="mb-2 mr-2 flex flex-col leading-none">
                        <span className="text-[1.45rem] md:text-[1.7rem]">por</span>
                        <span className="text-[2rem] md:text-[2.45rem]">R$</span>
                      </div>

                      <span className="text-[4.8rem] font-medium leading-[0.82] md:text-[5.6rem]">
                        {plan.price}
                      </span>

                      <div className="mb-2 ml-1 flex flex-col leading-none">
                        <span className="text-[1.8rem] md:text-[2.1rem]">
                          ,{plan.cents}
                        </span>
                        <span className="mt-1 text-[1.15rem] md:text-[1.35rem]">
                          /mes
                        </span>
                      </div>
                    </div>

                    <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-lightgreen px-3 py-1 text-[11px] font-semibold text-primary md:text-sm">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-4 w-4 md:h-[18px] md:w-[18px]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 18a4 4 0 1 1 .9-7.9A5.5 5.5 0 0 1 18 12a3 3 0 0 1-.4 6H7Z" />
                        <path d="M9.5 14.5 12 12l2.5 2.5" />
                      </svg>
                      Nuvem por 7 dias gratis
                    </div>

                    <p className="mt-4 text-center text-lg font-semibold text-primary">
                      Fidelidade de 12 meses
                    </p>

                    <Link
                      href="/vendas"
                      className="mt-6 inline-flex items-center gap-2 rounded-[10px] bg-darkgreen px-5 py-3 text-sm font-semibold text-light transition hover:opacity-90 md:px-6 md:text-base"
                    >
                      Contrate agora!
                      <Image
                        src={whatsIcon}
                        alt=""
                        width={16}
                        height={16}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-[940px] text-center text-[10px] font-medium leading-relaxed text-primary/75 md:mt-12 md:text-xs">
            O servico de armazenamento em nuvem e exclusivo para clientes ativos da
            Leste. A camera e locada e funciona apenas com a rede da Leste. A
            qualidade e o acesso as imagens dependem da estabilidade do plano de
            internet contratado. O servico nao substitui sistemas profissionais de
            seguranca e nao garante prevencao contra furtos, roubos ou danos ao
            imovel. Contrato de fidelidade de 12 meses. Disponivel para clientes
            das cidades de Niteroi/RJ e Marica/RJ. Oferta valida ate 30/04/2026.
            Para consultar o regulamento, termos e condicoes de uso acesse o FAQ em
            nosso site:{" "}
            <a
              href={FAQ_URL}
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-primary underline decoration-primary/50 underline-offset-2"
            >
              www.lestetelecom.com.br/faq-cameras
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
