import {NextResponse} from "next/server";
import {coreApi} from "@/lib/coreApi";

export async function POST(req) {
    try {
        const body = await req.json();

        const payload = {
            celAmigo: body.celularAmigo,
            cityAmigo: body.cidadeAmigo,
            cpf: body.cpfAssinante,
            enderecoAmigo: body.enderecoAmigo,
            name: body.nomeAssinante,
            nameAmigo: body.nomeAmigo,
            phoneAmigo: body.telefoneAmigo,
        };
        console.log(payload);
        const resp = await coreApi.put("/api/sac/externo/indique_ganhe", payload);

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
