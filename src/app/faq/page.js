"use client";

import imageFaq from "@/assets/imagefaq.jpg";
import bannerFaqDesktop from "@/assets/faq/banner-faq-desk.png";
import bannerFaqMobile from "@/assets/faq/banner-faq-mobile.png";
import bannerFaqTablet from "@/assets/faq/banner-faq-tablet.png";
import autoatendimento from "@/assets/autoatendimento.svg";
import central from "@/assets/central24.svg";
import nossaloja from "@/assets/nossaloja.svg";
import FaqHelpCenter from "@/pageComponents/faq/FaqHelpCenter";
import Image from "next/image";
import {useHomeSections} from "@/hooks/useHomeSections";
import {resolveImageSrc} from "@/utils/imageSrc";

export default function Faq() {
  const {getAdverts} = useHomeSections();
  const advert = getAdverts("faq")[0];
  const bannerImage = resolveImageSrc(advert, null);

  return (
    <div className="min-h-full">
      <section className="w-full">
        <div className="relative aspect-[390/608] w-full overflow-hidden bg-primary md:aspect-[1024/512] lg:aspect-[1440/400]">
          <Image
            src={bannerImage || bannerFaqDesktop}
            alt={advert?.title || "FAQ. Tire suas duvidas aqui."}
            fill
            priority
            className="hidden object-cover object-center lg:block"
            sizes="100vw"
          />
          <Image
            src={bannerImage || bannerFaqTablet}
            alt={advert?.title || "FAQ. Tire suas duvidas aqui."}
            fill
            priority
            className="hidden object-cover object-center md:block lg:hidden"
            sizes="100vw"
          />
          <Image
            src={bannerImage || bannerFaqMobile}
            alt={advert?.title || "FAQ. Tire suas duvidas aqui."}
            fill
            priority
            className="object-cover object-center md:hidden"
            sizes="100vw"
          />
        </div>
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
