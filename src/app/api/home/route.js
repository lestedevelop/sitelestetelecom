import { NextResponse } from "next/server";
import { coreApi } from "@/lib/coreApi";

const ALLOWED_CITIES = new Set([
    "niteroi",
    "marica",
    "itaborai",
    "tangua",
    "rio-bonito",
    "mage",
]);

function normalizeCity(value) {
    const city = String(value || "").trim().toLowerCase();
    if (!city) return "niteroi";
    return ALLOWED_CITIES.has(city) ? city : "niteroi";
}

export async function GET(req) {
    const { searchParams } = new URL(req.url);

    const city = normalizeCity(searchParams.get("city"));

    try {
        // const { data } = await coreApi.get("/public/home", {
        //     params: { city },
        // });

        return NextResponse.json({ city, ...data });
    } catch (err) {
        const status = err?.response?.status || 502;
        const message =
            err?.response?.data?.error ||
            err?.message ||
            "Falha ao consultar o sistema principal";

        return NextResponse.json({ error: message }, { status });
    }
}
