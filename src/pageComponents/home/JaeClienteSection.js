import Section from "@/components/layout/Section";
import Image from "next/image";
import nota1000Icon from "@/assets/home/nota1000-home.svg";
import svaIcon from "@/assets/home/sva-home.svg";
import suporteIcon from "@/assets/home/suporte-home.svg";
import roteadorIcon from "@/assets/home/roteador-home.svg";

const benefits = [
    {
        title: "Internet mais estável",
        description: "Com 100% fibra ótica, você tem mais estabilidade e velocidade próxima da contratada.",
        note: "Com base no Prêmio MelhorPlano.net 2026",
        icon: roteadorIcon,
    },
    {
        title: "Suporte tecnico 24h",
        description: "Atendimento por telefone, WhatsApp, Instagram, Messenger, Twitter e Telegram.",
        icon: suporteIcon,
    },
    {
        title: "Além da internet",
        description: "Acesso a serviços inclusos como Leste Clube, Skeelo e outros parceiros.",
        icon: svaIcon,
    },
    {
        title: "Atendimento Nota 1000",
        description: "Selo RA1000 no Reclame Aqui, que certifica excelência no atendimento ao cliente.",
        icon: nota1000Icon,
    },
];

function BenefitCard({item}) {
    return (
        <article className="relative rounded-[1.75rem] bg-white px-6 pb-7 pt-16 shadow-[0_14px_36px_rgba(0,0,0,.05)] md:min-h-[152px] md:pl-24 md:pt-7 lg:min-h-[150px]">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 md:left-0 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2">
                <Image src={item.icon} alt="" className="h-24 w-24 rounded-full"/>
            </div>

            <div className="space-y-2 text-center md:text-left">
                <h3 className="text-[1.85rem] font-semibold leading-none tracking-[-0.03em] text-primary">
                    {item.title}
                </h3>
                <p className="max-w-[320px] text-[1.05rem] leading-7 text-dark">
                    {item.description}
                </p>
                {item.note ? (
                    <p className="text-sm leading-6 text-primary">
                        {item.note}
                    </p>
                ) : null}
            </div>
        </article>
    );
}

export default function JaeClienteSection() {
    return (
        <section className="w-full bg-lightgreenBackground">
            <div className="container py-12 md:py-16">
                <div className="mx-auto max-w-[1020px]">
                    <header className="mb-10 md:mb-12">
                        <h2 className="text-[2.2rem] font-bold leading-[1.02] tracking-[-0.04em] text-primary md:text-[4rem]">
                            O que você pode esperar da sua internet
                        </h2>
                        <p className="mt-3 text-lg leading-7 text-darkgreen md:text-[2rem] md:leading-none">
                            O caminho para uma conexão melhor no seu dia a dia.
                        </p>
                    </header>

                    <div className="grid gap-y-18 md:grid-cols-2 md:gap-x-20 md:gap-y-8 md:pl-14">
                        {benefits.map((item) => (
                            <BenefitCard key={item.title} item={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
