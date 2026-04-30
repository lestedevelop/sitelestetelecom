"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FAQ_HELP_CENTER_SECTIONS } from "@/mocks/faqHelpCenterSections";
import { ChevronRight, IconBadge } from "@/utils/faqIcons";

export default function FaqHelpCenter() {
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState("Todas");

  const normalizedText = (text) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const filteredSections = useMemo(() => {
    const queryNormalized = normalizedText(query.trim());
    const activeSectionNormalized = normalizedText(activeSection);

    return FAQ_HELP_CENTER_SECTIONS.map((section) => {
      const matchesSection =
        activeSectionNormalized === normalizedText("Todas") ||
        normalizedText(section.title) === activeSectionNormalized;

      if (!matchesSection) {
        return { ...section, items: [] };
      }

      const items = section.items.filter((item) => {
        if (!queryNormalized) {
          return true;
        }

        return normalizedText(item.title).includes(queryNormalized);
      });

      return { ...section, items };
    }).filter((section) => section.items.length > 0);
  }, [activeSection, query]);

  const hasResults = filteredSections.length > 0;

  return (
    <section className="w-full py-8 md:py-10">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <form
            onSubmit={(event) => event.preventDefault()}
            className="mb-4"
          >
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar no FAQ"
              aria-label="Buscar no FAQ"
              className="h-11 w-full rounded-md border border-[#d9d9d9] bg-white px-4 text-sm text-[#2b6f69] placeholder:text-[#89a6a1] focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </form>

          <div className="mb-4 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveSection("Todas")}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                activeSection === "Todas"
                  ? "border-primary bg-primary text-light"
                  : "border-graylighter bg-white text-darkgreen hover:border-primary hover:text-primary"
              }`}
            >
              Todas
            </button>

            {FAQ_HELP_CENTER_SECTIONS.map((section) => (
              <button
                key={section.title}
                type="button"
                onClick={() => setActiveSection(section.title)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  activeSection === section.title
                    ? "border-primary bg-primary text-light"
                    : "border-graylighter bg-white text-darkgreen hover:border-primary hover:text-primary"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {!hasResults ? (
              <div className="px-4 py-5 text-sm text-[#6f8d88]">
                Nenhum resultado encontrado.
              </div>
            ) : null}

            {filteredSections.map((section) => (
              <div
                key={section.title}
                className="overflow-hidden rounded-md border border-[#dddddd] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
              >
                <div className="flex items-center gap-3 border-b border-[#e8e8e8] bg-light px-4 py-4">
                  <IconBadge icon={section.icon} />
                  <h3 className="text-lg font-bold text-darkgreen md:text-xl">
                    {section.title}
                  </h3>
                </div>

                {section.items.map((item, index) => (
                  <Link
                    key={`${section.title}-${item.href}-${index}`}
                    href={item.href}
                    className={`flex min-h-[44px] items-center justify-between gap-4 px-4 py-3 text-left transition-colors duration-150 hover:bg-[#f7f7f7] ${
                      index === section.items.length - 1
                        ? ""
                        : "border-b border-[#e8e8e8]"
                    }`}
                  >
                    <span className="pr-4 text-[12px] leading-[1.35] text-[#2b7c76] md:text-[13px]">
                      {item.title}
                    </span>
                    <ChevronRight className="h-4 w-4 shrink-0 text-[#c3c3c3]" />
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
