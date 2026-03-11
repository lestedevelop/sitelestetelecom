export default function Checkbox({ register, name, error, id, children }) {
    const inputId = id || name;

    return (
        <div className="space-y-2">
            <label className="flex items-center gap-3 text-darkgreen">
                <input
                    id={inputId}
                    type="checkbox"
                    className="h-4 w-4 accent-emerald-600"
                    {...(register ? register(name) : {})}
                />
                <span>{children}</span>
            </label>

            {error ? <p className="text-red-500 text-sm">{error}</p> : null}
        </div>
    );
}
