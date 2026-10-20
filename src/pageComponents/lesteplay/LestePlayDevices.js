import Image from "next/image";
import devicesMockup from "@/assets/lesteplay/aparelhos-watch.webp";
import LestePlayShapes from "@/pageComponents/lesteplay/LestePlayShapes";

const DESKTOP_SHAPES = [
  {
    wrapper: "left-[calc(var(--lp-x)+576px)] top-[-327.11px] h-[849.11px] w-[1548.813px]",
    shape: "h-[868.08px] w-[1368.329px] rounded-[167.791px] border-[#008e6e] bg-[rgba(0,75,59,0.2)] shadow-[19.056px_0px_20.397px_0px_rgba(0,52,41,0.2)]",
  },
  {
    wrapper: "left-[calc(var(--lp-x)+634.65px)] top-[-278.83px] h-[753.165px] w-[1430.331px]",
    shape: "h-[769.991px] w-[1270.241px] rounded-[142.622px] border-[#008e6e] bg-[rgba(0,141,110,0.5)] shadow-[17.645px_0px_17.362px_0px_rgba(0,62,49,0.2)]",
  },
  {
    wrapper: "left-[calc(var(--lp-x)+706.19px)] top-[-246.02px] h-[657.221px] w-[1311.849px]",
    shape: "h-[671.903px] w-[1172.153px] rounded-[109.064px] border-[#24826f] bg-primary shadow-[19.762px_0px_14.751px_0px_rgba(0,62,49,0.2)]",
  },
];

const MOBILE_SHAPES = [
  {
    wrapper: "left-[-79px] top-[247px] h-[456px] w-[831.763px]",
    shape: "h-[466.187px] w-[734.838px] rounded-[90.109px] border-[#008e6e] bg-[rgba(0,75,59,0.2)] shadow-[10.234px_0px_10.954px_0px_rgba(0,52,41,0.2)]",
  },
  {
    wrapper: "left-[-47.5px] top-[272.93px] h-[404.475px] w-[768.135px]",
    shape: "h-[413.511px] w-[682.161px] rounded-[76.593px] border-[#008e6e] bg-[rgba(0,141,110,0.5)] shadow-[9.476px_0px_9.324px_0px_rgba(0,62,49,0.2)]",
  },
  {
    wrapper: "left-[-9.08px] top-[290.55px] h-[352.949px] w-[704.506px]",
    shape: "h-[360.834px] w-[629.485px] rounded-[58.571px] border-[#24826f] bg-primary shadow-[10.613px_0px_7.922px_0px_rgba(0,62,49,0.2)]",
  },
];

export default function LestePlayDevices() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-8 overflow-hidden bg-[#037258] px-8 py-[60px] text-center text-white lg:items-start lg:gap-[60px] lg:pl-[calc(var(--lp-x)+100px)] lg:pr-[100px] lg:py-20 lg:text-left [--lp-x:max(0px,calc(50%-720px))]">
      <LestePlayShapes shapes={MOBILE_SHAPES} className="flex lg:hidden"/>
      <LestePlayShapes shapes={DESKTOP_SHAPES} className="hidden lg:flex"/>

      <h2 className="relative w-[305px] text-[32px] leading-[1.05] lg:w-[561px] lg:text-[64px]">
        Escolha a tela para <strong className="font-bold">dar o play!</strong>
      </h2>
      <p className="relative w-[256px] text-base leading-[1.1] lg:w-[476px] lg:text-[32px]">
        Assista pelo <strong className="font-bold">aplicativo Watch</strong> em dispositivos compatíveis ou pelo navegador.
      </p>

      <div className="relative aspect-[755/407] w-[326px] max-w-full shrink-0 overflow-hidden lg:absolute lg:right-[calc(var(--lp-x)+50px)] lg:top-1/2 lg:w-[min(755px,calc(100%-685px))] lg:-translate-y-1/2">
        <Image
          src={devicesMockup}
          alt="Aplicativo Watch na TV, no notebook e no celular"
          sizes="(min-width: 1024px) 889px, 384px"
          className="absolute left-[-8.67%] top-[-13.4%] h-[122.73%] w-[117.69%] max-w-none"
        />
      </div>

      <a
        href="#ativacao"
        className="relative whitespace-nowrap rounded-full bg-white px-6 py-3 text-xl font-bold leading-[1.1] text-[#037258] transition hover:bg-light lg:px-8 lg:py-[19px] lg:text-2xl"
      >
        Saiba como ativar
      </a>
    </section>
  );
}
