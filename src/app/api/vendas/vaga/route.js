import { NextResponse } from "next/server";
import { coreApi } from "@/lib/coreApi";
import { getUtmFromReq } from "@/lib/utmServerRaw";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);

        const cidade = searchParams.get("cidade");
        const date = searchParams.get("date");
        const { utm } = getUtmFromReq(req);

        if (!cidade || !date) {
            return NextResponse.json(
                { ok: false, message: "cidade e date sao obrigatorios" },
                { status: 400 }
            );
        }

        const payloadVaga = { cidade, data: date, ...utm };
        const vagasResp = await coreApi.post("/api/sac/externo/vaga", payloadVaga);

        return NextResponse.json(
            {
                ok: true,
                vagas: vagasResp.data,
            },
            { status: 200 }
        );
    } catch (error) {
        const status = error?.response?.status || 500;
        const data = error?.response?.data;

        return NextResponse.json(
            {
                ok: false,
                status,
                message:
                    data?.message ||
                    data?.error ||
                    error?.message ||
                    "Erro ao buscar vagas",
                data,
            },
            { status }
        );
    }
}
