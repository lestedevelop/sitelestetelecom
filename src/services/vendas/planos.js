export async function getPlanosByCodCid(data, {signal} = {}) {
    const res = await fetch(`/api/vendas/planos?cidade=${encodeURIComponent(data.cidade)}&predio=${data.tipoMoradia === "predio"? 1 : 0 }`, {
        method: "GET",
        credentials: "include",
        signal,
    });

    const json = await res.json().catch(() => null);
    if (!res.ok) throw new Error(json?.message || `Erro ${res.status}`);

    return json?.data || json?.data?.data || json;
}
