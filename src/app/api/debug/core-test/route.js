import { NextResponse } from "next/server";
import { coreApi } from "@/lib/coreApi";
import { getUtmFromReq } from "@/lib/utmServerRaw";

export async function GET(req) {
    try {
        // const body = await req.json();
        const body = {latitude: -22.905329258544903, longitude: -43.10621668614797  }

        const payload = {
            ...body,
        };

        const response = await coreApi.post("/api/sac/externo/viabilidade/latlng", payload);

        return NextResponse.json(response.data, { status: 200 });
    } catch (error) {
        const status = error?.response?.status || 500;
        const data = error?.response?.data;
        const message =
            data?.message ||
            data?.error ||
            error?.message ||
            "Erro ao validar viabilidade";

        console.error("VIABILIDADE FAIL", {
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
