export const streamingTierChannels = {
    HUB: "start",
    BLACK: "cine",
    POWER: "sports",
    ELITE: "family",
};


export const LESTE_PLAY_CODSER = [
    "EUIG14JZGJ", // TV 600 HUB PLAY LOCAL PRO
    "EUIG14KPNN", // TV 800 POWER PLAY
    "EUIH0RJF8R", // TV 800 BLACK CINEMA
    "EUIG14K91H", // TV 1GB POWER PLAY
    "EUIH0SIZ6O", // TV 1GB BLACK CINEMA
    "EUIH0SJ1H8", // TV 1GB POWER ELITE
];

const lestePlayCodserSet = new Set(LESTE_PLAY_CODSER);

export function isLestePlayPlan(planOrCodser) {
    const codser = typeof planOrCodser === "object"
        ? planOrCodser?.codser
        : planOrCodser;

    return lestePlayCodserSet.has(String(codser || "").trim().toUpperCase());
}

const streamingChannelByCodser = {
    EUIG14JZGJ: streamingTierChannels.HUB,
    EUIG14KPNN: streamingTierChannels.POWER,
    EUIH0RJF8R: streamingTierChannels.BLACK,
    EUIG14K91H: streamingTierChannels.POWER,
    EUIH0SIZ6O: streamingTierChannels.BLACK,
    EUIH0SJ1H8: streamingTierChannels.ELITE,
};

export function getStreamingChannelFromService(description = "") {
    const normalizedDescription = String(description).toUpperCase();

    if (normalizedDescription.includes("ELITE")) return streamingTierChannels.ELITE;
    if (normalizedDescription.includes("BLACK")) return streamingTierChannels.BLACK;
    if (normalizedDescription.includes("POWER")) return streamingTierChannels.POWER;
    if (normalizedDescription.includes("HUB")) return streamingTierChannels.HUB;

    return null;
}

function getStreamingChannelFromPlan(plan) {
    const codser = String(plan?.codser || "").trim().toUpperCase();
    if (codser) return streamingChannelByCodser[codser] || null;

    return getStreamingChannelFromService(plan?.descri_ser);
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
        const channel = getStreamingChannelFromPlan(plan);
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
