export async function getVagaByCodCid(data) {
    // const cidadeFlag = data?.predio === "predio" ? `${data.cidade}P` : data.cidade;
    const dateParam = (() => {
        if (!data?.date) return "";
        const d = data.date instanceof Date ? data.date : new Date(data.date);
        if (Number.isNaN(d.getTime())) return "";
        const y = d.getFullYear();
        const m = String(d.getMonth() + 1).padStart(2, "0");
        const day = String(d.getDate()).padStart(2, "0");
        return `${y}-${m}-${day}`;
    })();

    const nextRes = await fetch(
        `/api/vendas/vaga/next?cidade=${encodeURIComponent(data.cidade)}&date=${encodeURIComponent(dateParam)}`,
        {
            method: "GET",
            credentials: "include",
        }
    );
    const nextJson = await nextRes.json().catch(() => null);
    if (!nextRes.ok) throw new Error(nextJson?.message || `Erro ${nextRes.status}`);

    const dataValida = nextJson?.dataValida || dateParam;

    const res = await fetch(
        `/api/vendas/vaga?cidade=${encodeURIComponent(data.cidade)}&date=${encodeURIComponent(dataValida)}`,
        {
            method: "GET",
            credentials: "include",
        }
    );

    const json = await res.json().catch(() => null);
    if (!res.ok) throw new Error(json?.message || `Erro ${res.status}`);

    return { ...nextJson, ...json };
}
