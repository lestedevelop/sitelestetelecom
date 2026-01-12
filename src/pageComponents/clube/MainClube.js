import Image from "next/image";
import svg1 from "@/assets/icons/promo1.svg";
import promo3 from "@/assets/icons/promo3.svg";
import parceiro1 from "@/assets/parceiro1.png";
import parceiro2 from "@/assets/parceiro2.png";
import parceiro3 from "@/assets/parceiro3.png";
import parceiro4 from "@/assets/parceiro4.png";
import parceiro5 from "@/assets/parceiro5.png";
import parceiro6 from "@/assets/parceiro6.png";
import parceiro7 from "@/assets/parceiro7.png";
import parceiro8 from "@/assets/parceiro8.png";
import parceiro9 from "@/assets/parceiro9.png";
import bannerClube from "@/assets/bannerclube2.png";
import bannerClubeMobile from "@/assets/clube-mobile.png";
import CardApp from "@/components/cards/CardApp";

export default function MainClube() {
    return (
        <div>
            <section className={""}>
                <div className={"container"}>
                    <div className={"flex gap-x-4 py-8 justify-between items-start md:items-center"}>
                        <div className={"max-w-150 md:pt-24"}>
                            <h4 className={"text-primary text-[21px] md:text-4xl font-bold"}>Mais de 400 parceiros no Estado e em e-commerces</h4>
                            <p className={"text-graylight text-sm md:text-[25px] py-2"}>Com o Leste Clube, você garante descontos e vantagens em <span className={"font-bold"}>alimentação, viagens, cinemas,</span> eletrônicos, saúde, cuidados com a casa e seu pet, e muito mais!</p>
                        </div>
                        <Image src={svg1} alt={""} className={"md:w-[252px] w-22"} />
                    </div>
                    {/*Parceiros */}
                    <div className={"flex flex-wrap justify-center gap-1 md:gap-4"}>
                        <div className={"border-[#eeeeee] border w-37 flex items-center justify-center"}>
                            <Image className={""} src={parceiro1} alt={""} />
                        </div>
                        <div className={"border-[#eeeeee] border w-37 flex items-center justify-center"}>
                            <Image className={""} src={parceiro2} alt={""} />
                        </div>
                        <div className={"border-[#eeeeee] border w-37 flex items-center justify-center"}>
                            <Image className={""} src={parceiro3} alt={""} width={84} height={74} />
                        </div>
                        <div className={"border-[#eeeeee] border w-37 flex items-center justify-center"}>
                            <Image className={""} src={parceiro4} alt={""} width={118} />
                        </div>
                        <div className={"border-[#eeeeee] border w-37 flex items-center justify-center"}>
                            <Image className={""} src={parceiro5} alt={""} width={112} />
                        </div>
                        <div className={"border-[#eeeeee] border w-37 flex items-center justify-center"}>
                            <Image className={""} src={parceiro6} alt={""} width={126} />
                        </div>
                        <div className={"border-[#eeeeee] border w-39 flex items-center justify-center"}>
                            <Image className={""} src={parceiro7} alt={""} width={159} />
                        </div>
                        <div className={"border-[#eeeeee] border w-37 flex items-center justify-center"}>
                            <Image className={""} src={parceiro8} alt={""} width={105} />
                        </div>
                        <div className={"border-[#eeeeee] border w-37 flex items-center justify-center"}>
                            <Image className={""} src={parceiro9} alt={""} width={105} />
                        </div>
                    </div>
                </div>
            </section>
            <section className={"py-6 md:py-12"}>
                <div className={"container"}>
                    <h4>Para utilizar os benefícios do Leste Clube, é fácil!</h4>
                    <div className={"flex items-center justify-between gap-x-4"}>
                        <div className={"w-[30%] md:w-1/2"}>
                            <Image src={bannerClube} alt={""}  className={"rounded-3xl bg-darkgreen w-full max-h-[463px] hidden mb:block"} />
                            <Image src={bannerClubeMobile} alt={""}  className={"rounded-xl bg-darkgreen w-full md:hidden"} />
                        </div>
                        <div className={"w-[70%] md:w-1/2 flex flex-col gap-2 md:gap-8"}>
                            <div className={"flex-col bg-light w-full p-1 md:p-4 rounded-xl border-gray-200 border "}>
                                <div className={"flex gap-x-1 md:gap-x-4"}>
                                    <div className={"after:content-['1'] md:w-[49px] w-[29px] h-[29px] md:h-[49px] after:z-50 after:text-[17px] relative after:text-darkgreen after:absolute after:font-bold after:md:text-4xl after:left-[50%] after:translate-x-[-50%] after:bottom-[50%] after:translate-y-[50%] "} >
                                        <Image src={promo3}  className={"w-[29px] md:w-[49px]"}  alt={""} />
                                    </div>
                                    <div className={"w-[75%]"}>
                                        <h4 className={"text-darkgreen font-bold text-sm md:text-[25px]"}>Acesse o app Leste Central com seu login e senha.</h4>
                                        <p className={"text-graylight text-base hidden md:block"}>Para o primeiro acesso, clique em “Primeiro acesso”, preencha os seus dados para receber a senha  via e-mail cadastrado.</p>
                                        <CardApp central={true} className={"bg-transparent! text-darkgreen! p-0!"} />
                                    </div>
                                </div>
                            </div>
                            <div className={"flex-col bg-light w-full p-1 md:p-4 rounded-xl border-gray-200 border "}>
                                <div className={"flex gap-x-1 md:gap-x-4"}>
                                    <div className={"after:content-['2'] md:w-[49px] w-[29px] h-[29px] md:h-[49px] after:z-50 after:text-[17px] relative after:text-darkgreen after:absolute after:font-bold after:md:text-4xl after:left-[50%] after:translate-x-[-50%] after:bottom-[50%] after:translate-y-[50%] "} >
                                        <Image src={promo3}  className={"w-[29px] md:w-[49px]"} alt={""} />
                                    </div>
                                    <h4 className={"text-darkgreen font-bold text-sm md:text-[25px]"}>Vá na aba <span className={"text-[#C3E02F]"}>“Clube”.</span>
                                    </h4>
                                </div>
                            </div>
                            <div className={"flex-col bg-light w-full p-1 md:p-4 rounded-xl border-gray-200 border "}>
                                <div className={"flex gap-x-1 md:gap-x-4"}>
                                    <div className={"after:content-['3'] md:w-[49px] w-[29px] h-[29px] md:h-[49px] after:z-50 after:text-[17px] relative after:text-darkgreen after:absolute after:font-bold after:md:text-4xl after:left-[50%] after:translate-x-[-50%] after:bottom-[50%] after:translate-y-[50%] "} >
                                        <Image src={promo3}  className={"w-[29px] md:w-[49px]"} alt={""} />
                                    </div>
                                    <h4 className={"text-darkgreen font-bold text-sm md:text-[25px]"}>Pronto! Agora é só aproveitar.</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}