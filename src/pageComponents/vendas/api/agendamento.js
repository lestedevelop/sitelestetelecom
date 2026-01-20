import {buildAgendamentoModel} from "@/models/agendamentoModel";

export async function sendAgendamento(data) {

    const payload = buildAgendamentoModel(data);
    const res = await fetch("/api/vendas/agendamento", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });

    const body = await res.json().catch(() => ({}));

    if (!res.ok) {
        throw new Error(body?.message || "Erro ao enviar Agendamento");
    }

    return body;
}
