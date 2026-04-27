import Section from "@/components/layout/Section";
import PlanCard from "@/components/cards/PlanCard";
import PlanCardSkeleton from "@/components/skeletom/PlanCardSkeletom";
import PlansSwiperHome from "@/pageComponents/home/PlansSwiperHome";
import {useSite} from "@/contexts/SiteContext";
import {useHomeData} from "@/hooks/useHomeData";

export default function PlanosSection() {
    const {planos, loading} = useHomeData();
    const {site} = useSite();
    const plansData = planos?.data || [];
    const showSkeleton = loading || plansData.length === 0;

    return (
        <Section>
            <section className="pt-8 pb-8">
                <h2 className="planos-title text-center font-bold text-primary">
                    Conheca nossos planos!
                </h2>
                <p className="planos-subtitle mt-2 text-center text-dark">
                    Internet 100% Fibra ótica na sua casa
                </p>
            </section>

            <div className="flex flex-col flex-wrap place-items-center justify-center gap-6 md:flex-row lg:flex-nowrap lg:justify-between">
                <PlansSwiperHome
                    loading={showSkeleton}
                    renderSkeleton={() => <PlanCardSkeleton/>}
                    plans={plansData}
                    renderPlan={(plan) => (
                        <PlanCard plan={plan}/>
                    )}
                />
            </div>

            <div className="pt-8 pb-8">
                <p className="planos-subtitle font-bold mt-2 text-xl text-center text-darkgreen">
                    {`Planos disponiveis apenas para a cidade de ${site?.city?.label}`}
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
