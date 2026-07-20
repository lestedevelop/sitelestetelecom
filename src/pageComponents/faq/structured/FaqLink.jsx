import { getSafeLinkUrl, isExternalUrl } from "./urlSafety";

export default function FaqLink({ text, href }) {
  if (typeof text !== "string") return null;
  const safeHref = getSafeLinkUrl(href);
  if (!safeHref) return null;
  const external = isExternalUrl(safeHref);

  return (
    <p>
      <a
        href={safeHref}
        className="font-semibold text-primary underline underline-offset-4 hover:text-darkgreen"
        rel={external ? "noopener noreferrer" : undefined}
        target={external ? "_blank" : undefined}
      >
        {text}
      </a>
    </p>
  );
}
