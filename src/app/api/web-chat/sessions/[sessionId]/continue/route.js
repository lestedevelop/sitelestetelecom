import { getChatSessionUrl, proxyChatRequest } from "@/lib/webChatProxy";

export const dynamic = "force-dynamic";

export async function POST(request, { params }) {
  const { sessionId } = await params;
  return proxyChatRequest(getChatSessionUrl(sessionId, "continue"), request);
}
