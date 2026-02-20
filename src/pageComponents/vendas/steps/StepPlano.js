"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useSales } from "@/contexts/SalesContextNew";
import { cidadesMock } from "@/mocks/cidadesMock";
import { findCodCidByName } from "@/utils/cidade";
import { getPlanosByCodCid } from "@/services/vendas/planos";

import PlanCard from "@/pageComponents/vendas/PlanCardVendas";
import PlansSwiper from "@/pageComponents/vendas/PlansSwiper";
import VencimentoSection from "@/pageComponents/vendas/components/VencimentoSection";
import PagamentoSection from "@/pageComponents/vendas/components/PagamentoSection";
import ResponsaveisSection from "@/pageComponents/vendas/components/ResponsaveisSection";
import ConfirmModal from "@/pageComponents/vendas/components/ConfirmModal";

export default function StepPlans({ onNext, onBack }) {
    const { data, updateStep } = useSales();

    const [plans, setPlans] = useState([]);
    const [loading, setLoading] = useState(false);
    const lastKeyRef = useRef("");
    const abortRef = useRef(null);
    const cidadeNome = data?.cadastro?.cidade || "";
    const codcid = useMemo(
        () => findCodCidByName(cidadeNome, cidadesMock),
        [cidadeNome]
    );

    const [confirmOpen, setConfirmOpen] = useState(false);
    const [addRespOpen, setAddRespOpen] = useState(false);


    function handleContinue() {
        const hasResponsavel = (data?.responsaveis || []).length > 0;

        if (!hasResponsavel) {
            setConfirmOpen(true);
            return;
        }

        onNext?.();
    }

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

                {/*<>*/}
                {/*    <div className={"h-[2px] bg-gray-300 w-full"} />*/}
                {/*    <VencimentoSection onSelect={handleSelectVencimento} vencimentos={[2, 5, 17]}  selected={data?.plano?.vencimento}/>*/}
                {/*</>*/}


                <>
                    <div className={"h-[2px] bg-gray-300 w-full"} />
                    <PagamentoSection />
                </>

            <div className={"h-[2px] bg-gray-300 w-full"} />
            <ResponsaveisSection modalOpen={addRespOpen} setModalOpen={setAddRespOpen} />
            <div className="pt-2">
                <button
                    type="button"
                    disabled={!data?.plano?.id}
                    onClick={handleContinue}
                    className="w-48 h-12 rounded-md bg-primary text-white font-semibold disabled:opacity-60"
                >
                    Continuar
                </button>
            </div>

            <ConfirmModal
                open={confirmOpen}
                title="Atenção"
                message="Você está seguindo sem adicionar nenhum responsável adicional. Se não estiver disponível no dia da instalação, ninguém poderá receber a equipe técnica. Deseja continuar mesmo assim?"
                confirmText="Continuar"
                cancelText="Adicionar responsável"
                onConfirm={() => {
                    setConfirmOpen(false);
                    onNext?.();
                }}
                onCancel={() => {
                    setConfirmOpen(false);
                    setAddRespOpen(true);
                }}
            />
        </div>
    );
}
