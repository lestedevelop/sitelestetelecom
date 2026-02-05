import {NextResponse} from "next/server";
import {coreApi} from "@/lib/coreApi";
import {getUtmFromReq} from "@/lib/utmServerRaw";

export async function GET(req) {
    try {
        const {searchParams} = new URL(req.url);
        const cidade = searchParams.get("cidade");
        const predio = searchParams.get("predio");
        const {utm} = getUtmFromReq(req);


        if (!cidade) {
            return NextResponse.json(
                {ok: false, message: "cidade é obrigatório"},
                {status: 400}
            );
        }

        const payload = {cidade: cidade, predio: Number(predio), ...utm};

        const response = await coreApi.post("/api/sac/externo/planosNew", payload);

        return NextResponse.json({ok: true, data: response.data}, {status: 200});
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
            {status}
        );
    }
}
