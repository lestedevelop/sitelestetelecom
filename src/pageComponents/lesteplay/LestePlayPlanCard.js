import Image from "next/image";
import TrackedLink from "@/components/links/TrackedLink";
import planLogo from "@/assets/lesteplay/plano-logo.svg";
import planDivider from "@/assets/lesteplay/plano-divisor.svg";
import LestePlayWatchLogo from "@/pageComponents/lesteplay/LestePlayWatchLogo";
import {LESTE_PLAY_SALES_URL} from "@/pageComponents/lesteplay/lestePlayData";

const NEON_GRADIENT = "linear-gradient(127.65deg, #28ffdf 6.58%, #00ffa6 58.11%, #28ffdf 101.33%)";
const TILE_GRADIENT = "linear-gradient(113.42deg, rgba(1,255,167,0.2) 20.4%, rgba(4,172,132,0) 100.08%)";
const COUNT_GRADIENT = "linear-gradient(126.05deg, rgba(1,255,167,0.2) 19.14%, rgba(4,172,132,0) 80.75%)";
const COUNT_INNER_GRADIENT = "linear-gradient(126.72deg, rgba(1,255,167,0.2) 19.14%, rgba(4,172,132,0) 80.75%)";
const TILE_STROKE = "linear-gradient(140.77deg, #03ffa9 21.68%, rgba(24,153,134,0) 96.88%)";
const LOGO_STROKE = "linear-gradient(141.76deg, #28ffdf 22.09%, rgba(24,153,134,0) 98.12%)";
const COUNT_STROKE = "linear-gradient(139.81deg, #03ffa9 21.67%, rgba(24,153,134,0) 75.07%)";
const COUNT_INNER_STROKE = "linear-gradient(140.5deg, #03ffa9 21.74%, rgba(24,153,134,0) 75.01%)";

function Divider() {
  return <Image src={planDivider} alt="" className="h-px w-[15.142em]"/>;
}

function GradientStroke({width, radius, gradient}) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute"
      style={{
        inset: `-${width}`,
        padding: width,
        borderRadius: `calc(${radius} + ${width})`,
        backgroundImage: gradient,
        mask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        maskComposite: "exclude",
        WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
        WebkitMaskComposite: "xor",
      }}
    />
  );
}

function ChannelTile({channel}) {
  return (
    <div className="relative h-[5.315em] w-[6.725em] rounded-[1.08em] backdrop-blur-[7.6px]" style={{backgroundImage: TILE_GRADIENT}}>
      <GradientStroke width="0.071em" radius="1.08em" gradient={TILE_STROKE}/>
      <div className="absolute inset-[6.06%_5.18%_6.08%_4.78%]">
        <GradientStroke width="0.102em" radius="0.895em" gradient={LOGO_STROKE}/>
        <div className={`absolute inset-0 overflow-hidden rounded-[0.895em] ${channel.tile}`}>
          <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${channel.crop ? "overflow-hidden" : ""} ${channel.logo}`}>
            <Image
              src={channel.src}
              alt={channel.alt}
              sizes="160px"
              className={channel.crop ? `absolute max-w-none ${channel.crop}` : "h-full w-full object-cover"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ChannelCountTile({count}) {
  return (
    <div className="relative h-[5.315em] w-[6.724em] rounded-[1.08em] backdrop-blur-[7.6px]" style={{backgroundImage: COUNT_GRADIENT}}>
      <GradientStroke width="0.071em" radius="1.08em" gradient={COUNT_STROKE}/>
      <div className="absolute inset-[0.322em_0.348em_0.324em_0.322em] flex flex-col items-center justify-center rounded-[0.895em]" style={{backgroundImage: COUNT_INNER_GRADIENT}}>
        <GradientStroke width="0.07em" radius="0.895em" gradient={COUNT_INNER_STROKE}/>
        <span className="whitespace-nowrap text-[1.779em] font-bold leading-none tracking-[-0.07em] text-[#28ffdf]">{count}</span>
        <span className="text-[1.055em] font-semibold leading-none tracking-[-0.07em] text-white">canais</span>
      </div>
    </div>
  );
}

export default function LestePlayPlanCard({plan}) {
  return (
    <article className="flex w-[18.936em] flex-col items-center gap-[1.265em] rounded-[1.845em] bg-[#037258] px-[1.897em] py-[2.529em] text-white">
      <div className="flex flex-col items-center gap-[0.88em]">
        <Image src={planLogo} alt="Leste Play" className="h-[2.757em] w-[13.838em]"/>
        <h3 className="bg-clip-text text-[1.929em] font-bold leading-[1.188] tracking-[-0.02em] text-transparent" style={{backgroundImage: NEON_GRADIENT}}>
          {plan.name}
        </h3>
      </div>
      <Divider/>
      <p className={`text-center text-[1.419em] leading-[1.101] ${plan.descriptionWidth}`}>
        {plan.description.map(({text, bold}) => (
          <span key={text} className={bold ? "font-bold" : undefined}>{text}</span>
        ))}
      </p>
      <div className="flex w-[14.593em] flex-wrap gap-[0.949em]">
        {plan.channels.map((channel) => (
          <ChannelTile key={channel.alt} channel={channel}/>
        ))}
        <ChannelCountTile count={plan.channelCount}/>
      </div>
      <LestePlayWatchLogo className="h-[0.651em] w-[9.732em]"/>
      <Divider/>
      <div className="flex items-center whitespace-nowrap rounded-[1.437em] bg-[#025b46] px-[1.247em] py-[2.339em] font-semibold leading-none">
        <div className="flex flex-col">
          <span className="text-[1.487em] font-medium tracking-[-0.07em]">Por</span>
          <span className="mt-[0.15em] text-[2.646em] tracking-[-0.08em]">R$</span>
        </div>
        <span className="text-[5.758em] tracking-[-0.05em]">{plan.price.integer}</span>
        <div className="flex flex-col items-end gap-[1.378em]">
          <span className="text-[2.089em] tracking-[-0.07em]">{plan.price.cents}</span>
          <span className="text-[1.228em] tracking-[-0.07em]">/mês</span>
        </div>
      </div>
      <TrackedLink
        href={LESTE_PLAY_SALES_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full px-[1.15em] py-[0.6em] text-[1.628em] font-bold leading-[1.1] text-[#007060] transition hover:brightness-95"
        style={{backgroundImage: NEON_GRADIENT}}
      >
        Assine agora!
      </TrackedLink>
    </article>
  );
}
