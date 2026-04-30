import Image from "next/image";
import appSuporte from "@/assets/portalLeste.svg"
import appCentral from "@/assets/appLeste.svg"
import googlePlay from "@/assets/googleplay.svg"
import appstore from "@/assets/appstore.svg"
export default function CardApp({suporte,central,download,link,className}) {

    return (
      <>
          {suporte&& <div className={`flex h-9 w-36 items-center gap-2 rounded bg-primary px-2 text-light md:h-13 md:w-52 ${className}`}>
              <Image className={"md:w-[34px]"} src={appSuporte} width={24} alt={"ICONE"}/>
              <p className={"font-bold text-[13px] md:text-xl "}>Leste Suporte</p>
          </div>}

          {central&& <div className={`flex h-9 w-36 items-center gap-2 rounded bg-light px-2 text-primary md:h-13 md:w-52 ${className}`}>
              <Image className={"md:w-[34px]"} src={appCentral} width={24} alt={"ICONE"}/>
              <p className={"font-bold text-[13px] md:text-xl "}>Leste Central</p>
          </div>}

          {download&&
              <div className={`flex flex-col gap-4 rounded-xl p-4 text-light md:h-17 md:flex-row md:items-center md:justify-between ${className}`}>
                  <p className={"max-w-full text-center text-[13px] font-bold md:max-w-1/3 md:text-left"}>Baixe agora na loja do seu dispositivo</p>
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
