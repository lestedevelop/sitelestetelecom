import {NextResponse} from "next/server";
import {coreApi} from "@/lib/coreApi";
import {getUtmFromReq} from "@/lib/utmServerRaw";

function getCookieValue(req, name) {
    const cookieHeader = req.headers.get("cookie") || "";

    const raw = cookieHeader
        .split(";")
        .map((s) => s.trim())
        .find((cookie) => cookie.startsWith(`${name}=`))
        ?.split("=")
        .slice(1)
        .join("=");

    return raw ? decodeURIComponent(raw) : "";
}

export async function POST(req) {
    try {
        const body = await req.json();
        const rawUtm = getUtmFromReq(req);
        const {idafiliado: idafiliadoFromUtm, ...utmFromCookie} = rawUtm;
        const bodyUtm = body?.utm && typeof body.utm === "object" ? body.utm : {};
        const {idafiliado: idafiliadoFromBodyUtm, ...cleanBodyUtm} = bodyUtm;
        const idafiliado =
            body?.idafiliado ||
            getCookieValue(req, "leste_idafiliado") ||
            idafiliadoFromBodyUtm ||
            idafiliadoFromUtm;

        const payload = {
            ...body,
            utm: Object.keys(cleanBodyUtm).length ? cleanBodyUtm : utmFromCookie,
            idafiliado,
        };
        console.log(payload);
        const resp = await coreApi.put("/api/sac/externo/precadastroNew", payload);

        return NextResponse.json(resp.data, {status: 200});
    } catch (error) {
        const status = error?.response?.status || 500;
        const data = error?.response?.data;
        const message =
            data?.message ||
            data?.error ||
            error?.message ||
            "Erro ao enviar precadastro";

        console.error("PRECADASTRO FAIL", {
            status,
            message,
            responseData: data || null,
        });

        return NextResponse.json({message, details: data || null}, {status});
    }
}
