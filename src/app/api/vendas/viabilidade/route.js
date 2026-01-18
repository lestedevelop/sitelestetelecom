import { NextResponse } from "next/server";
import { coreApi } from "@/lib/coreApi";
import { getUtmFromReq } from "@/lib/utmServerRaw";

export async function POST(req) {
    try {
        const body = await req.json();

        const cepDigits = String(body?.cep || "").replace(/\D/g, "");
        const numero = String(body?.numero || "").trim();
        const { utm } = getUtmFromReq();

        const payload = {
            cep: formatCep(cepDigits),
            numero,
            ...utm,
        };

        const response = await coreApi.post("/api/sac/externo/viabilidade", payload);

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

function formatCep(cepDigits) {
    if (cepDigits.length !== 8) return cepDigits;
    return `${cepDigits.slice(0, 5)}-${cepDigits.slice(5)}`;
}
