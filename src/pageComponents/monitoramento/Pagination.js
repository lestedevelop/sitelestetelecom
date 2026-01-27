import Link from "next/link";

export default function Pagination({ page, eventsCount, prevParams, nextParams, hasNext }) {
    return (
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-neutral-600">
            <div>
                {eventsCount} eventos Â· pagina {page}
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
                    Proxima
                </Link>
            </div>
        </div>
    );
}
