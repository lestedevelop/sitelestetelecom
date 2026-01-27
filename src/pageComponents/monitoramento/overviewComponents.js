function StatCard({ title, value, subtitle }) {
    return (
        <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
            <p className="text-xs uppercase tracking-wide text-neutral-500">{title}</p>
            <p className="mt-2 text-2xl font-semibold text-neutral-900">{value}</p>
            {subtitle ? (
                <p className="mt-1 text-xs text-neutral-500">{subtitle}</p>
            ) : null}
        </div>
    );
}

function BarList({ items, max }) {
    return (
        <div className="space-y-3">
            {items.map((item) => (
                <div key={item.key} className="space-y-1">
                    <div className="flex items-center justify-between text-xs text-neutral-600">
                        <span className="truncate">{item.key}</span>
                        <span className="font-medium">{item.count}</span>
                    </div>
                    <div className="h-2 w-full rounded-full bg-neutral-100">
                        <div
                            className="h-2 rounded-full bg-primary"
                            style={{ width: `${(item.count / max) * 100}%` }}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}

function SparkLineDots({ series, max }) {
    const height = 120;
    const width = 480;
    const safeMax = max || 1;
    const step = series.length > 1 ? width / (series.length - 1) : width;

    const points = series.map((item, index) => {
        const x = Math.round(index * step);
        const y = Math.round(height - (item.count / safeMax) * (height - 16) - 8);
        return { ...item, x, y };
    });

    const path = points
        .map((point, index) => `${index === 0 ? "M" : "L"}${point.x},${point.y}`)
        .join(" ");

    return (
        <svg
            viewBox={`0 0 ${width} ${height}`}
            className="h-28 w-full"
            role="img"
            aria-label="Volume por hora"
        >
            <path
                d={path}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-primary"
            />
            {points.map((point) => (
                <circle
                    key={point.label}
                    cx={point.x}
                    cy={point.y}
                    r="4"
                    className="fill-primary"
                >
                    <title>{`${point.label} - ${point.count}`}</title>
                </circle>
            ))}
        </svg>
    );
}

export { StatCard, BarList, SparkLineDots };

