import Image from "next/image";
import Link from "next/link";
import TrackedLink from "@/components/links/TrackedLink";
import familyPhoto from "@/assets/lesteplay/chamada-familia-sofa.webp";
import LestePlayShapes from "@/pageComponents/lesteplay/LestePlayShapes";
import {LESTE_PLAY_SALES_URL} from "@/pageComponents/lesteplay/lestePlayData";

const NEON_BUTTON_GRADIENT = "linear-gradient(119.39deg, #28ffdf 6.58%, #00ffa6 58.11%, #28ffdf 101.33%)";

const DESKTOP_SHAPES = [
  {
    wrapper: "left-[calc(var(--lp-x)-707px)] top-[-106.24px] h-[849.11px] w-[1548.813px]",
    shape: "h-[868.08px] w-[1368.329px] rounded-[167.791px] border-[#008e6e] bg-[rgba(0,75,59,0.2)] shadow-[19.056px_0px_20.397px_0px_rgba(0,52,41,0.2)]",
  },
  {
    wrapper: "left-[calc(var(--lp-x)-648.35px)] top-[-57.96px] h-[753.165px] w-[1430.331px]",
    shape: "h-[769.991px] w-[1270.241px] rounded-[142.622px] border-[#008e6e] bg-[rgba(0,141,110,0.5)] shadow-[17.645px_0px_17.362px_0px_rgba(0,62,49,0.2)]",
  },
  {
    wrapper: "left-[calc(var(--lp-x)-576.81px)] top-[-25.16px] h-[657.221px] w-[1311.849px]",
    shape: "h-[671.903px] w-[1172.153px] rounded-[109.064px] border-[#24826f] bg-primary shadow-[19.762px_0px_14.751px_0px_rgba(0,62,49,0.2)]",
  },
];

const MOBILE_SHAPES = [
  {
    wrapper: "left-[-140px] top-[-29px] h-[322px] w-[587.342px]",
    shape: "h-[329.194px] w-[518.898px] rounded-[63.63px] border-[#008e6e] bg-[rgba(0,75,59,0.2)] shadow-[7.226px_0px_7.735px_0px_rgba(0,52,41,0.2)]",
  },
  {
    wrapper: "left-[-117.76px] top-[-10.69px] h-[285.616px] w-[542.411px]",
    shape: "h-[291.997px] w-[481.702px] rounded-[54.085px] border-[#008e6e] bg-[rgba(0,141,110,0.5)] shadow-[6.691px_0px_6.584px_0px_rgba(0,62,49,0.2)]",
  },
  {
    wrapper: "left-[-90.63px] top-[1.75px] h-[249.232px] w-[497.48px]",
    shape: "h-[254.8px] w-[444.504px] rounded-[41.359px] border-[#24826f] bg-primary shadow-[7.494px_0px_5.594px_0px_rgba(0,62,49,0.2)]",
  },
];

export default function LestePlayFinalCta() {
  return (
    <section className="relative w-full overflow-hidden rounded-t-[40px] bg-[#037258] px-8 py-[60px] text-white lg:rounded-t-[80px] lg:pl-[calc(var(--lp-x)+100px)] lg:pr-[100px] lg:py-20 [--lp-x:max(0px,calc(50%-720px))]">
      <Image
        src={familyPhoto}
        alt=""
        sizes="(min-width: 1024px) 1126px, 604px"
        className="absolute left-1/2 top-[211px] h-[337px] w-[604px] max-w-none -translate-x-1/2 object-cover lg:left-[min(calc(100%-965px),calc(var(--lp-x)+475px))] lg:top-[-38.24px] lg:h-auto lg:w-[max(1125.346px,calc(100%-var(--lp-x)-315px))] lg:translate-x-0"
      />
      <div aria-hidden="true" className="absolute inset-x-0 top-[206px] h-[104px] bg-gradient-to-b from-[#037258] to-[rgba(3,114,88,0)] lg:hidden"/>
      <div aria-hidden="true" className="absolute inset-x-0 top-[206px] h-[104px] bg-gradient-to-b from-[#037258] to-[rgba(3,114,88,0)] lg:hidden"/>
      <div aria-hidden="true" className="absolute inset-x-0 top-[427px] h-[121px] bg-gradient-to-t from-[#037258] to-[rgba(3,114,88,0)] lg:hidden"/>
      <LestePlayShapes shapes={MOBILE_SHAPES} className="flex lg:hidden"/>
      <LestePlayShapes shapes={DESKTOP_SHAPES} className="hidden lg:flex"/>

      <div className="relative mx-auto flex max-w-[326px] flex-col gap-[377px] lg:mx-0 lg:max-w-none lg:gap-[60px]">
        <div className="flex flex-col items-start gap-8 lg:gap-[60px]">
          <h2 className="text-[32px] leading-[1.05] lg:w-[561px] lg:text-[64px]">
            Seu próximo play <strong className="font-bold">começa com a Leste.</strong>
          </h2>
          <TrackedLink
            href={LESTE_PLAY_SALES_URL}
            className="whitespace-nowrap rounded-full px-6 py-3 text-xl font-bold leading-[1.1] text-[#037258] transition hover:brightness-95 lg:px-8 lg:py-[19px] lg:text-2xl"
            style={{backgroundImage: NEON_BUTTON_GRADIENT}}
          >
            Assine agora!
          </TrackedLink>
        </div>
        <p className="text-center text-sm leading-[1.1] lg:w-[476px] lg:text-left lg:text-base">
          Disponibilidade e condições de contratação variam conforme a oferta e a localidade. Conteúdos, canais e funcionalidades variam por plano e podem sofrer alterações ou indisponibilidade sem aviso prévio. Consulte condições em{" "}
          <Link href="/faq?categoria=Leste+Play" className="underline">lestetelecom.com.br/faq</Link>
        </p>
      </div>
    </section>
  );
}
