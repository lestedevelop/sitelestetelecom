import fs from "node:fs/promises";
import path from "node:path";
import {getLestePlayChannelsSync} from "@/lib/lestePlayChannelsSync.mjs";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const CONTENT_TYPES = Object.freeze({
    ".avif": "image/avif",
    ".gif": "image/gif",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
});

function notFound() {
    return new Response(null, {
        status: 404,
        headers: {"Cache-Control": "no-store"},
    });
}

export async function GET(_request, {params}) {
    const {fileName} = await params;
    const filePath = getLestePlayChannelsSync().getImagePath(fileName);
    if (!filePath) return notFound();

    try {
        const contents = await fs.readFile(filePath);
        const contentType = CONTENT_TYPES[path.extname(fileName).toLowerCase()] || "application/octet-stream";

        return new Response(contents, {
            headers: {
                "Cache-Control": "public, max-age=31536000, immutable",
                "Content-Type": contentType,
                "X-Content-Type-Options": "nosniff",
            },
        });
    } catch (error) {
        if (error?.code === "ENOENT") return notFound();
        console.error("[LestePlay] Falha ao servir imagem do cache:", error?.message);
        return new Response(null, {
            status: 500,
            headers: {"Cache-Control": "no-store"},
        });
    }
}
