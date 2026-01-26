import AppBar from "@/components/layout/AppBar";
import velocidadeBanner from "@/assets/testevelocidade.png";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import arrow from "@/assets/arrowright.svg";
import BannerDownloadNow from "@/components/cards/BannerDownloadNow";
import ActionButton from "@/components/Buttons/ActionButton";


export default function TesteDeVelocidade() {
  return (
      <div className="min-h-full">
        <section className="w-full">
            <div className="flex flex-col md:flex-row items-center justify-between w-full container gap-8 py-8 md:py-16">
                <div className="text-primary md:w-110 flex flex-col gap-8">
                    <h3 className={"font-bold text-4xl md:text-[50px]"}>Teste sua velocidade </h3>
                    <p>Mas antes de iniciar, para garantir a <span className={"font-bold"}>precisão dos testes</span>, recomendamos que siga os seguintes passos:</p>

                    <ul className="flex flex-col gap-y-8">
                        <li className="flex items-center gap-x-4">
                            <div className={"rounded-full bg-darkgreen p-2 max-w-[34px]"}>
                                <Image src={arrow} alt={'icon'} className={"ml-1"} width={20} />
                            </div>
                            <p className={"text-md"}><span className={"font-bold"}>Feche</span> todos os programas e pause as atualizações</p>
                        </li>
                        <li className="flex items-center gap-x-4">
                            <div className={"rounded-full bg-darkgreen p-2 max-w-[34px]"}>
                                <Image src={arrow} alt={'icon'} className={"ml-1"} width={20} />
                            </div>
                            <p className={"text-md"}><span className={"font-bold"}>Interrompa</span> qualquer serviço que use a internet.</p>
                        </li>
                        <li className="flex items-center gap-x-4">
                            <div className={"rounded-full bg-darkgreen p-2 max-w-[34px]"}>
                                <Image src={arrow} alt={'icon'} className={"ml-1"} width={20} />
                            </div>
                            <p className={"text-md"}><span className={"font-bold"}>Conecte o cabo</span> de rede diretamente no seu computador.</p>
                        </li>
                    </ul>
                </div>
                <div className="relative">
                    <Image src={velocidadeBanner} alt={"banner"} className={"rounded-3xl"}/>
                    <ActionButton link={"https://www.speedtest.net/pt"} className={"absolute bg-light mx-auto bottom-8 left-[50%] translate-x-[-50%] text-primary border-2 b-primary hover:scale-102 transition-all duration-200 "}>Iniciar Teste</ActionButton>
                </div>
            </div>
        </section>
          <BannerDownloadNow />
      </div>
  );
}
