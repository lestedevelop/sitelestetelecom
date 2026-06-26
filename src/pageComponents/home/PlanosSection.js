import Section from "@/components/layout/Section";
import PlanCard from "@/components/cards/PlanCard";
import PromotionalPlanCard from "@/pageComponents/vendas/PromotionalPlanCardVendas";
import PlanCardSkeleton from "@/components/skeletom/PlanCardSkeletom";
import PlansSwiperHome from "@/pageComponents/home/PlansSwiperHome";
import {useSite} from "@/contexts/SiteContext";
import {useHomeData} from "@/hooks/useHomeData";
import {isPromotionalPlan} from "@/lib/vendas/promotionalPlans";
import {sortPlansByLowestPrice} from "@/utils/plans";

export default function PlanosSection() {
    const {planos, loading} = useHomeData();
    const {site} = useSite();
    const plansData = planos?.data || [];
    const sortedPlansData = sortPlansByLowestPrice(plansData);
    const showSkeleton = loading || plansData.length === 0;

    function renderPlanCard(plan) {
        if (isPromotionalPlan(plan)) {
            return (
                <PromotionalPlanCard
                    plan={plan}
                    actionHref="https://vendas.lestetelecom.com.br/"
                    actionLabel="Assine agora!"
                    compactTop
                    className="-mt-6"
                />
            );
        }

        return <PlanCard plan={plan}/>;
    }

    return (
        <Section>
            <section className="pt-8 pb-8">
                <h2 className="planos-title text-center font-bold text-primary">
                    Conheça nossos planos!
                </h2>
                <p className="planos-subtitle mt-2 text-center text-dark">
                    100% Fibra Ótica
                </p>
            </section>

            <div className="w-full min-w-0">
                <PlansSwiperHome
                    loading={showSkeleton}
                    renderSkeleton={() => <PlanCardSkeleton/>}
                    plans={sortedPlansData}
                    renderPlan={renderPlanCard}
                />
            </div>

            <div className="pt-8 pb-8">
                <p className="planos-subtitle font-bold mt-2 text-xl text-center text-darkgreen">
                    {`Planos disponíveis apenas para a cidade de ${site?.city?.label}`}
                </p>
                <div className="text-center">
                    <p className="mx-2.5 mb-8  text-sm lg:text-base text-graylight">
                        Todos os planos e serviços estão sujeitos à viabilidade técnica. Consulte nosso FAQ para conhecer as regras que complementam o contrato de prestação de serviço, bem como os serviços agregados a cada plano.
                    </p>
                </div>
            </div>



            <style jsx>{`
                .planos-title {
                    font-size: 28px;
                    line-height: 1.05;
                }

                .planos-subtitle {
                    font-size: 16px;
                    line-height: 1.3;
                }

                @media (min-width: 768px) {
                    .planos-title {
                        font-size: 64px;
                    }

                    .planos-subtitle {
                        font-size: 24px;
                    }
                }
            `}</style>
        </Section>
    );
}
