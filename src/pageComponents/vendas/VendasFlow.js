"use client";

import { useMemo } from "react";
import { useSales } from "@/contexts/SalesContextNew";

import StepCadastroInicial from "./steps/StepCadastroInicial";
import StepCadastroCompleto from "./steps/StepCadastroCompleto";
import StepPlans from "./steps/StepPlano";

import VendasStepper from "@/pageComponents/vendas/VendasStepper";

const FLOW_STEPS = [
    "cadastro_inicial",
    "cadastro_completo",
    "planos",
    "agendamento",
];

const STEPPER_STEPS = ["Cadastro", "Plano", "Revisão"];

const STEPPER_INDEX_MAP = {
    cadastro_inicial: 0,
    cadastro_completo: 0,
    planos: 1,
    agendamento: 2,
};

export default function VendasFlow() {
    const { data, setStep } = useSales();
    const step = data.step || "cadastro_inicial";

    const stepIndex = useMemo(
        () => FLOW_STEPS.indexOf(step),
        [step]
    );

    const stepperIndex = STEPPER_INDEX_MAP[step] ?? 0;

    function goToIndex(nextIndex) {
        const safe = Math.max(0, Math.min(nextIndex, FLOW_STEPS.length - 1));
        setStep(FLOW_STEPS[safe]);
    }

    function next() {
        goToIndex(stepIndex + 1);
    }

    function back() {
        goToIndex(stepIndex - 1);
    }

    return (
        <>
            {step !== "cadastro_inicial" && (
                <VendasStepper
                    steps={STEPPER_STEPS}
                    current={stepperIndex}
                    onBack={stepIndex > 0 ? back : undefined}
                />
            )}

            {step === "cadastro_inicial" && (
                <StepCadastroInicial onNext={next} />
            )}

            {step === "cadastro_completo" && (
                <StepCadastroCompleto onBack={back} onNext={next} />
            )}

            {step === "planos" && (
                <StepPlans onBack={back} onNext={next} />
            )}

            {/* quando criar:
      {step === "agendamento" && (
        <StepAgendamento onBack={back} onNext={next} />
      )} */}
        </>
    );
}
