import Image from "next/image";
import ipicon from "@/assets/icons/ip.png";
import image1 from "@/assets/cardcorporate3.png"
import image2 from "@/assets/cardcorporate2.png"
import image3 from "@/assets/cardcorporate1.png"

export default function SectionSolutionsCorporate() {
    return (
        <section className={"bg-corporate"}>
            <div className={"container pt-24 pb-36  mx-auto flex flex-col items-center gap-y-4 pt-6"}>
                <h3 className={"text-[18px] md:text-[35px] text-white py-8 text-center "}>Confira as <span
                    className={"font-bold"}>principais soluções de rede</span> desenvolvidas para impulsionar o seu
                    negócio no melhor caminho!</h3>

                <div className={"flex flex-wrap w-full items-center md:gap-x-2 justify-center md:justify-between"}>
                    <div className={"relative h-125"}>
                        <div className={"bg-white w-70 md:w-80 h-110 md:h-125 rounded-2xl"}>
                            <div className={"relative"}>
                                <p className={"absolute top-[80%] left-4 font-bold flex gap-x-4 items-start text-[25px]"}>
                                    <Image src={ipicon} alt={""} width={26}/> Link IP
                                </p>
                                <Image src={image1} alt={""} className={"rounded-2xl"}/>
                            </div>
                            <div className={"p-4"}>
                                <p className={"text-sm font-semibold md:text-[20px] text-dark"}>Internet ideal para
                                    Ideal para empresas que precisam de alto desempenho, com suporte a FTTx, Ponto a Ponto e redes metro. Ultilizamos tecnologia Giga Ethernet, garantindo sincronismo, flexibilidade, alta capacidade e velocidade.</p>
                            </div>
                            <div className={"pl-2 pt-8 md:hidden"}>
                                <a href={"#contato"}
                                   className={`px-20 py-3 font-semibold text-md md:text-2xl text-dark text-center rounded-2xl bg-[#64f7d7] hover:text-white hover:bg-primary transition-all duration-200`}>
                                    Fale Conosco!
                                </a>
                            </div>
                        </div>
                        <div className={"py-8 w-full hidden md:block"}>
                            <a href={"#contato"}
                               className={`px-20 py-3 font-semibold text-md md:text-2xl text-dark border text-center rounded-2xl bg-[#64f7d7] hover:text-white hover:bg-primary transition-all duration-200`}>
                                Fale Conosco!
                            </a>
                        </div>
                    </div>
                    <div className={"relative h-125"}>
                        <div className={"bg-white w-70 md:w-80 h-110 md:h-125 rounded-2xl"}>
                            <div className={"relative"}>
                                <p className={"absolute top-[80%] left-4 font-bold flex gap-x-4 items-start text-[25px]"}>
                                    <Image src={ipicon} alt={""} width={26}/> Hotspot
                                </p>
                                <Image src={image2} alt={""} className={"rounded-2xl"}/>
                            </div>
                            <div className={"p-4"}>
                                <p className={"text-sm font-semibold md:text-[20px] text-dark"}>Internet ideal para
                                    eventos, com sincronismo, flexibilidade e estabilidade. Garanta qualidade com nosso
                                    Link IP e Hotspot Leste Corporate.</p>
                            </div>
                            <div className={"pl-2 pt-8 md:hidden"}>
                                <a href={"#contato"}
                                   className={`px-20 py-3 font-semibold text-md md:text-2xl text-dark text-center rounded-2xl bg-[#64f7d7] hover:text-white hover:bg-primary transition-all duration-200`}>
                                    Fale Conosco!
                                </a>
                            </div>
                        </div>
                        <div className={"py-8 w-full hidden md:block"}>
                            <a href={"#contato"}
                               className={`px-20 py-3 font-semibold text-md md:text-2xl text-dark border text-center rounded-2xl bg-[#64f7d7] hover:text-white hover:bg-primary transition-all duration-200`}>
                                Fale Conosco!
                            </a>
                        </div>
                    </div>
                    <div className={"relative h-125"}>
                        <div className={"relative h-125"}>
                            <div className={"bg-white w-70 md:w-80 h-110 md:h-125 rounded-2xl"}>
                                <div className={"relative"}>
                                    <p className={"absolute top-[80%] left-4 font-bold flex gap-x-4 items-start text-[25px]"}>
                                        <Image src={ipicon} alt={""} width={26}/> Eventos
                                    </p>
                                    <Image src={image3} alt={""} className={"rounded-2xl"}/>
                                </div>
                                <div className={"p-4"}>
                                    <p className={"text-sm font-semibold md:text-[20px] text-dark"}>Wi-fi Mesh com login
                                        e senha, seguro, fácil e em conformidade com a LGPD. ideal para comércios,
                                        praças e shoppings.</p>
                                </div>
                                <div className={"pl-2 pt-8 md:hidden"}>
                                    <a href={"#contato"}
                                       className={`px-20 py-3 font-semibold text-md md:text-2xl text-dark text-center rounded-2xl bg-[#64f7d7] hover:text-white hover:bg-primary transition-all duration-200`}>
                                        Fale Conosco!
                                    </a>
                                </div>
                            </div>
                            <div className={"py-8 w-full hidden md:block"}>
                                <a href={"#contato"}
                                   className={`px-20 py-3 font-semibold text-md md:text-2xl text-dark border text-center rounded-2xl bg-[#64f7d7] hover:text-white hover:bg-primary transition-all duration-200`}>
                                    Fale Conosco!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}