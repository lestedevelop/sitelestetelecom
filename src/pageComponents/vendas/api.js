const BASE = process.env.NEXT_PUBLIC_WEBSERVER_URL;

async function request(path, body) {
    const res = await fetch(`${BASE}${path}`, {
        method: body ? "POST" : "GET",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: body ? JSON.stringify(body) : undefined,
    });

    if (!res.ok) {
        const msg = await res.text().catch(() => "");
        throw new Error(msg || `Erro ${res.status}`);
    }
    return res.json();
}

export const salesApi = {
    getSession: () => request("/sales/session"),
    saveCadastro: (data) => request("/sales/step/cadastro", data),
    savePlano: (data) => request("/sales/step/plano", data),
    saveAgendamento: (data) => request("/sales/step/agendamento", data),
    finish: (data) => request("/sales/finish", data),
};
