import { NextResponse } from "next/server";
import { coreApi } from "@/lib/coreApi";
import { getUtmFromReq } from "@/lib/utmServerRaw";
import {toYmd} from "@/utils/utils";

export async function GET(req) {
    try {
        const { searchParams } = new URL(req.url);

        const cidade = searchParams.get("cidade");
        const date = searchParams.get("date");
        const { utm } = getUtmFromReq(req);

        if (!cidade || !date) {
            return NextResponse.json(
                { ok: false, message: "cidade e date são obrigatórios" },
                { status: 400 }
            );
        }

        const payloadNext = { cidade, data: date, ...utm };

        const nextResp = await coreApi.post("/api/sac/externo/vaga/next", payloadNext);
        const slot = nextResp.data;

        const slotObj = Array.isArray(slot) ? slot[0] : slot;
        if (!slotObj?.start) {
            return NextResponse.json(
                { ok: false, message: "Não foi encontrada próxima vaga válida", slot: slotObj || null },
                { status: 404 }
            );
        }

        const dataValida = toYmd(slotObj.start);

        const payloadVaga = { cidade, data: dataValida, ...utm };
        const vagasResp = await coreApi.post("/api/sac/externo/vaga", payloadVaga);

        return NextResponse.json(
            {
                ok: true,
                dataValida,
                next: slotObj,
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
