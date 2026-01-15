export async function getPlanosByCodCid(codcid) {
    const res = await fetch(`/api/vendas/planos?cidade=${encodeURIComponent(codcid)}`, {
        method: "GET",
        credentials: "include",
    });

    const json = await res.json().catch(() => null);
    if (!res.ok) throw new Error(json?.message || `Erro ${res.status}`);

    return json?.data || json?.data?.data || json;
}