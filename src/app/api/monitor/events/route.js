import { NextResponse } from "next/server";
import { z } from "zod";
import { getMonitorCollection } from "@/lib/mongoMonitor";
import { verifyToken } from "@/lib/monitoring/crypto";
import { checkRateLimit } from "@/lib/monitoring/rateLimit";
import { sanitize } from "@/lib/monitoring/sanitize";

const EventSchema = z
    .object({
        type: z
            .enum([
                "js_error",
                "promise_rejection",
                "api_error",
                "warning",
                "blank_screen",
                "navigation",
                "web_vital",
                "custom",
            ])
            .optional(),
        level: z.enum(["info", "warn", "error", "fatal"]).optional(),
        message: z.string().max(5000).optional(),
        stack: z.string().max(20000).optional(),
        cause: z.any().optional(),
        timestamp: z.number().optional(),
        page: z.string().max(2000).optional(),
        route: z.string().max(2000).optional(),
        request: z
            .object({
                url: z.string().max(4000).optional(),
                method: z.string().max(20).optional(),
                status: z.number().optional(),
                durationMs: z.number().optional(),
                responseSnippet: z.string().max(2000).optional(),
                bodySnippet: z.string().max(8000).optional(),
                headers: z.record(z.string(), z.string()).optional(),
            })
            .partial()
            .optional(),
        user: z
            .object({
                id: z.string().max(200).optional(),
                role: z.string().max(200).optional(),
            })
            .partial()
            .optional(),
        tags: z.array(z.string().max(200)).optional(),
        correlationId: z.string().max(200).optional(),
        requestId: z.string().max(200).optional(),
        sessionId: z.string().max(200).optional(),
        anonymousId: z.string().max(200).optional(),
        environment: z.string().max(50).optional(),
        appVersion: z.string().max(50).optional(),
        client: z
            .object({
                userAgent: z.string().max(500).optional(),
                language: z.string().max(20).optional(),
                viewport: z.any().optional(),
            })
            .partial()
            .optional(),
    })
    .passthrough();

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

function getTokenFromRequest(req) {
    const headerToken = req.headers.get("x-monitor-token");
    if (headerToken) return headerToken;

    const auth = req.headers.get("authorization");
    if (auth && auth.toLowerCase().startsWith("bearer ")) {
        return auth.slice(7).trim();
    }

    return "";
}

export async function POST(req) {
    if (!originAllowed(req)) {
        return NextResponse.json({ error: "Origin not allowed" }, { status: 403 });
    }

    const contentLength = Number(req.headers.get("content-length") || 0);
    if (contentLength > 100_000) {
        return NextResponse.json({ error: "Payload too large" }, { status: 413 });
    }

    const secret = process.env.MONITOR_INGEST_SECRET;
    if (!secret) {
        return NextResponse.json({ error: "Missing ingest secret" }, { status: 500 });
    }
    if (!process.env.MONGODB_MONITOR_URI) {
        return NextResponse.json({ error: "Missing monitor database" }, { status: 500 });
    }

    const token = getTokenFromRequest(req);
    const payload = verifyToken(token, secret);
    if (!payload || payload.aud !== "monitor_ingest") {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const ip = getClientIp(req);
    const rate = checkRateLimit({ key: `events:${ip}`, limit: 120, windowMs: 60_000 });
    if (!rate.ok) {
        return NextResponse.json({ error: "Rate limit" }, { status: 429 });
    }

    let body;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const parsed = EventSchema.safeParse(body);
    if (!parsed.success) {
        return NextResponse.json(
            { error: "Invalid payload", details: parsed.error.flatten() },
            { status: 400 }
        );
    }

    const sanitized = sanitize(parsed.data);
    const serverTimestamp = new Date();

    const event = {
        ...sanitized,
        timestamp: sanitized.timestamp || Date.now(),
        serverTimestamp,
        environment: sanitized.environment || process.env.APP_ENV || process.env.NODE_ENV,
        appVersion: sanitized.appVersion || process.env.APP_VERSION,
        requestId: sanitized.requestId || req.headers.get("x-request-id") || undefined,
        meta: {
            ip,
            userAgent: req.headers.get("user-agent") || "",
            origin: req.headers.get("origin") || "",
        },
    };

    try {
        const collection = await getMonitorCollection("events");
        await collection.insertOne(event);
        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("Monitor ingest error", error);
        return NextResponse.json({ error: "Storage failed" }, { status: 500 });
    }
}
