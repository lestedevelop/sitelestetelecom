import Image from "next/image";
import appSuporte from "@/assets/portalLeste.svg"
import appCentral from "@/assets/appLeste.svg"
import googlePlay from "@/assets/googleplay.svg"
import appstore from "@/assets/appstore.svg"
export default function CardApp({suporte,central,download,link,className}) {

    return (
      <>
          {suporte&& <div className={`bg-darkgreen text-light w-36 md:w-52 md:h-13 flex gap-2 px-2 items-center h-9 rounded ${className}`}>
              <Image className={"md:w-[34px]"} src={appSuporte} width={24} alt={"ICONE"}/>
              <p className={"font-bold text-[13px] md:text-xl "}>Leste Suporte</p>
          </div>}

          {central&& <div className={`bg-darkgreen text-light w-36 md:w-52 md:h-13 flex gap-2 px-2 items-center h-9 rounded ${className}`}>
              <Image className={"md:w-[34px]"} src={appCentral} width={24} alt={"ICONE"}/>
              <p className={"font-bold text-[13px] md:text-xl "}>Leste Central</p>
          </div>}

          {download&&
              <div className={`bg-darkgreen text-light max-w-96 h-17 p-4 flex justify-between gap-2 items-center rounded-xl ${className}`}>
                  <p className={"font-bold text-[13px] max-w-1/2 md:max-w-1/3"}>Baixe agora na loja do seu dispositivo</p>
                     <div className={"flex items-center justify-center gap-2 md:gap-x-6"}>
                         <a href={link}>
                             <Image src={googlePlay} width={85} alt={"ICONE"}/>
                         </a>
                         <a href={link}>
                             <Image src={appstore} width={85} alt={"ICONE"}/>
                         </a>
                     </div>
              </div>
          }
      </>
    )
}