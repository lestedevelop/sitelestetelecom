export const CARD_CHANNEL_PLAN_CODES = Object.freeze({
    start: "start",
    sports: "sports",
    cine: "hbo",
    family: "family",
});

export function getCardPlanCode(channel) {
    return CARD_CHANNEL_PLAN_CODES[channel] || channel || null;
}

export function getPlanDataForCard(channelsByPlan, channel) {
    const planCode = getCardPlanCode(channel);
    if (!planCode || !channelsByPlan || typeof channelsByPlan !== "object") return null;

    const planData = channelsByPlan[planCode];
    if (!planData || typeof planData !== "object") return null;

    const remainingChannels = Number(planData.remainingChannels);
    const totalChannels = Number(planData.totalChannels);

    return {
        planCode,
        featuredChannels: Array.isArray(planData.featuredChannels)
            ? planData.featuredChannels
            : [],
        channels: Array.isArray(planData.channels) ? planData.channels : [],
        remainingChannels: Number.isFinite(remainingChannels) ? remainingChannels : 0,
        totalChannels: Number.isFinite(totalChannels) ? totalChannels : null,
    };
}

export function shouldShowRemainingChannels(planData) {
    return Number(planData?.remainingChannels) > 0;
}

export function getChannelBadgeCount(planData) {
    const totalChannels = Number(planData?.totalChannels);
    return Number.isFinite(totalChannels) && totalChannels > 0 ? totalChannels : 0;
}

export function getFeaturedChannelsLayout(planData) {
    const featuredCount = Array.isArray(planData?.featuredChannels)
        ? planData.featuredChannels.filter((channel) => channel?.image?.url).length
        : 0;
    const itemCount = featuredCount + (getChannelBadgeCount(planData) > 0 ? 1 : 0);

    let columns = itemCount;
    if (itemCount === 4) columns = 2;
    if (itemCount >= 5) columns = 3;

    return {
        featuredCount,
        itemCount,
        columns: Math.max(1, columns),
    };
}

export function buildApiChannelSections(planData, categoryOrder = []) {
    if (!planData) return null;

    const channels = Array.isArray(planData.channels) ? planData.channels : [];
    const groups = new Map();

    for (const channel of channels) {
        if (!channel?.image?.url && !channel?.src) continue;
        const category = channel?.category || "Canais";
        if (!groups.has(category)) groups.set(category, []);
        groups.get(category).push(channel);
    }

    const orderedCategories = [
        ...categoryOrder.filter((category) => groups.has(category)),
        ...[...groups.keys()].filter((category) => !categoryOrder.includes(category)),
    ];

    return orderedCategories.map((title) => ({title, channels: groups.get(title)}));
}
