import {NextResponse} from "next/server";
import {coreApi} from "@/lib/coreApi";
import {getUtmFromReq} from "@/lib/utmServerRaw";

export async function POST(req) {
    try {
        const body = await req.json();
        const utm = getUtmFromReq()

        const payload = {
            name: body.nome,
            email: body.email,
            cel: body.telefone,
            empresa: body.empresa,
            cnpj: body.cnpj,
            numero: body.numero,
            cep:body.cep,
            ...utm
        };
        const resp = await coreApi.put("/api/sac/externo/corporate", payload);
        return NextResponse.json(resp.data, {status: 200});

    } catch (error) {
        const status = error?.response?.status || 500;
        const data = error?.response?.data;
        const message =
            data?.message ||
            data?.error ||
            error?.message ||
            "Erro ao enviar indicacao";

        console.error("INDICACAO FAIL", {
            status,
            message,
            responseData: data || null,
        });

        return NextResponse.json({message, details: data || null}, {status});
    }
}
