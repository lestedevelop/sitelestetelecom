export default function DateInput({
                                      label,
                                      name,
                                      register,
                                      error,
                                      required = false,
                                      className = "",
                                      value,
                                      onChange,
                                      disabled = false,
                                      min,
                                      max,
                                  }) {
    return (
        <div className="space-y-2">
            {label ? (
                <label className="text-darkgreen font-semibold">
                    {label} {required ? <span className="text-red-500">*</span> : null}
                </label>
            ) : null}

            <input
                type="date"
                {...(register ? register(name) : {})}
                name={name}
                value={value}
                onChange={onChange}
                disabled={disabled}
                min={min}
                max={max}
                className={[
                    "w-full h-12 rounded-md bg-graylighter px-4 outline-none",
                    error ? "border border-red-500" : "border border-transparent",
                    "focus:border-primary",
                    disabled ? "opacity-60 cursor-not-allowed" : "",
                    className,
                ].join(" ")}
            />

            {error ? <p className="text-red-500 text-sm">{error}</p> : null}
        </div>
    );
}
