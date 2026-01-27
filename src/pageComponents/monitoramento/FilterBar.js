export default function FilterBar({
    from,
    to,
    type,
    level,
    statusRaw,
    route,
    appVersion,
    environment,
    q,
    limit,
    typeOptions,
    levelOptions,
}) {
    return (
        <form className="mt-6 rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
            <div className="grid gap-3 lg:grid-cols-12">
                <div className="lg:col-span-2">
                    <label className="text-xs font-medium text-neutral-600">De</label>
                    <input
                        type="date"
                        name="from"
                        defaultValue={from}
                        className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                    />
                </div>
                <div className="lg:col-span-2">
                    <label className="text-xs font-medium text-neutral-600">Ate</label>
                    <input
                        type="date"
                        name="to"
                        defaultValue={to}
                        className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                    />
                </div>
                <div className="lg:col-span-2">
                    <label className="text-xs font-medium text-neutral-600">Tipo</label>
                    <select
                        name="type"
                        defaultValue={type}
                        className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                    >
                        {typeOptions.map((item) => (
                            <option key={item} value={item}>
                                {item || "Todos"}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="lg:col-span-2">
                    <label className="text-xs font-medium text-neutral-600">Nivel</label>
                    <select
                        name="level"
                        defaultValue={level}
                        className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                    >
                        {levelOptions.map((item) => (
                            <option key={item} value={item}>
                                {item || "Todos"}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="lg:col-span-2">
                    <label className="text-xs font-medium text-neutral-600">Status</label>
                    <input
                        type="number"
                        name="status"
                        defaultValue={statusRaw}
                        className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                        placeholder="500"
                    />
                </div>
                <div className="lg:col-span-2">
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

            <div className="mt-3 grid gap-3 lg:grid-cols-12">
                <div className="lg:col-span-3">
                    <label className="text-xs font-medium text-neutral-600">App versao</label>
                    <input
                        type="text"
                        name="appVersion"
                        defaultValue={appVersion}
                        className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                        placeholder="1.0.0"
                    />
                </div>
                <div className="lg:col-span-2">
                    <label className="text-xs font-medium text-neutral-600">Ambiente</label>
                    <input
                        type="text"
                        name="environment"
                        defaultValue={environment}
                        className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                        placeholder="prod/stage/dev"
                    />
                </div>
                <div className="lg:col-span-4">
                    <label className="text-xs font-medium text-neutral-600">Buscar</label>
                    <input
                        type="text"
                        name="q"
                        defaultValue={q}
                        className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                        placeholder="Mensagem, URL ou stack"
                    />
                </div>
                <div className="lg:col-span-2">
                    <label className="text-xs font-medium text-neutral-600">Por pagina</label>
                    <select
                        name="limit"
                        defaultValue={String(limit)}
                        className="mt-1 w-full rounded-md border border-neutral-200 px-3 py-2 text-sm focus:border-primary focus:outline-none"
                    >
                        {[25, 50, 100, 200].map((value) => (
                            <option key={value} value={value}>
                                {value} por pagina
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex items-end gap-2 lg:col-span-1">
                    <button
                        type="submit"
                        className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-[#5b21b6]"
                    >
                        Filtrar
                    </button>
                </div>
            </div>
            <div className="mt-3">
                <a
                    href="/monitoramento"
                    className="inline-flex rounded-md border border-neutral-200 px-3 py-2 text-xs text-neutral-600 hover:border-primary hover:text-primary"
                >
                    Limpar filtros
                </a>
            </div>
        </form>
    );
}
