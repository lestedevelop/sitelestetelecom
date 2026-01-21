import Section from "@/components/layout/Section";
import TitleAndSubtitleSection from "@/components/listItems/TitleAndSubtitleSection";
import PlanCard from "@/components/cards/PlanCard";
import PlansSwiperHome from "@/pageComponents/home/PlansSwiperHome";
import {useSite} from "@/contexts/SiteContext";

export default function PlanosSection({plans}) {
    console.log(plans);
    const {site} = useSite();
    return (
        <Section>
            <TitleAndSubtitleSection title={'Conheça nossos planos!'} text={'Internet Fibra Ótica de verdade, dentro da sua casa'} />
            <div className=" flex flex-col flex-wrap lg:flex-nowrap justify-center lg:justify-between md:flex-row gap-6 place-items-center">
                <PlansSwiperHome
                    plans={plans}
                    renderPlan={(plan) => (
                        <PlanCard
                            plan={plan}
                        />
                    )}
                />
            </div>
            <TitleAndSubtitleSection text={`Planos disponíveis apenas para a cidade de ${site?.city?.label}`} styleText={{ textAlign: 'center' }} />
            <div className="text-center">
                <p className="text-graylight text-xs mx-2.5 mb-8 ">Todos os planos e serviços estão sujeitos à viabilidade técnica. Consulte nosso FAQ para conhecer as regras que complementam o contrato de prestação de serviço, bem como os serviços agregados a cada plano.</p>
            </div>
        </Section>
    )
}