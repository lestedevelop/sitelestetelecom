import FaqDivider from "./FaqDivider";
import FaqHeading from "./FaqHeading";
import FaqImage from "./FaqImage";
import FaqLink from "./FaqLink";
import FaqList from "./FaqList";
import FaqNote from "./FaqNote";
import FaqParagraph from "./FaqParagraph";
import FaqVideo from "./FaqVideo";

export default function FaqContentRenderer({ blocks }) {
  if (!Array.isArray(blocks)) return null;

  return blocks.map((block, index) => {
    if (!block || typeof block !== "object") return null;

    switch (block.type) {
      case "heading":
        return <FaqHeading key={block.id || index} level={block.level} text={block.text} />;
      case "paragraph":
        return <FaqParagraph key={block.id || index} text={block.text} />;
      case "list":
        return <FaqList key={block.id || index} style={block.style} items={block.items} />;
      case "note":
        return <FaqNote key={block.id || index} title={block.title} blocks={block.blocks} />;
      case "link":
        return <FaqLink key={block.id || index} text={block.text} href={block.href} />;
      case "image":
        return <FaqImage key={block.id || index} src={block.src} alt={block.alt} />;
      case "video":
        return <FaqVideo key={block.id || index} src={block.src} />;
      case "divider":
        return <FaqDivider key={block.id || index} />;
      default:
        return null;
    }
  });
}
