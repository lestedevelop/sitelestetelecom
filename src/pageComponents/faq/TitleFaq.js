"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import BackToIndexButton from "@/pageComponents/faq/BackToIndexButton";
import { FAQ_HELP_CENTER_SECTIONS } from "@/mocks/faqHelpCenterSections";

function subscribeToLocation(callback) {
  window.addEventListener("popstate", callback);
  return () => window.removeEventListener("popstate", callback);
}

function getCategoryParam() {
  return new URLSearchParams(window.location.search).get("categoria") || "";
}

function getServerCategoryParam() {
  return "";
}

function renderBreadcrumb(items) {
  return (
    <nav aria-label="Breadcrumb" className="min-w-0 text-[10px] text-graylight md:text-sm">
      <ol className="flex min-w-0 flex-wrap items-center gap-1 md:gap-2">
        {items.map((item, index) => (
          <li
            key={`${item.label}-${index}`}
            className="flex min-w-0 items-center gap-1 md:gap-2"
          >
            {index > 0 ? <span className="shrink-0 text-primary/60">&gt;</span> : null}
            {item.href ? (
              <Link
                href={item.href}
                className="block break-words transition hover:text-primary"
              >
                {item.label}
              </Link>
            ) : (
              <span className="block break-words font-semibold text-darkgreen">
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
  href = null,
  eyebrow = "FAQ",
  breadcrumb = null,
  showBackButton = true,
}) {
  const pathname = usePathname();
  const categoryParam = useSyncExternalStore(
    subscribeToLocation,
    getCategoryParam,
    getServerCategoryParam
  );

  const derivedBreadcrumb = (() => {
    if (!pathname || pathname === "/faq") {
      return null;
    }

    const preferredSection = FAQ_HELP_CENTER_SECTIONS.find(
      (section) =>
        section.title.localeCompare(categoryParam, "pt-BR", { sensitivity: "base" }) === 0 &&
        section.items.some((entry) => entry.href === pathname)
    );
    const orderedSections = preferredSection
      ? [preferredSection, ...FAQ_HELP_CENTER_SECTIONS.filter((section) => section !== preferredSection)]
      : FAQ_HELP_CENTER_SECTIONS;

    for (const section of orderedSections) {
      const item = section.items.find((entry) => entry.href === pathname);
      if (item) {
        const categoryHref = `/faq?categoria=${encodeURIComponent(section.title)}`;

        return [
          { label: "Faq", href: "/faq" },
          { label: section.title, href: categoryHref },
          { label: item.title },
        ];
      }
    }

    return null;
  })();

  const breadcrumbItems = Array.isArray(breadcrumb) && breadcrumb.length > 0
    ? breadcrumb
    : derivedBreadcrumb;
  const categoryHref = derivedBreadcrumb?.[1]?.href;
  const backHref = href || categoryHref || "/faq";

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

        {showBackButton ? (
          <BackToIndexButton
            href={backHref}
            className="hidden md:inline-flex md:w-auto md:min-w-[240px]"
          />
        ) : null}
      </div>
    </header>
  );
}
