export default function Input({label, register, name, error, value, onChange, onBlur, className = "", ...props}) {
    const rhf = register && name ? register(name) : {};

    const handleChange = (e) => {
        // 1) chama RHF primeiro
        if (rhf.onChange) rhf.onChange(e);
        // 2) chama o seu custom depois (máscara / setValue etc)
        if (onChange) onChange(e);
    };

    const handleBlur = (e) => {
        // 1) chama RHF primeiro
        if (rhf.onBlur) rhf.onBlur(e);
        // 2) chama o seu custom depois (viabilidade)
        if (onBlur) onBlur(e);
    };

    // Se value for passado, vira controlado (ok)
    const controlledProps = value !== undefined ? { value } : {};

    return (
        <div className="space-y-2">
            {label ? <label className="text-darkgreen font-semibold">{label}</label> : null}

            <input
                {...rhf}
                {...props}
                name={name}
                {...controlledProps}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full h-12 rounded-md text-darkgreen bg-graylighter px-4 outline-none
          ${error ? "border border-red-500" : "border border-transparent"}
          focus:border-primary ${className}`}
            />

            {error ? <p className="text-red-500 text-sm">{error}</p> : null}
        </div>
    );
}
