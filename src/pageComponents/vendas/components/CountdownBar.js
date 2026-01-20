"use client";

export default function CountdownBar({ progress = 0 }) {
    const pct = Math.min(100, Math.max(0, Math.round(progress * 100)));

    return (
        <div className="w-full h-2 rounded-full bg-[#dbe6e3] overflow-hidden">
            <div
                className="h-full bg-primary transition-all duration-500"
                style={{ width: `${pct}%` }}
            />
        </div>
    );
}
