import { NextResponse } from "next/server";
import { coreApi } from "@/lib/coreApi";

export async function GET(req) {
    try {
        const codcid = new URL(req.url).searchParams.get("codcid")?.trim();
        const response = await coreApi.get("/api/sac/externo/channels", {
            params: codcid ? {codcid} : undefined,
        });

        return NextResponse.json(response.data, {
            status: 200,
            headers: {
                "Cache-Control": "no-store",
                "X-Debug-Codcid": codcid || "not-sent",
            },
        });
    } catch (error) {
        const status = error?.response?.status || 500;
        const data = error?.response?.data;
        const message =
            data?.message ||
            data?.error ||
            error?.message ||
            "Erro ao validar viabilidade";

        console.error("CORE TEST FAIL", {
            status,
            message,
            responseData: data,
            coreApiBase: process.env.CORE_API_URL,
            keyPrefix: (process.env.INSTITUCIONAL_KEY || "").slice(0, 6) + "***",
        });

        return NextResponse.json(
            {
                message,
                status,
                details: data || null,
            },
            { status }
        );
    }
}
