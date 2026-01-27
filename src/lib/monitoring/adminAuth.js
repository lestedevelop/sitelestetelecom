import { createSignedToken, verifyToken } from "./crypto";

export const ADMIN_COOKIE_NAME = "monitor_admin";

export function getAdminSecret() {
    return process.env.MONITOR_ADMIN_PASSWORD || process.env.MONITOR_INGEST_SECRET || "";
}

export function createAdminSession(secret) {
    const ttlMs = 7 * 24 * 60 * 60 * 1000;
    return createSignedToken("monitor_admin", secret, ttlMs);
}

export function verifyAdminSession(token, secret) {
    const payload = verifyToken(token, secret);
    if (!payload || payload.aud !== "monitor_admin") return null;
    return payload;
}

export function getAdminCookieOptions() {
    return {
        httpOnly: true,
        sameSite: "lax",
        secure: process.env.NODE_ENV === "production",
        path: "/monitoramento",
    };
}
