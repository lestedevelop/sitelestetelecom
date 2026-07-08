"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FAQ_HELP_CENTER_SECTIONS } from "@/mocks/faqHelpCenterSections";
import { ChevronRight, IconBadge } from "@/utils/faqIcons";

const ALL_CATEGORIES = "Todas";
const INITIAL_VISIBLE_ITEMS = 4;

function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

export default function FaqHelpCenter() {
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState(ALL_CATEGORIES);
  const [expandedSections, setExpandedSections] = useState({});

  const filteredSections = useMemo(() => {
    const queryNormalized = normalizeText(query.trim());
    const activeSectionNormalized = normalizeText(activeSection);

    return FAQ_HELP_CENTER_SECTIONS.map((section) => {
      const isActive =
        queryNormalized ||
        activeSection === ALL_CATEGORIES ||
        normalizeText(section.title) === activeSectionNormalized;

      if (!isActive) {
        return { ...section, items: [] };
      }

      const items = section.items.filter((item) => {
        if (!queryNormalized) {
          return true;
        }

        return [item.title, item.href]
          .map(normalizeText)
          .some((value) => value.includes(queryNormalized));
      });

      return { ...section, items };
    }).filter((section) => section.items.length > 0);
  }, [activeSection, query]);

  const hasResults = filteredSections.length > 0;
  const hasQuery = query.trim().length > 0;
  const hasActiveCategory = activeSection !== ALL_CATEGORIES;

  function toggleSection(sectionTitle) {
    setExpandedSections((current) => ({
      ...current,
      [sectionTitle]: !current[sectionTitle],
    }));
  }

  return (
    <section className="w-full bg-light py-8 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase text-primary">
              Central de ajuda
            </p>
            <div className="mt-3">
              <div>
                <h1 className="text-4xl font-bold text-darkgreen md:text-5xl">
                  Como podemos ajudar?
                </h1>
                <p className="mt-3 max-w-2xl text-base text-graylight md:text-lg">
                  Encontre respostas por categoria ou busque diretamente pela sua dúvida.
                </p>
              </div>
            </div>
          </div>

          <form onSubmit={(event) => event.preventDefault()} className="mb-6">
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar no FAQ"
              aria-label="Buscar no FAQ"
              className="h-12 w-full rounded-md border border-transparent bg-white px-4 text-base text-darkgreen outline-none placeholder:text-graylight focus:border-primary"
            />
          </form>

          <div className="mb-8 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => setActiveSection(ALL_CATEGORIES)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                activeSection === ALL_CATEGORIES
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

          <div className="mt-10">
            <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="text-2xl font-bold text-darkgreen">
                  {hasQuery ? "Resultados da busca" : activeSection}
                </h2>
                <p className="text-sm text-graylight">
                  {hasQuery
                    ? "Resultados encontrados na estrutura atual do FAQ."
                    : "Conteúdos disponíveis na categoria selecionada."}
                </p>
              </div>

              {activeSection !== ALL_CATEGORIES ? (
                <button
                  type="button"
                  onClick={() => setActiveSection(ALL_CATEGORIES)}
                  className="text-left text-sm font-semibold text-primary hover:underline md:text-right"
                >
                  Ver todas as categorias
                </button>
              ) : null}
            </div>

            {!hasResults ? (
              <div className="rounded-lg border border-graylighter bg-white px-5 py-6 text-sm text-graylight">
                Nenhum resultado encontrado.
              </div>
            ) : null}

            <div className="space-y-5">
              {filteredSections.map((section) => {
                const isExpanded =
                  hasQuery || hasActiveCategory || expandedSections[section.title];
                const visibleItems = isExpanded
                  ? section.items
                  : section.items.slice(0, INITIAL_VISIBLE_ITEMS);
                const hiddenItemsCount = section.items.length - visibleItems.length;
                const canToggle =
                  !hasQuery &&
                  !hasActiveCategory &&
                  section.items.length > INITIAL_VISIBLE_ITEMS;

                return (
                  <div
                    key={section.title}
                    className="overflow-hidden rounded-lg border border-graylighter bg-white"
                  >
                    <div className="flex items-center gap-3 border-b border-graylighter bg-white px-5 py-4">
                      <IconBadge icon={section.icon} />
                      <div>
                        <h3 className="text-lg font-bold text-darkgreen">
                          {section.title}
                        </h3>
                        <p className="text-sm text-graylight">
                          {section.description}
                        </p>
                      </div>
                    </div>

                    <div className="divide-y divide-graylighter">
                      {visibleItems.map((item) => (
                        <Link
                          key={`${section.title}-${item.href}`}
                          href={item.href}
                          className="flex min-h-[52px] items-center justify-between gap-4 px-5 py-3 text-left transition-colors hover:bg-light"
                        >
                          <span className="text-sm font-medium leading-6 text-darkgreen">
                            {item.title}
                          </span>
                          <ChevronRight className="h-5 w-5 shrink-0 text-graylight" />
                        </Link>
                      ))}
                    </div>

                    {canToggle ? (
                      <button
                        type="button"
                        onClick={() => toggleSection(section.title)}
                        className="flex min-h-[48px] w-full items-center justify-center gap-2 border-t border-graylighter px-5 text-sm font-semibold text-primary transition-colors hover:bg-light"
                        aria-expanded={isExpanded}
                      >
                        {isExpanded
                          ? "Exibir menos"
                          : `Exibir mais ${hiddenItemsCount}`}
                        <ChevronRight
                          className={`h-5 w-5 transition-transform ${
                            isExpanded ? "-rotate-90" : "rotate-90"
                          }`}
                        />
                      </button>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
