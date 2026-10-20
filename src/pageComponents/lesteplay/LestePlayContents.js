"use client";

import {useRef, useState} from "react";
import Image from "next/image";
import arrowLeft from "@/assets/lesteplay/conteudos/seta-esquerda.svg";
import arrowLeftDisabled from "@/assets/lesteplay/conteudos/seta-esquerda-inativa.svg";
import arrowRight from "@/assets/lesteplay/conteudos/seta-direita.svg";
import arrowRightDisabled from "@/assets/lesteplay/conteudos/seta-direita-inativa.svg";
import LestePlayContentsMosaic from "@/pageComponents/lesteplay/LestePlayContentsMosaic";
import LestePlayWatchLogo from "@/pageComponents/lesteplay/LestePlayWatchLogo";
import {CONTENT_CATEGORIES, MOSAIC_DESKTOP, MOSAIC_MOBILE} from "@/pageComponents/lesteplay/lestePlayContentsData";

const TAG_GRADIENT = "linear-gradient(118deg, #28ffdf 6.58%, #00ffa6 58.11%, #28ffdf 101.33%)";
const SWIPE_THRESHOLD = 40;

function ContentCard({category}) {
  return (
    <article className="flex w-[326px] shrink-0 flex-col lg:h-[303.52px] lg:w-[821.87px] lg:flex-row lg:items-center">
      <div className="-mb-[6.62px] flex min-h-[234px] flex-col gap-[26.49px] rounded-t-2xl bg-[linear-gradient(91.91deg,rgba(1,255,167,0.2)_20.9%,rgba(4,172,132,0)_98.74%)] p-[35.32px] text-white backdrop-blur-[10.81px] lg:-mr-[6.62px] lg:mb-0 lg:h-full lg:min-h-0 lg:w-[292.48px] lg:shrink-0 lg:justify-between lg:gap-0 lg:rounded-none lg:rounded-l-[17.66px] lg:bg-[linear-gradient(91.32deg,rgba(1,255,167,0.2)_20.9%,rgba(4,172,132,0)_98.74%)]">
        <h3 className="text-2xl font-bold leading-[1.05] tracking-[-0.72px] lg:text-[35.32px] lg:tracking-[-1.06px]">{category.title}</h3>
        <p className={`text-base leading-[1.1] lg:text-[21.46px] ${category.textWidth}`}>{category.text}</p>
        <ul className="flex w-[221.84px] flex-wrap gap-[8.83px]">
          {category.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full px-[17.66px] py-[8.83px] text-sm font-bold leading-[1.1] text-[#005542] lg:text-[15.45px]"
              style={{backgroundImage: TAG_GRADIENT}}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-[488.94px] w-[326px] shrink-0 overflow-hidden rounded-b-[17.83px] lg:h-[303.73px] lg:w-[536.01px] lg:rounded-[17.66px]">
        <Image src={category.imageMobile} alt={category.alt} fill sizes="326px" className="object-cover lg:hidden"/>
        <Image src={category.image} alt={category.alt} fill sizes="536px" className="hidden object-cover lg:block"/>
      </div>
    </article>
  );
}

export default function LestePlayContents() {
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStart = useRef(null);
  const lastIndex = CONTENT_CATEGORIES.length - 1;
  const isFirst = activeIndex === 0;
  const isLast = activeIndex === lastIndex;

  function goTo(index) {
    setActiveIndex(Math.min(Math.max(index, 0), lastIndex));
  }

  function handlePointerUp(event) {
    if (pointerStart.current === null) return;
    const distance = event.clientX - pointerStart.current;
    pointerStart.current = null;
    if (Math.abs(distance) < SWIPE_THRESHOLD) return;
    goTo(activeIndex + (distance < 0 ? 1 : -1));
  }

  return (
    <section className="relative isolate flex w-full flex-col items-center gap-10 overflow-hidden rounded-t-[40px] bg-[#037258] px-8 py-[80.82px] text-white [--lp-x:max(0px,calc(50%-720px))] lg:items-start lg:gap-[60.62px] lg:rounded-t-[80.82px] lg:pl-[calc(var(--lp-x)+101.03px)] lg:pr-[101px]">
      <LestePlayContentsMosaic items={MOSAIC_MOBILE} className="-z-10 lg:hidden"/>
      <LestePlayContentsMosaic items={MOSAIC_DESKTOP} className="-z-10 hidden lg:block"/>
      <div aria-hidden="true" className="absolute left-0 top-[-5.69px] -z-10 h-[1702.27px] w-[max(1482.04px,calc(100%+42px))] bg-[linear-gradient(136.65deg,#045441_29.71%,rgba(0,100,78,0)_141.05%)]"/>

      <h2 className="w-[257px] text-center text-[32px] leading-[1.05] tracking-[-0.96px] lg:w-[324.29px] lg:text-left lg:text-[64px] lg:tracking-[-1.92px]">
        Qual é o <strong className="font-bold">conteúdo de hoje?</strong>
      </h2>

      <div
        className="w-full touch-pan-y lg:absolute lg:left-[calc(var(--lp-x)+518.26px)] lg:right-0 lg:top-[71.73px] lg:flex lg:h-[572.81px] lg:w-auto lg:items-center lg:overflow-hidden"
        onPointerDown={(event) => { pointerStart.current = event.clientX; }}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => { pointerStart.current = null; }}
      >
        <div
          aria-live="polite"
          className="flex gap-6 transition-transform duration-500 ease-out [--step:350px] lg:gap-[43.78px] lg:pl-[11.11px] lg:[--step:865.65px]"
          style={{transform: `translateX(calc(var(--step) * ${-activeIndex}))`}}
        >
          {CONTENT_CATEGORIES.map((category, index) => (
            <div key={category.id} aria-hidden={index !== activeIndex}>
              <ContentCard category={category}/>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-[6.86px] lg:gap-[20.2px]">
        <button
          type="button"
          aria-label="Conteúdo anterior"
          disabled={isFirst}
          onClick={() => goTo(activeIndex - 1)}
          className="relative size-6 cursor-pointer disabled:cursor-default lg:size-[70.72px]"
        >
          <Image src={isFirst ? arrowLeftDisabled : arrowLeft} alt="" fill/>
        </button>
        <button
          type="button"
          aria-label="Próximo conteúdo"
          disabled={isLast}
          onClick={() => goTo(activeIndex + 1)}
          className="relative size-6 cursor-pointer disabled:cursor-default lg:size-[70.72px]"
        >
          <Image src={isLast ? arrowRightDisabled : arrowRight} alt="" fill/>
        </button>
      </div>

      <LestePlayWatchLogo className="h-2 w-[119.56px] lg:h-[14.53px] lg:w-[217.2px]"/>

      <a
        href="#planos"
        className="whitespace-nowrap rounded-full bg-white px-6 py-3 text-xl font-bold leading-[1.101] text-[#005542] transition hover:bg-light lg:px-8 lg:py-[19px] lg:text-2xl"
      >
        Compare os planos.
      </a>
    </section>
  );
}
