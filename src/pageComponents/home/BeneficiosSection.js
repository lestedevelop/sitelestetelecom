import Image from "next/image";
import Section from "@/components/layout/Section";
import TitleAndSubtitleSection from "@/components/listItems/TitleAndSubtitleSection";
import controle from "@/assets/Controle.svg"
import boleto from "@/assets/Boleto.svg"
import velocidade from "@/assets/Velocidade.svg"
import beneficiosAtendimento from "@/assets/beneficiosLesteAtendimento.png"
import atendimentoIcon from "@/assets/AtendimentoHeadphone.svg"
import beneficiosGamer from "@/assets/beneficiosGamer.png"
import lestemovel from "@/assets/lestemovel.jpg"
import empresaImg from "@/assets/parasuaempresa.jpg"
import lesteClube from "@/assets/leste_clube.jpg"
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
        <Section className={"container"}>
            <TitleAndSubtitleSection
                title={'Benefícios de ser Leste!'}
                text={'Confira os nossos principais benefícios'}
                styleText={{ color: 'rgb(0 32 25 / 98%)' }} />

            <div className="flex flex-col md:flex-row items-center">
              <div className={"flex flex-col md:flex-row-reverse w-full items-center justify-center gap-8 md:gap-12"}>
                  <div className="md:max-w-1/2 rounded-xl">
                      <Image
                          src={beneficiosAtendimento}
                          alt="Atendimento"
                          className="lg:max-w-120 rounded-xl"
                      />
                  </div>
                  <div className="flex flex-col md:w-1/2 w-full">
                      <Image src={atendimentoIcon} width={40} className={"-mt-4"} alt={"icon"} />
                      <h3 className={"text-darkgreen text-lg font-semibold py-2"}>Suporte técnico 24h</h3>
                      <div className="">
                          <p className="text-darkgreen text-base font-medium text-md">
                              Via telefone, WhatsApp, Instagram, Messenger, Twitter e Telegram.
                          </p>
                      </div>
                  </div>
                  <div className="flex flex-col md:w-1/2 w-full">
                      <Image src={velocidade} width={45} alt={"icon"} className={"mt-5"} />
                            <h3 className={"text-darkgreen text-lg font-semibold py-2"}>Internet mais rápida</h3>
                          <div className="">
                              <p className="text-darkgreen text-base font-medium text-md">
                                  Nas cidades de Niterói, <br />Maricá, Itaboraí e&nbsp;Rio&nbsp;Bonito*
                              </p>

                              <p className="text-darkgreen mt-3 font-light text-[10px]">
                                  Segundo o Prêmio MelhorPlano.net de 2024
                              </p>

                          </div>
                  </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center pt-16">
                <div className={"flex flex-col md:flex-row w-full items-center justify-center gap-12"}>
                    <div className="md:max-w-1/2 rounded-xl">
                        <Image
                            src={beneficiosGamer}
                            alt="Atendimento"
                            className="lg:max-w-120 rounded-xl"
                        />
                    </div>
                    <div className="flex flex-col md:w-1/2 w-full">
                        <Image src={controle} width={45} alt={"icon"} />
                        <h3 className={"text-darkgreen text-lg font-semibold py-2"}>Melhor ping</h3>
                        <div className="">
                            <p className="text-darkgreen text-base font-medium text-md">
                                Na Leste você tem mais
                                estabilidade em jogos online.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:w-1/2 w-full">
                        <Image src={boleto} width={30} className={"-mt-4"} alt={"icon"} />
                        <h3 className={"text-darkgreen text-lg font-semibold py-2"}>Sem pegadinhas</h3>
                        <div className="">
                            <p className="text-darkgreen text-base font-medium text-md">
                                Na Leste a nossa única garantia é o bom serviço prestado!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-25 flex flex-col md:flex-row justify-between gap-10">
                {mock.map(item => (
                    <CardProduto key={item.title} title={item.title} description={item.primaryText} imageSrc={item.icon} />
                ))}

            </div>
        </Section>
    )
}