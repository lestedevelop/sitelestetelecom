export const streamingTierChannels = {
    HUB: "start",
    BLACK: "cine",
    POWER: "sports",
    ELITE: "family",
};

export function getStreamingChannelFromService(description = "") {
    const normalizedDescription = String(description).toUpperCase();

    // ELITE precisa vir antes de POWER porque o serviço pode conter "POWER ELITE".
    if (normalizedDescription.includes("ELITE")) return streamingTierChannels.ELITE;
    if (normalizedDescription.includes("BLACK")) return streamingTierChannels.BLACK;
    if (normalizedDescription.includes("POWER")) return streamingTierChannels.POWER;
    if (normalizedDescription.includes("HUB")) return streamingTierChannels.HUB;

    return null;
}

function getStreamingSpeedId(plan) {
    const description = String(plan?.descri_ser || plan?.nome_exibicao || "").toUpperCase();
    const download = Number(plan?.down);

    if (/\b1\s*(?:GB|GIGA)\b/.test(description) || download >= 1000) return "1-giga";
    if (/\b800\b/.test(description) || download === 800) return "800-mega";
    if (/\b600\b/.test(description) || download === 600) return "600-mega";

    return null;
}

function toCardPrice(value, fallback) {
    const normalized = String(value ?? "").replace(",", ".");
    const number = Number(normalized);

    if (!Number.isFinite(number)) return fallback;

    const [integer, cents = "00"] = number.toFixed(2).split(".");
    return {integer, cents, period: "/mês"};
}

export function groupStreamingPlans(plans = [], templates = []) {
    const templateIds = new Set(templates.map((template) => template.id));
    const variantsBySpeed = Object.fromEntries(
        templates.map((template) => [template.id, {}])
    );
    const standardPlans = [];

    plans.forEach((plan) => {
        const channel = getStreamingChannelFromService(plan?.descri_ser);
        const speedId = getStreamingSpeedId(plan);

        const template = templates.find((item) => item.id === speedId);
        const channelAllowedForSpeed = template?.prices?.[channel];

        if (!channel || !speedId || !templateIds.has(speedId) || !channelAllowedForSpeed) {
            standardPlans.push(plan);
            return;
        }

        variantsBySpeed[speedId][channel] ||= plan;
    });

    const streamingPlans = templates.map((template) => {
        const backendPlans = variantsBySpeed[template.id];
        const prices = {...template.prices};

        Object.entries(backendPlans).forEach(([channel, backendPlan]) => {
            prices[channel] = toCardPrice(backendPlan?.valor, prices[channel] || template.price);
        });

        return {
            ...template,
            __streaming: true,
            backendPlans,
            prices,
        };
    });

    return {streamingPlans, standardPlans};
}
