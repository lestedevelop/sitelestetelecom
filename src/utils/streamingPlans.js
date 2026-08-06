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

function toCardPrice(value) {
    const normalized = String(value ?? "").replace(",", ".");
    const number = Number(normalized);

    if (!Number.isFinite(number)) return null;

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

    const streamingPlans = templates.flatMap((template) => {
        const backendPlans = variantsBySpeed[template.id];
        const availableChannels = Object.keys(backendPlans);

        // O template define apenas o visual do card. Sem um plano correspondente
        // retornado pela API, nenhum card é criado.
        if (availableChannels.length === 0) return [];

        const prices = {};

        Object.entries(backendPlans).forEach(([channel, backendPlan]) => {
            const price = toCardPrice(backendPlan?.valor);
            if (price) prices[channel] = price;
        });

        const channels = availableChannels.includes(template.channels)
            ? template.channels
            : availableChannels[0];
        const primaryBackendPlan = backendPlans[channels];

        return [{
            ...template,
            __streaming: true,
            backendPlans,
            backendPlan: primaryBackendPlan,
            channels,
            packages: template.packages?.filter(({channel}) => availableChannels.includes(channel)),
            prices,
            price: prices[channels],
        }];
    });

    return {streamingPlans, standardPlans};
}
