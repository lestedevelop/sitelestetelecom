import { Title } from "@/components/typoraphy";
import Section from "@/components/layout/Section";
import TitleAndSubtitleSection from "@/components/listItems/TitleAndSubtitleSection";
import ActionCard from "@/components/listItems/ActionCard";
import logoBoleto from "@/assets/segundaVia.svg"
import controle from "@/assets/Controle.svg"
import antena from "@/assets/antena.svg"
import conexao from "@/assets/conexao.svg"
import boleto from "@/assets/Boleto.svg"
import Image from "next/image";
import velocidade from "@/assets/Velocidade.svg"
import beneficiosAtendimento from "@/assets/beneficiosLesteAtendimento.png"
import atendimentoIcon from "@/assets/AtendimentoHeadphone.svg"
import beneficiosGamer from "@/assets/beneficiosGamer.png"
import lestemovel from "@/assets/leste_movel.jpg"
import empresaImg from "@/assets/para_sua_empresa.jpg"
import lesteClube from "@/assets/leste_clube.jpg"
import ActionCardWrapper from "@/components/listItems/ActionCardWrapper";
import CardProduto from "@/components/cards/CardImageWrapper";



export default function BeneficiosSection() {
    const mock = [
        {
            title: 'Leste Móvel',
            icon: lestemovel,
            primaryText: 'Chegou o chip da Leste!',
            secondaryText: 'Onde comprar'
        },
        {
            title: 'Para a sua empresa',
            icon: empresaImg,
            primaryText: 'Mais que internet, é parceria no seu negócio',
            secondaryText: 'Saiba mais'
        },
        {
            title: 'Leste Clube',
            icon: lesteClube,
            primaryText: 'Descontos exclusivos em lojas e sites',
            secondaryText: 'Saiba mais'
        },
    ]


    return (
        <Section>
            <TitleAndSubtitleSection
                title={'Benefícios de ser Leste!'}
                text={'Confira os nossos principais benefícios'}
                styleText={{ color: 'rgb(0 32 25 / 98%)' }} />

            <div className="flex items-center ">
                <div className="flex flex-col">
                    <ActionCard className={'w-60'} textStyle={{ fontSize: 20 }} text={'Internet mais rápida'}
                        icon={<Image alt="icone de conexao" width={50} src={velocidade} />} />
                    <div className=" w-[290px] px-[24px]">
                        <p className="text-[#045442] font-medium text-md">
                            Nas cidades de Niterói, <br />Maricá, Itaboraí e Rio Bonito*
                        </p>

                        <p className="text-[#045442] mt-3 font-light text-[12px]">
                            Segundo o Prêmio MelhorPlano.net de 2024
                        </p>

                    </div>
                </div>

                <ActionCardWrapper
                    className={'mb-3'}
                    title={'Suporte técnico 24h'}
                    icon={atendimentoIcon}
                    primaryText={`Via telefone, WhatsApp, Instagram, Messenger Twitter e Telegram.`}
                />
                <div className="w-[600px] max-w-[600px]">
                    <Image
                        src={beneficiosAtendimento}
                        alt="Atendimento"
                        width={600}

                        className="max-w-[500px] rounded-lg"
                    />
                </div>

            </div>
            <div className="flex items-center  mt-10">


                <div className="w-[600px] max-w-[600px] mr-10">
                    <Image
                        src={beneficiosGamer}
                        alt="Atendimento"
                        width={600}

                        className="max-w-[500px] rounded-lg"
                    />
                </div>

                <div className="flex flex-col">
                    <ActionCard className={'w-60'} textStyle={{ fontSize: 20 }} text={'Melhor ping'}
                        icon={<Image alt="icone de controle" width={50} src={controle} />} />
                    <div className=" w-[290px] px-[24px]">
                        <p className="text-[#045442] font-light text-md">
                            Na Leste você tem mais<br />
                            estabilidade em jogos<br /> online.
                        </p>



                    </div>
                </div>

                <ActionCardWrapper
                    className={'mb-3'}
                    width={40}
                    title={'Suporte técnico 24h'}
                    icon={boleto}
                    primaryText={`Via telefone, WhatsApp, Instagram, Messenger Twitter e Telegram.`}
                />


            </div>

            <div className="mt-25 flex flex-col md:flex-row justify-between gap-10">
                {mock.map(item => (
                    <CardProduto key={item.title} title={item.title} description={item.primaryText} size="lg" imageSrc={item.icon} />
                ))}

            </div>
        </Section>
    )
}