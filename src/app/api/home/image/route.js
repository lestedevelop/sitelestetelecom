import {NextResponse} from "next/server";
import {coreApi} from "@/lib/coreApi";

export const dynamic = "force-dynamic";

export async function GET(req) {
    const id = new URL(req.url).searchParams.get("id");
    if (!id || !/^\d+$/.test(id)) {
        return NextResponse.json({message: "id invalido"}, {status: 400});
    }

    try {
        const response = await coreApi.get("/api/sac/externo/home/image", {
            params: {id},
            responseType: "arraybuffer",
        });

        return new NextResponse(response.data, {
            status: 200,
            headers: {
                "Content-Type": response.headers["content-type"] || "application/octet-stream",
                "Cache-Control": "public, max-age=31536000, s-maxage=31536000, immutable",
            },
        });
    } catch (error) {
        const status = error?.response?.status || 500;
        return NextResponse.json({message: "Erro ao buscar imagem da home"}, {status});
    }
}
