function formatDate(timestamp) {
    if (!timestamp) return "-";
    const date = timestamp instanceof Date ? timestamp : new Date(timestamp);
    return date.toLocaleString("pt-BR");
}

function normalizeParam(value) {
    if (Array.isArray(value)) return value[0];
    return value || "";
}

function parseDate(value, endOfDay = false) {
    if (!value) return null;
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return null;
    if (endOfDay) {
        date.setHours(23, 59, 59, 999);
    } else {
        date.setHours(0, 0, 0, 0);
    }
    return date.getTime();
}

function escapeRegex(input) {
    return String(input).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function buildQuery(filters) {
    const query = {};
    if (filters.type) query.type = filters.type;
    if (filters.level) {
        if (filters.level === "error") {
            query.$and = (query.$and || []).concat([
                { $or: [{ level: "error" }, { type: "api_error" }] },
            ]);
        } else {
            query.level = filters.level;
        }
    }
    if (filters.status) query["request.status"] = filters.status;
    if (filters.appVersion) query.appVersion = filters.appVersion;
    if (filters.environment) query.environment = filters.environment;

    if (filters.route) {
        const route = String(filters.route);
        query.$or = [
            { page: route },
            { route },
            { "request.url": { $regex: escapeRegex(route), $options: "i" } },
        ];
    }

    if (filters.q) {
        const regex = new RegExp(escapeRegex(filters.q), "i");
        query.$and = (query.$and || []).concat([
            { $or: [{ message: regex }, { "request.url": regex }, { stack: regex }] },
        ]);
    }

    if (filters.from || filters.to) {
        query.timestamp = {};
        if (filters.from) query.timestamp.$gte = filters.from;
        if (filters.to) query.timestamp.$lte = filters.to;
    }

    return query;
}

function buildSearchParams(params) {
    const entries = Object.entries(params).filter(([, value]) => value !== "" && value != null);
    const search = new URLSearchParams();
    for (const [key, value] of entries) {
        search.set(key, String(value));
    }
    const qs = search.toString();
    return qs ? `?${qs}` : "";
}

function getDisplayLevel(event) {
    if (event?.type === "api_error") return "error";
    return event?.level || "-";
}

export {
    buildQuery,
    buildSearchParams,
    formatDate,
    getDisplayLevel,
    normalizeParam,
    parseDate,
};
