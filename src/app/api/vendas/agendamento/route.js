import { NextResponse } from "next/server";
import { coreApi } from "@/lib/coreApi";
import { getUtmFromReq } from "@/lib/utmServerRaw";
import FormData from "form-data";

function appendAny(form, key, value) {
    if (value === undefined || value === null) return;

    if (typeof value === "object") {
        form.append(key, JSON.stringify(value));
        return;
    }

    form.append(key, String(value));
}

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
        const {idafiliado: idafiliadoFromUtm, ...utm} = rawUtm;
        const bodyUtm = body?.utm && typeof body.utm === "object" ? body.utm : {};
        const {idafiliado: idafiliadoFromBodyUtm, ...cleanBodyUtm} = bodyUtm;
        const idafiliado =
            body?.idafiliado ||
            getCookieValue(req, "leste_idafiliado") ||
            idafiliadoFromBodyUtm ||
            idafiliadoFromUtm;

        const payload = {
            ...body,
            utm: Object.keys(cleanBodyUtm).length ? cleanBodyUtm : utm,
            idafiliado,
        };

        const form = new FormData();

        appendAny(form, "event_id", payload?.event_id);
        appendAny(form, "codser", payload?.codser);
        appendAny(form, "vencimento", payload?.vencimento);
        appendAny(form, "pgtotxadesao", payload?.pgtotxadesao);
        appendAny(form, "txadesao", payload?.txadesao);
        appendAny(form, "pgtoprorata", payload?.pgtoprorata || "");
        appendAny(form, "idafiliado", payload?.idafiliado);
        appendAny(form, "utm", payload?.utm);
        appendAny(form, "precadastro", payload?.precadastro);
        appendAny(form, "responsaveis", payload?.responsaveis);

        const resp = await coreApi.put("/api/sac/externo/agendamentoNew", form, {
            headers: {
                ...form.getHeaders(),
            },
            maxBodyLength: Infinity,
        });
        console.log(resp)
        return NextResponse.json(resp.data, { status: 200 });
    } catch (error) {
        const status = error?.response?.status || 500;
        const data = error?.response?.data;
        const message =
            data?.message || data?.error || error?.message || "Erro ao enviar Agendamento";

        console.error("AGENDAMENTO FAIL", {
            status,
            message,
            responseData: data || null,
        });

        return NextResponse.json({ message, details: data || null }, { status });
    }
}
