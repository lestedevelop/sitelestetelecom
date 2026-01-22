import { buildCadastroCompletoModel } from "@/models/preCadastroModel";

export async function sendPrecadastro(data) {
    const payload = buildCadastroCompletoModel(data);
    const res = await fetch("/api/vendas/precadastro", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    const json = await res.json().catch(() => null);

    if (!res.ok) {
        throw new Error(json?.message || "Erro ao enviar precadastro");
    }

    return json;
}
