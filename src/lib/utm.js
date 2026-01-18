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
