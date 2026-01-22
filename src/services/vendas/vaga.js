export async function getVagaByCodCid(data) {
    let cidadeFlag = data.predio === "predio"? `${data.cidade}P` : data.cidade;

    const res = await fetch(`/api/vendas/vaga?cidade=${encodeURIComponent(cidadeFlag)}&date=${encodeURIComponent(data.date)}`, {
        method: "GET",
        credentials: "include",
    });

    const json = await res.json().catch(() => null);
    if (!res.ok) throw new Error(json?.message || `Erro ${res.status}`);

    return json?.data || json?.data?.data || json;
}
