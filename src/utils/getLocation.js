"use client";

import {resolveCityFromLatLng} from "@/utils/resolveCityFromLatLng";

let cachedLocation = null;
let inflightPromise = null;


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
