"use client";

import { useEffect } from "react";

export default function Modal({ open, title, subtitle, onClose, children }) {
    useEffect(() => {
        if (!open) return;

        function onKey(e) {
            if (e.key === "Escape") onClose?.();
        }
        document.addEventListener("keydown", onKey);
        return () => document.removeEventListener("keydown", onKey);
    }, [open, onClose]);

    if (!open) return null;

    return (
        <div className="fixed inset-0 z-[60] overflow-y-auto">
            <button
                type="button"
                aria-label="Fechar"
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />

            <div className="relative mx-auto px-8 mt-16 w-full max-w-3xl">
                <div className="rounded-2xl bg-white shadow-xl ring-1 ring-black/10">
                    <div className="flex items-start justify-between gap-4 px-6 py-5 border-b border-black/10">
                        <div>
                            <h3 className="text-xl font-semibold text-darkgreen">{title}</h3>
                            {subtitle ? (
                                <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
                            ) : null}
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            className="h-9 w-9 rounded-full hover:bg-black/5 flex items-center justify-center text-gray-500"
                            aria-label="Fechar modal"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="px-6 py-6">{children}</div>
                </div>
            </div>
        </div>
    );
}
