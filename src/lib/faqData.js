import { FAQ_HELP_CENTER_SECTIONS } from "@/mocks/faqHelpCenterSections";

export function getConfiguredFaqCategory(slug) {
  const href = `/faq/${slug}`;
  return (
    FAQ_HELP_CENTER_SECTIONS.find((section) =>
      section.items.some((item) => item.href === href),
    )?.title || "Ajuda"
  );
}

export function selectFaq(payload, { slug, includeTest = false, isProduction = false }) {
  const records = Array.isArray(payload?.faq) ? payload.faq : [];

  return (
    records.find((item) => {
      if (!item || item.slug !== slug || item.isValid !== true) return false;
      if (item.isTest === true && (isProduction || !includeTest)) return false;
      if (!item.title || !Array.isArray(item.content?.blocks)) return false;
      return item.content?.schemaVersion === 1 && item.content?.format === "blocks";
    }) || null
  );
}
