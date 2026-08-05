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

export default function StreamingPlansSectionPreview() {
    const {planos} = useHomeData();
    const backendPlans = planos?.data || [];
    const {streamingPlans, standardPlans} = groupStreamingPlans(backendPlans, streamingPlansMock);
    const swiperPlans = [...streamingPlans, ...sortPlansByLowestPrice(standardPlans)];

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
        <Section className="px-0! sm:px-8! xl:px-0!">
            <section className="pb-8 pt-8">
                <h2 className="text-center text-[28px] font-bold leading-[1.05] text-primary md:text-[64px]">
                    Conheça nossos planos!
                </h2>
                <p className="mt-2 text-center text-base text-dark md:text-2xl">
                    100% Fibra Ótica
                </p>
            </section>

            <div className="w-full min-w-0">
                <PlansSwiperHome
                    plans={swiperPlans}
                    renderPlan={renderPlan}
                    slidesPerView="auto"
                    breakpoints={{}}
                    slideClassName="h-[784px]! w-[343px]!"
                />
            </div>
        </Section>
    );
}
