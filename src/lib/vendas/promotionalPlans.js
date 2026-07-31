const PROMOTIONAL_PLAN_CODES = new Set([
    "EUVX0VOD9K",
    "EUVX0VPSZO",
    "EUVY0RK9RG",
]);

export function isPromotionalPlan(plan) {
    const code = String(plan?.codser || "").trim().toUpperCase();
    const price = Number(plan?.valor);
    const discountPrice = Number(plan?.valor_desconto);
    const hasActiveDiscount = Number.isFinite(discountPrice) && discountPrice > 0 && discountPrice < price;

    return PROMOTIONAL_PLAN_CODES.has(code) && hasActiveDiscount;
}
