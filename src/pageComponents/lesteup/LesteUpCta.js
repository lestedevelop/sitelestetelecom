import Image from "next/image";
import ctaBanner from "@/assets/lesteup/BANNELESTEUP3.webp";
import whatsIcon from "@/assets/whatsIcon.svg";

const WHATSAPP_URL = "https://wa.me/552120201300";

function PriceBlock() {
  return (
    <div className="flex flex-col items-start text-left text-white">
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

export default function LesteUpCta() {
  return (
    <section className="w-full bg-[#003934]">
      <div className="container py-8 md:py-10">
        <div className="relative h-[520px] overflow-hidden rounded-2xl md:h-[460px] md:rounded-3xl lg:h-[500px]">
          <Image
            src={ctaBanner}
            alt="Banner de chamada para o Leste Up"
            fill
            className="scale-[1.45] object-cover object-[0%_center] md:scale-[1.3] md:object-[0%_center] lg:scale-[1.28] lg:object-[0%_center]"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#003934]/88 via-[#003934]/68 to-[#001d1a]/45" />

          <div className="absolute inset-0 flex items-center p-6 md:p-10">
            <div className="max-w-[520px] text-white py-12 md:max-w-[560px]">
              <h2 className="text-3xl font-semibold leading-[1.04] md:text-[3rem]">
                Mais <span className="text-[#0fd7c1]">4 horas</span> de autonomia para o seu roteador.
              </h2>

              <div className="mt-5">
                <PriceBlock />
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
        </div>
      </div>
    </section>
  );
}
