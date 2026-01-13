export async function getViabilidade({ cep, numero, signal }) {
    const res = await fetch("/api/vendas/viabilidade", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        signal,
        body: JSON.stringify({ cep, numero }),
    });

    const data = await res.json().catch(() => null);

    if (!res.ok) {
        throw new Error(data?.message || `Erro ${res.status}`);
    }

    return data;
}
