export default function FaqHeading({ level, text }) {
  if (typeof text !== "string") return null;
  const className = "font-bold leading-tight text-darkgreen";

  if (level === 2) return <h2 className={`text-2xl md:text-3xl ${className}`}>{text}</h2>;
  if (level === 3) return <h3 className={`text-xl md:text-2xl ${className}`}>{text}</h3>;
  if (level === 4) return <h4 className={`text-lg md:text-xl ${className}`}>{text}</h4>;
  return null;
}
