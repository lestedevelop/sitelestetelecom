"use client";

export default function VendasStepper({steps = ["Cadastro", "Plano", "Revisão"], current = 0, onBack,
                                      }) {
    const clamped = Math.max(0, Math.min(current, steps.length - 1));
    const progressPercent = (clamped / (steps.length - 1)) * 100;

    // tamanho da bolinha (w-10/h-10 = 40px)
    const DOT = 40;
    const DOT_HALF = DOT / 2;

    return (
        <div className="w-full flex flex-col md:flex-row gap-x-8 pb-12">
            {onBack ? (
                <button
                    type="button"
                    onClick={onBack}
                    className="flex items-center gap-2 text-base font-semibold text-[#8F8F8F] hover:text-gray-700"
                >
                    <span className="text-xl font-light leading-none">‹</span>
                    Voltar
                </button>
            ) : null}
            <div className="relative mt-6 w-full">
                <div
                    className="absolute top-5 h-[2px] bg-gray-300"
                    style={{ left: DOT_HALF, right: DOT_HALF, transform: "translateY(-50%)" }}
                />

                <div
                    className="absolute top-5 h-[2px] bg-emerald-600 transition-all"
                    style={{
                        left: DOT_HALF,
                        right: DOT_HALF,
                        transform: "translateY(-50%)",
                        width: `calc(100% - ${DOT}px)`,
                        transformOrigin: "left center",
                        scale: `${progressPercent / 100} 1`,
                    }}
                />

                {/* Pontos */}
                <div className="relative flex justify-between">
                    {steps.map((label, index) => {
                        const done = index < clamped;
                        const active = index === clamped;

                        return (
                            <div key={label} className="flex flex-col items-center">
                                <div
                                    className={[
                                        "h-8 w-8 rounded-full flex items-center justify-center transition-all",
                                        done
                                            ? "bg-emerald-600"
                                            : active
                                                ? "bg-white border-2 border-emerald-600"
                                                : "bg-white border-2 border-gray-300",
                                    ].join(" ")}
                                >
                                    {done ? (
                                        <span className="text-white text-sm font-bold leading-none">✓</span>
                                    ) : null}
                                </div>

                                <span
                                    className={[
                                        "mt-3 text-sm",
                                        done
                                            ? "text-emerald-700 font-semibold"
                                            : active
                                                ? "text-gray-700"
                                                : "text-gray-400",
                                    ].join(" ")}
                                >
                  {label}
                </span>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="h-10" />
        </div>
    );
}
