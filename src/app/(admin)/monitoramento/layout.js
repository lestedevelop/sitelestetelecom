import Image from "next/image";
import logo from "@/assets/Logo.svg";

export const dynamic = "force-dynamic";

const menuItems = [
    { label: "Overview", href: "/monitoramento/overview" },
    { label: "Eventos", href: "/monitoramento", badge: "218" },
];

export default function MonitoramentoLayout({ children }) {
    const env = process.env.APP_ENV || process.env.NODE_ENV || "";
    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-[#f8fafc] to-[#eef2ff] text-neutral-800">
            <div className="flex min-h-screen flex-col lg:flex-row">
                <aside className="border-b border-neutral-200 bg-white/80 px-4 py-4 shadow-sm backdrop-blur lg:w-[220px] lg:border-b-0 lg:border-r lg:px-5 lg:py-6">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
                            <Image src={logo} alt="Leste Telecom" width={32} height={32} />
                        </div>
                        <div>
                            <p className="text-sm font-semibold text-neutral-900">Leste</p>
                            <p className="text-[11px] text-neutral-500">Monitoramento</p>
                        </div>
                    </div>
                    <nav className="mt-4 flex gap-2 overflow-x-auto text-sm lg:mt-8 lg:flex-col lg:gap-1">
                        {menuItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="flex items-center justify-between gap-2 rounded-full border border-transparent px-3 py-1.5 text-xs text-neutral-700 hover:border-primary/30 hover:bg-primary/5 hover:text-primary lg:rounded-lg lg:px-3 lg:py-2"
                            >
                                <span className="flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-primary/70" />
                                    {item.label}
                                </span>
                                {item.badge ? (
                                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold text-neutral-600">
                                        {item.badge}
                                    </span>
                                ) : null}
                            </a>
                        ))}
                    </nav>
                </aside>

                <div className="flex min-h-screen flex-1 flex-col">
                    <header className="border-b border-neutral-200 bg-white/80 px-5 py-4 backdrop-blur lg:px-8">
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
                                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                                        {env}
                                    </span>
                                ) : null}
                                <div className="rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs text-neutral-500">
                                    /monitoramento
                                </div>
                            </div>
                        </div>
                    </header>
                    <main className="flex-1 px-5 py-8 lg:px-8">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    );
}
