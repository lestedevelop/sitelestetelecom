export function getUtmFromUrl() {
    if (typeof window === "undefined") return null;
    const sp = new URLSearchParams(window.location.search);

    const utm = {
        utm_source: sp.get("utm_source") || "",
        utm_medium: sp.get("utm_medium") || "",
        utm_campaign: sp.get("utm_campaign") || "",
        utm_term: sp.get("utm_term") || "",
        utm_content: sp.get("utm_content") || "",
        gclid: sp.get("gclid") || "",
        fbclid: sp.get("fbclid") || "",
    };

    const hasAny = Object.values(utm).some(Boolean);
    return hasAny ? utm : null;
}

export function getIdAfiliadoFromUrl() {
    if (typeof window === "undefined") return "";

    const sp = new URLSearchParams(window.location.search);
    return sp.get("idafiliado") || "";
}

export function getClientCookieValue(name) {
    if (typeof document === "undefined") return "";

    const raw = document.cookie
        .split(";")
        .map((cookie) => cookie.trim())
        .find((cookie) => cookie.startsWith(`${name}=`))
        ?.split("=")
        .slice(1)
        .join("=");

    return raw ? decodeURIComponent(raw) : "";
}

function getClientCookieJson(name) {
    try {
        const raw = getClientCookieValue(name);
        const parsed = raw ? JSON.parse(raw) : {};

        return parsed && typeof parsed === "object" ? parsed : {};
    } catch {
        return {};
    }
}

export function getCapturedTrackingFromCookies() {
    const rawUtm = getClientCookieJson("leste_utm");
    const {idafiliado: idafiliadoFromUtm, ...utm} = rawUtm;
    const idafiliado = getClientCookieValue("leste_idafiliado") || idafiliadoFromUtm || "";

    return {utm, idafiliado};
}
