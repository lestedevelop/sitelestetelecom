import AppBar from "@/components/layout/AppBar";
import SectionBanner from "@/components/layout/SectionBanner";
import bannerFaq from "@/assets/bannerfaq.png";
import imageFaq from "@/assets/imagefaq.jpg";
import Footer from "@/components/layout/Footer";
import SectionFaq from "@/pageComponents/faq/SectionFaq";
import googlePlay from "@/assets/googleplay.svg";
import appstore from "@/assets/appstore.svg";
import checkIcon from "@/assets/check.svg";
import Image from "next/image";
import autoatendimento from "@/assets/autoatendimento.svg";
import nossaloja from "@/assets/nossaloja.svg";
import central from "@/assets/central24.svg";

export default function Faq() {
  return (
      <div className="min-h-full">
        <AppBar/>
        <section className="md:mt-[160px] mt-[90px] w-full">
            <SectionBanner className="bg-primary w-full h-[182px] md:h-[350px]" title={"FAQ"} subtitle={"Tire suas dúvidas aqui.\n"} image={bannerFaq}
            />
        </section>

        <SectionFaq />
        <section className="py-16 md:py-0 bg-primary">
          <div className="flex flex-col-reverse gap-y-12 md:flex-row container justify-between items-center w-full min-h-[547px]">
              <Image src={imageFaq} alt="" className={"rounded-3xl"} />
              <div className=" flex flex-col items-start justify-start gap-8">
                  <h3 className={"font-bold text-4xl w-64"}>Baixe agora o Leste Central!</h3>
                  <p className={"text-xl"}>O App <span className={"font-bold"}>Leste Central </span> muito <span className={"font-bold"}>prático e fácil</span> de usar!</p>
                  <div className={"flex items-center justify-center gap-2 md:gap-x-6"}>
                      <a href="https://onelink.to/lestecentral">
                          <Image src={googlePlay} width={114} alt={"ICONE"}/>
                      </a>
                      <a href="https://onelink.to/lestecentral">
                          <Image src={appstore} width={114} alt={"ICONE"}/>
                      </a>
                  </div>
                  <ul className={"text-xl flex flex-col gap-6"}>
                      <li className={"flex gap-6"}><Image src={checkIcon} width={25} alt={""} />Acesse ao boleto</li>
                      <li className={"flex gap-6"}><Image src={checkIcon} width={25} alt={""} />Troque a senha do Wifi</li>
                      <li className={"flex gap-6"}><Image src={checkIcon} width={25} alt={""} />Receba avisos</li>
                  </ul>
              </div>
          </div>
        </section>
          <section className={"py-8 bg-graylighter"}>
             <div className="container text-center p-6">
               <div className="py-6 mb-4">
                   <h2 className={"text-primary text-4xl font-bold"}>Canais de atendimento</h2>
                   <p className={"font-light text-md text-darkgreen"}>Diversos canais de atendimento para melhor te atender!</p>
               </div>

                 <div className={"flex md:flex-row flex-col items-center justify-center gap-6"}>
                     <div className="flex items-center justify-center bg-light gap-4  rounded-xl w-[250px] h-[90px]">
                         <Image src={autoatendimento} width={40} alt={""} />
                         <a className={"text-primary text-md w-32 font-bold"} href="https://api.whatsapp.com/send/?phone=552120201300&text&app_absent=0">Autoatendimento WhatsApp</a>
                     </div>
                     <div className="flex items-center justify-center bg-light gap-4  rounded-xl w-[250px] h-[90px]">
                         <Image src={nossaloja} width={40} alt={""} />
                         <a className={"text-primary text-md w-32 font-bold"} href="https://www.lestetelecom.com.br/lojas">Nossas Lojas</a>
                     </div>
                     <div className="flex items-center justify-center bg-light gap-4  rounded-xl w-[250px] h-[90px]">
                         <Image src={central} width={40} alt={""} />
                         <a className={"text-primary text-md w-32 font-bold"} href="#">Central 24h</a>
                     </div>
                 </div>
             </div>
          </section>
      <Footer/>

      </div>
  );
}
