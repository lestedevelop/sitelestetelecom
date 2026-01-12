import Image from "next/image";
import logoLesteClube from "@/assets/lesteclube.svg";
import CardApp from "@/components/cards/CardApp";
import bannerClube from "@/assets/bannerclube.png";
import bannerClubeMobile from "@/assets/bannerclube-mobile.png";

export default function BannerClube() {
    return (
        <section className={"bg-darkgreen mt-[90px] md:mt-[160px]"}>
            <div className={"container mx-auto flex overflow-x-hidden flex-row justify-between items-center min-h-[270px] md:min-h-[600px]"}>
                <div className={"gap-y-3 py-4 md:gap-y-8 flex flex-col w-1/2 md:w-[395]"}>
                    <Image src={logoLesteClube} alt="logo" className={"w-[66px] md:w-[351px]"}/>
                    <h2 className={"text-xl md:text-4xl font-bold"}>Descontos e vantagens exclusivas para você, cliente Leste!</h2>
                    <p className={"text-base md:block hidden"}>
                        Descontos imperdíveis aguardam você!
                        Aproveite condições especiais e benefícios que só quem é nosso cliente pode ter. Não perca
                        essa oportunidade!
                    </p>
                    <CardApp central={true} className={"md:ml-6 p-0! md:scale-125"}/>
                </div>
                <Image src={bannerClube} alt="banner" className={"h-full hidden sm:block w-5xl translate-x-[25%]"}/>
                <Image src={bannerClubeMobile} alt="banner" className={"w-[175px] h-[270px] sm:hidden translate-x-[20%]"}/>
            </div>
        </section>

    )
}