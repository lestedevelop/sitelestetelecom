import {NextResponse} from "next/server";
import {getHomeContent} from "@/lib/homeContentCache";

export const dynamic = "force-dynamic";

export async function GET(req) {
    try {
        const codcid = new URL(req.url).searchParams.get("codcid")?.trim();

        if (codcid && !/^\d+$/.test(codcid)) {
            return NextResponse.json(
                {message: "codcid invalido"},
                {status: 400}
            );
        }

        const {payload, status: cacheStatus} = await getHomeContent(codcid);

        return NextResponse.json(payload, {
            status: 200,
            headers: {
                "Cache-Control": "private, no-store",
                "X-Home-Cache": cacheStatus,
                "X-Home-Codcid": codcid || "not-sent",
            },
        });
    } catch (error) {
        const status = error?.response?.status || 500;
        const data = error?.response?.data;

        console.error("HOME CONTENT FAIL", {
            status,
            message: data?.message || data?.error || error?.message,
        });

        return NextResponse.json(
            {
                message: data?.message || data?.error || "Erro ao buscar conteudo da home",
                details: data || null,
            },
            {status}
        );
    }
}
