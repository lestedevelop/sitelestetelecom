export default function RadioGroup({ label, name, register, options = [], error }) {
    return (
        <div className="space-y-2">
            {label ? <p className="text-darkgreen font-semibold">{label}</p> : null}

            <div className="flex items-center gap-6">
                {options.map((opt) => (
                    <label key={opt.value} className="flex items-center gap-2 text-darkgreen">
                        <input
                            type="radio"
                            value={opt.value}
                            className="h-4 w-4 accent-emerald-600"
                            {...(register ? register(name) : {})}
                        />
                        <span>{opt.label}</span>
                    </label>
                ))}
            </div>

            {error ? <p className="text-red-500 text-sm">{error}</p> : null}
        </div>
    );
}
