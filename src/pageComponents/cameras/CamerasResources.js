import Image from "next/image";
import resource1 from "@/assets/cameras/17df7f_36d8875874d742b7abbb952f769fc2c0~mv2.webp";
import resource2 from "@/assets/cameras/17df7f_7e62a475fa3f41308dbeade1cbca19d1~mv2.webp";
import resource3 from "@/assets/cameras/17df7f_8d1a692f366c48bda2a2fbb811baab16~mv2.webp";
import resource4 from "@/assets/cameras/17df7f_9b2b15023d20441cba2ce1917f1419c3~mv2.webp";
import resource5 from "@/assets/cameras/17df7f_e6c403338ab74104b51a7489afdfb506~mv2.webp";
import mobile1 from "@/assets/cameras/17df7f_f0522f54e9044762aa6a29bb6e10fdaa~mv2.webp";
import mobile2 from "@/assets/cameras/17df7f_0b5c688f8a734f07a0badcce6b8da4d2~mv2.webp";
import mobile3 from "@/assets/cameras/17df7f_7f0335b3facc428aa541d71960f51d49~mv2.webp";
import mobile4 from "@/assets/cameras/17df7f_22a6c52e1b984953ab53c5572ad613b5~mv2.webp";
import mobile5 from "@/assets/cameras/17df7f_3d53414449504d3eb6ddd6d35f9ecdcb~mv2.webp";

const RESOURCES = [
  {
    desktopImage: resource1,
    mobileImage: mobile1,
    alt: "Visao noturna",
    title: "Visao noturna",
    description: "Nitidez mesmo em ambientes escuros, de dia ou da noite.",
  },
  {
    desktopImage: resource2,
    mobileImage: mobile2,
    alt: "Armazenamento",
    title: "Armazenamento",
    description:
      "Gravacoes salvas em nuvem por ate 7 dias, com facil acesso pelo aplicativo.",
  },
  {
    desktopImage: resource3,
    mobileImage: mobile3,
    alt: "Audio bidirecional",
    title: "Audio bidirecional",
    description: "Fale e escute em tempo real diretamente pelo aplicativo.",
  },
  {
    desktopImage: resource4,
    mobileImage: mobile4,
    alt: "Movimento",
    title: "Movimento",
    description: "Receba alertas ao identificar movimentos no ambiente.",
  },
  {
    desktopImage: resource5,
    mobileImage: mobile5,
    alt: "Criptografia",
    title: "Criptografia",
    description: "Videos protegidos com seguranca e privacidade.",
  },
];

export default function CamerasResources() {
  return (
    <section className="w-full bg-primary">
      <div className="container py-10 md:py-12">
        <h3 className="text-center text-2xl font-semibold text-light md:text-[45px]">
          <span className="relative inline-block px-4">
            <span className="absolute -left-2 -top-2 h-4 w-4 border-l-2 border-t-2 border-lightgreen" />
            <span className="absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-lightgreen" />
            Recursos pensados
            <br />
            para sua tranquilidade
          </span>
        </h3>

        <div className="mt-12 hidden items-end justify-center gap-5 md:flex">
          {RESOURCES.map((item, index) => (
            <div
              key={`resource-desktop-${index}`}
              className="relative h-[300px] w-[200px] overflow-hidden rounded-2xl border border-lightgreen/30"
            >
              <Image
                src={item.desktopImage}
                alt={item.alt}
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 p-4 text-white">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="mt-2 text-[11px] leading-snug text-white/90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4 md:hidden">
          {RESOURCES.map((item, index) => (
            <div
              key={`resource-mobile-${index}`}
              className="relative overflow-hidden rounded-2xl"
            >
              <Image
                src={item.mobileImage}
                alt={item.alt}
                className="h-auto w-full"
              />
              <div className="absolute bottom-0 px-4 py-6 text-white">
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-[11px] leading-snug text-white/90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

