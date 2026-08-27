import {NextResponse} from "next/server";
import {
    getLestePlayChannelsSync,
    startLestePlayChannelsSync,
} from "@/lib/lestePlayChannelsSync.mjs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    startLestePlayChannelsSync();
    const service = getLestePlayChannelsSync();
    await service.syncIfStale(30_000);
    const payload = await service.getPublicSnapshot();

    return NextResponse.json(payload || {plans: [], channelsByPlan: {}}, {
        headers: {"Cache-Control": "no-store"},
    });
}
