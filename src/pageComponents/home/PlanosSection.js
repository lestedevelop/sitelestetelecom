import Section from "@/components/layout/Section";
import PlanCard from "@/components/cards/PlanCard";
import PromotionalPlanCard from "@/pageComponents/vendas/PromotionalPlanCardVendas";
import PlanCardSkeleton from "@/components/skeletom/PlanCardSkeletom";
import PlansSwiperHome from "@/pageComponents/home/PlansSwiperHome";
import ModalViabilidade from "@/components/layout/ModalViabilidade";
import {SalesProviderNew} from "@/contexts/SalesContextNew";
import Link from "next/link";
import {useSite} from "@/contexts/SiteContext";
import {useHomeData} from "@/hooks/useHomeData";
import {isPromotionalPlan} from "@/lib/vendas/promotionalPlans";
import {sortPlansByLowestPrice} from "@/utils/plans";
import {useState} from "react";

const PROMOTIONAL_SUBTITLE_CITIES = new Set([
    "niteroi",
    "marica",
    "rio bonito",
    "tangua",
]);

function normalizeCityName(value = "") {
    return String(value)
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim()
        .toLowerCase();
}

export default function PlanosSection() {
    const [modalViabilidadeOpen, setModalViabilidadeOpen] = useState(false);
    const {planos, loading} = useHomeData();
    const {site} = useSite();
    const plansData = planos?.data || [];
    const sortedPlansData = sortPlansByLowestPrice(plansData);
    const showSkeleton = loading || plansData.length === 0;
    const cityName = site?.city?.label || "";
    const hasPromotionalSubtitle = PROMOTIONAL_SUBTITLE_CITIES.has(normalizeCityName(cityName));
    const subtitle = hasPromotionalSubtitle
        ? "*Desconto de 3 meses exclusivo para novos assinantes em migração de provedor"
        : "100% Fibra Ótica";

    function renderPlanCard(plan) {
        if (isPromotionalPlan(plan)) {
            return (
                <PromotionalPlanCard
                    plan={plan}
                    actionHref="https://vendas.lestetelecom.com.br/vendas"
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
                    {subtitle}
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
                    <p className="mx-2.5 mb-4 text-sm lg:text-base text-graylight">
                        *Planos de 600 MEGA (Niterói-RJ) com Oferta Válida até 31/07/2026 ou até
                        durarem os estoques dos equipamentos AC - Wi-Fi 5 para ativação.
                        <br />
                        *Planos de 1 GIGA (Maricá, Rio Bonito e Tanguá-RJ) com Wi-Fi 6 AX. Oferta
                        válida até 31/07/2026.
                    </p>
                    <p className="mx-2.5 mb-8  text-sm lg:text-base text-graylight">
                        Todos os planos e serviços estão sujeitos à viabilidade técnica. Consulte nosso{" "}
                        <Link href="/faq" className="font-semibold text-primary underline underline-offset-2">
                            FAQ
                        </Link>{" "}
                        para conhecer as regras que complementam o contrato de prestação de serviço, bem como os serviços agregados a cada plano.
                    </p>
                    <button
                        type="button"
                        onClick={() => setModalViabilidadeOpen(true)}
                        className="inline-flex min-h-12 items-center justify-center rounded-xl bg-primary px-8 py-3 text-base font-semibold text-white transition-transform hover:-translate-y-px"
                    >
                        Consultar viabilidade
                    </button>
                </div>
            </div>

            <SalesProviderNew>
                <ModalViabilidade open={modalViabilidadeOpen} onClose={setModalViabilidadeOpen}/>
            </SalesProviderNew>



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
