import crypto from "crypto";

function base64UrlEncode(input) {
    const buffer = Buffer.isBuffer(input) ? input : Buffer.from(String(input));
    return buffer
        .toString("base64")
        .replace(/=/g, "")
        .replace(/\+/g, "-")
        .replace(/\//g, "_");
}

function base64UrlDecode(input) {
    const pad = input.length % 4 ? "=".repeat(4 - (input.length % 4)) : "";
    const normalized = input.replace(/-/g, "+").replace(/_/g, "/") + pad;
    return Buffer.from(normalized, "base64").toString("utf8");
}

export function signToken(payload, secret) {
    const body = base64UrlEncode(JSON.stringify(payload));
    const signature = crypto
        .createHmac("sha256", secret)
        .update(body)
        .digest();

    return `${body}.${base64UrlEncode(signature)}`;
}

export function verifyToken(token, secret) {
    if (!token || typeof token !== "string") return null;
    const parts = token.split(".");
    if (parts.length !== 2) return null;

    const [body, signature] = parts;
    const expected = crypto
        .createHmac("sha256", secret)
        .update(body)
        .digest();

    const provided = Buffer.from(
        signature.replace(/-/g, "+").replace(/_/g, "/"),
        "base64"
    );

    if (provided.length !== expected.length) return null;
    if (!crypto.timingSafeEqual(provided, expected)) return null;

    let payload;
    try {
        payload = JSON.parse(base64UrlDecode(body));
    } catch {
        return null;
    }

    if (payload?.exp && Date.now() > payload.exp) return null;
    return payload || null;
}

export function createSignedToken(aud, secret, ttlMs, extra = {}) {
    const now = Date.now();
    const payload = {
        aud,
        iat: now,
        exp: now + ttlMs,
        ...extra,
    };
    return signToken(payload, secret);
}
