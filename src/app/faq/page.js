import imageFaq from "@/assets/imagefaq.jpg";
import FaqHelpCenter from "@/pageComponents/faq/FaqHelpCenter";
import HomeHeroBanner from "@/pageComponents/home/HomeHeroBanner";
import Image from "next/image";
import autoatendimento from "@/assets/autoatendimento.svg";
import nossaloja from "@/assets/nossaloja.svg";
import central from "@/assets/central24.svg";

export default function Faq() {
  return (
    <div className="min-h-full">
      <section className="w-full">
        <HomeHeroBanner
          alt="Banner FAQ da Leste Telecom"
          className="!aspect-[390/608] !h-auto !max-h-none !w-full md:!aspect-auto md:!h-[608px] md:!max-h-[608px]"
          desktopImageClassName="!object-cover"
          tabletImageClassName="!object-cover"
          mobileImageClassName="!object-contain"
          contentClassName="flex flex-col justify-center text-light md:container"
        >
          <div className="max-w-48 md:max-w-66">
            {/*<h1 className="mb-6 text-2xl font-bold md:text-[50px]">FAQ</h1>*/}
            <p className="text-[13px] md:text-[26px]">
              {/*Encontre respostas para suas dúvidas.*/}
            </p>
          </div>
        </HomeHeroBanner>
      </section>

      <FaqHelpCenter />

      <section className="bg-primary py-16 md:py-0">
        <div className="container flex min-h-[547px] items-center justify-center">
          <div className="sr-only">
            <h2>Baixe agora o Leste Central</h2>
            <p>O app Leste Central e pratico e facil de usar.</p>
            <ul>
              <li>Acesse ao boleto</li>
              <li>Troque a senha do Wifi</li>
              <li>Receba avisos</li>
            </ul>
            <a href="https://onelink.to/lestecentral">Google Play</a>
            <a href="https://onelink.to/lestecentral">App Store</a>
          </div>

          <Image
            src={imageFaq}
            alt="Banner do aplicativo Leste Central"
            className="rounded-3xl"
          />
        </div>
      </section>

      <section className="bg-graylighter py-8 pb-8 sm:pb-12 lg:pb-24 xl:pb-48">
        <div className="container p-6 text-center">
          <div className="mb-4 py-6">
            <h2 className="text-4xl font-bold text-primary">
              Canais de atendimento
            </h2>
            <p className="text-md font-light text-darkgreen">
              Diversos canais de atendimento para melhor te atender!
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
            <div className="flex h-[90px] w-[250px] items-center justify-center gap-4 rounded-xl bg-light">
              <Image src={autoatendimento} width={40} alt="" />
              <a
                className="w-32 text-md font-bold text-primary"
                href="https://api.whatsapp.com/send/?phone=552120201300&text&app_absent=0"
              >
                Autoatendimento WhatsApp
              </a>
            </div>
            <div className="flex h-[90px] w-[250px] items-center justify-center gap-4 rounded-xl bg-light">
              <Image src={nossaloja} width={40} alt="" />
              <a
                className="w-32 text-md font-bold text-primary"
                href="https://www.lestetelecom.com.br/lojas"
              >
                Nossas Lojas
              </a>
            </div>
            <div className="flex h-[90px] w-[250px] items-center justify-center gap-4 rounded-xl bg-light">
              <Image src={central} width={40} alt="" />
              <a className="w-32 text-md font-bold text-primary" href="#">
                Central 24h
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
