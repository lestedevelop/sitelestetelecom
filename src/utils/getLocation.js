"use client";

let cachedLocation = null;
let inflightPromise = null;

async function resolveCityFromLatLng({ latitude, longitude }) {
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

export async function getLocation() {
    if (cachedLocation) return cachedLocation;
    if (inflightPromise) return inflightPromise;

    try {
        if ("geolocation" in navigator) {
            inflightPromise = new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    (pos) => resolve(pos.coords),
                    (err) => reject(err),
                    {
                        enableHighAccuracy: false,
                        timeout: 8000,
                        maximumAge: 60_000,
                    }
                );
            })
                .then(async (coords) => {
                    const data = await resolveCityFromLatLng({
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                    });

                    cachedLocation = {
                        source: "browser",
                        latitude: coords.latitude,
                        longitude: coords.longitude,
                        data,
                    };
                    return cachedLocation;
                })
                .catch(() => null)
                .finally(() => {
                    inflightPromise = null;
                });

            return inflightPromise;
        }
    } catch (err) {
    }

    return null;
}
