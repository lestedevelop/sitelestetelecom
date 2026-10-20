import Image from "next/image";
import TrackedLink from "@/components/links/TrackedLink";
import bannerPhoto from "@/assets/lesteplay/banner-mulher-sofa.webp";
import logoLestePlay from "@/assets/lesteplay/logo-leste-play.svg";
import LestePlayShapes from "@/pageComponents/lesteplay/LestePlayShapes";
import {LESTE_PLAY_SALES_URL} from "@/pageComponents/lesteplay/lestePlayData";

const DESKTOP_SHAPES = [
  {
    wrapper: "left-[calc(var(--lp-x)-750px)] top-[-128px] h-[849.11px] w-[1548.813px]",
    shape: "h-[868.08px] w-[1368.329px] rounded-[167.791px] border-[#008e6e] bg-[rgba(0,75,59,0.2)] shadow-[19.056px_0px_20.397px_0px_rgba(0,52,41,0.2)]",
  },
  {
    wrapper: "left-[calc(var(--lp-x)-691.35px)] top-[-79.72px] h-[753.165px] w-[1430.331px]",
    shape: "h-[769.991px] w-[1270.241px] rounded-[142.622px] border-[#008e6e] bg-[rgba(0,141,110,0.5)] shadow-[17.645px_0px_17.362px_0px_rgba(0,62,49,0.2)]",
  },
  {
    wrapper: "left-[calc(var(--lp-x)-619.81px)] top-[-46.91px] h-[657.221px] w-[1311.849px]",
    shape: "h-[671.903px] w-[1172.153px] rounded-[109.064px] border-[#24826f] bg-primary shadow-[19.762px_0px_14.751px_0px_rgba(0,62,49,0.2)]",
  },
];

const MOBILE_SHAPES = [
  {
    wrapper: "left-[-249px] top-[-141px] h-[411.11px] w-[749.882px]",
    shape: "h-[420.294px] w-[662.498px] rounded-[81.239px] border-[#008e6e] bg-[rgba(0,75,59,0.2)] shadow-[9.226px_0px_9.876px_0px_rgba(0,52,41,0.2)]",
  },
  {
    wrapper: "left-[-220.6px] top-[-117.62px] h-[364.657px] w-[692.517px]",
    shape: "h-[372.803px] w-[615.007px] rounded-[69.053px] border-[#008e6e] bg-[rgba(0,141,110,0.5)] shadow-[8.543px_0px_8.406px_0px_rgba(0,62,49,0.2)]",
  },
  {
    wrapper: "left-[-185.97px] top-[-101.74px] h-[318.204px] w-[635.152px]",
    shape: "h-[325.313px] w-[567.516px] rounded-[52.805px] border-[#24826f] bg-primary shadow-[9.568px_0px_7.142px_0px_rgba(0,62,49,0.2)]",
  },
];

export default function LestePlayHero() {
  return (
    <section className="relative h-[561px] w-full overflow-hidden bg-primary [--lp-x:max(0px,calc(50%-720px))]">
      <Image
        src={bannerPhoto}
        alt=""
        priority
        sizes="(min-width: 1024px) 1670px, 240vw"
        className="absolute left-[-74.4%] top-[154px] h-auto w-[237.8%] max-w-none md:left-1/2 md:w-[1023px] md:-translate-x-[53.65%] lg:left-[calc(50%-616px)] lg:translate-x-0 lg:top-[-109px] lg:h-[778px] lg:w-[1670px] lg:object-cover"
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-[142px] bg-gradient-to-b from-[rgba(0,32,25,0)] to-[#002910] lg:hidden"/>
      <LestePlayShapes shapes={MOBILE_SHAPES} className="flex lg:hidden"/>
      <LestePlayShapes shapes={DESKTOP_SHAPES} className="hidden lg:flex"/>

      <div className="relative flex h-full flex-col items-center px-4 pt-[60px] text-center text-white lg:items-start lg:pl-[calc(var(--lp-x)+100px)] lg:pr-[100px] lg:pt-[82px] lg:text-left">
        <Image
          src={logoLestePlay}
          alt="Leste Play"
          className="h-auto w-[194.6px] lg:w-[438.5px]"
        />
        <h1 className="mt-6 text-[32px] font-bold leading-[1.05] tracking-[-0.96px] lg:mt-[47px] lg:w-[440px] lg:text-[64px] lg:tracking-[-1.92px]">
          TV e streaming juntos!
        </h1>
        <p className="mt-2 text-sm leading-[1.101] lg:mt-4 lg:text-2xl">
          Do jogo ao filme, encontre seu plano.
        </p>
        <TrackedLink
          href={LESTE_PLAY_SALES_URL}
          className="absolute bottom-[60px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-6 py-3 text-2xl font-bold leading-[1.101] text-[#005542] transition hover:bg-light lg:static lg:mt-[56px] lg:translate-x-0 lg:px-8 lg:py-[19px]"
        >
          Assine agora!
        </TrackedLink>
      </div>
    </section>
  );
}
