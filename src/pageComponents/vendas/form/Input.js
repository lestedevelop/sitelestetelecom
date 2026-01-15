"use client";

export default function Input({ label, register, name, error, ...props }) {
    const reg = register && name ? register(name) : {};

    return (
        <div className="space-y-2">
            <label className="text-darkgreen font-semibold">{label}</label>
            <input
                {...props}
                {...reg}
                className={`w-full h-12 rounded-md text-darkgreen bg-graylighter px-4 outline-none
          ${error ? "border border-red-500" : "border border-transparent"}
          focus:border-primary`}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}
