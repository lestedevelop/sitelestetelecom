import ActionButton from "@/components/Buttons/ActionButton";
import Image from "next/image";
import coracao from "@/assets/coracao.png";
import coracaoVerde from "@/assets/coracaoverde.png";
import chapeu from "@/assets/chapeu.png";
import chapeuVerde from "@/assets/chapeuverde.png";
import skeelo from "@/assets/skeelo.png";
import skeeloVerde from "@/assets/skeeloverde.png";

export default function CardLesteMovel() {
    return (
        <section>
            <div className={``}>
                <div
                    className="relative container bg-primary px-8 py-12 md:min-h-70 md:rounded-3xl overflow-hidden flex flex-col md:flex-row">
                    <div
                        className="relative z-10 flex flex-col justify-center md:items-start items-center max-w-full text-white md:max-w-[50%]">
                        <h1 className="text-center md:text-left text-[32px] font-bold mb-6">
                            O Leste Móvel tem muito&nbsp;mais pra você!
                        </h1>
                        <ActionButton router={"movel/chip"} className={"hidden md:block"}>
                            Onde comprar!
                        </ActionButton>
                    </div>
                    <div className={"flex flex-col-reverse md:flex-row items-center justify-between gap-y-4"}>
                        <div
                            className={"flex md:block items-center gap-x-6 w-full min-h-16 px-4 bg-light md:bg-transparent py-2 rounded-xl"}>
                            <Image src={coracao} alt={""} className={"hidden md:block"}/>
                            <Image src={coracaoVerde} alt={""} className={" md:hidden w-[41px] h-[37px]"}/>
                            <p className={"text-md md:py-4 font-bold text-darkgreen md:text-light"}>Orientação médica
                                ilimitada por chat</p>
                        </div>
                        <div
                            className={"flex md:block items-center gap-x-6 w-full min-h-16 px-4 bg-light md:bg-transparent rounded-xl"}>
                            <Image src={chapeu} alt={""} className={"hidden md:block"}/>
                            <Image src={chapeuVerde} alt={""} className={"md:hidden w-[41px] h-[28px]"}/>
                            <p className={"text-md md:py-4 font-bold text-darkgreen md:text-light"}>Portal EAD grátis
                                cursos certificados</p>
                        </div>
                        <div
                            className={"flex md:block items-center gap-x-6 w-full min-h-16 px-4 bg-light md:bg-transparent  rounded-xl"}>
                            <Image src={skeelo} alt={""} className={"hidden md:block"}/>
                            <Image src={skeeloVerde} alt={""} className={"md:hidden w-[38px] h-[43px]"}/>
                            <p className={"text-md md:py-4 font-bold text-darkgreen md:text-light"}>Aplicativo Skeelo
                                Light</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}