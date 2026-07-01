import Image from "next/image";
import Link from "next/link";
import {Gauge, Radio, RefreshCcw} from "lucide-react";
import banner from "@/assets/ultra/banner.png";
import servidor from "@/assets/ultra/servidor.png";
import card1 from "@/assets/ultra/card1.png";
import card2 from "@/assets/ultra/card2.png";
import card3 from "@/assets/ultra/card3.png";
import lesteUltraLogo from "@/assets/ultra/lesteultra.svg";
import facebook from "@/assets/icons/footer/facebook.svg";
import insta from "@/assets/icons/footer/insta.svg";
import whatsapp from "@/assets/icons/footer/whatsapp.svg";
import linkedin from "@/assets/icons/footer/linkedin.svg";
import UltraLeadForm from "@/pageComponents/ultra/UltraLeadForm";

const plans = [
  {speed: "2.5", price: "500"},
  {speed: "5", price: "950"},
  {speed: "7.5", price: "1.500"},
  {speed: "10", price: "3.000"},
];

const features = [
  {
    title: "MAIS RÁPIDOS",
    text: "A nova tecnologia XGS-PON atinge velocidades de até 10 GIGA",
    icon: Gauge,
  },
  {
    title: "SUPER ESTÁVEIS",
    text: "O Leste Ultra é 100% Fibra Ótica. A fibra chega dentro da sua casa, garantindo mais estabilidade.",
    icon: Radio,
  },
  {
    title: "SÍNCRONOS",
    text: "A tecnologia XGS-PON é síncrona, capaz de entregar a mesma velocidade de download e upload.",
    icon: RefreshCcw,
  },
];

const possibilities = [
  {
    image: card1,
    title: "STREAMING EM 8K",
    text: "Já imaginou assistir ou transmitir conteúdos em alta definição? Com o Leste Ultra, você poderá assistir vídeos em 8K sem pausas.",
  },
  {
    image: card2,
    title: "DOWNLOAD EM SEGUNDOS",
    text: "Com uma conexão acima de 1 GIGA, seus downloads serão Ultra! Baixe arquivos pesados, como filmes e jogos, em segundos.",
  },
  {
    image: card3,
    title: "CLOUD GAMING",
    text: "Com as plataformas Cloud Gaming e uma ultra conexão, você poderá jogar os últimos lançamentos totalmente online, sem precisar de dispositivos de última geração.",
  },
];

const faqs = [
  {
    question: "Para quem é o Leste Ultra?",
    answer: [
      "O Leste Ultra é para qualquer um que deseja ter a conexão mais rápida já vista na região. Idealmente, quem baixa muito conteúdo, jogos ou trabalha com transferência de arquivos pesados vai aproveitar muito mais dessa tecnologia.",
    ],
  },
  {
    question: "Existe alguma limitação técnica para alcançar a velocidade contratada?",
    answer: [
      "Sim. Como os planos Leste Ultra serão oferecidos em velocidades acima de 1 GIGA existem, além dos limites geográficos (área atendida) e de capacidade por área, limites inerentes aos equipamentos cliente.",
      "As ONUs para essa plataforma que a Leste utiliza entregam uma porta metálica em 10GIGA (PADRÃO 10G Base-T), que ainda é bem rara em equipamentos domésticos. Cabe ao cliente analisar seus equipamentos de rede interna e garantir a compatibilidade e correto uso da banda ofertada. As limitações geográficas e de capacidade devem ser checadas caso a caso junto ao atendimento.",
    ],
  },
  {
    question: "Onde o Leste Ultra está disponível?",
    answer: [
      "Tecnologia disponível apenas para as cidades de Niterói e Maricá. Consulte os bairros e áreas de cobertura com nossos atendentes.",
    ],
  },
  {
    question: "O serviço inclui equipamento Wi-Fi?",
    answer: [
      "Não, o serviço básico fornece apenas o conversor ótico com saída 10GBASE-T. Distribuição da banda é responsabilidade do assinante.",
    ],
  },
  {
    question: "Existem planos com roteador Wi-Fi?",
    answer: [
      "Sim, mas possuem valor diferenciado e especificação clara sobre a entrega do equipamento Wi-Fi.",
    ],
  },
  {
    question: "Qual é o custo de instalação?",
    answer: [
      "R$ 1.500,00 à vista ou parcelado em 10x sem juros para planos Leste Ultra PREDIAL e rede de rua. Todos os planos têm taxa de instalação.",
    ],
  },
  {
    question: "Os planos podem ser divididos ou revendidos?",
    answer: [
      "Não, são exclusivamente para uso individual e proibidos para divisão ou revenda entre diferentes pessoas ou endereços.",
    ],
  },
  {
    question: "Como posso solicitar a instalação dos planos Leste Ultra?",
    answer: [
      "É necessário preencher o pré-cadastro acima e o pedido estará sujeito à avaliação e análise de viabilidade.",
    ],
  },
];

