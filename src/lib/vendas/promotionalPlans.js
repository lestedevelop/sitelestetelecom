import {normalizeCityName} from "@/utils/cidade";

const PROMOTIONAL_PLAN_CODES = new Set([
    "EUVX0VOD9K",
    "EUVX0VPSZO",
    "EUVY0RK9RG",
]);

const ONE_GIGA_PROMOTIONAL_CITIES = new Set([
    "marica",
    "rio bonito",
    "tangua",
]);

const NITEROI_PROMOTIONAL_NOTICE =
    "*Planos de 600 MEGA (Niterói-RJ) com Oferta Válida até 31/07/2026 ou até durarem os estoques dos equipamentos AC - Wi-Fi 5 para ativação.";

const ONE_GIGA_PROMOTIONAL_NOTICE =
    "*Planos de 1 GIGA (Maricá, Rio Bonito e Tanguá-RJ) com Wi-Fi 6 AX. Oferta válida até 31/07/2026.";

export function isPromotionalPlan(plan) {
    const code = String(plan?.codser || "").trim().toUpperCase();
    const price = Number(plan?.valor);
    const discountPrice = Number(plan?.valor_desconto);
    const hasActiveDiscount = Number.isFinite(discountPrice) && discountPrice > 0 && discountPrice < price;

    return PROMOTIONAL_PLAN_CODES.has(code) && hasActiveDiscount;
}

export function getPromotionalPlanNotice(cityName) {
    const normalizedCityName = normalizeCityName(cityName);

    if (normalizedCityName === "niteroi") {
        return NITEROI_PROMOTIONAL_NOTICE;
    }

    if (ONE_GIGA_PROMOTIONAL_CITIES.has(normalizedCityName)) {
        return ONE_GIGA_PROMOTIONAL_NOTICE;
    }

    return null;
}
