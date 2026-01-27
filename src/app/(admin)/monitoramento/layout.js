export const dynamic = "force-dynamic";

const menuItems = [
    { label: "Eventos", href: "/monitoramento" },
];

export default function MonitoramentoLayout({ children }) {
    const env = process.env.APP_ENV || process.env.NODE_ENV || "";
    return (
        <div className="min-h-screen bg-light text-neutral-800">
            <div className="flex min-h-screen">
                <aside className="hidden w-[120px] shrink-0 border-r border-neutral-200 bg-white px-3 py-6 lg:block">
                    <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                            <span className="text-sm font-semibold">LT</span>
                        </div>
                        <div>
                            <p className="text-xs font-semibold text-neutral-900">Monitor</p>
                            <p className="text-[10px] text-neutral-500">Interno</p>
                        </div>
                    </div>
                    <nav className="mt-8 space-y-1 text-sm">
                        {menuItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-2 rounded-lg px-2 py-2 text-xs text-neutral-700 hover:bg-[#f0ecff] hover:text-primary"
                            >
                                <span className="h-2 w-2 rounded-full bg-primary" />
                                {item.label}
                            </a>
                        ))}
                    </nav>
                </aside>

                <div className="flex min-h-screen flex-1 flex-col">
                    <header className="border-b border-neutral-200 bg-white px-6 py-4">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <h1 className="text-lg font-semibold text-neutral-900">
                                    Monitoramento
                                </h1>
                                <p className="text-sm text-neutral-500">
                                    Observabilidade interna Leste Telecom
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                {env ? (
                                    <span className="rounded-full bg-[#f0ecff] px-3 py-1 text-xs font-medium text-primary">
                                        {env}
                                    </span>
                                ) : null}
                                <div className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs text-neutral-500">
                                    /monitoramento
                                </div>
                            </div>
                        </div>
                    </header>
                    <main className="flex-1 px-6 py-8">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
