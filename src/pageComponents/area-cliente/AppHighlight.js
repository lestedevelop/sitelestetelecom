import Image from "next/image";
import CardApp from "@/components/cards/CardApp";
import suporteMockup from "@/assets/app/mockup-app.png";
import centralMockup from "@/assets/app/mockup-app2.png";

export default function AppHighlight({variant}) {
  const isCentral = variant === "central";
  const title = isCentral ? "Leste Central" : "Leste Suporte";
  const text = isCentral
    ? "O Central do Cliente e um aplicativo para consultarem boletos, contatos, avisos e mais."
    : "O Leste Suporte e um aplicativo tecnico que vai te auxiliar na hora de resolver problemas relacionados a sua rede Wi-Fi e conexao com a internet.";
  const link = isCentral ? "https://onelink.to/lestecentral" : "https://onelink.to/lestesuporte";
  const mockup = isCentral ? centralMockup : suporteMockup;

  return (
    <section className={isCentral ? "bg-primary py-14 text-white md:py-20" : "bg-light py-14 text-primary md:py-20"}>
      <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <CardApp central={isCentral} suporte={!isCentral} className="mx-auto lg:mx-0" />
          <p className={`mt-7 max-w-[480px] text-base leading-6 md:text-lg ${isCentral ? "text-white/86" : "text-primary"}`}>
            {text}
          </p>
        </div>

        <div className="mx-auto w-full max-w-[640px]">
          <Image src={mockup} alt={`Baixe o app ${title}`} className="h-auto w-full" />
          <CardApp download link={link} className={`${isCentral ? "bg-light text-primary" : "bg-primary"} mt-5 w-full`} />
        </div>
      </div>
    </section>
  );
}
