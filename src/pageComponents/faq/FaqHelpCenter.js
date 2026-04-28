"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { FAQ_HELP_CENTER_SECTIONS } from "@/mocks/faqHelpCenterSections";
import { ChevronRight } from "@/utils/faqIcons";

export default function FaqHelpCenter() {
  const [query, setQuery] = useState("");

  const normalizedText = (text) =>
    text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const faqItems = useMemo(
    () => FAQ_HELP_CENTER_SECTIONS.flatMap((section) => section.items),
    []
  );

  const filteredItems = useMemo(() => {
    const queryNormalized = normalizedText(query.trim());

    if (!queryNormalized) {
      return faqItems;
    }

    return faqItems.filter((item) =>
      normalizedText(item.title).includes(queryNormalized)
    );
  }, [faqItems, query]);

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

          <div className="overflow-hidden rounded-md border border-[#dddddd] bg-white shadow-[0_2px_10px_rgba(0,0,0,0.06)]">
            {filteredItems.length === 0 ? (
              <div className="px-4 py-5 text-sm text-[#6f8d88]">
                Nenhum resultado encontrado.
              </div>
            ) : null}

            {filteredItems.map((item, index) => (
              <Link
                key={`${item.href}-${index}`}
                href={item.href}
                className={`flex min-h-[44px] items-center justify-between gap-4 px-4 py-3 text-left transition-colors duration-150 hover:bg-[#f7f7f7] ${
                  index === filteredItems.length - 1
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
        </div>
      </div>
    </section>
  );
}
