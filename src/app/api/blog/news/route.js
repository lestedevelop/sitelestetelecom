import {NextResponse} from "next/server";
import {getBlogNews} from "@/lib/blog";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    return NextResponse.json(await getBlogNews(), {
        headers: {"Cache-Control": "no-store"},
    });
}
