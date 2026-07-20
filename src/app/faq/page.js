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
import Link from "next/link";
import googlePlay from "@/assets/googleplay.svg";
import appStore from "@/assets/appstore.svg";
import {Check} from "lucide-react";

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
        <div className="container flex min-h-[547px] flex-col items-center justify-center gap-12 py-12 text-light md:flex-row md:gap-16 md:py-0 lg:gap-[70px]">
          <Image
            src={imageFaq}
            alt="Banner do aplicativo Leste Central"
            className="w-full max-w-[297px] rounded-2xl md:max-w-[297px]"
          />

          <div className="w-full max-w-[300px] text-center md:text-left">
            <h2 className="text-2xl font-bold leading-tight md:text-[26px]">
              Baixe agora o<br />Leste Central!
            </h2>
            <p className="mt-3 text-base font-medium leading-none">
              O App Leste Central é muito<br />prático e fácil de usar!
            </p>

            <div className="mt-7 flex items-center justify-center gap-3 md:justify-start">
              <a href="https://onelink.to/lestecentral" aria-label="Baixar o Leste Central no Google Play">
                <Image src={googlePlay} width={88} alt="Disponível no Google Play" />
              </a>
              <a href="https://onelink.to/lestecentral" aria-label="Baixar o Leste Central na App Store">
                <Image src={appStore} width={88} alt="Disponível na App Store" />
              </a>
            </div>

            <ul className="mt-7 space-y-7 text-base font-bold">
              <li className="flex items-center justify-center gap-3 md:justify-start"><Check size={22} strokeWidth={4} aria-hidden="true" /> Acesse ao boleto</li>
              <li className="flex items-center justify-center gap-3 md:justify-start"><Check size={22} strokeWidth={4} aria-hidden="true" /> Troque a senha do Wi-Fi</li>
              <li className="flex items-center justify-center gap-3 md:justify-start"><Check size={22} strokeWidth={4} aria-hidden="true" /> Receba avisos</li>
            </ul>
          </div>
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
              <Link
                className="w-32 text-md font-bold text-primary"
                href="/faq/lojas"
              >
                Nossas Lojas
              </Link>
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
