import AppBarMovel from "@/pageComponents/movel/AppBarMovel"
import SectionMovelPlan from "@/pageComponents/movel/SectionMovelPlans";
import BannerMovel from "@/pageComponents/movel/BannerMovel";
import CardLesteMovel from "@/pageComponents/movel/CardLesteMovel";
import imagemMovel from "@/assets/5g.png";
import playstore from "@/assets/playstore.png";
import appstore from "@/assets/appstoreverde.png";
import piechart from "@/assets/icons/piechart.svg";
import dollar from "@/assets/icons/dollar.svg";
import mais from "@/assets/icons/mais.svg";
import shield from "@/assets/icons/shield.svg";
import Image from "next/image";
import FooterMovel from "@/pageComponents/movel/FooterMovel";

export default function Movel() {


    return (
        <div className="min-h-full">

            <AppBarMovel/>
            <BannerMovel/>
            <SectionMovelPlan/>
            <CardLesteMovel/>
            <section className={"py-12 md:pt-24 md:bg-[url('/5g.png')] bg-no-repeat bg-bottom md:bg-right"}>
                <div className={"container flex flex-col md:flex-row justify-between"}>
                    <div className={"w-full md:w-[60%]"}>
                        <div className={""}>
                            <h3 className={"text-darkgreen w-10/12 text-2xl md:text-[45px] font-bold"}>O controle na
                                palma da sua mão!</h3>
                            <p className={"text-md md:text-[32px] text-primary"}>Baixe o <span className={"font-bold"}>App Leste Móvel</span>
                            </p>
                        </div>
                        <div className={"flex items-center h-24 md:w-96 justify-between"}>
                            <div className={"flex items-center gap-x-4 w-48"}>
                                <Image className={"w-[29px] h-[36px]"} src={playstore} alt={"playstore"}/>
                                <p className={"text-darkgreen"}>Baixar no<span className={"font-bold"}><br/> Play Store</span>
                                </p></div>
                            <div className={"flex items-center gap-x-4 w-48"}>
                                <Image className={"w-[29px] h-[36px]"} src={appstore} alt={"appstore"}/>
                                <p className={"text-darkgreen"}>Baixar no <span
                                    className={"font-bold"}><br/>App Store</span>
                                </p>
                            </div>
                        </div>
                        <div className={"max-w-screen md:hidden  overflow-hidden"}>
                            <Image src={imagemMovel} alt={""} className={""}/>
                        </div>
                        <div className={"flex flex-wrap gap-4 items-center justify-center md:justify-start"}>
                            <div className={"text-dark"}>
                                <div className={"bg-white rounded-lg p-4 w-65 h-30"}>
                               <span className={"flex"}>
                                    <Image src={dollar} alt={""} width={16}/>
                                    <h4 className={"font-bold text-primary text-xl ml-2"}>Fatura</h4>
                               </span>
                                    <p className={"text-xs pt-2"}>Faturas Com o aplicativo da Leste você consegue
                                        renovar o seu plano com um só clique.</p>
                                </div>
                            </div>
                            <div className={"text-dark"}>
                                <div className={"bg-white rounded-lg p-4 w-65 h-30"}>
                               <span className={"flex"}>
                                    <Image src={mais} alt={""} width={16}/>
                                    <h4 className={"font-bold text-primary text-xl ml-2"}>Acúmulo de Gigas</h4>
                               </span>
                                    <p className={"text-xs pt-2"}>Gerencie os seus gigas acumulados.</p>
                                </div>
                            </div>
                            <div className={"text-dark"}>
                                <div className={"bg-white rounded-lg p-4 w-65 h-30"}>
                               <span className={"flex"}>
                                    <Image src={shield} alt={""} width={16}/>
                                    <h4 className={"font-bold text-primary text-xl ml-2"}>Segurança</h4>
                               </span>
                                    <p className={"text-xs pt-2"}>Nosso maior foco é na segurança dos seus dados e do
                                        nosso aplicativo.</p>
                                </div>
                            </div>
                            <div className={"text-dark"}>
                                <div className={"bg-white rounded-lg p-4 w-65 h-30"}>
                               <span className={"flex"}>
                                    <Image src={piechart} alt={""} width={16}/>
                                    <h4 className={"font-bold text-primary text-xl ml-2"}>Gerencie seu Plano</h4>
                               </span>
                                    <p className={"text-xs pt-2"}>Mantenha controle do seu plano e acompanhe o seu
                                        consumo, assim como o saldo acumulado.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </section>
            <FooterMovel/>
        </div>
    );
}
