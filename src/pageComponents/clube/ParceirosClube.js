import Image from "next/image";
import svg1 from "@/assets/icons/promo1.svg";
import parceiro1 from "@/assets/cinemark.svg";
import parceiro2 from "@/assets/dominos.svg";
import parceiro3 from "@/assets/hering.svg";
import parceiro5 from "@/assets/sams.svg";
import parceiro4 from "@/assets/buser.svg";
import link from "@/assets/icons/link.svg";
import promo3 from "@/assets/icons/promo3.svg";


export default function ParceirosClube() {
    return (
        <section className={""}>
            <div className={"container"}>
                <div className={"flex gap-x-4 py-8 justify-between items-start md:items-center"}>
                    <div className={"max-w-150 md:pt-24"}>
                        <h4 className={"text-primary text-[21px] md:text-4xl font-bold"}>Mais de 400 parceiros no Estado
                            e em e-commerces</h4>
                        <p className={"text-graylight text-sm md:text-[25px] py-2"}>Com o Leste Clube, você garante
                            descontos e vantagens em <span
                                className={"font-bold"}>alimentação, viagens, cinemas,</span> eletrônicos, saúde,
                            cuidados com a casa e seu pet, e muito mais!</p>
                    </div>
                </div>
                {/*Parceiros */}
                <div className={"flex flex-wrap justify-center gap-4 md:gap-12"}>
                    <div
                        className={"border-[#eeeeee] border relative md:w-65 md:h-65 w-20 h-20 flex items-center justify-center"}>
                        <div className={"absolute right-[-10%] bottom-[-10%]"}>
                            <div
                                className={"after:content-['50%'] after:z-50 after:text-[10px] relative after:text-darkgreen after:absolute after:font-bold after:md:text-xl after:left-[50%] after:translate-x-[-50%] after:bottom-[50%] after:translate-y-[50%] "}>
                                <Image src={promo3} className={"w-[29px] md:w-[80px]"} alt={""}/>
                            </div>
                        </div>
                        <Image className={""} src={parceiro1} alt={""} className={"w-10 md:w-25"}/>
                    </div>
                    <div
                        className={"border-[#eeeeee] border relative md:w-65 md:h-65 w-20 h-20 flex items-center justify-center"}>
                        <div className={"absolute right-[-10%] bottom-[-10%]"}>
                            <div
                                className={"after:content-['30%'] after:z-50 after:text-[10px] relative after:text-darkgreen after:absolute after:font-bold after:md:text-xl after:left-[50%] after:translate-x-[-50%] after:bottom-[50%] after:translate-y-[50%] "}>
                                <Image src={promo3} className={"w-[29px] md:w-[80px]"} alt={""}/>
                            </div>
                        </div>
                        <Image className={""} src={parceiro2} alt={""} className={"w-10 md:w-25"}/>
                    </div>
                    <div
                        className={"border-[#eeeeee] border relative md:w-65 md:h-65 w-20 h-20 flex items-center justify-center"}>
                        <div className={"absolute right-[-10%] bottom-[-10%]"}>
                            <div
                                className={`after:content-["Até_30%"] after:z-50 after:text-[7px] relative after:text-darkgreen after:absolute after:font-bold after:md:text-xl after:left-[50%] after:translate-x-[-40%] after:bottom-[50%] after:translate-y-[50%]`}>
                                <Image src={promo3} className={"w-[29px] md:w-[80px]"} alt={""}/>
                            </div>
                        </div>
                        <Image className={""} src={parceiro3} alt={""} className={"w-10 md:w-25"}/>
                    </div>
                    <div
                        className={"border-[#eeeeee] border relative md:w-65 md:h-65 w-20 h-20 flex items-center justify-center"}>
                        <div className={"absolute right-[-10%] bottom-[-10%]"}>
                            <div
                                className={"after:content-[\"Até_30%\"] after:z-50 after:text-[7px] relative after:text-darkgreen after:absolute after:font-bold after:md:text-xl after:left-[50%] after:translate-x-[-50%] after:bottom-[50%] after:translate-y-[50%] "}>
                                <Image src={promo3} className={"w-[29px] md:w-[80px]"} alt={""}/>
                            </div>
                        </div>
                        <Image className={""} src={parceiro4} alt={""} className={"w-10 md:w-25"}/>
                    </div>
                    <div
                        className={"border-[#eeeeee] border relative md:w-65 md:h-65 w-20 h-20 flex items-center justify-center"}>
                        <div className={"absolute right-[-10%] bottom-[-10%]"}>
                            <div
                                className={"after:content-['compre_&ganhe'] after:text-center after:z-50 after:text-[5px] relative after:text-darkgreen after:absolute after:font-bold after:md:text-sm after:left-[50%] after:translate-x-[-50%] after:bottom-[50%] after:translate-y-[50%] "}>
                                <Image src={promo3} className={"w-[29px] md:w-[80px]"} alt={""}/>
                            </div>
                        </div>
                        <Image className={""} src={parceiro5} alt={""} className={"w-10 md:w-25"}/>
                    </div>
                </div>
                <div className={"flex flex-col w-full items-center gap-y-4 py-8"}>
                    <p className={"text-dark text-[8px] pt-8 md:text-sm text-center"}>*Ofertas disponíveis na data de consulta em 09/10/2024</p>
                   <div className={""}>
                       <a className={"bg-[#C3E02F] md:text-2xl text-base flex max-w-90 px-6 font-bold text-darkgreen justify-around py-2 rounded-full"}  href={"https://onelink.to/lestecentral"}>Garanta seu desconto</a>
                   </div>
                </div>
            </div>
        </section>
    )
}