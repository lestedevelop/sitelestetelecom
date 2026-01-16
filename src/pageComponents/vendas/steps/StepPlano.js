"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSales } from "@/contexts/SalesContextNew";
import { cidadesMock } from "@/mocks/cidadesMock";
import { findCodCidByName } from "@/utils/cidade";
import { getPlanosByCodCid } from "@/pageComponents/vendas/api/planos";

import PlanCard from "@/pageComponents/vendas/PlanCardVendas";
import PlansSwiper from "@/pageComponents/vendas/PlansSwiper";
import VencimentoSection from "@/pageComponents/vendas/steps/VencimentoSection";
import PagamentoSection from "@/pageComponents/vendas/steps/PagamentoSection";

export default function StepPlans({ onNext, onBack }) {
    const { data, updateStep } = useSales();

    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(false);

    const cidadeNome = data?.cadastro?.cidade || "";
    const codcid = useMemo(
        () => findCodCidByName(cidadeNome, cidadesMock),
        [cidadeNome]
    );

    const lastKeyRef = useRef("");
    const abortRef = useRef(null);

    useEffect(() => {
        const key = String(codcid || "");
        if (!key) {
            setPlans([]);
            return;
        }

        if (lastKeyRef.current === key) return;
        lastKeyRef.current = key;

        if (abortRef.current) abortRef.current.abort();
        const controller = new AbortController();
        abortRef.current = controller;

        setLoading(true);

        getPlanosByCodCid({cidade:key,tipoMoradia:data?.cadastro?.tipoMoradia})
            .then((resp) => {
                const list =
                    resp?.data?.data ||
                    resp?.data ||
                    resp?.planos ||
                    resp ||
                    [];
                setPlans(Array.isArray(list) ? list : []);
            })
            .catch((err) => {
                if (err?.name === "AbortError") return;
                console.error("Erro ao buscar planos:", err);
                setPlans([]);
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, [codcid]);

    function handleSelect(plan) {
        updateStep("plano", plan);
    }
    function handleSelectVencimento(vencimento) {
        updateStep("plano", {
            ...data?.plano,
            vencimento
        });
    }

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {loading ? (
                <div className="text-sm text-gray-500">Carregando planos...</div>
            ) : null}

            {!loading && !plans.length ? (
                <div className="text-sm text-gray-500">Nenhum plano disponível.</div>
            ) : null}

            <h3 className={"text-3xl text-dark font-bold pb-8"}>Selecione o seu Plano</h3>

            {!!plans.length && (
                <PlansSwiper
                    plans={plans}
                    renderPlan={(plan) => (
                        <PlanCard
                            plan={plan}
                            selected={data?.plano?.id === plan.id}
                            onSelect={handleSelect}
                        />
                    )}
                />
            )}

            {data?.plano?.id &&(
                <>
                    <div className={"h-[2px] bg-gray-300 w-full"} />
                    <VencimentoSection onSelect={handleSelectVencimento} vencimentos={[2, 5, 17]}  selected={data?.plano?.vencimento}/>
                </>)}

            {data?.plano?.vencimento && (
                <>
                    <div className={"h-[2px] bg-gray-300 w-full"} />
                    <PagamentoSection />
                </>
            )}

            <div className={"h-[2px] bg-gray-300 w-full"} />
            <div className="pt-2">
                <button
                    type="button"
                    disabled={!data?.plano?.id}
                    onClick={() => onNext?.()}
                    className="w-48 h-12 rounded-md bg-primary text-white font-semibold disabled:opacity-60"
                >
                    Continuar
                </button>
            </div>
        </div>
    );
}
