"use client";

export async function getLocationByIP() {
    const res = await fetch("/api/iplocate", { method: "POST" });
    if (!res.ok) return null;
    const json = await res.json();
    return {...json};
}
