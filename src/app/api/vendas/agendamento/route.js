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

export async function POST(req) {
    try {
        const body = await req.json();
        const utm = getUtmFromReq(req);

        const payload = {
            ...body,
            ...utm,
        };

        const form = new FormData();

        appendAny(form, "event_id", payload?.event_id);
        appendAny(form, "codser", payload?.codser);
        appendAny(form, "vencimento", payload?.vencimento);
        appendAny(form, "pgtotxadesao", payload?.pgtotxadesao);
        appendAny(form, "txadesao", payload?.txadesao);
        appendAny(form, "pgtoprorata", payload?.pgtoprorata || "");
        appendAny(form, "precadastro", payload?.precadastro);
        appendAny(form, "responsaveis", payload?.responsaveis);


        const resp = await coreApi.put("/api/sac/externo/agendamento", form, {
            headers: {
                ...form.getHeaders(),
            },
            maxBodyLength: Infinity,
        });

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
