'use client'
import Image from "next/image";
import suporteIcon from "@/assets/icons/suporte.png";
import cgr from "@/assets/icons/cgr.png"
import cache from "@/assets/icons/cache.png";
import backoffice from "@/assets/icons/backoffice.png";
import backbone from "@/assets/icons/backbone.png";
import mapaConexao from "@/assets/mapacorporate.png"

import equinix from "@/assets/equinix.png"
import lumem from "@/assets/lumem.png"
import akami from "@/assets/akami.png"
import telecom from "@/assets/telecom.png"
import { scrollToSection } from "@/utils/scrollToSection";

export default function MidSectionCorporate() {

    return (
        <>
            <section className={"pb-12"}>
                <div className={"container text-center"}>
                    <h3 className={"text-black font-semibold text-[23px] md:text-[39px] py-8"}>Destaques que fazem a
                        diferença</h3>
                    <div
                        className={"flex flex-col md:flex-row flex-wrap items-center justify-center gap-y-8 md:items-start md:justify-between text-left md:text-center"}>
                        <div className={"flex flex-col gap-y-4 items-center  px-4 md:px-0 md:w-48"}>
                            <div className={"flex md:flex-col  items-center justify-start w-full gap-x-4"}>
                                <Image src={suporteIcon} alt={""}/>
                                <p className={"text-[17px] md:text-[18px] text-black font-bold"}>Suporte 24hr</p>
                            </div>
                            <p className={"text-sm text-[13px] text-dark"}>Atendimento especializado disponível 24 horas
                                por dia, com agilidade, qualidade e eficiência na solução de qualquer necessidade.</p>
                        </div>
                        <div className={"flex flex-col gap-y-4 items-center  px-4 md:px-0 md:w-48"}>
                            <div className={"flex md:flex-col  items-center justify-start w-full gap-x-4"}>
                                <Image src={cgr} alt={""}/>
                                <p className={"text-[17px] md:text-[18px] text-black font-bold"}>CGR</p>
                            </div>
                            <p className={"text-sm text-[13px] text-dark"}>Centro de Gerenciamento de Rede exclusivo
                                para clientes corporativos, com suporte técnico completo e monitoramento proativo.</p>
                        </div>
                        <div className={"flex flex-col gap-y-4 items-center  px-4 md:px-0 md:w-48"}>
                            <div className={"flex md:flex-col  items-center justify-start w-full gap-x-4"}>
                                <Image src={cache} alt={""}/>
                                <p className={"text-[17px] md:text-[18px] text-black font-bold"}>Cache de conteúdo</p>
                            </div>
                            <p className={"text-sm text-[13px] text-dark"}>Os maiores caches de conteúdo como Google,
                                Netflix, Meta, Facebook e Globo estão presentes em nossos CPDs e Data Centers. E temos
                                presença física no Teleporto RJ, Equinix e Level 3.</p>
                        </div>
                        <div className={"flex flex-col gap-y-4 items-center  px-4 md:px-0 md:w-48"}>
                            <div className={"flex md:flex-col  items-center justify-start w-full gap-x-4"}>
                                <Image src={backoffice} alt={""}/>
                                <p className={"text-[17px] md:text-[18px] text-black font-bold"}>BackOffice</p>
                            </div>
                            <p className={"text-sm text-[13px] text-dark"}>Extremamente qualificados (CREA, CFT). Com
                                uma estrutura óptica robusta e com ferramentas avançadas para análises físicas e
                                lógicas.</p>
                        </div>
                        <div className={"flex flex-col gap-y-4 items-center  px-4 md:px-0 md:w-48"}>
                            <div className={"flex md:flex-col  items-center justify-start w-full gap-x-4"}>
                                <Image src={backbone} alt={""}/>
                                <p className={"text-[17px] md:text-[18px] text-black font-bold"}>Backbone</p>
                            </div>
                            <p className={"text-sm md:text-[13px] text-dark"}>Conexões internacionais nos principais
                                PTTs do Brasil e do exterior, com rotas redundantes que garantem máxima conectividade e
                                desempenho.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={"bg-[#f1fffb] pb-12"}>
                <div className={"container flex flex-col items-center gap-y-4"}>
                    <h3 className={"text-black font-semibold text-[23px] md:text-[39px] text-center pt-4"}>Conexões que
                        possuímos</h3>
                    <Image src={mapaConexao} alt={"MAPA"}/>

                    <div>
                        <h3 className={"text-black font-semibold text-[23px] md:text-[39px] text-center py-4"}>Conexões
                            com parceiros</h3>
                    </div>
                    <div className={"flex flex-wrap items-center justify-between md:gap-8 pb-8"}>
                            <div className={"w-[180px] h-[102px] scale-75 md:scale-100 flex items-center justify-center rounded-xl m-auto bg-corporate"}>
                                <Image src={equinix} alt={""} className={""} />
                            </div>
                            <div className={"w-[180px] h-[102px] scale-75 md:scale-100 flex items-center justify-center rounded-xl m-auto bg-corporate"}>
                                <Image src={lumem} alt={""} className={""} />
                            </div>
                            <div className={"w-[180px] h-[102px]  scale-75 md:scale-100 flex items-center justify-center rounded-xl m-auto bg-corporate"}>
                                <Image src={akami} alt={""} className={""} />
                            </div>
                            <div className={"w-[180px] h-[102px] scale-75 md:scale-100  flex items-center justify-center rounded-xl m-auto bg-corporate"}>
                                <Image src={telecom} alt={""} className={""} />
                            </div>
                    </div>
                   <div className={""}>
                       <button onClick={() => scrollToSection("contato-corporate", 80)}
                          className={`py-3 px-12 font-semibold text-md md:text-2xl text-dark text-center rounded-xl bg-[#64f7d7] hover:text-white hover:bg-primary transition-all duration-200`}>
                           Fale Conosco!
                       </button>
                   </div>
                </div>
            </section>
        </>
    )
}