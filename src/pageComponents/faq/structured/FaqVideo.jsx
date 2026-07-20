import { getSafeMediaUrl } from "./urlSafety";

export default function FaqVideo({ src }) {
  const safeSrc = getSafeMediaUrl(src);
  if (!safeSrc) return null;

  return (
    <video className="h-auto w-full rounded-lg bg-black" controls preload="metadata">
      <source src={safeSrc} />
      Seu navegador não oferece suporte à reprodução deste vídeo.
    </video>
  );
}
