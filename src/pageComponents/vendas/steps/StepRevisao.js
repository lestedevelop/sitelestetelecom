"use client";

import { useSales } from "@/contexts/SalesContextNew";

export default function StepRevisao({ onBack }) {
    const { data } = useSales();

    return (
        <div className="space-y-4 text-darkgreen">
            <h2 className="text-xl font-semibold">Revisão</h2>
            <pre className="rounded bg-gray-100 p-4 text-sm overflow-auto">
        {JSON.stringify(data, null, 2)}
      </pre>

            <button type="button" onClick={onBack} className="rounded border px-4 py-2">
                Voltar
            </button>
        </div>
    );
}
