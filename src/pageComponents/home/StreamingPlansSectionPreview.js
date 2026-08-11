import Section from "@/components/layout/Section";
import PlansSwiperHome from "@/pageComponents/home/PlansSwiperHome";
import StreamingPlanPreview from "@/pageComponents/home/StreamingPlanPreview";
import {streamingPlansMock} from "@/mocks/streamingPlan";
import PlanCard from "@/components/cards/PlanCard";
import PromotionalPlanCard from "@/pageComponents/vendas/PromotionalPlanCardVendas";
import {useHomeData} from "@/hooks/useHomeData";
import {groupStreamingPlans} from "@/utils/streamingPlans";
import {sortPlansByLowestPrice} from "@/utils/plans";
import {isPromotionalPlan} from "@/lib/vendas/promotionalPlans";
import {Sparkles} from "lucide-react";
import {useMemo, useState} from "react";
import {useSite} from "@/contexts/SiteContext";

const planFilters = [
    {id: "best", label: "Melhores Ofertas"},
    {id: "streaming", label: "Internet, TV e streaming"},
    {id: "internet", label: "Apenas internet"},
];

const citiesWithPlanFilters = new Set([3302700, 3303302]);

export default function StreamingPlansSectionPreview() {
    const [activeFilter, setActiveFilter] = useState("best");
    const {planos} = useHomeData();
    const {codcid} = useSite();
    const hasPlanFilters = citiesWithPlanFilters.has(Number(codcid));
    const backendPlans = planos?.data;
    const {streamingPlans, standardPlans} = useMemo(
        () => groupStreamingPlans(Array.isArray(backendPlans) ? backendPlans : [], streamingPlansMock),
        [backendPlans]
    );
    const sortedStandardPlans = useMemo(
        () => sortPlansByLowestPrice(standardPlans),
        [standardPlans]
    );
    const swiperPlans = useMemo(() => {
        if (!hasPlanFilters) return sortedStandardPlans;
        if (activeFilter === "streaming") return streamingPlans;
        if (activeFilter === "internet") return sortedStandardPlans;
        const cheapestStandardPlan = sortedStandardPlans[0];
        return cheapestStandardPlan
            ? [cheapestStandardPlan, ...streamingPlans]
            : streamingPlans;
    }, [activeFilter, hasPlanFilters, sortedStandardPlans, streamingPlans]);

    function renderPlan(plan) {
        if (plan.__streaming) return <StreamingPlanPreview plan={plan}/>;

        if (isPromotionalPlan(plan)) {
            return (
                <PromotionalPlanCard
                    plan={plan}
                    actionHref="https://vendas.lestetelecom.com.br/vendas"
                    actionLabel="Assine agora!"
                    compactTop
                    className="h-[784px] py-0!"
                    cardClassName="h-full!"
                />
            );
        }

        return (
            <PlanCard
                plan={plan}
                className="mt-0! h-[784px] py-0!"
                cardClassName="h-full! min-h-0!"
                matchStreamingStyle
            />
        );
    }

    return (
        <Section className="px-0! pb-8 sm:px-8! sm:pb-12 lg:pb-24 xl:px-0!">
            <section className="pb-8 pt-8">
                <h2 className="text-center text-[28px] font-bold leading-[1.05] text-primary md:text-[64px]">
                    Conheça nossos planos!
                </h2>
                <p className="mt-2 text-center text-base text-dark md:text-2xl">
                    100% Fibra Ótica
                </p>

                {hasPlanFilters ? (
                    <div className="mt-5 flex justify-center px-4">
                        <div
                            role="tablist"
                            aria-label="Filtrar planos"
                            className="flex max-w-full items-center gap-1 overflow-x-auto rounded-full border border-primary bg-white p-1"
                        >
                            {planFilters.map((filter) => {
                                const isActive = activeFilter === filter.id;

                                return (
                                    <button
                                        key={filter.id}
                                        type="button"
                                        role="tab"
                                        aria-selected={isActive}
                                        onClick={() => setActiveFilter(filter.id)}
                                        className={`flex min-h-10 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full px-4 text-xs font-semibold transition md:px-6 md:text-sm ${isActive ? "bg-primary text-white shadow-sm" : "text-primary hover:bg-lightgreenBackground"}`}
                                    >
                                        {filter.id === "best" ? <Sparkles aria-hidden="true" size={14}/> : null}
                                        {filter.label}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ) : null}
            </section>

            <div className="w-full min-w-0">
                <PlansSwiperHome
                    key={hasPlanFilters ? activeFilter : `standard-${codcid || "all"}`}
                    plans={swiperPlans}
                    renderPlan={renderPlan}
                    slidesPerView={1}
                    breakpoints={{
                        640: {slidesPerView: 2},
                        1024: {slidesPerView: 3},
                        1280: {slidesPerView: 4},
                    }}
                    slideClassName="h-[784px]!"
                />
            </div>

            <div className="mx-auto mt-6 max-w-5xl px-5 text-center text-xs leading-relaxed text-graylight md:px-8 md:text-sm">
                {!hasPlanFilters || activeFilter === "internet" ? (
                    <p>
                        Sujeita à viabilidade técnica. Consulte nosso{" "}
                        <a
                            href="https://lestetelecom.com.br/faq"
                            className="font-bold text-primary underline underline-offset-2 hover:text-darkgreen"
                        >
                            FAQ
                        </a>{" "}
                        para conhecer as regras que complementam o contrato de prestação de serviço, bem como os
                        serviços agregados a cada plano.
                    </p>
                ) : (
                    <p>
                        Oferta exclusiva para Niterói/RJ e Maricá/RJ. Sujeita à viabilidade técnica. Fidelidade de
                        12 meses. Combo internet + Leste Play, conforme plano contratado. Conteúdos, canais e
                        funcionalidades variam por plano e estão sujeitos a alterações, inclusão, exclusão ou
                        indisponibilidade na plataforma Watch, sem aviso prévio. Disponibilidade consultada em
                        [01/08/2026]. Consulte condições em{" "}
                        <a
                            href="https://lestetelecom.com.br/faq"
                            className="font-semibold text-primary underline underline-offset-2 hover:text-darkgreen"
                        >
                            lestetelecom.com.br/faq
                        </a>
                        .
                    </p>
                )}
            </div>
        </Section>
    );
}
