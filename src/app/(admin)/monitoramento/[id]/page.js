import { notFound } from "next/navigation";
import { ObjectId } from "mongodb";
import { cookies } from "next/headers";
import Link from "next/link";
import { getMonitorCollection } from "@/lib/mongoMonitor";
import {
    ADMIN_COOKIE_NAME,
    getAdminSecret,
    verifyAdminSession,
} from "@/lib/monitoring/adminAuth";
import LoginForm from "../LoginForm";
import RequestTabs from "../RequestTabs";
import { formatDate, getDisplayLevel } from "@/pageComponents/monitoramento/utils";

export const dynamic = "force-dynamic";

export default async function MonitorEventPage({ params }) {
    const secret = getAdminSecret();
    const cookieStore = await cookies();
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value || "";
    const session = secret ? verifyAdminSession(token, secret) : null;

    if (!secret) {
        return (
            <div className="mx-auto max-w-2xl px-6 py-10">
                <h1 className="text-2xl font-semibold text-neutral-900">
                    Monitoramento
                </h1>
                <p className="mt-3 text-sm text-neutral-600">
                    Defina MONITOR_INGEST_SECRET (ou MONITOR_ADMIN_PASSWORD) para
                    habilitar o acesso ao painel.
                </p>
            </div>
        );
    }

    if (!session) {
        return <LoginForm />;
    }

    if (!process.env.MONGODB_MONITOR_URI) {
        return (
            <div className="mx-auto max-w-2xl px-6 py-10">
                <h1 className="text-2xl font-semibold text-neutral-900">
                    Monitoramento
                </h1>
                <p className="mt-3 text-sm text-neutral-600">
                    Defina MONGODB_MONITOR_URI para carregar os eventos.
                </p>
            </div>
        );
    }

    const resolvedParams = params ? await params : {};
    const { id } = resolvedParams || {};
    if (!id || !ObjectId.isValid(id)) {
        notFound();
    }

    const collection = await getMonitorCollection("events");
    const rawEvent = await collection.findOne({ _id: new ObjectId(id) });

    if (!rawEvent) {
        notFound();
    }

    const event = {
        ...rawEvent,
        _id: String(rawEvent._id),
        serverTimestamp: rawEvent.serverTimestamp
            ? new Date(rawEvent.serverTimestamp).getTime()
            : undefined,
    };

    const correlationId = rawEvent.correlationId || rawEvent.requestId;
    const relatedRaw = correlationId
        ? await collection
              .find({
                  _id: { $ne: rawEvent._id },
                  $or: [
                      { correlationId },
                      { requestId: correlationId },
                      { correlationId: rawEvent.requestId },
                  ],
              })
              .sort({ timestamp: -1 })
              .limit(20)
              .toArray()
        : [];
    const related = relatedRaw.map((item) => ({
        ...item,
        _id: String(item._id),
        serverTimestamp: item.serverTimestamp
            ? new Date(item.serverTimestamp).getTime()
            : undefined,
    }));

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <p className="text-sm text-neutral-500">Evento</p>
                    <h2 className="text-xl font-semibold text-neutral-900">
                        {event.type || "Sem tipo"}
                    </h2>
                    <p className="mt-1 text-sm text-neutral-600">
                        {formatDate(event.timestamp || event.serverTimestamp)} · {getDisplayLevel(event)}
                    </p>
                </div>
                <Link
                    href="/monitoramento"
                    className="rounded-md border border-neutral-200 px-3 py-2 text-sm text-neutral-600 hover:border-[#6D28D9] hover:text-[#6D28D9]"
                >
                    Voltar
                </Link>
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                    <h2 className="text-sm font-semibold text-neutral-800">Resumo</h2>
                    <dl className="mt-4 grid gap-3 text-sm">
                        <div>
                            <dt className="text-neutral-500">Mensagem</dt>
                            <dd className="text-neutral-800 break-words">{event.message || "-"}</dd>
                        </div>
                        <div>
                            <dt className="text-neutral-500">Rota/Página</dt>
                            <dd className="text-neutral-800">{event.page || event.route || "-"}</dd>
                        </div>
                        <div>
                            <dt className="text-neutral-500">Request</dt>
                            <dd className="text-neutral-800">
                                {event.request?.method || "-"} {event.request?.url || ""}
                            </dd>
                            <dd className="text-neutral-800">
                                Status: {event.request?.status ?? "-"} · {event.request?.durationMs ?? "-"}ms
                            </dd>
                        </div>
                        <div>
                            <dt className="text-neutral-500">Correlation</dt>
                            <dd className="text-neutral-800">
                                {event.correlationId || event.requestId || "-"}
                            </dd>
                        </div>
                    </dl>

                    {event.stack ? (
                        <div className="mt-6">
                            <h3 className="text-sm font-semibold text-neutral-800">Stack</h3>
                            <pre className="mt-2 max-h-[320px] overflow-auto rounded-md bg-neutral-900 p-3 text-xs text-neutral-100">
                                {event.stack}
                            </pre>
                        </div>
                    ) : null}
                </div>

                <RequestTabs event={event} />
            </div>

            {related.length ? (
                <div className="mt-8">
                    <h2 className="text-sm font-semibold text-neutral-800">
                        Eventos relacionados ({related.length})
                    </h2>
                    <div className="mt-3 overflow-auto rounded-xl border border-neutral-200 bg-white shadow-sm">
                        <table className="min-w-full text-sm">
                            <thead className="bg-neutral-50 text-left text-xs uppercase text-neutral-500">
                                <tr>
                                    <th className="px-4 py-3">Quando</th>
                                    <th className="px-4 py-3">Tipo</th>
                                    <th className="px-4 py-3">Nível</th>
                                    <th className="px-4 py-3">Mensagem</th>
                                    <th className="px-4 py-3">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-neutral-200">
                                {related.map((item) => (
                                    <tr key={String(item._id)} className="text-neutral-700">
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {formatDate(item.timestamp || item.serverTimestamp)}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {item.type || "-"}
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {getDisplayLevel(item)}
                                        </td>
                                        <td className="px-4 py-3 max-w-[320px] truncate">
                                            <Link
                                                href={`/monitoramento/${item._id}`}
                                                className="text-[#6D28D9] hover:underline"
                                            >
                                                {item.message || item.request?.url || "-"}
                                            </Link>
                                        </td>
                                        <td className="px-4 py-3 whitespace-nowrap">
                                            {item.request?.status || "-"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : null}
        </div>
    );
}

