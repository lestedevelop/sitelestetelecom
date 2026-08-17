import { getSafeLinkUrl, isExternalUrl } from "./urlSafety";

export default function FaqParagraph({ text, segments }) {
  if (typeof text !== "string" && !Array.isArray(segments)) return null;

  return (
    <p className="text-base leading-7 text-dark md:text-lg md:leading-8">
      {Array.isArray(segments)
        ? segments.map((segment, index) => {
            if (typeof segment === "string") return <span key={index}>{segment}</span>;
            if (typeof segment?.text !== "string") return null;

            const safeHref = getSafeLinkUrl(segment.href);
            if (!safeHref) return <span key={index}>{segment.text}</span>;

            const external = isExternalUrl(safeHref);
            return (
              <a
                key={index}
                href={safeHref}
                className="font-semibold text-primary underline underline-offset-4 hover:text-darkgreen"
                rel={external ? "noopener noreferrer" : undefined}
                target={external ? "_blank" : undefined}
              >
                {segment.text}
              </a>
            );
          })
        : text}
    </p>
  );
}
