export function getUtmFromReq(req) {
    try {
        const cookieHeader = req.headers.get("cookie") || "";

        const raw = cookieHeader
            .split(";")
            .map((s) => s.trim())
            .find((c) => c.startsWith("leste_utm="))
            ?.split("=")
            .slice(1)
            .join("=");

        const utm = raw ? JSON.parse(decodeURIComponent(raw)) : {};

        return utm && typeof utm === "object" ? utm : {};
    } catch {
        return {};
    }
}
