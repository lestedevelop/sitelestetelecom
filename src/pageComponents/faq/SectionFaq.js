import Link from "next/link";
import { FAQ_HELP_CENTER_SECTIONS } from "@/mocks/faqHelpCenterSections";

export default function SectionFaq() {
  return (
    <section className="w-full bg-light">
      <div className="container py-8 md:py-16">
        <div className="space-y-8 text-darkgreen">
          {FAQ_HELP_CENTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h3 className="text-3xl font-bold text-primary md:text-4xl">
                {section.title}
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-graylight md:text-base">
                {section.description}
              </p>

              <ul className="mt-4 grid gap-3 md:grid-cols-2">
                {section.items.map((item) => (
                  <li key={`${section.title}-${item.href}`}>
                    <Link
                      className="block rounded-lg border border-graylighter bg-white px-4 py-3 text-sm font-medium text-darkgreen transition hover:border-primary hover:text-primary"
                      href={item.href}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
