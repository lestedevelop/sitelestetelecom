import Link from "next/link";
import {BLOG_SOURCE} from "@/lib/blogSync.mjs";

const ERP_BLOCK_TYPE = Object.freeze({
  PARAGRAPH: 1,
  HEADING: 2,
  LIST: 3,
  BUTTON: 4,
});

const LINK_CLASS_NAME = "font-semibold text-primary underline underline-offset-4";
const HEADING_CLASS_NAME = "mb-5 mt-10 text-2xl font-bold text-primary md:text-3xl";
const LIST_CLASS_NAME = "mb-7 list-disc space-y-2 pl-6";
const BUTTON_CLASS_NAME =
  "inline-flex min-h-12 items-center justify-center rounded-full border border-primary bg-primary px-6 py-3 text-sm font-semibold tracking-wide text-light shadow transition hover:bg-darkgreen";

function SiteLink({href, className, children}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function renderInline(nodes, keyPrefix) {
  return (nodes || []).map((node, index) => {
    const key = `${keyPrefix}-${index}`;

    if (node.type === "text") return node.value;
    if (node.type === "break") return <br key={key} />;
    if (node.type === "emphasis") return <em key={key}>{renderInline(node.children, key)}</em>;
    if (node.type === "strong") {
      return (
        <strong key={key} className="font-bold text-darkgreen">
          {renderInline(node.children, key)}
        </strong>
      );
    }
    if (node.type === "link" && typeof node.url === "string") {
      return (
        <SiteLink key={key} href={node.url} className={LINK_CLASS_NAME}>
          {renderInline(node.children, key)}
        </SiteLink>
      );
    }
    return null;
  });
}

function renderContent(content, keyPrefix) {
  return (content || []).map((node, index) => {
    const key = `${keyPrefix}-${index}`;

    if (node.type === "paragraph") {
      return (
        <p key={key} className="mb-6">
          {renderInline(node.children, key)}
        </p>
      );
    }
    if (node.type === "list") {
      return (
        <ul key={key} className={LIST_CLASS_NAME}>
          {(node.items || []).map((item, itemIndex) => (
            <li key={`${key}-${itemIndex}`}>{renderInline(item, `${key}-${itemIndex}`)}</li>
          ))}
        </ul>
      );
    }
    return null;
  });
}

function ErpBlock({block, index}) {
  if (block.type === ERP_BLOCK_TYPE.HEADING) {
    return <h2 className={HEADING_CLASS_NAME}>{block.text}</h2>;
  }

  if (block.type === ERP_BLOCK_TYPE.BUTTON) {
    if (!block.text || !block.linkUrl) return null;
    return (
      <div className="mb-6">
        <SiteLink href={block.linkUrl} className={BUTTON_CLASS_NAME}>
          {block.text}
        </SiteLink>
      </div>
    );
  }

  if (block.type === ERP_BLOCK_TYPE.PARAGRAPH || block.type === ERP_BLOCK_TYPE.LIST) {
    return renderContent(block.content, `block-${index}`);
  }

  return null;
}

function MockBlock({block, index}) {
  if (typeof block === "object" && block.type === "heading") {
    return <h2 className={HEADING_CLASS_NAME}>{block.text}</h2>;
  }

  if (typeof block === "object" && block.type === "list") {
    return (
      <ul className={LIST_CLASS_NAME}>
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  }

  if (typeof block === "object" && block.type === "linkedParagraph") {
    return (
      <p className="mb-6">
        {block.text}{" "}
        <a href={block.href} target="_blank" rel="noopener noreferrer" className={LINK_CLASS_NAME}>
          {block.linkText}
        </a>
      </p>
    );
  }

  if (typeof block === "object" && block.type === "richParagraph") {
    return (
      <p className="mb-6">
        {block.parts.map((part, partIndex) => {
          if (typeof part === "string") return part;

          if (!part.href) {
            return part.bold ? (
              <strong key={partIndex} className="font-bold text-darkgreen">
                {part.text}
              </strong>
            ) : (
              part.text
            );
          }

          return (
            <SiteLink key={partIndex} href={part.href} className={LINK_CLASS_NAME}>
              {part.text}
            </SiteLink>
          );
        })}
      </p>
    );
  }

  if (typeof block === "object" && block.type === "lines") {
    return (
      <div className="mb-7 space-y-1">
        {block.items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    );
  }

  return <p className="mb-6">{String(block)}</p>;
}

export default function BlogPostContent({post}) {
  const Block = post.source === BLOG_SOURCE.ERP ? ErpBlock : MockBlock;

  return (
    <div className="mt-10 max-w-6xl text-base leading-8 text-dark md:text-lg md:leading-9">
      {(post.blocks || []).map((block, index) => (
        <Block key={`${post.slug}-${index}`} block={block} index={index} />
      ))}
    </div>
  );
}
