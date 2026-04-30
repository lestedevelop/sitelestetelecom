"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BackToIndexButton from "@/pageComponents/faq/BackToIndexButton";
import { FAQ_HELP_CENTER_SECTIONS } from "@/mocks/faqHelpCenterSections";

function renderBreadcrumb(items) {
  return (
    <nav aria-label="Breadcrumb" className="min-w-0 text-[10px] text-graylight md:text-sm">
      <ol className="flex min-w-0 items-center gap-1 overflow-hidden whitespace-nowrap md:flex-wrap md:gap-2 md:whitespace-normal">
        {items.map((item, index) => (
          <li
            key={`${item.label}-${index}`}
            className="flex min-w-0 items-center gap-1 overflow-hidden md:gap-2"
          >
            {index > 0 ? <span className="shrink-0 text-primary/60">&gt;</span> : null}
            {item.href ? (
              <Link
                href={item.href}
                className="block truncate transition hover:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="block truncate font-semibold text-darkgreen">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default function TitleFaq({
  title,
  className = "",
  titleClassName = "",
  href = "/faq",
  eyebrow = "FAQ",
  breadcrumb = null,
}) {
  const pathname = usePathname();

  const derivedBreadcrumb = (() => {
    if (!pathname || pathname === "/faq") {
      return null;
    }

    for (const section of FAQ_HELP_CENTER_SECTIONS) {
      const item = section.items.find((entry) => entry.href === pathname);
      if (item) {
        return [
          { label: "Faq", href: "/faq" },
          { label: section.title, href: "/faq" },
          { label: item.title },
        ];
      }
    }

    return null;
  })();

  const breadcrumbItems = Array.isArray(breadcrumb) && breadcrumb.length > 0
    ? breadcrumb
    : derivedBreadcrumb;

  return (
    <header className={className}>
      {breadcrumbItems ? (
        renderBreadcrumb(breadcrumbItems)
      ) : breadcrumb ? (
        <p className="truncate text-[10px] text-graylight md:text-sm">{breadcrumb}</p>
      ) : (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">
          {eyebrow}
        </p>
      )}

      <div className="mt-4 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <h1
          className={`max-w-4xl text-3xl font-bold leading-tight text-darkgreen md:text-5xl ${titleClassName}`}
        >
          {title}
        </h1>

        <BackToIndexButton
          href={href}
          className="hidden md:inline-flex md:w-auto md:min-w-[240px]"
        />
      </div>
    </header>
  );
}
