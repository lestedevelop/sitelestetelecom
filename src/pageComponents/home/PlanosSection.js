import Section from "@/components/layout/Section";
import {Title} from "@/components/typoraphy";
import PlanCard from "@/components/cards/teste";

export default function PlanosSection(){
    return (
        <Section>
            <Title text={'planos section'}/>
            <i className="fas fa-user" style={{fontSize: '24px', marginRight: '10px'}}></i>
            <i className="fa-brands fa-linkedin" style={{fontSize: '24px', marginRight: '10px'}}></i>
            <div className="min-h-screen grid place-items-center bg-gray-50 p-6">
                <PlanCard />
            </div>
        </Section>
    )
}