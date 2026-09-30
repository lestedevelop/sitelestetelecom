import "server-only";

const DEFAULT_API_URL = "https://chatbot-dev.lestetelecom.com.br/api/public/v1";
const DEFAULT_PUBLIC_ID = "clone2-capta";

function getConfig() {
  const apiUrl = (process.env.CHAT_API_URL || process.env.NEXT_PUBLIC_CHAT_API_URL || DEFAULT_API_URL).replace(/\/$/, "");
  const publicId = process.env.CHAT_PUBLIC_ID || process.env.NEXT_PUBLIC_CHAT_PUBLIC_ID || DEFAULT_PUBLIC_ID;
  return { apiUrl, publicId };
}

export function getChatStartUrl() {
  const { apiUrl, publicId } = getConfig();
  if (!publicId) return null;
  return `${apiUrl}/flows/${encodeURIComponent(publicId)}/start`;
}

export function getChatSessionUrl(sessionId, action, search = "") {
  const { apiUrl } = getConfig();
  return `${apiUrl}/sessions/${encodeURIComponent(sessionId)}/${action}${search}`;
}

export async function proxyChatRequest(url, request) {
  const headers = { Accept: "application/json" };
  let body;
  if (request.method !== "GET" && request.method !== "HEAD") {
    headers["Content-Type"] = "application/json";
    body = await request.text();
  }

  try {
    const upstream = await fetch(url, {
      method: request.method,
      headers,
      body,
      cache: "no-store",
      signal: request.signal,
    });
    const responseHeaders = new Headers();
    const contentType = upstream.headers.get("content-type");
    const retryAfter = upstream.headers.get("retry-after");
    if (contentType) responseHeaders.set("Content-Type", contentType);
    if (retryAfter) responseHeaders.set("Retry-After", retryAfter);
    responseHeaders.set("Cache-Control", "no-store");

    return new Response(upstream.body, {
      status: upstream.status,
      headers: responseHeaders,
    });
  } catch (error) {
    if (error?.name === "AbortError") return new Response(null, { status: 499 });
    return Response.json({ message: "Serviço de atendimento indisponível." }, { status: 502 });
  }
}
