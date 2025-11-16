import Section from "@/components/layout/Section";
import ActionCard from "@/components/listItems/ActionCard";
import TitleAndSubtitleSection from "@/components/listItems/TitleAndSubtitleSection";
import { Title } from "@/components/typoraphy";
import { Cable, File, FileText, Gauge, Megaphone, Router } from "lucide-react";
import logoBoleto from "@/assets/segundaVia.svg"
import controle from "@/assets/Controle.svg"
import antena from "@/assets/antena.svg"
import conexao from "@/assets/conexao.svg"
import velocidade from "@/assets/Velocidade.svg"

import Image from "next/image";


export default function JaeClienteSection() {
    return (
        <Section >
            <div  className={'text-center md:text-start'}>
                 <TitleAndSubtitleSection title={'Já é cliente Leste?'} text={'Como podemos ajudar?'} styleText={{color:'#045441'}}/>
                
            
            <div className="flex flex-col items-center md:justify-around md:flex md:flex-row gap-3 md:gap-20 ">
                <a href="#">
                    <ActionCard textStyle={{color:"#045441"}} text={'Segunda via'} icon={<Image alt="icone de boleto" src={logoBoleto} />}/>

                </a>
                <a>
                     <ActionCard textStyle={{color:"#045441"}} text={'Problemas de conexão'} icon={<Image alt="icone de conexao" src={conexao} />}/>
                </a>
               
                <a>
                    <ActionCard textStyle={{color:"#045441"}} text={'Teste sua velocidade!'} icon={<Image alt="icone de velocidade" width={50} src={velocidade}  />}/>
                </a>
               <a>
                 <ActionCard textStyle={{color:"#045441"}} text={'Upgrade de plano'} icon={<Image alt="icone de conexao" width={50} src={antena}  />}/>
               </a>
               <a>
                 <ActionCard textStyle={{color:"#045441"}} text={'Canal do WhatsApp'} icon={<Megaphone size={48}/>}/>
               </a>

            </div>
            </div>

        </Section>
    )
}