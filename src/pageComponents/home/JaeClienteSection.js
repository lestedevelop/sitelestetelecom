import Section from "@/components/layout/Section";
import Image from "next/image";
import nota1000Icon from "@/assets/home/nota1000-home.svg";
import svaIcon from "@/assets/home/sva-home.svg";
import suporteIcon from "@/assets/home/suporte-home.svg";
import roteadorIcon from "@/assets/home/roteador-home.svg";

const benefits = [
    {
        title: "A melhor estabilidade",
        description: "Nas cidades de Niteroi, Marica, Itaborai e Rio Bonito*",
        note: "*Segundo o Premio Melhor Plano.net de 2025",
        icon: roteadorIcon,
    },
    {
        title: "Suporte tecnico 24h",
        description: "Via telefone, WhatsApp, Instagram, Messenger, Twitter e Telegram",
        icon: suporteIcon,
    },
    {
        title: "Conheca nossos SVA's",
        description: "Servicos exclusivos para assinantes Leste, como: Leste Clube, Bebanca e Skeelo.",
        icon: svaIcon,
    },
    {
        title: "Atendimento Nota 1000",
        description: "Reconhecida com o selo RA1000, que certifica excelencia no atendimento ao cliente.",
        icon: nota1000Icon,
    },
];

function BenefitCard({item}) {
    return (
        <article className="relative rounded-[1.75rem] bg-white px-6 py-7 shadow-[0_14px_36px_rgba(0,0,0,.05)] md:min-h-[152px] md:pl-24 lg:min-h-[150px]">
            <div className="mb-5 flex items-center gap-4 md:absolute md:left-0 md:top-1/2 md:mb-0 md:-translate-x-1/2 md:-translate-y-1/2">
                    <Image src={item.icon} alt="" className="flex h-24 w-24 items-center justify-center rounded-full"/>
            </div>

            <div className="space-y-2 text-left">
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
                            Por que escolher o melhor caminho?
                        </h2>
                        <p className="mt-3 text-lg leading-7 text-darkgreen md:text-[2rem] md:leading-none">
                            Confira os nossos principais beneficios
                        </p>
                    </header>

                    <div className="grid gap-x-18 gap-y-6 md:grid-cols-2 md:gap-y-8">
                        {benefits.map((item) => (
                            <BenefitCard key={item.title} item={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
