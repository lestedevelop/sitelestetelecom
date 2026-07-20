import FaqList from "./FaqList";
import FaqParagraph from "./FaqParagraph";

export default function FaqNote({ title, blocks }) {
  if (typeof title !== "string" || !Array.isArray(blocks)) return null;

  return (
    <aside className="rounded-xl border border-primary/30 bg-lightgreenBackground/30 px-5 py-5 md:px-6">
      <p className="text-base font-bold text-primary">{title}</p>
      <div className="mt-3 space-y-3">
        {blocks.map((block) => {
          if (block?.type === "paragraph") return <FaqParagraph key={block.id} text={block.text} />;
          if (block?.type === "list") {
            return <FaqList key={block.id} style={block.style} items={block.items} />;
          }
          return null;
        })}
      </div>
    </aside>
  );
}
