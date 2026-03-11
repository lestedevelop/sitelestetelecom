import Image from "next/image";
import heroBanner from "@/assets/lesteup/BANNELESTEUP2.png";
import productImage from "@/assets/lesteup/Leste Up 2.png";
import whatsIcon from "@/assets/whatsIcon.svg";

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
          35
        </div>
        <div className="mb-2 text-xl font-medium leading-none md:text-[2.2rem]">
          <p>,00</p>
          <p className="mt-2 text-base md:text-[1.75rem]">/mës</p>
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
      <div className="container py-6 md:py-10">
        <div className="overflow-hidden rounded-2xl bg-[#012b27] md:rounded-3xl">
          <div className="relative hidden md:block">
            <Image
              src={heroBanner}
              alt="Banner do Leste Up"
              className="h-[340px] w-full object-cover lg:h-auto"
              priority
            />

            <div className="absolute inset-0 flex items-end justify-end p-8 lg:p-10">
              <div className="max-w-[430px]">
                <h1 className="text-right text-5xl font-semibold leading-[0.98] text-white">
                  Mais <span className="text-[#0fd7c1]">4 horas</span> de autonomia para
                  seu roteador
                </h1>

                <div className="mt-6">
                  <PriceBlock />
                </div>

                <div className="mt-5 flex flex-col items-end gap-3">
                  <span className="inline-flex items-center rounded-xl border border-[#17e5d0] px-4 py-2 text-xs font-semibold text-[#c7fff8] md:text-sm">
                    Instalação gratuita
                  </span>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[#0fd7c1] px-5 py-3 text-sm font-semibold text-darkgreen transition hover:opacity-90 md:px-8 md:text-[1.1rem]"
                  >
                    <Image src={whatsIcon} alt="WhatsApp" width={18} height={18} />
                    Contrate agora!
                  </a>

                  <p className="max-w-[360px] text-right text-[10px] leading-relaxed text-white/70 md:text-xs">
                    Consulte disponibilidade, cidades atendidas e condições comerciais.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative md:hidden">
            <Image
              src={heroBanner}
              alt="Imagem principal do Leste Up"
              className="h-[430px] w-full object-cover object-[38%_center]"
              priority
            />

            <div className="absolute inset-0 bg-gradient-to-b from-[#003934]/5 via-transparent to-[#001714]/88" />

            <div className="absolute right-4 top-[102px]">
              <Image
                src={productImage}
                alt="Equipamento Leste Up"
                className="h-auto w-[150px] drop-shadow-[0_14px_40px_rgba(0,0,0,0.45)]"
              />
            </div>

            <div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-20 text-white">
              <h1 className="max-w-[235px] text-[2.15rem] font-semibold leading-[0.98]">
                Mais <span className="text-[#0fd7c1]">4 horas</span> de autonomia para seu
                roteador
              </h1>

              <div className="mt-4">
                <PriceBlock align="left" />
              </div>

              <div className="mt-4 flex flex-col items-start gap-3">
                <span className="inline-flex items-center rounded-xl border border-[#17e5d0] px-4 py-2 text-xs font-semibold text-[#c7fff8]">
                  Instalação gratuita
                </span>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0fd7c1] px-5 py-3 text-sm font-semibold text-darkgreen transition hover:opacity-90"
                >
                  <Image src={whatsIcon} alt="WhatsApp" width={18} height={18} />
                  Contrate agora!
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
