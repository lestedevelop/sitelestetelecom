export default function Select({
                                   label,
                                   name,
                                   register,
                                   error,
                                   required = false,
                                   placeholder = "Selecione",
                                   options = [],
                                   className = "",
                                   value,
                                   onChange,
                                   disabled = false,
                               }) {
    return (
        <div className="space-y-2">
            {label ? (
                <label className="text-darkgreen font-semibold">
                    {label} {required ? <span className="text-red-500">*</span> : null}
                </label>
            ) : null}

            <select
                {...(register ? register(name) : {})}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                className={[
                    "w-full h-12 rounded-md bg-graylighter px-4 outline-none",
                    error ? "border border-red-500" : "border border-transparent",
                    "focus:border-primary",
                    disabled ? "opacity-60 cursor-not-allowed" : "",
                    className,
                ].join(" ")}
            >
                <option value="" disabled>
                    {placeholder}
                </option>

                {options.map((opt) => {
                    const val = typeof opt === "string" ? opt : opt.value;
                    const lab = typeof opt === "string" ? opt : opt.label;

                    return (
                        <option key={val} value={val}>
                            {lab}
                        </option>
                    );
                })}
            </select>

            {error ? <p className="text-red-500 text-sm">{error}</p> : null}
        </div>
    );
}
