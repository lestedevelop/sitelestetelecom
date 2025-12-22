import Section from "@/components/layout/Section";
import { Title } from "@/components/typoraphy";
import PlanCard from "@/components/cards/PlanCard";
import TitleAndSubtitleSection from "@/components/listItems/TitleAndSubtitleSection";

export default function PlanosSection() {

    const plans = [{
        titleNumber: "600",
        titleUnit: "MEGA",
        wifiText: "SUPER WI-FI 6 AX MESH",
        perks: ["Skeelo livros", "bebanca", "leste CLUBE"],
        price: 199.99,
        cta: "Assinar agora",
        footnote: "Fidelidade de 12 meses",
    }]

    return (
        <Section>
            <TitleAndSubtitleSection title={'Conheça nossos planos!'} text={'Internet Fibra Ótica de verdade, dentro da sua casa'} />
            <div className=" flex flex-col flex-wrap lg:flex-nowrap justify-center lg:justify-between md:flex-row gap-6 place-items-center">
                <PlanCard plan={plans[0]} />
                <PlanCard plan={plans[0]} />
                <PlanCard plan={plans[0]} />
                <PlanCard plan={plans[0]} />
            </div>
            <TitleAndSubtitleSection text={'Planos disponíveis apenas para a cidade de Niterói'} styleText={{ textAlign: 'center' }} />
            <div className="text-center">
                <p className="text-graylight text-xs mx-2.5 mb-8 ">Todos os planos e serviços estão sujeitos à viabilidade técnica. Consulte nosso FAQ para conhecer as regras que complementam o contrato de prestação de serviço, bem como os serviços agregados a cada plano.</p>
                {/* <ul className="text-graylight text-sm mx-2.5">
                    <li>O plano de 800 MEGA com Super Wi-Fi 6 AX é exclusivo para novos assinantes.</li>
                    <li>Condições técnicas são aplicáveis a planos superiores a 800 MEGA.</li>
                    <li>Planos com Super Wi-Fi 6 AX MESH possuem contrato de fidelidade de 12 meses.</li>
                    <li>Os equipamentos cedidos ficarão sob a responsabilidade do contratante enquanto o plano estiver ativo.</li>
                </ul> */}
            </div>
        </Section>
    )
}