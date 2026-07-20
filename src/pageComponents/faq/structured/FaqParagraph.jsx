export default function FaqParagraph({ text }) {
  if (typeof text !== "string") return null;
  return <p className="text-base leading-7 text-dark md:text-lg md:leading-8">{text}</p>;
}
