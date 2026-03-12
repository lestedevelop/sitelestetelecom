import Image from "next/image";
import ctaBanner from "@/assets/lesteup/BANNELESTEUP3.png";
import whatsIcon from "@/assets/whatsIcon.svg";

const WHATSAPP_URL = "https://wa.me/552120201300";

export default function LesteUpCta() {
  return (
    <section className="w-full bg-[#003934]">
      <div className="container py-8 md:py-10">
        <div className="relative overflow-hidden rounded-2xl md:rounded-3xl">
          <Image
            src={ctaBanner}
            alt="Banner de chamada para o Leste Up"
            className="h-[270px] w-full object-cover object-[32%_center] md:h-auto md:object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#003934]/30 via-transparent to-[#001d1a]/75" />

          <div className="absolute inset-0 flex items-center p-6 md:p-10">
            <div className="max-w-[600px] text-white py-12">
              <h2 className="text-3xl font-semibold leading-[1.04] md:text-[3rem]">
                Esteja pronto antes da queda de luz: conte com Leste UP.
              </h2>

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

                <span className="inline-flex items-center rounded-xl border border-[#17e5d0] px-4 py-2 text-xs font-semibold text-[#c7fff8] md:text-sm">
                  Instalação gratuita
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
