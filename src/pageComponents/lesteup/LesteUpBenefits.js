import Image from "next/image";
import cardConnected from "@/assets/lesteup/17df7f_b1d69c504f29403cb8381db6769fc2e6~mv2.png";
import cardData from "@/assets/lesteup/17df7f_c4a2fb2c0ae947bd9368e7e2a6ffaed2~mv2.png";
import cardProtected from "@/assets/lesteup/2 -2.png";
import cardWork from "@/assets/lesteup/17df7f_04097f6245f94d8f93a671d8df1dc66b~mv2.png";
import cardGame from "@/assets/lesteup/17df7f_984a4595b91e4769aa3cbc4aa564004b~mv2.png";

const PRIMARY_CARDS = [
  {
    title: "Conectado sem preocupação",
    description: "Wi-Fi com bateria extra para você continuar online, mesmo sem energia.",
    image: cardConnected,
  },
  {
    title: "Economize seus dados móveis",
    description: "Fique online sem gastar seu 4G, mesmo quando a energia acabar.",
    image: cardData,
  },
  {
    title: "Seus dispositivos protegidos",
    description: "Mantenha seus dispositivos protegidos contra picos e oscilações elétricas.",
    image: cardProtected,
  },
];

const SECONDARY_CARDS = [
  {
    title: "Sem interrupções inesperadas",
    description: "Siga no home office ou na sua videochamada sem desconectar no meio.",
    image: cardWork,
  },
  {
    title: "Fique no jogo",
    description: "Garanta sua partida mesmo com quedas de energia e preserve sua conexão.",
    image: cardGame,
  },
];

function BenefitCard({ title, description, image }) {
  return (
    <article className="group relative overflow-hidden rounded-[28px] bg-[#082e2b] shadow-[0_25px_60px_rgba(0,0,0,0.28)]">
      <Image
        src={image}
        alt={title}
        className="h-[360px] w-full object-cover transition duration-300 group-hover:scale-[1.02] md:h-[388px]"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/78 to-transparent px-5 pb-6 pt-20 text-white md:px-6">
        <h3 className="max-w-[230px] text-[1.9rem] font-semibold leading-[1.02] md:text-[2.05rem]">
          {title}
        </h3>
        <p className="mt-4 max-w-[255px] text-sm leading-relaxed text-white/85 md:text-[0.98rem]">
          {description}
        </p>
      </div>
    </article>
  );
}

export default function LesteUpBenefits() {
  return (
    <section className="w-full bg-[#003934] text-white">
      <div className="container pb-14 md:pb-20">
        <div className="mx-auto max-w-[1080px]">
          <h2 className="text-center text-4xl font-semibold md:text-[3.3rem]">
            Pensado para o seu dia a dia
          </h2>

          <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-3">
            {PRIMARY_CARDS.map((card) => (
              <BenefitCard key={card.title} {...card} />
            ))}
          </div>

          <div className="mx-auto mt-6 grid max-w-[740px] gap-6 md:mt-8 md:grid-cols-2">
            {SECONDARY_CARDS.map((card) => (
              <BenefitCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
