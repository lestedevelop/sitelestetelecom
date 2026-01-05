import Image from "next/image";
import CardApp from "@/components/cards/CardApp";
import arrow from "@/assets/arrowright.svg";
import bannerSuporteApp from "@/assets/lestesuporte.png";
import bannerCentral from "@/assets/lestecentral.png";

export default function SectionApp() {
    return (
        <div className={"w-full"}>
            <section className="bg-lighter">
               <div className={"container w-full flex flex-col md:flex-row py-12 md:py-0 items-center justify-between min-h-screen md:h-150 "}>
                   <div className="text-primary">
                       <CardApp suporte/>

                       <div className="flex flex-col gap-y-6 py-8">
                           <h3 className={"text-[40px] font-bold"}>Problema de conexão?</h3>
                           <h4 className={"text-[25px]"}>Conheça o <span className={"font-bold"}>Leste Suporte!</span></h4>
                           <p className={"text-xl font-bold"}>
                               Resolva problema como:
                           </p>
                       </div>
                       <ul className="flex flex-col gap-y-8">
                           <li className="flex items-center gap-x-4">
                               <div className={"rounded-full bg-darkgreen p-2 max-w-[34px]"}>
                                   <Image src={arrow} alt={'icon'} className={"ml-1"} width={20} />
                               </div>
                               <p className={"text-xl"}>Problemas com a cobertura Wi-Fi</p>
                           </li>
                           <li className="flex items-center gap-x-4">
                               <div className={"rounded-full bg-darkgreen p-2 max-w-[34px]"}>
                                   <Image src={arrow} alt={'icon'} className={"ml-1"} width={20} />
                               </div>
                               <p className={"text-xl"}>Vídeos bufferizando</p>
                           </li>
                           <li className="flex items-center gap-x-4">
                               <div className={"rounded-full bg-darkgreen p-2 max-w-[34px]"}>
                                   <Image src={arrow} alt={'icon'} className={"ml-1"} width={20} />
                               </div>
                               <p className={"text-xl"}>Lentidão</p>
                           </li>
                       </ul>

                   </div>
                   <div className="md:max-w-1/2 flex mt-10 md:mt-0 flex-col gap-y-8">
                       <Image alt={"banner"} src={bannerSuporteApp} width={370}/>
                       <CardApp download link={"https://onelink.to/lestesuporte"} />
                   </div>
               </div>
            </section>
            <section className="bg-primary">
                <div className={"container  w-full flex flex-col md:flex-row py-12 items-center justify-between min-h-screen md:h-150"}>
                    <div className="text-light">
                        <CardApp central/>

                        <div className="flex flex-col gap-y-6 py-8">
                            <h3 className={"text-[40px] font-bold"}>Boleto na palma da sua mão.</h3>
                            <h4 className={"text-[25px]"}>O app <span className={"font-bold"}>Leste Central</span> é muito
                                <span className={"font-bold"}> prático e fácil</span></h4>
                            <p className={"text-xl font-bold"}>
                                Nele você consegue ter acesso a:
                            </p>
                        </div>
                        <ul className="flex flex-col gap-y-8">
                            <li className="flex items-center gap-x-4">
                                <div className={"rounded-full bg-darkgreen p-2 max-w-[34px]"}>
                                    <Image src={arrow} alt={'icon'} className={"ml-1"} width={20} />
                                </div>
                                <p className={"text-xl"}>2° via do seu boleto</p>
                            </li>
                            <li className="flex items-center gap-x-4">
                                <div className={"rounded-full bg-darkgreen p-2 max-w-[34px]"}>
                                    <Image src={arrow} alt={'icon'} className={"ml-1"} width={20} />
                                </div>
                                <p className={"text-xl"}>Avisos de manutenção
                                    e ocorrências</p>
                            </li>
                            <li className="flex items-center gap-x-4">
                                <div className={"rounded-full bg-darkgreen p-2 max-w-[34px]"}>
                                    <Image src={arrow} alt={'icon'} className={"ml-1"} width={20} />
                                </div>
                                <p className={"text-xl"}>Todas as formas de contato e redes sociais da Leste</p>
                            </li>
                        </ul>

                    </div>
                    <div className="md:max-w-1/2 flex mt-10 md:mt-0 flex-col gap-y-8">
                        <Image alt={"banner"} src={bannerCentral} width={370}/>
                        <CardApp download link={"https://onelink.to/lestecentral"}/>
                    </div>
                </div>
            </section>

        </div>
    )
}