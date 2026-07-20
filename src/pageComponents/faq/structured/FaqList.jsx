export default function FaqList({ style, items }) {
  if (!Array.isArray(items)) return null;
  const safeItems = items.filter((item) => typeof item === "string");
  const className = `space-y-2 pl-6 text-base leading-7 text-dark md:text-lg md:leading-8 ${
    style === "ordered" ? "list-decimal" : "list-disc"
  }`;

  if (style === "ordered") {
    return <ol className={className}>{safeItems.map((item, index) => <li key={index}>{item}</li>)}</ol>;
  }
  if (style === "unordered") {
    return <ul className={className}>{safeItems.map((item, index) => <li key={index}>{item}</li>)}</ul>;
  }
  return null;
}
