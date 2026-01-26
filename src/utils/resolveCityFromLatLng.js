export async function resolveCityFromLatLng({ latitude, longitude }) {
    const res = await fetch("/api/vendas/viabilidade/latlng", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            latitude,
            longitude,
            lat: latitude,
            lng: longitude,
        }),
    });

    if (!res.ok) return null;
    return res.json();
}