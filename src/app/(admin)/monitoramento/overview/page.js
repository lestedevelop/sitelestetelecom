import { cookies } from "next/headers";
import { getMonitorCollection } from "@/lib/mongoMonitor";
import {
    ADMIN_COOKIE_NAME,
    getAdminSecret,
    verifyAdminSession,
} from "@/lib/monitoring/adminAuth";
import LoginForm from "../../../../pageComponents/monitoramento/LoginForm";
import { formatDate } from "@/pageComponents/monitoramento/utils";
import {
    buildHourlySeries,
    getOverviewStats,
    getLatestErrors,
    normalizeGroup,
} from "@/pageComponents/monitoramento/overviewData";
import {
    BarList,
    SparkLineDots,
    StatCard,
} from "@/pageComponents/monitoramento/overviewComponents";

export const dynamic = "force-dynamic";

export default async function MonitoramentoOverviewPage() {
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

    const collection = await getMonitorCollection("events");
    const stats = await getOverviewStats(collection, 24);
    const types = normalizeGroup(stats.byType);
    const levels = normalizeGroup(stats.byLevel);
    const routes = normalizeGroup(stats.topRoutes);
    const hourly = buildHourlySeries(stats.byHour);
    const latestErrors = await getLatestErrors(collection, 5);
    const totalEvents = types.reduce((acc, item) => acc + item.count, 0);
    const errorCount =
        levels.find((item) => item.key === "error")?.count || 0;
    const warnCount =
        levels.find((item) => item.key === "warn")?.count || 0;

    return (
        <div className="mx-auto max-w-6xl space-y-8">
            <div>
                <h2 className="text-xl font-semibold text-neutral-900">
                    Overview (24h)
                </h2>
                <p className="mt-1 text-sm text-neutral-500">
                    {formatDate(stats.window.from)} {"->"} {formatDate(stats.window.to)}
                </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <StatCard title="Eventos" value={totalEvents} />
                <StatCard title="Erros" value={errorCount} />
                <StatCard title="Warnings" value={warnCount} />
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
                <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-neutral-800">
                            Volume por hora
                        </h3>
                        <span className="text-xs text-neutral-500">
                            Ultimas 24h
                        </span>
                    </div>
                    {hourly.series.length ? (
                        <SparkLineDots series={hourly.series} max={hourly.max} />
                    ) : (
                        <p className="text-sm text-neutral-500">
                            Sem dados nas ultimas 24h.
                        </p>
                    )}
                </div>

                <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                    <h3 className="text-sm font-semibold text-neutral-800">Por tipo</h3>
                    <div className="mt-4">
                        {types.length ? (
                            <BarList items={types} max={types[0].count || 1} />
                        ) : (
                            <p className="text-sm text-neutral-500">
                                Sem dados.
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                    <h3 className="text-sm font-semibold text-neutral-800">Por nivel</h3>
                    <div className="mt-4">
                        {levels.length ? (
                            <BarList items={levels} max={levels[0].count || 1} />
                        ) : (
                            <p className="text-sm text-neutral-500">
                                Sem dados.
                            </p>
                        )}
                    </div>
                </div>

                <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                    <h3 className="text-sm font-semibold text-neutral-800">
                        Rotas mais afetadas
                    </h3>
                    <div className="mt-4">
                        {routes.length ? (
                            <BarList items={routes} max={routes[0].count || 1} />
                        ) : (
                            <p className="text-sm text-neutral-500">
                                Sem dados.
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
                <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-neutral-800">
                        Ultimos erros
                    </h3>
                    <a
                        href="/monitoramento?level=error"
                        className="text-xs font-medium text-primary hover:underline"
                    >
                        Ver todos
                    </a>
                </div>
                {latestErrors.length ? (
                    <div className="space-y-3">
                        {latestErrors.map((item) => (
                            <a
                                key={item._id}
                                href={`/monitoramento/${item._id}`}
                                className="block rounded-lg border border-neutral-100 px-3 py-2 text-xs text-neutral-600 hover:border-primary hover:text-primary"
                            >
                                <div className="flex items-center justify-between gap-3">
                                    <span className="truncate">
                                        {item.message || item.request?.url || "Erro sem mensagem"}
                                    </span>
                                    <span className="shrink-0 text-[10px] text-neutral-400">
                                        {formatDate(item.timestamp || item.serverTimestamp)}
                                    </span>
                                </div>
                                <div className="mt-1 text-[10px] text-neutral-400">
                                    {item.type || "-"} â€¢ {item.route || item.page || "-"}
                                </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    <p className="text-sm text-neutral-500">Sem erros recentes.</p>
                )}
            </div>
        </div>
    );
}

