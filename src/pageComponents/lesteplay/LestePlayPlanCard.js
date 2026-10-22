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

const TILE_SHAPE = {width: 6.725, height: 5.315, radius: 1.08};
const LOGO_SHAPE = {width: 6.055, height: 4.67, radius: 0.895};
const COUNT_SHAPE = {width: 6.724, height: 5.315, radius: 1.08};
const COUNT_INNER_SHAPE = {width: 6.054, height: 4.669, radius: 0.895};

const toRadians = (degrees) => (degrees * Math.PI) / 180;
const round = (value) => Number(value.toFixed(4));

function squirclePath({width, height, radius}, x = 0, y = 0) {
  const p = Math.min(2 * radius, Math.min(width, height) / 2);
  const smoothing = p / radius - 1;
  const arcMeasure = 90 * (1 - smoothing);
  const arc = round(Math.sin(toRadians(arcMeasure / 2)) * radius * Math.SQRT2);
  const c = radius * Math.tan(toRadians((90 - arcMeasure) / 4)) * Math.cos(toRadians(45 * smoothing));
  const d = round(c * Math.tan(toRadians(45 * smoothing)));
  const b = (p - arc - c - d) / 3;
  const [a, ab, abc, bc] = [2 * b, 3 * b, 3 * b + c, b + c].map(round);
  const r = round(radius);

  return [
    `M${round(x + width - p)} ${round(y)}`,
    `c${a} 0 ${ab} 0 ${abc} ${d}`,
    `a${r} ${r} 0 0 1 ${arc} ${arc}`,
    `c${d} ${round(c)} ${d} ${bc} ${d} ${abc}`,
    `L${round(x + width)} ${round(y + height - p)}`,
    `c0 ${a} 0 ${ab} ${-d} ${abc}`,
    `a${r} ${r} 0 0 1 ${-arc} ${arc}`,
    `c${-round(c)} ${d} ${-bc} ${d} ${-abc} ${d}`,
    `L${round(x + p)} ${round(y + height)}`,
    `c${-a} 0 ${-ab} 0 ${-abc} ${-d}`,
    `a${r} ${r} 0 0 1 ${-arc} ${-arc}`,
    `c${-d} ${-round(c)} ${-d} ${-bc} ${-d} ${-abc}`,
    `L${round(x)} ${round(y + p)}`,
    `c0 ${-a} 0 ${-ab} ${d} ${-abc}`,
    `a${r} ${r} 0 0 1 ${arc} ${-arc}`,
    `c${round(c)} ${-d} ${bc} ${-d} ${abc} ${-d}`,
    "Z",
  ].join("");
}

function svgMask(width, height, path) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${round(width)} ${round(height)}" preserveAspectRatio="none"><path fill-rule="evenodd" d="${path}"/></svg>`;
  const image = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

  return {
    maskImage: image,
    maskSize: "100% 100%",
    maskRepeat: "no-repeat",
    WebkitMaskImage: image,
    WebkitMaskSize: "100% 100%",
    WebkitMaskRepeat: "no-repeat",
  };
}

function squircleMask(shape) {
  return svgMask(shape.width, shape.height, squirclePath(shape));
}

function ringMask(shape, stroke) {
  const outer = {width: shape.width + 2 * stroke, height: shape.height + 2 * stroke, radius: shape.radius + stroke};
  return svgMask(outer.width, outer.height, squirclePath(outer) + squirclePath(shape, stroke, stroke));
}

function Divider() {
  return <Image src={planDivider} alt="" className="h-px w-[15.142em]"/>;
}

function GradientStroke({shape, stroke, gradient}) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute"
      style={{inset: `-${stroke}em`, backgroundImage: gradient, ...ringMask(shape, stroke)}}
    />
  );
}

function SquircleSurface({shape, gradient, className}) {
  return (
    <span
      aria-hidden="true"
      className={`absolute inset-0 ${className}`}
      style={{backgroundImage: gradient, ...squircleMask(shape)}}
    />
  );
}

function ChannelTile({channel}) {
  return (
    <div className="relative h-[5.315em] w-[6.725em]">
      <SquircleSurface shape={TILE_SHAPE} gradient={TILE_GRADIENT} className="rounded-[1.08em] backdrop-blur-[7.6px]"/>
      <GradientStroke shape={TILE_SHAPE} stroke={0.071} gradient={TILE_STROKE}/>
      <div className="absolute inset-[6.06%_5.18%_6.08%_4.78%]">
        <GradientStroke shape={LOGO_SHAPE} stroke={0.102} gradient={LOGO_STROKE}/>
        <div className={`absolute inset-0 overflow-hidden rounded-[0.895em] ${channel.tile}`} style={squircleMask(LOGO_SHAPE)}>
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
    <div className="relative h-[5.315em] w-[6.724em]">
      <SquircleSurface shape={COUNT_SHAPE} gradient={COUNT_GRADIENT} className="rounded-[1.08em] backdrop-blur-[7.6px]"/>
      <GradientStroke shape={COUNT_SHAPE} stroke={0.071} gradient={COUNT_STROKE}/>
      <div className="absolute inset-[0.322em_0.348em_0.324em_0.322em] flex flex-col items-center justify-center">
        <SquircleSurface shape={COUNT_INNER_SHAPE} gradient={COUNT_INNER_GRADIENT} className="rounded-[0.895em]"/>
        <GradientStroke shape={COUNT_INNER_SHAPE} stroke={0.07} gradient={COUNT_INNER_STROKE}/>
        <span className="relative whitespace-nowrap text-[1.779em] font-bold leading-none tracking-[-0.07em] text-[#28ffdf]">{count}</span>
        <span className="relative text-[1.055em] font-semibold leading-none tracking-[-0.07em] text-white">canais</span>
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
