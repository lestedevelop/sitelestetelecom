export async function sendIndicacao(payload) {
    const res = await fetch("/api/home/indicacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(error || "Erro ao enviar indicação");
    }

    return res.json();
}
