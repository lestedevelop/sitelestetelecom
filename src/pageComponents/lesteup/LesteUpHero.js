import Image from "next/image";
import heroBanner from "@/assets/lesteup/banner-leste-up.png";
import mobileBanner from "@/assets/lesteup/banner-mobile.png";
import whatsIcon from "@/assets/whatsIcon.svg";
import HomeHeroBanner from "@/pageComponents/home/HomeHeroBanner";

const WHATSAPP_URL = "https://wa.me/552120201300";

function PriceBlock({ align = "right" }) {
  const alignmentClass =
    align === "left" ? "items-start text-left" : "items-end text-right";

  return (
    <div className={`flex flex-col ${alignmentClass} text-white`}>
      <div className="flex items-end gap-3">
        <div className="mb-2 text-sm font-medium md:text-xl">
          <p>Por</p>
          <p className="mt-1 text-lg md:text-3xl">R$</p>
        </div>
        <div className="text-6xl font-semibold leading-none md:text-[6.8rem]">
          39
        </div>
        <div className="mb-2 text-xl font-medium leading-none md:text-[2.2rem]">
          <p>,90</p>
          <p className="mt-2 text-base md:text-[1.75rem]">/mês</p>
        </div>
      </div>

      <p className="mt-2 text-xs text-white/80 md:text-sm">
        *Fidelidade de 12 meses
      </p>
    </div>
  );
}

export default function LesteUpHero() {
  return (
    <section className="w-full">
      <HomeHeroBanner
        alt="Banner do Leste Up"
        className="aspect-[640/835] max-h-none md:aspect-auto md:min-h-[640px]"
        mobileImageClassName="object-cover object-center"
        contentClassName="flex items-start pt-8 md:items-center md:justify-end md:pb-0 md:pt-0"
        desktopImage={heroBanner}
        tabletImage={mobileBanner}
        mobileImage={mobileBanner}
        desktopImageClassName="2xl:object-cover"
      >
        <div className="container px-6 md:px-16">
          <div className="max-w-[260px] text-left text-white md:ml-auto md:max-w-[430px]">
            <h1 className="text-[1.55rem] font-semibold leading-[0.98] md:text-5xl">
              {/*Mais <span className="text-[#0fd7c1]">4 horas</span>*/}
              Esteja pronto antes da queda de luz: Conte com o<span className="text-[#0fd7c1]"> Leste UP</span>
            </h1>

            <div className="mt-4 md:mt-6">
              <PriceBlock align="left" />
            </div>

            <div className="mt-4 flex flex-col items-start gap-3 md:mt-5">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0fd7c1] px-4 py-2.5 text-xs font-semibold text-darkgreen transition hover:opacity-90 md:px-8 md:py-3 md:text-[1.1rem]"
              >
                <Image src={whatsIcon} alt="WhatsApp" width={18} height={18} />
                Contrate agora!
              </a>

              <p className="max-w-[300px] text-left text-[9px] leading-relaxed text-white/70 md:max-w-[520px] md:text-xs">
                *O Leste Up é exclusivo para clientes Leste nas cidades de Niterói,
                Maricá e Rio Bonito. Oferta válida até 30/06/2026. O serviço é
                autônomo, sem vínculo com a internet fibra. Possui fidelidade de 12 meses.
              </p>
            </div>
          </div>
        </div>
      </HomeHeroBanner>
    </section>
  );
}
