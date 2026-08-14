import {NextResponse} from "next/server";
import IPLocate from "node-iplocate";

const RETRYABLE_IPLOCATE_ERRORS = new Set([
    "AuthenticationError",
    "RateLimitError",
]);

async function lookupWithFallback(ip, apiKeys) {
    let lastError;

    for (const apiKey of apiKeys) {
        try {
            const client = new IPLocate(apiKey);
            return await client.lookup(ip);
        } catch (error) {
            lastError = error;

            const canTryNextKey =
                RETRYABLE_IPLOCATE_ERRORS.has(error?.name) ||
                [401, 403, 429].includes(error?.statusCode);

            if (!canTryNextKey) {
                throw error;
            }
        }
    }

    throw lastError;
}


export async function POST(req) {
    try {
        const url = new URL(req.url);
        const ipFromQuery = url.searchParams.get("ip");
        const forwarded = req.headers.get("x-forwarded-for") || "";
        const ipFromHeader = forwarded.split(",")[0]?.trim();
        const ip = ipFromQuery || ipFromHeader;
        const apiKeys = [...new Set([
            process.env.IPLOCATE_API_KEY,
            process.env.IPLOCATE_API_KEY_BACKUP,
        ].filter(Boolean))];

        if (apiKeys.length === 0) {
            return NextResponse.json(
                {message: "Nenhuma chave do IPLocate configurada", status: 500},
                {status: 500}
            );
        }

        if (!ip) {
            return NextResponse.json(
                {message: "IP não encontrado na requisição", status: 400},
                {status: 400}
            );
        }
        console.log(ip)
        const response = await lookupWithFallback(ip, apiKeys);

        return NextResponse.json({cidade: response.city}, {status: 200});
    } catch (error) {
        const statusByErrorName = {
            InvalidIPError: 400,
            AuthenticationError: 401,
            NotFoundError: 404,
            RateLimitError: 429,
        };
        const status =
            error?.statusCode ||
            statusByErrorName[error?.name] ||
            error?.response?.status ||
            500;
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
