import CardApp from "@/components/cards/CardApp";
import Image from "next/image";
import googlePlay from "@/assets/googleplay.svg"
import appstore from "@/assets/appstore.svg"

export default  function BannerDownloadNow() {
    return (
        <div className={"bg-primary text-light w-full "}>
            <div className={"container flex justify-between items-center h-30"}>
                <h5 className={"font-bold text-2xl sm:text-3xl  max-w-48 md:max-w-64"}>Baixe agora o Leste Central!</h5>
                    <div className={"flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-x-6"}>
                            <a href={"https://onelink.to/lestecentral"}>
                            <Image src={googlePlay} width={120} alt={"ICONE"}/>
                        </a>
                            <a href={"https://onelink.to/lestecentral"}>
                            <Image src={appstore} width={120} alt={"ICONE"}/>
                        </a>
                    </div>
            </div>
        </div>
    );
}