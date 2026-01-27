import { NextResponse } from "next/server";
import { createSignedToken } from "@/lib/monitoring/crypto";
import { checkRateLimit } from "@/lib/monitoring/rateLimit";

function getClientIp(req) {
    return (
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
        req.headers.get("x-real-ip") ||
        "unknown"
    );
}

function originAllowed(req) {
    const allowed = process.env.APP_ORIGIN;
    if (!allowed) return true;
    const origin = req.headers.get("origin");
    if (!origin) return true;
    return origin === allowed;
}

export async function GET(req) {
    if (!originAllowed(req)) {
        return NextResponse.json({ error: "Origin not allowed" }, { status: 403 });
    }

    const secret = process.env.MONITOR_INGEST_SECRET;
    if (!secret) {
        return NextResponse.json({ error: "Missing ingest secret" }, { status: 500 });
    }

    const ip = getClientIp(req);
    const rate = checkRateLimit({ key: `token:${ip}`, limit: 30, windowMs: 60_000 });
    if (!rate.ok) {
        return NextResponse.json({ error: "Rate limit" }, { status: 429 });
    }

    const ttlMs = 5 * 60 * 1000;
    const token = createSignedToken("monitor_ingest", secret, ttlMs, {
        ip,
    });

    return NextResponse.json({ token, expiresAt: Date.now() + ttlMs });
}
