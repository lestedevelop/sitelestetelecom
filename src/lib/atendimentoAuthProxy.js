import "server-only";

const ENDPOINTS = {
  "info-client-init": { method: "POST", path: "/api/atendimentoLeste/infoClientInit" },
  "new-visitor": { method: "POST", path: "/api/atendimentoLeste/newVisitor" },
  "generate-code": { method: "POST", path: "/api/atendimentoLeste/auth/generateCode" },
  "validate-code": { method: "POST", path: "/api/atendimentoLeste/auth/validateCode" },
  "auth-me": { method: "GET", path: "/api/atendimentoLeste/auth/authMe" },
  logout: { method: "POST", path: "/api/atendimentoLeste/auth/logout" },
};

export function getAtendimentoAuthEndpoint(action, method) {
  const endpoint = ENDPOINTS[action];
  if (!endpoint || endpoint.method !== method) return null;
  const origin = String(process.env.CORE_API_URL || "").replace(/\/$/, "");
  if (!origin) return null;
  return `${origin}${endpoint.path}`;
}

function copySetCookies(source, target) {
  const cookies = source.getSetCookie?.() || [];
  if (cookies.length) {
    cookies.forEach((cookie) => target.append("Set-Cookie", cookie));
    return;
  }

  const cookie = source.get("set-cookie");
  if (cookie) target.append("Set-Cookie", cookie);
}

export async function proxyAtendimentoAuth(request, url) {
  const headers = { Accept: "application/json" };
  const cookie = request.headers.get("cookie");
  if (cookie) headers.Cookie = cookie;

  let body;
  if (request.method !== "GET" && request.method !== "HEAD") {
    body = await request.text();
    if (body.length > 20_000) {
      return Response.json({ message: "Requisição inválida." }, { status: 413 });
    }
    headers["Content-Type"] = "application/json; charset=utf-8";
  }

  try {
    const upstream = await fetch(url, {
      method: request.method,
      headers,
      body,
      cache: "no-store",
      signal: request.signal,
    });
    const responseHeaders = new Headers({ "Cache-Control": "no-store" });
    const contentType = upstream.headers.get("content-type");
    const retryAfter = upstream.headers.get("retry-after");
    if (contentType) responseHeaders.set("Content-Type", contentType);
    if (retryAfter) responseHeaders.set("Retry-After", retryAfter);
    copySetCookies(upstream.headers, responseHeaders);

    return new Response(upstream.body, {
      status: upstream.status,
      headers: responseHeaders,
    });
  } catch (error) {
    if (error?.name === "AbortError") return new Response(null, { status: 499 });
    return Response.json({ message: "Serviço de autenticação indisponível." }, { status: 502 });
  }
}
