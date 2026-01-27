import { NextResponse } from "next/server";
import {
    ADMIN_COOKIE_NAME,
    createAdminSession,
    getAdminCookieOptions,
    getAdminSecret,
} from "@/lib/monitoring/adminAuth";

export async function POST(req) {
    const secret = getAdminSecret();
    if (!secret) {
        return NextResponse.json({ error: "Missing admin secret" }, { status: 500 });
    }

    let body;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

    const password = String(body?.password || "");
    if (!password || password !== secret) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const token = createAdminSession(secret);
    const response = NextResponse.json({ ok: true });
    response.cookies.set(ADMIN_COOKIE_NAME, token, getAdminCookieOptions());
    return response;
}
