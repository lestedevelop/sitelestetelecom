"use client";

export default function Input({ label, register, name, error, id, className = "", ...props }) {
    const reg = register && name ? register(name) : {};
    const inputId = id || name;

    return (
        <div className="space-y-2">
            <label htmlFor={inputId} className="text-darkgreen font-semibold">{label}</label>
            <input
                id={inputId}
                {...props}
                {...reg}
                className={`w-full h-12 rounded-md text-darkgreen bg-graylighter px-4 outline-none
          ${error ? "border border-red-500" : "border border-transparent"}
          focus:border-primary ${className}`}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
    );
}
