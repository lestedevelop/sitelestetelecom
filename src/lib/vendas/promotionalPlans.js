export function isPromotionalPlan(plan) {
    const price = Number(plan?.valor);
    const discountPrice = Number(plan?.valor_desconto);
    const hasActiveDiscount = Number.isFinite(discountPrice) && discountPrice > 0 && discountPrice < price;

    return Number.isFinite(price) && price > 0 && hasActiveDiscount;
}
