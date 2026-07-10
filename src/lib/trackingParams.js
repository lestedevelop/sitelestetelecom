export const TRACKING_PARAM_KEYS = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "gclid",
    "fbclid",
    "msclkid",
    "idafiliado",
];

const TRACKING_TARGET_HOSTS = new Set([
    "vendas.lestetelecom.com.br",
]);

function normalizeHostname(hostname = "") {
    return hostname.replace(/^www\./, "");
}

function toSearchParams(searchParams) {
    if (!searchParams) return new URLSearchParams();

    if (searchParams instanceof URLSearchParams) {
        return searchParams;
    }

    return new URLSearchParams(searchParams.toString());
}

export function getTrackingParams(searchParams) {
    const params = toSearchParams(searchParams);

    return TRACKING_PARAM_KEYS.reduce((acc, key) => {
        const value = params.get(key);

        if (value) {
            acc[key] = value;
        }

        return acc;
    }, {});
}

export function hasTrackingParams(searchParams) {
    return Object.keys(getTrackingParams(searchParams)).length > 0;
}

export function shouldTrackHref(href, origin) {
    if (!href || href.startsWith("#")) return false;

    const normalizedHref = href.trim().toLowerCase();

    if (
        normalizedHref.startsWith("mailto:") ||
        normalizedHref.startsWith("tel:") ||
        normalizedHref.startsWith("javascript:")
    ) {
        return false;
    }

    try {
        const url = new URL(href, origin);
        const currentOrigin = new URL(origin);

        return url.origin === currentOrigin.origin || TRACKING_TARGET_HOSTS.has(normalizeHostname(url.hostname));
    } catch {
        return false;
    }
}

export function withTrackingParams(href, searchParams, origin = "https://www.lestetelecom.com.br") {
    const trackingParams = getTrackingParams(searchParams);

    if (Object.keys(trackingParams).length === 0 || !shouldTrackHref(href, origin)) {
        return href;
    }

    const url = new URL(href, origin);

    Object.entries(trackingParams).forEach(([key, value]) => {
        if (!url.searchParams.has(key)) {
            url.searchParams.set(key, value);
        }
    });

    const currentOrigin = new URL(origin);

    if (url.origin === currentOrigin.origin) {
        return `${url.pathname}${url.search}${url.hash}`;
    }

    return url.toString();
}
