"use client"

import JaeClienteSection from "@/pageComponents/home/JaeClienteSection";
import AmaisPremiadaDoEstado from "@/pageComponents/home/AmaisPremiadaDoEstado";
import NovidadesSection from "@/pageComponents/home/NovidadesSection";
import StreamingPlanPreview from "@/pageComponents/home/StreamingPlanPreview";
import {useHomeSections} from "@/hooks/useHomeSections";
import {HomeManagedSection} from "@/pageComponents/home/sectionComponents";
import {streamingPlansMock} from "@/mocks/streamingPlan";
import StreamingPlansSectionPreview from "@/pageComponents/home/StreamingPlansSectionPreview";

export default function PreviewCardHome() {
    const {getAdverts} = useHomeSections();

    return (
        <div className="min-h-full bg-light">
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
