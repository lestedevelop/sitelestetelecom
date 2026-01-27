function SummaryCard({ icon, label, value, delta, tone }) {
    const tones = {
        fatal: "bg-red-50 text-red-700 border-red-200",
        error: "bg-orange-50 text-orange-700 border-orange-200",
        warn: "bg-yellow-50 text-yellow-700 border-yellow-200",
        info: "bg-emerald-50 text-emerald-700 border-emerald-200",
        neutral: "bg-neutral-50 text-neutral-700 border-neutral-200",
    };
    const toneClass = tones[tone] || tones.neutral;

    return (
        <div className={`rounded-xl border px-4 py-3 shadow-sm ${toneClass}`}>
            <div className="flex items-start justify-between gap-3">
                <div className="text-lg">{icon}</div>
                <div className="text-right text-xs text-neutral-500">
                    <span className="inline-flex items-center gap-1 font-medium">
                        {delta?.value || "0%"}
                    </span>
                </div>
            </div>
            <div className="mt-2 text-xs uppercase tracking-wide text-neutral-500">
                {label}
            </div>
            <div className="mt-1 text-2xl font-semibold text-neutral-900">
                {value}
            </div>
        </div>
    );
}

export default SummaryCard;
