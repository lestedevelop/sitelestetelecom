import {cookies} from "next/headers";
import {getMonitorCollection} from "@/lib/mongoMonitor";
import {
    ADMIN_COOKIE_NAME,
    getAdminSecret,
    verifyAdminSession,
} from "@/lib/monitoring/adminAuth";
import LoginForm from "./LoginForm";
import Link from "next/link";
import {
    buildQuery,
    buildSearchParams,
    formatDate,
    getDisplayLevel,
    normalizeParam,
    parseDate,
} from "@/pageComponents/monitoramento/utils";

export const dynamic = "force-dynamic";

const TYPE_OPTIONS = [
    "",
    "js_error",
    "promise_rejection",
    "api_error",
    "warning",
    "blank_screen",
    "navigation",
    "web_vital",
    "custom",
];

const LEVEL_OPTIONS = ["", "info", "warn", "error", "fatal"];

export default async function MonitoramentoPage({searchParams}) {
    const resolvedSearchParams = await searchParams;
    const secret = getAdminSecret();
    const cookieStore = await cookies();
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value || "";
    const session = secret ? verifyAdminSession(token, secret) : null;
    const hasDb = Boolean(process.env.MONGODB_MONITOR_URI);

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
        return <LoginForm/>;
    }

    if (!hasDb) {
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

    const from = normalizeParam(resolvedSearchParams?.from);
    const to = normalizeParam(resolvedSearchParams?.to);
    const type = normalizeParam(resolvedSearchParams?.type);
    const level = normalizeParam(resolvedSearchParams?.level);
    const route = normalizeParam(resolvedSearchParams?.route);
    const appVersion = normalizeParam(resolvedSearchParams?.appVersion);
    const environment = normalizeParam(resolvedSearchParams?.environment);
    const q = normalizeParam(resolvedSearchParams?.q);
    const statusRaw = normalizeParam(resolvedSearchParams?.status);
    const status = statusRaw ? Number(statusRaw) : null;
    const limitRaw = normalizeParam(resolvedSearchParams?.limit);
    const pageRaw = normalizeParam(resolvedSearchParams?.page);

    const limit = Math.min(200, Math.max(10, Number(limitRaw) || 50));
    const page = Math.max(1, Number(pageRaw) || 1);

    const filters = {
        from: parseDate(from),
        to: parseDate(to, true),
        type,
        level,
        route,
        appVersion,
        environment,
        q,
        status: Number.isFinite(status) ? status : null,
    };

    const query = buildQuery(filters);

    const collection = await getMonitorCollection("events");
    const rawEvents = await collection
        .find(query)
        .sort({timestamp: -1})
        .skip((page - 1) * limit)
        .limit(limit)
        .toArray();

    const events = rawEvents.map((event) => ({
        ...event,
        _id: String(event._id),
        serverTimestamp: event.serverTimestamp
            ? new Date(event.serverTimestamp).getTime()
            : undefined,
    }));

    const hasNext = events.length === limit;
    const nextParams = buildSearchParams({
        from,
        to,
        type,
        level,
        route,
        appVersion,
        environment,
        q,
        status: statusRaw,
        limit,
        page: page + 1,
    });
    const prevParams = buildSearchParams({
        from,
        to,
        type,
        level,
        route,
        appVersion,
        environment,
        q,
        status: statusRaw,
        limit,
        page: Math.max(1, page - 1),
    });

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <h2 className="text-xl font-semibold text-neutral-900">
                        Eventos
                    </h2>
                    <p className="mt-1 text-sm text-neutral-500">
                        {events.length} eventos · página {page}
                    </p>
                </div>
                <Link
                    href="/monitoramento"
                    className="rounded-md border border-neutral-200 px-3 py-2 text-sm text-neutral-600 hover:border-primary hover:text-primary"
                >
                    Limpar filtros
                </Link>
            </div>

            <form className="mt-6 rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
                <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-6">
                    <div>
                        <label className="text-xs font-medium text-neutral-600">De</label>
                        <input
                            type="date"
                            name="from"
                            defaultValue={from}
                            className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-medium text-neutral-600">Até</label>
                        <input
                            type="date"
                            name="to"
                            defaultValue={to}
                            className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-medium text-neutral-600">Tipo</label>
                        <select
                            name="type"
                            defaultValue={type}
                            className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                        >
                            {TYPE_OPTIONS.map((item) => (
                                <option key={item} value={item}>
                                    {item || "Todos"}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-medium text-neutral-600">Nível</label>
                        <select
                            name="level"
                            defaultValue={level}
                            className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                        >
                            {LEVEL_OPTIONS.map((item) => (
                                <option key={item} value={item}>
                                    {item || "Todos"}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="text-xs font-medium text-neutral-600">Status</label>
                        <input
                            type="number"
                            name="status"
                            defaultValue={statusRaw}
                            className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                            placeholder="500"
                        />
                    </div>
                    <div>
                        <label className="text-xs font-medium text-neutral-600">Rota</label>
                        <input
                            type="text"
                            name="route"
                            defaultValue={route}
                            className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                            placeholder="/vendas"
                        />
                    </div>
                </div>
                <div className="mt-3 grid gap-3 md:grid-cols-2 lg:grid-cols-[1fr_1fr_auto_auto]">
                    <input
                        type="text"
                        name="appVersion"
                        defaultValue={appVersion}
                        className="w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                        placeholder="App version (ex: 1.0.0)"
                    />
                    <input
                        type="text"
                        name="environment"
                        defaultValue={environment}
                        className="w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                        placeholder="Ambiente (prod/stage/dev)"
                    />
                    <input
                        type="text"
                        name="q"
                        defaultValue={q}
                        className="w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                        placeholder="Buscar por mensagem, URL ou stack"
                    />
                    <select
                        name="limit"
                        defaultValue={String(limit)}
                        className="rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                    >
                        {[25, 50, 100, 200].map((value) => (
                            <option key={value} value={value}>
                                {value} por página
                            </option>
                        ))}
                    </select>
                    <button
                        type="submit"
                        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-[#5b21b6]"
                    >
                        Filtrar
                    </button>
                </div>
            </form>

            <div className="mt-6 overflow-auto rounded-xl border border-neutral-200 bg-white shadow-sm">
                <table className="min-w-full text-sm">
                    <thead className="bg-neutral-50 text-left text-xs uppercase text-neutral-500">
                    <tr>
                        <th className="px-4 py-3">Quando</th>
                        <th className="px-4 py-3">Tipo</th>
                        <th className="px-4 py-3">Nível</th>
                        <th className="px-4 py-3">Mensagem</th>
                        <th className="px-4 py-3">Rota</th>
                        <th className="px-4 py-3">Status</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                    {events.map((event) => (
                        <tr key={String(event._id)} className="text-neutral-700">
                            <td className="px-4 py-3 whitespace-nowrap">
                                {formatDate(event.timestamp || event.serverTimestamp)}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                                {event.type || "-"}
                            </td>
                                <td className="px-4 py-3 whitespace-nowrap">
                                    {getDisplayLevel(event)}
                                </td>
                            <td className="px-4 py-3 max-w-[320px] truncate">
                                <Link
                                    href={`/monitoramento/${event._id}`}
                                    className="text-primary hover:underline"
                                >
                                    {event.message || event.request?.url || "-"}
                                </Link>
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                                {event.page || event.route || "-"}
                            </td>
                            <td className="px-4 py-3 whitespace-nowrap">
                                {event.request?.status || "-"}
                            </td>
                        </tr>
                    ))}
                    {!events.length ? (
                        <tr>
                            <td
                                colSpan={6}
                                className="px-4 py-6 text-center text-sm text-neutral-500"
                            >
                                Nenhum evento encontrado para os filtros atuais.
                            </td>
                        </tr>
                    ) : null}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm text-neutral-600">
                <div>
                    Página {page}
                </div>
                <div className="flex gap-2">
                    <Link
                        href={`/monitoramento${prevParams}`}
                        className={`rounded-md border px-3 py-2 ${page === 1 ? "pointer-events-none opacity-50" : "border-neutral-200 hover:border-primary hover:text-primary"}`}
                    >
                        Anterior
                    </Link>
                    <Link
                        href={`/monitoramento${nextParams}`}
                        className={`rounded-md border px-3 py-2 ${!hasNext ? "pointer-events-none opacity-50" : "border-neutral-200 hover:border-primary hover:text-primary"}`}
                    >
                        Próxima
                    </Link>
                </div>
            </div>
        </div>
    );
}
