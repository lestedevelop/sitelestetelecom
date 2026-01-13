"use client";

import { useForm } from "react-hook-form";
import { useSales } from "@/pageComponents/vendas/SalesContext";

export default function StepAgendamento({ onNext, onBack }) {
    const { updateStep, data } = useSales();

    const { register, handleSubmit } = useForm({
        defaultValues: data.agendamento || {},
    });

    function onSubmit(values) {
        updateStep("agendamento", values);
        onNext?.();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <h2 className="text-xl font-semibold">Agendamento</h2>

            <input
                {...register("dataInstalacao")}
                placeholder="Data (yyyy-mm-dd)"
                className="w-full border p-3"
            />

            <div className="flex gap-4">
                <label className="flex items-center gap-2">
                    <input type="radio" value="manha" {...register("periodoInstalacao")} />
                    Manhã
                </label>
                <label className="flex items-center gap-2">
                    <input type="radio" value="tarde" {...register("periodoInstalacao")} />
                    Tarde
                </label>
            </div>

            <div className="flex gap-3">
                <button type="button" onClick={onBack} className="rounded border px-4 py-2">
                    Voltar
                </button>
                <button type="submit" className="rounded bg-emerald-600 px-6 py-3 text-white">
                    Continuar
                </button>
            </div>
        </form>
    );
}
