import Section from "@/components/layout/Section";
import {Title} from "@/components/typoraphy";
import PlanCard from "@/components/cards/teste";
import TitleAndSubtitleSection from "@/components/listItems/TitleAndSubtitleSection";

export default function PlanosSection(){
    return (
        <Section>
            <TitleAndSubtitleSection title={'Conheça nossos planos!'} text={'Internet Fibra Ótica de verdade, dentro da sua casa'} />
            <div className=" flex gap-6 place-items-center">
                <PlanCard />
                <PlanCard />
                <PlanCard />
                <PlanCard />
            </div>
            <TitleAndSubtitleSection text={'Planos disponíveis apenas para a cidade de Niterói'} styleText={{textAlign:'center'}}/>
            <div>
                <p className="text-gray-500 text-sm mx-2.5 mb-8 ">Nosso FAQ contém informações e regras que se integram ao contrato de prestação de serviço para nossos planos.</p>
                <ul  className="text-gray-500 text-sm mx-2.5 list-disc ">
                    <li>O plano de 800 MEGA com Super Wi-Fi 6 AX é exclusivo para novos assinantes.</li>
                    <li>Condições técnicas são aplicáveis a planos superiores a 800 MEGA.</li>
                    <li>Planos com Super Wi-Fi 6 AX MESH possuem contrato de fidelidade de 12 meses.</li>
                    <li>Os equipamentos cedidos ficarão sob a responsabilidade do contratante enquanto o plano estiver ativo.</li>
                </ul>
            </div>
        </Section>
    )
}