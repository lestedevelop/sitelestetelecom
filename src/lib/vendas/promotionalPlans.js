const LESTE_PLAY_CITY_CODES = new Set([
    "3302700", // Maricá
    "3303302", // Niterói
]);

export function isPromotionalPlan(plan) {
    const cityCode = String(plan?.cidade ?? plan?.codcid ?? "").trim();
    const price = Number(plan?.valor);
    const discountPrice = Number(plan?.valor_desconto);
    const hasActiveDiscount = Number.isFinite(discountPrice) && discountPrice > 0 && discountPrice < price;

    return !LESTE_PLAY_CITY_CODES.has(cityCode) &&
        Number.isFinite(price) &&
        price > 0 &&
        hasActiveDiscount;
}
