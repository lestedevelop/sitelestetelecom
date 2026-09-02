"use client";

import {useEffect, useMemo, useState} from "react";
import PlanCard from "@/components/cards/PlanCard";
import StreamingPlanPreview from "@/pageComponents/home/StreamingPlanPreview";
import PlansSwiper from "@/pageComponents/vendas/PlansSwiper";
import PromotionalPlanCard from "@/pageComponents/vendas/PromotionalPlanCardVendas";
import {useSite} from "@/contexts/SiteContext";
import {isPromotionalPlan} from "@/lib/vendas/promotionalPlans";
import {streamingPlansMock} from "@/mocks/streamingPlan";
import {getPlanosByCodCid} from "@/services/vendas/planos";
import {sortPlansByLowestPrice} from "@/utils/plans";
import {groupStreamingPlans} from "@/utils/streamingPlans";

function normalizePlansResponse(response) {
    const plans = response?.data?.data ||
        response?.data ||
        response?.planos ||
        response ||
        [];

    return Array.isArray(plans) ? plans : [];
}

export default function PreviewPlansCarousel() {
    const {codcid, cityLabel} = useSite();
    const [plans, setPlans] = useState([]);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!codcid) {
            setPlans([]);
            return;
        }

        const controller = new AbortController();
        setLoading(true);
        setError("");
        setSelectedPlan(null);

        getPlanosByCodCid({cidade: codcid, tipoMoradia: "predio"}, {signal: controller.signal})
            .then((response) => setPlans(normalizePlansResponse(response)))
            .catch((requestError) => {
                if (requestError?.name === "AbortError") return;
                console.error("Erro ao buscar planos para a prévia:", requestError);
                setPlans([]);
                setError(requestError?.message || "Não foi possível carregar os planos.");
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, [codcid]);

    const displayedPlans = useMemo(() => {
        const {streamingPlans, standardPlans} = groupStreamingPlans(plans, streamingPlansMock);
        return [...streamingPlans, ...sortPlansByLowestPrice(standardPlans)];
    }, [plans]);

    function isSelected(plan) {
        return !!selectedPlan && (
            (plan?.id && plan.id === selectedPlan.id) ||
            (plan?.codser && plan.codser === selectedPlan.codser)
        );
    }

    function renderPlan(plan) {
        if (plan.__streaming) {
            const selectedEntry = Object.entries(plan.backendPlans || {}).find(
                ([, backendPlan]) => isSelected(backendPlan)
            );

            return (
                <StreamingPlanPreview
                    plan={plan}
                    variant="sales"
                    initialChannel={selectedEntry?.[0] || plan.channels}
                    selected={!!selectedEntry}
                    onSelect={setSelectedPlan}
                    onPackageChange={({backendPlan}) => {
                        if (selectedEntry && backendPlan) setSelectedPlan(backendPlan);
                    }}
                />
            );
        }

        const Card = isPromotionalPlan(plan) ? PromotionalPlanCard : PlanCard;

        return (
            <Card
                plan={plan}
                selected={isSelected(plan)}
                onSelect={setSelectedPlan}
                emphasizedBenefits
            />
        );
    }

    return (
        <section className="w-full bg-light py-10 md:py-16">
            <div className="container px-4! md:px-8!">
                <div className="mb-2 flex flex-col gap-1 md:flex-row md:items-end md:justify-between">
                    <h1 className="text-3xl font-bold text-darkgreen md:text-5xl">Planos | Site</h1>
                    {cityLabel ? (
                        <p className="text-sm font-semibold text-primary md:text-base">
                            Planos disponíveis em {cityLabel}
                        </p>
                    ) : null}
                </div>

                <p className="mb-2 text-sm text-graylight">
                    Leste Play, fibra padrão e fibra promocional retornados pela API de vendas.
                </p>

                {loading ? (
                    <div className="flex min-h-[620px] items-center justify-center text-sm text-graylight">
                        Carregando planos...
                    </div>
                ) : null}

                {!loading && error ? (
                    <div className="flex min-h-48 items-center justify-center rounded-2xl border border-red-200 bg-red-50 px-6 text-center text-sm text-red-700">
                        {error}
                    </div>
                ) : null}

                {!loading && !error && !codcid ? (
                    <div className="flex min-h-48 items-center justify-center rounded-2xl border border-primary/20 bg-white px-6 text-center text-sm text-darkgreen">
                        Escolha uma cidade para carregar os planos disponíveis.
                    </div>
                ) : null}

                {!loading && !error && codcid && !displayedPlans.length ? (
                    <div className="flex min-h-48 items-center justify-center rounded-2xl border border-primary/20 bg-white px-6 text-center text-sm text-darkgreen">
                        Nenhum plano disponível para a cidade selecionada.
                    </div>
                ) : null}

                {!loading && displayedPlans.length ? (
                    <PlansSwiper plans={displayedPlans} renderPlan={renderPlan}/>
                ) : null}
            </div>
        </section>
    );
}
