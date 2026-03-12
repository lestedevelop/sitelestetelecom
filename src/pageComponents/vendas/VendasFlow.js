"use client";

import {useEffect, useMemo} from "react";
import {useSales} from "@/contexts/SalesContextNew";
import {DEFAULT_VENDAS_STEP, getVendasPathByStep, VENDAS_BASE_PATH} from "@/lib/vendas/stepRouting";

import StepCadastroInicial from "./steps/StepCadastroInicial";
import StepCadastroCompleto from "./steps/StepCadastroCompleto";
import StepPlans from "./steps/StepPlano";

import VendasStepper from "@/pageComponents/vendas/VendasStepper";
import StepAgendamento from "@/pageComponents/vendas/steps/StepAgendamento";
import StepRevisao from "@/pageComponents/vendas/steps/StepRevisao";
import StepAssinatura from "@/pageComponents/vendas/steps/StepAssinatura";
import StepSemViabilidade from "@/pageComponents/vendas/steps/StepSemViabilidade";

const FLOW_STEPS = [
    "cadastro_inicial",
    "cadastro_completo",
    "planos",
    "agendamento",
    "revisao",
    "assinatura"
];

const STEPPER_STEPS = ["Cadastro", "Plano", "Revisão"];

const STEPPER_INDEX_MAP = {
    cadastro_inicial: 0,
    cadastro_completo: 0,
    planos: 1,
    agendamento: 2,
    revisao: 3,
    assinatura: 4,
};

export default function VendasFlow() {
    const {data, hydrated, setStep} = useSales();
    const step = data.step || DEFAULT_VENDAS_STEP;

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

    useEffect(() => {
        if (!hydrated || typeof window === "undefined") return;

        const targetPath = step === DEFAULT_VENDAS_STEP ? VENDAS_BASE_PATH : getVendasPathByStep(step);
        const nextUrl = `${targetPath}${window.location.search}${window.location.hash}`;
        const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

        if (currentUrl === nextUrl) return;

        window.history.replaceState(window.history.state, "", nextUrl);
    }, [hydrated, step]);

    return (
        <div id="gtm-vendas-flow" data-vendas-step={step}>
            {step !== "cadastro_inicial" && step !== "assinatura" &&  step !== "semViabilidade" && (
                <VendasStepper
                    steps={STEPPER_STEPS}
                    current={stepperIndex}
                    onBack={stepIndex > 0 ? back : undefined}
                />
            )}

            {step === "cadastro_inicial" && (
                <StepCadastroInicial onNext={next}/>
            )}

            {step === "cadastro_completo" && (
                <StepCadastroCompleto onBack={back} onNext={next}/>
            )}

            {step === "planos" && (
                <StepPlans onBack={back} onNext={next}/>
            )}
            {step === "agendamento" && (
                <StepAgendamento onBack={back} onNext={next}/>
            )}
            {step === "revisao" && (
                <StepRevisao onBack={back} onNext={next} onEditSection={goToIndex}/>
            )}
            {step === "assinatura" && (
                <StepAssinatura onBack={back} onNext={next} onEditSection={goToIndex}/>
            )}
            {step === "semViabilidade" && (
                <StepSemViabilidade onBack={back} onNext={next} onEditSection={goToIndex}/>
            )}

        </div>
    );
}
