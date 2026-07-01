import {NextResponse} from "next/server";
import {coreApi} from "@/lib/coreApi";
import {getUtmFromReq} from "@/lib/utmServerRaw";

export async function POST(req) {
    try {
        const body = await req.json();
        const utm = getUtmFromReq(req);

        const payload = {
            name: String(body?.name || "").trim(),
            email: String(body?.email || "").trim(),
            endereco: String(body?.endereco || "").trim(),
            cep: String(body?.cep || "").trim(),
            numero: String(body?.numero || "").trim(),
            cel: String(body?.cel || "").trim(),
            checkInfo: Boolean(body?.checkInfo),
            ...utm,
        };

        const resp = await coreApi.put("/api/sac/externo/ultra", payload);

        return NextResponse.json(resp.data, {status: 200});
    } catch (error) {
        const status = error?.response?.status || 500;
        const data = error?.response?.data;
        const message =
            data?.message ||
            data?.error ||
            error?.message ||
            "Erro ao enviar cadastro Ultra";

        console.error("ULTRA FAIL", {
            status,
            message,
            responseData: data || null,
        });

        return NextResponse.json({message, details: data || null}, {status});
    }
}
