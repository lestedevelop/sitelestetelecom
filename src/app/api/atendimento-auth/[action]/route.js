import { getAtendimentoAuthEndpoint, proxyAtendimentoAuth } from "@/lib/atendimentoAuthProxy";

export const dynamic = "force-dynamic";

async function handle(request, context) {
  const { action } = await context.params;
  const url = getAtendimentoAuthEndpoint(action, request.method);
  if (!url) return Response.json({ message: "Rota não encontrada." }, { status: 404 });
  return proxyAtendimentoAuth(request, url);
}

export const GET = handle;
export const POST = handle;
