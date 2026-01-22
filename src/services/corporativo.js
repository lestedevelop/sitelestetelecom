export async function sendCorporativo(payload) {
    const res = await fetch("/api/home/coporativo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
    });

    if (!res.ok) {
        const error = await res.text();
        throw new Error(error || "Erro ao enviar contato corporativo");
    }

    return res.json();
}