const socials = [
  {href: "https://www.facebook.com/LesteTelecom/", label: "Facebook", icon: facebook},
  {href: "https://www.instagram.com/lestetelecom/", label: "Instagram", icon: insta},
  {href: "https://api.whatsapp.com/send/?phone=552120201300", label: "WhatsApp", icon: whatsapp},
  {href: "https://www.linkedin.com/company/lestetelecom/posts", label: "LinkedIn", icon: linkedin},
];

const heroVideo = "https://video.wixstatic.com/video/407be7_c55c91307698472bafddef153b5efda0/1080p/mp4/file.mp4";
const ultraSectionGradient = "radial-gradient(circle at 93.33333333333333% 15.833333333333332%, #081315 0%, 20%, rgba(8,19,21,0) 40%), radial-gradient(circle at 12.5% 100%, rgba(8,19,21,0.99) 0%, 25%, rgba(8,19,21,0) 50%), radial-gradient(circle at 22.916666666666664% 30.833333333333336%, #051B19 0%, 42%, rgba(5,27,25,0) 70%), radial-gradient(circle at 58.75% 51.66666666666667%, #000000 0%, 42%, rgba(0,0,0,0) 70%), radial-gradient(circle at 48.9013671875% 49.521484375%, #000000 0%, 100%, rgba(0,0,0,0) 100%)";

export const metadata = {
  title: "Leste Ultra | Leste Telecom",
  description: "Conheça o Leste Ultra, planos XGS-PON com velocidades de até 10 GIGA.",
};

function LogoUltra() {
  return (
    <Link href="/" className="inline-flex" aria-label="Leste Ultra">
      <Image
        src={lesteUltraLogo}
        alt="Leste Ultra"
        width={551}
        height={90}
        priority
        className="h-auto w-[min(82vw,551px)]"
      />
    </Link>
  );
}

