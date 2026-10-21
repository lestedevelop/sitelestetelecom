import Image from "next/image";
import TrackedLink from "@/components/links/TrackedLink";
import posterPhoto from "@/assets/lesteplay/hbo-the-last-of-us.webp";
import hboLogo from "@/assets/lesteplay/hbo-max-logo.svg";
import hboLogoMax from "@/assets/lesteplay/hbo-max-logo-max.svg";
import LestePlayWatchLogo from "@/pageComponents/lesteplay/LestePlayWatchLogo";
import {LESTE_PLAY_SALES_URL} from "@/pageComponents/lesteplay/lestePlayData";

const POSTER_SHADE = "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 747.54 935.17' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(2.7142 118.23 -94.505 2.1692 396.39 199.02)'><stop stop-color='rgba(0,0,0,0)' offset='0'/><stop stop-color='rgba(0,0,0,1)' offset='1'/></radialGradient></defs></svg>\")";
const NEON_TEXT_GRADIENT = "linear-gradient(154.93deg, #28ffdf 6.58%, #00ffa6 58.11%, #28ffdf 101.33%)";
const NEON_BUTTON_GRADIENT = "linear-gradient(119.39deg, #28ffdf 6.58%, #00ffa6 58.11%, #28ffdf 101.33%)";

const HIGHLIGHTS = [
  {title: "Séries HBO:", text: "Produções HBO disponíveis no catálogo."},
  {title: "Filmes e séries:", text: "Mais opções para escolher o próximo play."},
  {title: "HBO Max:", text: "Ative o benefício pela Watch e use sua conta vinculada."},
];

export default function LestePlayHboMax() {
  return (
    <section className="relative isolate flex w-full flex-col items-center gap-8 overflow-hidden bg-black px-8 py-[60px] text-white lg:items-start lg:gap-[60px] lg:pl-[calc(var(--lp-x)+100px)] lg:pr-[100px] lg:py-20 [--lp-x:max(0px,calc(50%-720px))]">
      <div className="relative flex items-center gap-6 lg:gap-10">
        <div role="img" aria-label="HBO Max" className="relative h-[85.839px] w-[117.47px] shrink-0 lg:h-[173.185px] lg:w-[237px]">
          <Image src={hboLogo} alt="" className="absolute inset-[0.94%_0.63%_43.42%_0.64%] h-[55.64%] w-[98.73%]"/>
          <Image src={hboLogoMax} alt="" className="absolute inset-[62.74%_3.76%_1.66%_0.64%] h-[35.6%] w-[95.6%]"/>
        </div>
        <h2 className="w-[147.704px] text-[32px] font-bold leading-[1.05] tracking-[-0.96px] lg:w-[298px] lg:text-[64px] lg:tracking-[-1.92px]">
          para a sua próxima maratona!
        </h2>
      </div>

      <p className="relative w-full text-center text-base leading-[1.1] lg:w-[719px] lg:text-left lg:text-[32px]">
        Com o{" "}
        <strong className="bg-clip-text font-bold text-transparent" style={{backgroundImage: NEON_TEXT_GRADIENT}}>Leste Play Cine + HBO</strong>
        <strong className="font-bold">,</strong> você também acessa a <strong className="font-bold">HBO Max.</strong>
      </p>

      <div className="relative h-[435px] w-[347.721px] max-w-none shrink-0 lg:absolute lg:right-[var(--lp-x)] lg:top-0 lg:-z-10 lg:h-full lg:w-[min(747.541px,calc(100%-692px))]">
        <Image
          src={posterPhoto}
          alt="Pôster da série The Last of Us, da HBO"
          fill
          sizes="(min-width: 1024px) 748px, 348px"
          className="object-cover"
        />
        <div aria-hidden="true" className="absolute inset-0" style={{backgroundImage: POSTER_SHADE}}/>
      </div>

      <ul className="relative flex w-full flex-col gap-4 md:w-auto md:flex-row md:gap-6">
        {HIGHLIGHTS.map(({title, text}) => (
          <li
            key={title}
            className="flex flex-col gap-4 rounded-2xl bg-[linear-gradient(152.44deg,rgba(2,254,169,0.35)_0.1%,rgba(0,0,0,0.35)_99.9%)] p-8 backdrop-blur-[8.057px] md:min-h-[209px] md:w-[200px] md:gap-6 md:bg-[linear-gradient(125.33deg,rgba(2,254,169,0.35)_0.1%,rgba(0,0,0,0.35)_99.9%)]"
          >
            <h3 className="text-2xl font-bold leading-[1.05] tracking-[-0.72px] md:text-[32px] md:tracking-[-0.96px]">{title}</h3>
            <p className="text-base leading-[1.1] md:w-[136px]">{text}</p>
          </li>
        ))}
      </ul>

      <LestePlayWatchLogo className="h-[18.133px] w-[271px] lg:h-6 lg:w-[358.68px]"/>

      <TrackedLink
        href={LESTE_PLAY_SALES_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="relative whitespace-nowrap rounded-full px-6 py-3 text-xl font-bold leading-[1.1] text-black transition hover:brightness-95 lg:px-8 lg:py-[19px] lg:text-2xl"
        style={{backgroundImage: NEON_BUTTON_GRADIENT}}
      >
        Assine agora!
      </TrackedLink>
    </section>
  );
}
