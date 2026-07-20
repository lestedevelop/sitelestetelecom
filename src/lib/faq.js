import "server-only";

import { selectFaq } from "@/lib/faqData";

export const FAQ_REVALIDATE_SECONDS = 300;

export class FaqApiError extends Error {
  constructor(status) {
    super(`Falha ao buscar FAQ (status ${status}).`);
    this.name = "FaqApiError";
    this.status = status;
  }
}

export async function getFaqBySlug(slug, { includeTest = false } = {}) {
  const baseUrl = process.env.CORE_API_URL;
  if (!baseUrl) throw new Error("CORE_API_URL não está configurada.");

  const isProduction = process.env.NODE_ENV === "production";
  const canIncludeTest = includeTest && !isProduction;
  const url = new URL("/api/sac/externo/faq", baseUrl);
  url.searchParams.set("slug", slug);
  if (canIncludeTest) url.searchParams.set("isTeste", "1");

  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      institucionalsessionid: process.env.INSTITUCIONAL_KEY || "",
    },
    next: {
      revalidate: FAQ_REVALIDATE_SECONDS,
      tags: [`faq:${slug}`, canIncludeTest ? "faq:teste" : "faq:publicado"],
    },
    signal: AbortSignal.timeout(20000),
  });

  if (!response.ok) throw new FaqApiError(response.status);

  return selectFaq(await response.json(), {
    slug,
    includeTest: canIncludeTest,
    isProduction,
  });
}
