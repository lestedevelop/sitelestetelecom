export default function Stepper({ step }) {
    const steps = [
        { key: "cadastro", label: "Cadastro" },
        { key: "plano", label: "Plano" },
        { key: "revisao", label: "Revisão" },
    ];

    return (
        <div className="flex items-center gap-4">
            {steps.map((s) => {
                const active = s.key === step;
                const done = steps.findIndex(x => x.key === step) > steps.findIndex(x => x.key === s.key);

                return (
                    <div key={s.key} className="flex items-center gap-2">
                        <div
                            className={[
                                "h-7 w-7 rounded-full flex items-center justify-center text-sm",
                                done ? "bg-emerald-600 text-white" : active ? "border-2 border-emerald-600 text-emerald-600" : "border text-gray-400"
                            ].join(" ")}
                        >
                            {done ? "✓" : ""}
                        </div>
                        <span className={active ? "text-emerald-700 font-medium" : "text-gray-500"}>
              {s.label}
            </span>
                    </div>
                );
            })}
        </div>
    );
}
