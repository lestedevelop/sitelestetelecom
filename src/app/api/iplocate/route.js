import {NextResponse} from "next/server";
import IPLocate from "node-iplocate";


export async function POST(req) {
    try {
        const url = new URL(req.url);
        const ipFromQuery = url.searchParams.get("ip");
        const forwarded = req.headers.get("x-forwarded-for") || "";
        const ipFromHeader = forwarded.split(",")[0]?.trim();
        // const ip = ipFromQuery || ipFromHeader;
        const ip = "186.211.32.254"
        console.log(ipFromHeader);

        if (!process.env.IPLOCATE_API_KEY) {
            return NextResponse.json(
                {message: "IPLOCATE_API_KEY nao configurada", status: 500},
                {status: 500}
            );
        }

        if (!ip) {
            return NextResponse.json(
                {message: "IP nao encontrado na requisicao", status: 400},
                {status: 400}
            );
        }
        console.log(ip)
        const client = new IPLocate(process.env.IPLOCATE_API_KEY);
        const response = await client.lookup(ip);

        return NextResponse.json({cidade: response.city}, {status: 200});
    } catch (error) {
        const status = error?.response?.status || 500;
        const data = error?.response?.data;
        const message =
            data?.message ||
            data?.error ||
            error?.message ||
            "Erro ao validar IP";

        console.error("IP FAIL", {
            status,
            message,
        });

        return NextResponse.json(
            {
                message,
                status,
            },
            {status}
        );
    }
}
