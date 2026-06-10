const PROMOTIONAL_PLAN_CODES = new Set([
    "EUVX0VOD9K",
    "EUVX0VPSZO",
]);

export function isPromotionalPlan(plan) {
    const code = String(plan?.codser || "").trim().toUpperCase();
    return PROMOTIONAL_PLAN_CODES.has(code);
}
