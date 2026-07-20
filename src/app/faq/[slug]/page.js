import { notFound } from "next/navigation";
import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqContentRenderer from "@/pageComponents/faq/structured/FaqContentRenderer";
import { getFaqBySlug } from "@/lib/faq";
import { getConfiguredFaqCategory } from "@/lib/faqData";

export default async function StructuredFaqPage({ params, searchParams }) {
  const { slug } = await params;
  const query = await searchParams;
  const faq = await getFaqBySlug(slug, { includeTest: query?.isTeste === "1" });

  if (!faq) notFound();

  const category = faq.content.category?.label || getConfiguredFaqCategory(slug);

  return (
    <main className="bg-light">
      <div className="container py-10 md:py-16">
        <div className="mx-auto max-w-5xl">
          <TitleFaq
            title={faq.title}
            breadcrumb={[
              { label: "Faq", href: "/faq" },
              { label: category, href: "/faq" },
              { label: faq.title },
            ]}
          />

          <article
            className="mt-8 rounded-xl border border-graylighter bg-white px-5 py-7 shadow-sm md:mt-10 md:px-8 md:py-9"
            data-content-version={faq.updatedAt || undefined}
          >
            <div className="mx-auto max-w-4xl space-y-6">
              <FaqContentRenderer blocks={faq.content.blocks} />
            </div>
          </article>
        </div>
      </div>

      <SupportFooter />
    </main>
  );
}
