import { getChatStartUrl, proxyChatRequest } from "@/lib/webChatProxy";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const url = getChatStartUrl();
  if (!url) {
    return Response.json({ message: "Chat não configurado neste ambiente." }, { status: 503 });
  }
  return proxyChatRequest(url, request);
}
