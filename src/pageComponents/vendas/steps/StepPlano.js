"use client";

import { useForm } from "react-hook-form";
import { useSales } from "@/contexts/SalesContextNew";

export default function StepPlano({ onNext, onBack }) {
    const { updateStep, data } = useSales();

    const { register, handleSubmit } = useForm({
        defaultValues: data.plano || {},
    });

    function onSubmit(values) {
        updateStep("plano", values);
        onNext?.();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-darkgreen">
            <h2 className="text-xl font-semibold">Plano</h2>

            <select {...register("planoId")} className="w-full border p-3">
                <option value="">Selecione...</option>
                <option value="1giga">1 Giga</option>
                <option value="600mega">600 Mega</option>
            </select>

            <div className="flex gap-3 text-darkgreen">
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
