"use client"

import JaeClienteSection from "@/pageComponents/home/JaeClienteSection";
import AmaisPremiadaDoEstado from "@/pageComponents/home/AmaisPremiadaDoEstado";
import NovidadesSection from "@/pageComponents/home/NovidadesSection";
import StreamingPlanPreview from "@/pageComponents/home/StreamingPlanPreview";
import {useHomeSections} from "@/hooks/useHomeSections";
import {HomeManagedSection} from "@/pageComponents/home/sectionComponents";
import {streamingPlansMock} from "@/mocks/streamingPlan";
import StreamingPlansSectionPreview from "@/pageComponents/home/StreamingPlansSectionPreview";
import PromotionalPlanCard from "@/pageComponents/vendas/PromotionalPlanCardVendas";

const promotionalPlanPreview = {
    id: "promotional-plan-preview",
    codser: "PROMO-PREVIEW",
    down: 600,
    descri_ser_bot: "WI-FI 5",
    valor: 149.99,
    valor_desconto: 74.99,
    fidelidade: 12,
    meses_desconto: 3,
    SVAs: [
        {name: "Bebanca"},
        {name: "Leste Clube"},
        {name: "Skeelo"},
    ],
};

export default function PreviewCardHome() {
    const {getAdverts} = useHomeSections();

    return (
        <div className="min-h-full bg-light">
            <section className="w-full bg-light py-10">
                <div className="container">
                    <h1 className="mb-8 text-center text-3xl font-bold text-darkgreen">
                        Card de plano promocional
                    </h1>
                    <div className="mx-auto w-full max-w-[328px]">
                        <PromotionalPlanCard
                            plan={promotionalPlanPreview}
                            actionHref="https://vendas.lestetelecom.com.br/vendas"
                            actionLabel="Assine agora!"
                            compactTop
                        />
                    </div>
                </div>
            </section>
            <HomeManagedSection sectionKey="bannerCentral" adverts={getAdverts("bannerCentral")}/>
            <StreamingPlansSectionPreview />
            <section className="w-full bg-light pb-10 md:pb-16">
                <div className="container px-0!">
                    <h2 className="mb-8 text-center text-2xl font-bold text-darkgreen">Variação para vendas</h2>
                    <div className="flex flex-wrap justify-center gap-6">
                        {streamingPlansMock.map((plan) => (
                            <StreamingPlanPreview key={`sales-${plan.id}`} plan={plan} variant="sales"/>
                        ))}
                    </div>
                </div>
            </section>
            <JaeClienteSection />
            <HomeManagedSection sectionKey="jaClienteLeste" adverts={getAdverts("jaClienteLeste")}/>
            <AmaisPremiadaDoEstado />
            <HomeManagedSection sectionKey="outrosServicos" adverts={getAdverts("outrosServicos")}/>
            <HomeManagedSection sectionKey="indiqueGanheCard" adverts={getAdverts("indiqueGanheCard")}/>
            <NovidadesSection />
        </div>
    );
}
