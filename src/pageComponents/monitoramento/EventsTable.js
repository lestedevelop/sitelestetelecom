"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
    formatDate,
    getDisplayLevel,
    getLevelBadgeClass,
    getStatusBadgeClass,
    getTypeBadgeClass,
} from "@/pageComponents/monitoramento/utils";

export default function EventsTable({ events }) {
    const router = useRouter();
    return (
        <div className="mt-6 overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm">
            <table className="min-w-full text-sm">
                <thead className="bg-neutral-50 text-left text-xs uppercase text-neutral-500">
                    <tr>
                        <th className="px-4 py-3">Quando</th>
                        <th className="px-4 py-3">Tipo</th>
                        <th className="px-4 py-3">Nivel</th>
                        <th className="px-4 py-3">Mensagem</th>
                        <th className="px-4 py-3">Rota</th>
                        <th className="px-4 py-3">Status</th>
                        <th className="px-4 py-3 text-right">Acao</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                    {events.map((event) => {
                        const level = getDisplayLevel(event);
                        const message = event.message || event.request?.url || "-";
                        return (
                            <tr
                                key={String(event._id)}
                                className="cursor-pointer text-neutral-700 hover:bg-neutral-50"
                                onClick={() => router.push(`/monitoramento/${event._id}`)}
                            >
                                <td className="px-4 py-3 whitespace-nowrap">
                                    {formatDate(event.timestamp || event.serverTimestamp)}
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap">
                                    <span
                                        className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${getTypeBadgeClass(
                                            event.type
                                        )}`}
                                    >
                                        {event.type || "-"}
                                    </span>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap">
                                    <span
                                        className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${getLevelBadgeClass(
                                            level
                                        )}`}
                                    >
                                        {level}
                                    </span>
                                </td>
                                <td className="px-4 py-3 max-w-[360px] truncate">
                                    <Link
                                        href={`/monitoramento/${event._id}`}
                                        className="text-primary hover:underline"
                                        title={message}
                                    >
                                        {message}
                                    </Link>
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap">
                                    {event.page || event.route || "-"}
                                </td>
                                <td className="px-4 py-3 whitespace-nowrap">
                                    <span
                                        className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium ${getStatusBadgeClass(
                                            event.request?.status
                                        )}`}
                                    >
                                        {event.request?.status || "-"}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-right">
                                    <Link
                                        href={`/monitoramento/${event._id}`}
                                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                                    >
                                        Ver
                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                    {!events.length ? (
                        <tr>
                            <td
                                colSpan={7}
                                className="px-4 py-6 text-center text-sm text-neutral-500"
                            >
                                Nenhum evento encontrado para os filtros atuais.
                            </td>
                        </tr>
                    ) : null}
                </tbody>
            </table>
        </div>
    );
}
