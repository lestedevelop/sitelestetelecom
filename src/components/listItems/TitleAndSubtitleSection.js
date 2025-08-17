import { twMerge } from "tailwind-merge";

export default function TitleAndSubtitleSection({title,text,styleTitle,styleText,className}) {
  return (
    <section className="pt-8 pb-8">
      <h2 style={styleTitle} className={twMerge("text-4xl font-bold text-[#00997b]",className)}>
        {title}
      </h2>
      <p style={styleText} className={twMerge("text-lg text-gray-900 mt-2 font-sans",className)}>
        {text}
      </p>
    </section>
  )
}