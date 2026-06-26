function parsePlanPrice(value) {
    if (value === null || value === undefined || value === "") return Number.POSITIVE_INFINITY;

    if (typeof value === "number") {
        return Number.isFinite(value) ? value : Number.POSITIVE_INFINITY;
    }

    const normalized = String(value)
        .replace(/[^\d,.]/g, "")
        .replace(/\.(?=\d{3}(?:\D|$))/g, "")
        .replace(",", ".");

    const price = Number(normalized);
    return Number.isFinite(price) ? price : Number.POSITIVE_INFINITY;
}

export function getPlanEffectivePrice(plan) {
    const discount = parsePlanPrice(plan?.valor_desconto);
    if (discount > 0 && Number.isFinite(discount)) return discount;

    const value = parsePlanPrice(plan?.valor);
    if (Number.isFinite(value)) return value;

    return parsePlanPrice(plan?.value);
}

export function sortPlansByLowestPrice(plans = []) {
    return [...plans]
        .map((plan, index) => ({ plan, index }))
        .sort((a, b) => {
            const priceDiff = getPlanEffectivePrice(a.plan) - getPlanEffectivePrice(b.plan);
            return priceDiff || a.index - b.index;
        })
        .map(({ plan }) => plan);
}
