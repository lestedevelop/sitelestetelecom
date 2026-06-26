import Image from "next/image";
import heroBanner from "@/assets/lesteup/BANNELESTEUP2.webp";
import mobileBanner from "@/assets/lesteup/banner-mobile.webp";
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
        priority
        className="h-[640px] bg-[#001f1c] md:h-[350px] lg:h-[460px] xl:h-[520px]"
        contentClassName="flex items-center"
        desktopImage={heroBanner}
        tabletImage={heroBanner}
        mobileImage={mobileBanner}
        desktopImageClassName="2xl:object-cover"
      >
        <div className="container px-8 md:px-16">
          <div className="max-w-[300px] text-left text-white md:max-w-[430px]">
            <h1 className="text-[2.4rem] font-semibold leading-[0.98] md:text-5xl">
              Mais <span className="text-[#0fd7c1]">4 horas</span> de autonomia para o seu
              roteador.
            </h1>

            <div className="mt-5 md:mt-6">
              <PriceBlock align="left" />
            </div>

            <div className="mt-5 flex flex-col items-start gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0fd7c1] px-5 py-3 text-sm font-semibold text-darkgreen transition hover:opacity-90 md:px-8 md:text-[1.1rem]"
              >
                <Image src={whatsIcon} alt="WhatsApp" width={18} height={18} />
                Contrate agora!
              </a>

              <p className="max-w-[520px] text-left text-[10px] leading-relaxed text-white/70 md:text-xs">
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
