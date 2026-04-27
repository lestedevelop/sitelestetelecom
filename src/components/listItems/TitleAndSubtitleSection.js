import { twMerge } from "tailwind-merge";

export default function TitleAndSubtitleSection({title, text, styleTitle = "", styleText = "", className = ""}) {
  return (
    <section className={twMerge("pt-8 pb-8", className)}>
      <h2 className={twMerge("text-[28px] font-bold leading-[1.05] text-primary md:text-[64px]", styleTitle)}>
        {title}
      </h2>
      <p className={twMerge("mt-2 text-[16px] leading-[1.3] text-dark md:text-[24px]", styleText)}>
        {text}
      </p>
    </section>
  )
}
