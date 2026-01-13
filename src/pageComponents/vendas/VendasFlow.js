"use client";

import { useEffect, useState } from "react";
import { useSales } from "@/pageComponents/vendas/SalesContext";

import StepCadastroInicial from "@/pageComponents/vendas/steps/StepCadastroInicial";
import StepCadastroCompleto from "@/pageComponents/vendas/steps/StepCadastroCompleto";
import StepPlano from "@/pageComponents/vendas/steps/StepPlano";
import StepAgendamento from "@/pageComponents/vendas/steps/StepAgendamento";
import StepRevisao from "@/pageComponents/vendas/steps/StepRevisao";

const STEPS = ["cadastro_inicial", "cadastro_completo", "plano", "agendamento", "revisao"];
const STEP_KEY = "leste_vendas_step_v1";

export default function VendasFlow() {
    const { hydrated } = useSales();

    const [step, setStep] = useState("cadastro_inicial");

    // ✅ carrega step salvo só depois de hidratar (evita sobrescrita no meio)
    useEffect(() => {
        if (!hydrated) return;

        try {
            const saved = localStorage.getItem(STEP_KEY);
            if (saved && STEPS.includes(saved)) {
                setStep(saved);
            }
        } catch {}
    }, [hydrated]);

    // ✅ salva step sempre que mudar (após hidratar)
    useEffect(() => {
        if (!hydrated) return;

        try {
            localStorage.setItem(STEP_KEY, step);
            console.log("🧭 Step salvo:", step);
        } catch {}
    }, [step, hydrated]);

    function next() {
        setStep((prev) => {
            const i = STEPS.indexOf(prev);
            return STEPS[Math.min(i + 1, STEPS.length - 1)];
        });
    }

    function back() {
        setStep((prev) => {
            const i = STEPS.indexOf(prev);
            return STEPS[Math.max(i - 1, 0)];
        });
    }

    // ✅ trava render até hidratar (evita inputs “limparem”)
    if (!hydrated) {
        return <div className="p-6">Carregando...</div>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6">
            {step === "cadastro_inicial" && <StepCadastroInicial onNext={next} />}

            {step === "cadastro_completo" && (
                <StepCadastroCompleto onNext={next} onBack={back} />
            )}

            {step === "plano" && <StepPlano onNext={next} onBack={back} />}

            {step === "agendamento" && (
                <StepAgendamento onNext={next} onBack={back} />
            )}

            {step === "revisao" && <StepRevisao onBack={back} />}
        </div>
    );
}
