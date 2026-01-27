function buildWindowStart(hours = 24) {
    const now = new Date();
    const start = new Date(now.getTime() - hours * 60 * 60 * 1000);
    return { now, start };
}

async function getOverviewStats(collection, hours = 24) {
    const { now, start } = buildWindowStart(hours);

    const [byType, byLevel, byHour, topRoutes] = await Promise.all([
        collection
            .aggregate([
                { $match: { timestamp: { $gte: start.getTime() } } },
                { $group: { _id: "$type", count: { $sum: 1 } } },
                { $sort: { count: -1 } },
            ])
            .toArray(),
        collection
            .aggregate([
                { $match: { timestamp: { $gte: start.getTime() } } },
                { $group: { _id: "$level", count: { $sum: 1 } } },
                { $sort: { count: -1 } },
            ])
            .toArray(),
        collection
            .aggregate([
                { $match: { timestamp: { $gte: start.getTime() } } },
                {
                    $group: {
                        _id: {
                            $dateToString: {
                                format: "%Y-%m-%d %H:00",
                                date: { $toDate: "$timestamp" },
                            },
                        },
                        count: { $sum: 1 },
                    },
                },
                { $sort: { _id: 1 } },
            ])
            .toArray(),
        collection
            .aggregate([
                { $match: { timestamp: { $gte: start.getTime() } } },
                {
                    $group: {
                        _id: { $ifNull: ["$route", "$page"] },
                        count: { $sum: 1 },
                    },
                },
                { $sort: { count: -1 } },
                { $limit: 5 },
            ])
            .toArray(),
    ]);

    return {
        window: {
            from: start.getTime(),
            to: now.getTime(),
        },
        byType,
        byLevel,
        byHour,
        topRoutes,
    };
}

function normalizeGroup(list) {
    return list
        .filter((item) => item && item._id)
        .map((item) => ({ key: item._id, count: item.count || 0 }));
}

function buildHourlySeries(list) {
    const series = list.map((item) => ({
        label: item._id,
        count: item.count || 0,
    }));
    const max = series.reduce((acc, item) => Math.max(acc, item.count), 1);
    return { series, max };
}

async function getLatestErrors(collection, limit = 5) {
    const items = await collection
        .find({
            $or: [{ level: "error" }, { level: "fatal" }, { type: "api_error" }],
        })
        .sort({ timestamp: -1 })
        .limit(limit)
        .toArray();

    return items.map((item) => ({
        ...item,
        _id: String(item._id),
    }));
}

export { getOverviewStats, normalizeGroup, buildHourlySeries, getLatestErrors };
