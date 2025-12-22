import Section from "@/components/layout/Section";
import ActionCard from "@/components/listItems/ActionCard";
import TitleAndSubtitleSection from "@/components/listItems/TitleAndSubtitleSection";
// import { Title } from "@/components/typoraphy";
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
            <div className={'text-center md:text-start pb-10'}>
                 <TitleAndSubtitleSection title={'Já é cliente Leste?'} text={'Como podemos ajudar?'} styleText={{color:'#009373'}}/>
            <div className="flex flex-col items-center md:justify-between md:flex md:flex-row">
                <a href="#">
                    <ActionCard className="ml-4" textStyle={{color:"#009373"}} text={'Gerar 2° via da fatura'} icon={<Image alt="icone de boleto" src={logoBoleto} />}/>
                </a>
                <a>
                     <ActionCard textStyle={{color:"#009373"}} text={'Problemas de conexão'} icon={<Image alt="icone de conexao" src={conexao} />}/>
                </a>
                <a>
                    <ActionCard textStyle={{color:"#009373"}} text={'Teste sua velocidade!'} icon={<Image alt="icone de velocidade" width={50} src={velocidade}  />}/>
                </a>
               <a>
                 <ActionCard textStyle={{color:"#009373"}} text={'Upgrade de plano'} icon={<Image alt="icone de conexao" width={50} src={antena}  />}/>
               </a>
               <a>
                 <ActionCard textStyle={{color:"#009373"}} text={'Canal do WhatsApp'} icon={<Megaphone size={48} fill="#009373" stroke="transparent" />}/>
               </a>

            </div>
            </div>

        </Section>
    )
}