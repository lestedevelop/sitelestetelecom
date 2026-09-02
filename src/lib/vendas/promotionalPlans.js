const LESTE_PLAY_CITY_CODES = new Set([
    "3302700", // Maricá
    "3303302", // Niterói
]);

const PROMOTIONAL_DISCLAIMERS = [
    {
        cityCodes: new Set(["3304300", "3305752"]),
        cities: "Rio Bonito e Tanguá",
    },
    {
        cityCodes: new Set(["3301850", "3301900", "3302502"]),
        cities: "Itaboraí, Magé e Guapimirim",
    },
];

export function getPromotionalCampaignDisclaimer(cityOrPlan) {
    const cityCode = typeof cityOrPlan === "object"
        ? cityOrPlan?.cidade ?? cityOrPlan?.codcid
        : cityOrPlan;

    return PROMOTIONAL_DISCLAIMERS.find(({cityCodes}) =>
        cityCodes.has(String(cityCode ?? "").trim())
    ) || null;
}

export function hasPromotionalCampaignDisclaimer(cityOrPlan) {
    return !!getPromotionalCampaignDisclaimer(cityOrPlan);
}

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
