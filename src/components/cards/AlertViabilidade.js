import {useSales} from "@/contexts/SalesContextNew";
import {useForm} from "react-hook-form";
import {useViabilidade} from "@/hooks/vendas/useViabilidade";
import {useDebounce} from "@/hooks/useDebounce";
import {useMemo, useState} from "react";
import {onlyDigits} from "@/utils/masks";

export function AlertViabilidade({ variant = "success", title, text, onClose }) {
    const styles =
        variant === "success"
            ? "border-emerald-300 bg-emerald-50 text-emerald-900"
            : "border-red-300 bg-red-50 text-red-900";

    return (
        <div className={`mt-6 flex items-start justify-between gap-4 rounded-lg border px-4 py-3 ${styles}`}>
            <div className="flex gap-3">
        <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border">
          {variant === "success" ? "✓" : "!"}
        </span>

                <div className="text-sm leading-snug">
                    <div className="font-semibold">{title}</div>
                    <div className="opacity-90">{text}</div>
                </div>
            </div>

            <button
                type="button"
                onClick={onClose}
                className="rounded-md px-2 py-1 hover:bg-black/5"
                aria-label="Fechar"
            >
                ✕
            </button>
        </div>
    );
}
