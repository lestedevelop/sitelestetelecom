import planos from "@/assets/planomovel.png"
import ActionButton from "@/components/Buttons/ActionButton";
import Image from "next/image";

export default function BannerMovel() {
    return (
        <section className="mt-[88px] md:mt-[123px] w-full bg-[url('/bannermovel-mobile.png')] md:bg-[url('/bannermovel.png')] bg-cover md:bg-center bg-top  ">
            <div className={"relative container text-light min-h-screen md:min-h-145 grid grid-cols-1"}>
                <div className="md:w-1/2 flex flex-col items-left justify-center gap-4 md:gap-8 ">
                    <h3 className={"text-lightgreen font-bold md:text-5xl text-2xl"}>Cada recarga,<br/><span className={"text-light"}>mais gigas</span> para você</h3>
                    <p className={"text-sm md:text-[22px]"}>Acumule e ganhe<span className={"font-bold"}> mais bônus!</span></p>
                    <Image src={planos} alt={""} className={""} />
                    <ActionButton router={"movel/chip"} className={"bg-light rounded-full! text-dark border hidden md:block"}>Onde comprar!</ActionButton>
                    <p className={"text-[7px] md:text-[10px] font-bold"}>
                        Promoção Turbo: Os planos de 38GB | 58GB e 68GB estão com condições promocionais disponíveis para recargas feitas até 28/02/2026. Recargas após essa data não terão promoção. Consulte condições em <a className={"underline"} href={"www.lestetelecom.com.br/faq-suporte-plano-turbo"}>www.lestetelecom.com.br/faq-suporte-plano-turbo</a>
                    </p>
                    <ActionButton router={"movel/chip"} className={"bg-lightgreen shadow-2xl text-dark md:hidden rounded-full! absolute bottom-10 left-[50%] translate-x-[-50%]"}>Onde comprar!</ActionButton>

                </div>
                <div></div>
            </div>
        </section>
    )
}