import Image from "next/image";
import productImage from "@/assets/lesteup/Leste Up 2.webp";
import iconPower from "@/assets/lesteup/c1d205_4b04d946c1814cd498cd38be2ca0459d~mv2.webp";
import iconBattery from "@/assets/lesteup/c1d205_7b49dc22e71244d9886f06b31e8829f8~mv2.webp";
import iconDevice from "@/assets/lesteup/iconequipamento.webp";

const FEATURES = [
  {
    icon: iconPower,
    title: "Proteção elétrica",
    description: "Equipamento protegido contra oscilações e sobrecargas elétricas.",
  },
  {
    icon: iconBattery,
    title: "Autonomia real",
    description: "Funcionamento contínuo e autônomo por até 4 horas.",
  },
  {
    icon: iconDevice,
    title: "Fácil de posicionar",
    description: "Pequeno e leve, pode ser posicionado próximo aos equipamentos de rede.",
  },
];

export default function LesteUpOverview() {
  return (
    <section className="w-full bg-[#003934] text-white">
      <div className="container py-14 md:py-20">
        <div className="mx-auto max-w-[1040px]">
          <h2 className="text-center text-3xl font-semibold leading-tight md:text-[3rem]">
            Seu Wi-Fi merece um Leste Up.
          </h2>

          <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-3">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="flex flex-col items-center text-center">
                <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full border border-[#11f2d9]/20 bg-[#002d28] shadow-[0_0_35px_rgba(17,242,217,0.12)]">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    className="h-[72px] w-[72px]"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#a9fff6] md:text-xl">
                  {feature.title}
                </h3>
                <p className="mt-2 max-w-[280px] text-sm leading-relaxed text-white/82 md:text-base">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid items-center gap-10 md:mt-20 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
            <div>
              <h3 className="text-3xl font-semibold text-[#11f2d9] md:text-[2.65rem]">
                O que é o Leste UP?
              </h3>
              <p className="mt-5 max-w-[520px] text-base leading-relaxed text-white/85 md:text-[1.35rem] md:leading-[1.6]">
                O Leste UP é um Mini Nobreak projetado para manter a conexão de internet
                ativa durante quedas ou oscilações de energia elétrica. Ele fornece
                energia de backup para dispositivos da Leste, garantindo estabilidade e
                segurança no seu dia a dia.
              </p>
              <p className="mt-5 max-w-[520px] text-xs leading-relaxed text-white/50 md:text-sm">
                Produto exclusivo para clientes Leste com oferta sujeita a disponibilidade
                comercial.
              </p>
            </div>

            <div className="flex justify-center md:justify-end">
              <Image
                src={productImage}
                alt="Equipamento Leste Up"
                className="h-auto w-[210px] drop-shadow-[0_18px_50px_rgba(0,0,0,0.45)] md:w-[285px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

