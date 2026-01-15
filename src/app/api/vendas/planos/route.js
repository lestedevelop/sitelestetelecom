import { NextResponse } from "next/server";
import { coreApi } from "@/lib/coreApi";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);
        const cidade = searchParams.get("cidade");

        if (!cidade) {
            return NextResponse.json(
                { ok: false, message: "cidade é obrigatório" },
                { status: 400 }
            );
        }

        const response = await coreApi.post("/api/sac/externo/planos", { cidade });

        return NextResponse.json({ ok: true, data: response.data }, { status: 200 });
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
                    "Erro ao buscar planos",
                data,
            },
            { status }
        );
    }
}
