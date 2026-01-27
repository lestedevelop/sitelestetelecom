import { cookies } from "next/headers";
import { getMonitorCollection } from "@/lib/mongoMonitor";
import {
    ADMIN_COOKIE_NAME,
    getAdminSecret,
    verifyAdminSession,
} from "@/lib/monitoring/adminAuth";
import LoginForm from "../../../pageComponents/monitoramento/LoginForm";
import {
    buildQuery,
    buildSearchParams,
    normalizeParam,
    parseDate,
} from "@/pageComponents/monitoramento/utils";
import SummaryCard from "@/pageComponents/monitoramento/SummaryCard";
import FilterBar from "@/pageComponents/monitoramento/FilterBar";
import EventsTable from "@/pageComponents/monitoramento/EventsTable";
import Pagination from "@/pageComponents/monitoramento/Pagination";

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

export default async function MonitoramentoPage({ searchParams }) {
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
        return <LoginForm />;
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
        .sort({ timestamp: -1 })
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

    const summaryItems = [
        {
            icon: "?",
            label: "Fatal",
            value: 2,
            delta: { direction: "up", value: "12%" },
            tone: "fatal",
        },
        {
            icon: "??",
            label: "Error",
            value: 14,
            delta: { direction: "up", value: "6%" },
            tone: "error",
        },
        {
            icon: "?",
            label: "Warning",
            value: 22,
            delta: { direction: "down", value: "3%" },
            tone: "warn",
        },
        {
            icon: "??",
            label: "Info",
            value: 180,
            delta: { direction: "up", value: "9%" },
            tone: "info",
        },
        {
            icon: "??",
            label: "Total",
            value: 218,
            delta: { direction: "up", value: "5%" },
            tone: "neutral",
        },
        {
            icon: "???",
            label: "App",
            value: appVersion || "n/a",
            delta: { direction: "up", value: "0%" },
            tone: "neutral",
        },
    ];

    return (
        <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                    <h2 className="text-xl font-semibold text-neutral-900">Eventos</h2>
                    <p className="mt-1 text-sm text-neutral-500">
                        {events.length} eventos - pagina {page}
                    </p>
                </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-6">
                {summaryItems.map((item) => (
                    <SummaryCard key={item.label} {...item} />
                ))}
            </div>

            <FilterBar
                from={from}
                to={to}
                type={type}
                level={level}
                statusRaw={statusRaw}
                route={route}
                appVersion={appVersion}
                environment={environment}
                q={q}
                limit={limit}
                typeOptions={TYPE_OPTIONS}
                levelOptions={LEVEL_OPTIONS}
            />

            <EventsTable events={events} />

            <Pagination
                page={page}
                eventsCount={events.length}
                prevParams={prevParams}
                nextParams={nextParams}
                hasNext={hasNext}
            />
        </div>
    );
}



