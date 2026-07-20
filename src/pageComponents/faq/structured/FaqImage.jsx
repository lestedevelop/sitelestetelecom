import { getSafeMediaUrl } from "./urlSafety";

export default function FaqImage({ src, alt }) {
  const safeSrc = getSafeMediaUrl(src);
  if (!safeSrc) return null;

  return (
    // A API não fornece dimensões e pode retornar origens remotas não conhecidas pelo Next.
    // eslint-disable-next-line @next/next/no-img-element
    <img src={safeSrc} alt={typeof alt === "string" ? alt : ""} className="h-auto w-full rounded-lg" loading="lazy" />
  );
}
