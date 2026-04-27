"use client";

import { useState } from "react";

export default function FaqAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="divide-y divide-graylighter">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={`faq-${index}`}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 py-4 md:py-8 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span className="text-sm font-medium text-primary md:text-2xl">
                {item.question}
              </span>
              <span
                className={`text-2xl font-semibold text-primary transition-transform ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            {isOpen ? (
              <div className="pb-4 text-sm text-graylight">{item.answer}</div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
