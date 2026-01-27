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

function getTypeBadgeClass(type) {
    switch (type) {
        case "js_error":
        case "promise_rejection":
            return "bg-red-50 text-red-700 border-red-200";
        case "api_error":
            return "bg-orange-50 text-orange-700 border-orange-200";
        case "warning":
            return "bg-yellow-50 text-yellow-700 border-yellow-200";
        case "web_vital":
            return "bg-blue-50 text-blue-700 border-blue-200";
        case "navigation":
            return "bg-indigo-50 text-indigo-700 border-indigo-200";
        default:
            return "bg-neutral-100 text-neutral-700 border-neutral-200";
    }
}

function getLevelBadgeClass(level) {
    switch (level) {
        case "fatal":
            return "bg-red-100 text-red-800 border-red-200";
        case "error":
            return "bg-orange-100 text-orange-800 border-orange-200";
        case "warn":
            return "bg-yellow-100 text-yellow-800 border-yellow-200";
        case "info":
            return "bg-emerald-100 text-emerald-800 border-emerald-200";
        default:
            return "bg-neutral-100 text-neutral-700 border-neutral-200";
    }
}

function getStatusBadgeClass(status) {
    const code = Number(status);
    if (!Number.isFinite(code)) return "bg-neutral-100 text-neutral-700 border-neutral-200";
    if (code >= 500) return "bg-red-100 text-red-800 border-red-200";
    if (code >= 400) return "bg-orange-100 text-orange-800 border-orange-200";
    if (code >= 300) return "bg-yellow-100 text-yellow-800 border-yellow-200";
    return "bg-emerald-100 text-emerald-800 border-emerald-200";
}

export {
    buildQuery,
    buildSearchParams,
    formatDate,
    getDisplayLevel,
    getLevelBadgeClass,
    getStatusBadgeClass,
    getTypeBadgeClass,
    normalizeParam,
    parseDate,
};