export default function Ultra() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#000806] text-white">
      <section className="relative min-h-[600px] bg-black md:min-h-[730px]">
        <video
          className="absolute inset-0 h-full w-full object-cover object-top opacity-95"
          src={heroVideo}
          poster={banner.src}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,.2)_45%,#000806_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[600px] max-w-[980px] flex-col px-6 pt-12 md:min-h-[730px] md:pt-16">
          <div className="text-center">
            <LogoUltra />
          </div>

          <div className="mt-auto max-w-[360px] pb-24 md:ml-8 md:pb-28">
            <h1 className="text-[2rem] font-black uppercase leading-[0.95] tracking-[-0.04em] md:text-[2.55rem]">
              Com a Leste, você<br />
              já está no <span className="text-[#56ffe0]">futuro</span>
            </h1>
            <p className="mt-6 max-w-[260px] text-[12px] font-semibold leading-tight text-white/78">
              O Leste Ultra é uma forma muito mais poderosa de se conectar com a internet.
            </p>
          </div>
        </div>
      </section>

      <section
        className="relative py-8 md:py-10"
        style={{background: ultraSectionGradient}}
      >
        <div className="relative mx-auto grid max-w-[950px] grid-cols-1 gap-4 px-6 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <article
                key={feature.title}
                className="min-h-[172px] rounded-xl bg-[linear-gradient(135deg,rgba(12,78,63,.95),rgba(0,12,10,.95))] p-7 text-center shadow-[0_24px_50px_rgba(0,0,0,.35)]"
              >
                <Icon className="mx-auto h-12 w-12 text-[#2fffe0]" strokeWidth={2.3} />
                <h2 className="mt-6 text-[1.55rem] font-black uppercase leading-none tracking-[-0.04em] text-[#56ffe0]">
                  {feature.title}
                </h2>
                <p className="mx-auto mt-3 max-w-[220px] text-[11px] font-semibold leading-tight text-white/80">
                  {feature.text}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="relative bg-[radial-gradient(circle_at_20%_15%,rgba(0,93,75,.42),transparent_34%),linear-gradient(180deg,#08251f_0%,#001512_100%)] py-14 md:py-24">
        <div className="mx-auto max-w-[990px] px-6">
          <Image src={servidor} alt="" className="mx-auto w-full max-w-[850px]" />

          <div className="mt-10 grid gap-8 md:grid-cols-[0.92fr_1fr] md:items-center">
            <h2 className="text-[2rem] font-black uppercase leading-[1.02] tracking-[-0.04em] md:text-[2.55rem]">
              A tecnologia está<br />
              evoluindo. Com o<br />
              <span className="text-[#56ffe0]">Leste Ultra</span>, você está<br />
              no caminho certo.
            </h2>
            <p className="max-w-[470px] text-[13px] font-semibold leading-[1.75] text-white/82">
              Jogos em Nuvem, Cloud Computing, Internet das Coisas, esses são termos que você vai ouvir cada vez mais ao longo do tempo. No futuro, toda a sua casa será movida pela internet. O importante é que com os planos Leste Ultra, você já está preparado para essas mudanças.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#001512] pb-20">
        <div className="mx-auto max-w-[790px] px-6">
          <h2 className="text-center text-[1.7rem] font-black uppercase tracking-[-0.03em] text-[#56ffe0]">
            O que é possível com o Leste Ultra
          </h2>

          <div className="mt-9 space-y-5">
            {possibilities.map((item) => (
              <article key={item.title} className="grid overflow-hidden rounded-xl bg-[#0b4b3e] shadow-[0_18px_32px_rgba(0,0,0,.24)] md:grid-cols-[260px_1fr]">
                <div className="relative h-[180px] md:h-full">
                  <Image src={item.image} alt="" fill sizes="260px" className="object-cover" />
                </div>
                <div className="p-6 md:px-8 md:py-7">
                  <h3 className="text-[1.65rem] font-black uppercase leading-none tracking-[-0.04em]">
                    <span className="text-[#56ffe0]">{item.title.split(" ")[0]}</span>{" "}
                    {item.title.split(" ").slice(1).join(" ")}
                  </h3>
                  <p className="mt-4 text-[12px] font-semibold leading-snug text-white/82">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#001512] py-14">
        <div className="mx-auto max-w-[820px] px-6 text-center">
          <h2 className="text-[1.7rem] font-black tracking-[-0.04em]">
            Seja o primeiro a ter a conexão do <span className="text-[#56ffe0]">futuro.</span>
          </h2>

          <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
            {plans.map((plan) => (
              <article key={plan.speed} className="rounded-[5px] border border-[#00b99b]/80 bg-[#001c18] px-4 py-7">
                <div className="text-[4.2rem] font-light leading-none tracking-[-0.06em]">{plan.speed}</div>
                <div className="mt-1 text-[1.2rem] uppercase text-white/45">Giga</div>
                <div className="mt-9 flex items-end justify-center gap-1">
                  <span className="pb-2 text-[11px] font-bold leading-none text-white/55">Por<br />R$</span>
                  <span className="text-[2.55rem] font-light leading-none">{plan.price}</span>
                  <span className="pb-2 text-[11px] font-bold leading-none text-white/55">,00<br />/Mês</span>
                </div>
                <a
                  href="#preparado"
                  className="mt-8 inline-flex min-h-10 w-full items-center justify-center rounded-[4px] bg-[#56ffe0] px-4 text-sm font-black text-[#00231d] transition hover:bg-white"
                >
                  Peça Agora
                </a>
              </article>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-[580px] text-[11px] font-bold text-white/75">
            Para mais informações, consulte as condições completas de adesão no{" "}
            <Link href="/faq" className="underline underline-offset-2">
              nosso FAQ.
            </Link>
          </p>
        </div>
      </section>

      <section id="preparado" className="bg-[linear-gradient(110deg,#08251f_0%,#00100d_60%,#000806_100%)] py-20">
        <div className="mx-auto max-w-[720px] px-6">
          <div className="text-center">
            <h2 className="text-[2.35rem] font-black uppercase leading-none tracking-[-0.04em]">
              Você está <span className="text-[#56ffe0]">preparado?</span>
            </h2>
            <p className="mt-5 text-[12px] font-semibold text-white/80">
              Inscreva-se para saber quando o Leste ULTRA estará disponível.
            </p>
          </div>

          <UltraLeadForm />
        </div>
      </section>

      <section className="bg-[linear-gradient(105deg,#08251f_0%,#001512_48%,#000806_100%)] py-20">
        <div className="mx-auto max-w-[780px] px-6">
          <h2 className="text-[1.65rem] font-black text-[#56ffe0]">Perguntas frequentes</h2>

          <div className="mt-9 divide-y divide-white/5">
            {faqs.map((item) => (
              <details key={item.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-[13px] font-black text-white marker:hidden">
                  {item.question}
                  <span className="text-xl font-light text-white/75 group-open:rotate-45">+</span>
                </summary>
                <div className="mt-4 max-w-[680px] space-y-4 text-sm leading-6 text-white/70">
                  {item.answer.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/faq"
              className="inline-flex h-10 min-w-[220px] items-center justify-center rounded-full border border-[#56ffe0] px-8 text-sm font-bold text-white transition hover:bg-[#56ffe0] hover:text-[#00231d]"
            >
              Acesse o FAQ completo
            </Link>

            <div className="mt-8 flex justify-center gap-2">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-6 w-6 items-center justify-center rounded-full bg-white"
                >
                  <Image src={item.icon} alt="" className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
