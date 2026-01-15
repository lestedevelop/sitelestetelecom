import { NextResponse } from "next/server";
import { coreApi } from "@/lib/coreApi";

export async function GET() {
    try {
        // const response = await coreApi.post("/api/sac/planosvenda");
        const response = await coreApi.post("/api/sac/externo/planos", {cidade: "3303302"});
        // planos filtro codigoCidade
        // const response = await coreApi.post("/api/sac/cidades");

        return NextResponse.json(
            {
                ok: true,
                data: response.data,
            },
            { status: 200 }
        );
        console.log(NextResponse.json({data:response.data}))
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
                    "Erro ao chamar coreApi",
                coreApiBase: process.env.CORE_API_URL,
                keyPrefix:
                    (process.env.INSTITUCIONAL_KEY || "").slice(0, 6) + "***",
                data,
            },
            { status }
        );
    }
}
