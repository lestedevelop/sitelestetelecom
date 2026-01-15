export function normalizeCityName(value = "") {
    return String(value)
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

export function findCodCidByName(cidadeNome, cidades = []) {
    const key = normalizeCityName(cidadeNome);
    if (!key) return null;

    const found = cidades.find((c) => normalizeCityName(c.nome_cid) === key);
    return found?.codcid ?? null;
}
