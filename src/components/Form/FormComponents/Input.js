export default function Input({label, register, name, error, value, onChange, ...props}) {
    return (
        <div className="space-y-2">
            <label className="text-darkgreen font-semibold">{label}</label>

            <input
                {...(register ? register(name) : {})}
                name={name}
                value={value}
                onChange={onChange}
                className={`w-full h-12 rounded-md text-darkgreen bg-graylighter px-4 outline-none
          ${error ? "border border-red-500" : "border border-transparent"}
          focus:border-primary`}
                {...props}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}
