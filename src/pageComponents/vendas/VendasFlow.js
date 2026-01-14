"use client";

import { useEffect, useMemo, useState } from "react";
import { useSales } from "@/pageComponents/vendas/SalesContext";

import VendasStepper from "@/pageComponents/vendas/VendasStepper";

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

    // carrega step salvo só após hidratar
    useEffect(() => {
        if (!hydrated) return;
        try {
            const saved = localStorage.getItem(STEP_KEY);
            if (saved && STEPS.includes(saved)) setStep(saved);
        } catch {}
    }, [hydrated]);

    // salva step sempre que mudar (após hidratar)
    useEffect(() => {
        if (!hydrated) return;
        try {
            localStorage.setItem(STEP_KEY, step);
        } catch {}
    }, [step, hydrated]);

    const stepIndex = useMemo(() => {
        const i = STEPS.indexOf(step);
        return i >= 0 ? i : 0;
    }, [step]);

    // Stepper do print tem só 3 labels (Cadastro/Plano/Revisão).
    // Como você tem "cadastro_inicial" e "cadastro_completo", os dois ficam dentro de "Cadastro".
    const stepperIndex = useMemo(() => {
        if (step === "cadastro_inicial" || step === "cadastro_completo") return 0;
        if (step === "plano" || step === "agendamento") return 1; // se agendamento ficar dentro de Plano
        return 2; // revisao
    }, [step]);

    function goToIndex(nextIndex) {
        const safe = Math.max(0, Math.min(nextIndex, STEPS.length - 1));
        setStep(STEPS[safe]);
    }

    function next() {
        goToIndex(stepIndex + 1);
    }

    function back() {
        goToIndex(stepIndex - 1);
    }

    if (!hydrated) {
        return <div className="p-6">Carregando...</div>;
    }

    return (
        <div className="max-w-5xl mx-auto p-6">
            {/* ✅ Stepper fica aqui */}
            {step != "cadastro_inicial" && <VendasStepper
                steps={["Cadastro", "Plano", "Revisão"]}
                current={stepperIndex}
                onBack={stepIndex === 0 ? undefined : back}
            />}

            {/* Conteúdo */}
            {step === "cadastro_inicial" && <StepCadastroInicial onNext={next} />}
            {step === "cadastro_completo" && <StepCadastroCompleto onNext={next} onBack={back} />}

            {step === "plano" && <StepPlano onNext={next} onBack={back} />}
            {step === "agendamento" && <StepAgendamento onNext={next} onBack={back} />}

            {step === "revisao" && <StepRevisao onBack={back} />}
        </div>
    );
}
