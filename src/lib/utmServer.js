import { cookies, headers } from "next/headers";

export async function getUtmFromRequest() {
    try {
        const cookieStore = await cookies();
        const c = cookieStore.get("leste_utm")?.value;

        let utm = {};
        try {
            utm = c ? JSON.parse(decodeURIComponent(c)) : {};
        } catch {
            utm = {};
        }

        const h = await headers();
        const userAgent = h.get("user-agent") || "";
        const referer = h.get("referer") || "";
        const ip =
            h.get("x-forwarded-for")?.split(",")[0]?.trim() ||
            h.get("x-real-ip") ||
            "";

        return { utm, meta: { userAgent, referer, ip } };
    } catch {
        return { utm: {}, meta: {} };
    }
}
