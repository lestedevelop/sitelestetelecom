import Section from "@/components/layout/Section";
import ActionCard from "@/components/listItems/ActionCard";
import TitleAndSubtitleSection from "@/components/listItems/TitleAndSubtitleSection";
import { Title } from "@/components/typoraphy";
import { Cable, File, FileText, Gauge, Megaphone, Router } from "lucide-react";

export default function JaeClienteSection() {
    return (
        <Section>
            <TitleAndSubtitleSection title={'Já é cliente Leste?'} text={'Como podemos ajudar?'} styleText={{color:'#045441'}}/>
            <div className="flex justify-around ">
                <a href="#">
                    <ActionCard textStyle={{color:"#045441"}} text={'Segunda via'} icon={<FileText size={48}/>}/>

                </a>
                <ActionCard textStyle={{color:"#045441"}} text={'Problemas de conexão'} icon={<Cable size={48} />}/>
                <ActionCard textStyle={{color:"#045441"}} text={'Teste sua velocidade'} icon={<Gauge size={48} />}/>
                <ActionCard textStyle={{color:"#045441"}} text={'Upgrade de plano'} icon={<Router size={48} />}/>
                <ActionCard textStyle={{color:"#045441"}} text={'Canal do WhatsApp'} icon={<Megaphone size={48}/>}/>

            </div>

        </Section>
    )
}