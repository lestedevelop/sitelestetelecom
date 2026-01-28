"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FAQ_HELP_CENTER_SECTIONS } from "@/mocks/faqHelpCenterSections";
import { ChevronRight, IconBadge } from "@/utils/faqIcons";

export default function FaqHelpCenter() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Todas");

  const categories = useMemo(
    () => ["Todas", ...FAQ_HELP_CENTER_SECTIONS.map((section) => section.title)],
    []
  );

  const normalizedText = (text) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const filteredSections = useMemo(() => {
    const queryNormalized = normalizedText(query.trim());
    const sourceSections = queryNormalized
      ? FAQ_HELP_CENTER_SECTIONS
      : activeCategory === "Todas"
        ? FAQ_HELP_CENTER_SECTIONS
        : FAQ_HELP_CENTER_SECTIONS.filter((section) => section.title === activeCategory);

    if (!queryNormalized) {
      return sourceSections;
    }

    return sourceSections
      .map((section) => ({
        ...section,
        items: section.items.filter((item) =>
          normalizedText(item.title).includes(queryNormalized)
        ),
      }))
      .filter((section) => section.items.length > 0);
  }, [activeCategory, query]);

  return (
    <section className="w-full py-10 md:py-14">
      <div className="container">
        <div className="">
          <h2 className="text-2xl font-semibold text-primary md:text-4xl">
            Como podemos te ajudar?
          </h2>

          <form
            onSubmit={(event) => event.preventDefault()}
            className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar em ..."
              aria-label="Buscar em Contato"
              className="h-12 w-full rounded-lg border border-graylighter bg-white px-4 text-sm text-dark placeholder:text-graylight focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <button
              type="submit"
              className="h-12 shrink-0 rounded-lg bg-primary px-6 text-sm font-semibold text-white"
            >
              Buscar
            </button>
          </form>

          <div className="mt-4 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  activeCategory === category
                    ? "bg-primary text-white"
                    : "bg-white text-graylight border border-graylighter"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-10 space-y-10">
            {filteredSections.length === 0 ? (
              <div className="rounded-xl border border-graylighter bg-white p-6 text-sm text-graylight">
                Nenhum resultado encontrado.
              </div>
            ) : null}

            {filteredSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold text-dark">{section.title}</h3>
                <div className="mt-4 overflow-hidden rounded-xl border border-graylighter bg-white">
                  {section.items.map((item, index) => {
                    const iconName =
                      item.icon ||
                      section.iconVariants?.[index % section.iconVariants.length] ||
                      section.icon;

                    return (
                    <Link
                      key={item.title}
                      href={item.href}
                      className={`flex cursor-pointer hover:bg-primary/10 transition-all duration-75 items-center gap-4 px-5 py-4 ${index === section.items.length - 1 ? "" : "border-b border-graylighter"}`}
                    >
                      <IconBadge icon={iconName} />
                      <div className="flex-1">
                        <span className="text-sm font-semibold text-dark">{item.title}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-graylight" />
                    </Link>
                  );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
