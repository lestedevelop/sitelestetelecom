"use client";

export default function BlogTabs({ categories, active, onChange }) {
    return (
        <div className="border-b border-graylighter pb-6">
            {/* MOBILE: select */}
            <div className="block sm:hidden">
                <select
                    value={active}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full h-12 rounded-md bg-graylighter px-4 outline-none border border-transparent focus:border-primary text-dark font-semibold"
                >
                    {categories.map((c) => (
                        <option key={c.key} value={c.key}>
                            {c.label}
                        </option>
                    ))}
                </select>
            </div>

            {/* DESKTOP: tabs */}
            <div className="hidden sm:flex flex-wrap gap-8 items-center">
                {categories.map((c) => {
                    const isActive = c.key === active;

                    return (
                        <button
                            key={c.key}
                            onClick={() => onChange(c.key)}
                            className={[
                                "text-xl font-semibold transition",
                                isActive ? "text-primary" : "text-dark hover:text-primary",
                            ].join(" ")}
                        >
                            {c.label}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
