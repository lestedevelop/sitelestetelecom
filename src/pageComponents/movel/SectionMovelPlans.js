import PlanCardMovel from "@/components/cards/PlanCardMovel";

export default function SectionMovelPlan() {

    const plans = [
        {
            titleNumber: "13GB",
            titlePlan: "+ 100 minutos\n+ 60 SMS",
            wifiText: "SUPER WI-FI 6 AX MESH",
            perks: ["+ WhatsApp Grátis", "+ Sem multa", "+ Acúmulo de Gigas"],
            price: 39.99,
            cta: "Onde comprar!",
            // footnote: "Fidelidade de 12 meses",
            bonus: "6 GB + 7 GB de bônus"
        },
        {
            titleNumber: "14GB",
            titlePlan: "+ 100 SMS\n+ 1 GB de portabilidade",
            wifiText: "SUPER WI-FI 6 AX MESH",
            perks: ["+ WhatsApp Grátis","+ Minutos ilimitados\n", "+ Sem multa", "+ Acúmulo de Gigas"],
            price: 44.99,
            cta: "Onde comprar!",
            // footnote: "Fidelidade de 12 meses",
            bonus: "8 GB + 6 GB de bônus"
        },
        {
            titleNumber: "17GB",
            titlePlan: "+ 100 SMS\n+ 1 GB de portabilidade",
            wifiText: "SUPER WI-FI 6 AX MESH",
            perks: ["+ WhatsApp Grátis","+ Minutos ilimitados\n", "+ Sem multa", "+ Acúmulo de Gigas"],
            price: 49.99,
            cta: "Onde comprar!",
            // footnote: "Fidelidade de 12 meses",
            bonus: "14 GB + 3 GB de bônus"
        },
        {
            titleNumber: "22GB",
            titlePlan: "+ 100 SMS\n+ 1 GB de portabilidade",
            wifiText: "SUPER WI-FI 6 AX MESH",
            perks: ["+ WhatsApp Grátis","+ Minutos ilimitados\n", "+ Sem multa", "+ Acúmulo de Gigas"],
            price: 59.99,
            cta: "Onde comprar!",
            // footnote: "Fidelidade de 12 meses",
            bonus: "21 GB + 1 GB de bônus"
        },
        {
            titleNumber: "29GB",
            titlePlan: "+ 100 SMS\n+ 1 GB de portabilidade",
            wifiText: "SUPER WI-FI 6 AX MESH",
            perks: ["+ WhatsApp Grátis","+ Minutos ilimitados\n", "+ Sem multa", "+ Acúmulo de Gigas"],
            price: 69.99,
            cta: "Onde comprar!",
            // footnote: "Fidelidade de 12 meses",
            bonus: ""
        },
        {
            titleNumber: "39GB",
            titlePlan: "+ 100 SMS\n+ 1 GB de portabilidade",
            wifiText: "SUPER WI-FI 6 AX MESH",
            perks: ["+ WhatsApp Grátis","+ Minutos ilimitados\n", "+ Sem multa", "+ Acúmulo de Gigas"],
            price: 79.99,
            cta: "Onde comprar!",
            // footnote: "Fidelidade de 12 meses",
            bonus: ""
        },
        {
            titleNumber: "44GB",
            titlePlan: "+ 100 SMS\n+ 1 GB de portabilidade",
            wifiText: "SUPER WI-FI 6 AX MESH",
            perks: ["+ WhatsApp Grátis","+ Minutos ilimitados\n", "+ Sem multa", "+ Acúmulo de Gigas"],
            price: 89.99,
            cta: "Onde comprar!",
            // footnote: "Fidelidade de 12 meses",
            bonus: ""
        },
    ]

    return (
        <section>
            <div className={"container"}>
                <div className={"py-8 text-center md:text-left"}>
                    <h3 className={"font-bold text-[22px] md:text-[40px] text-darkgreen"}>Escolha o pré-pago mais adequado pra você</h3>
                    <p className={"font-light text-darkgreen text-[15px] md:text-[26px]"}>Aqui você não paga multa!</p>
                </div>
                <div className={"flex w-full flex-wrap items-stretch justify-center gap-8 xl:gap-12"}>
                    {plans.map((elem,index) => <PlanCardMovel plan={elem} key={index}/>)}
                </div>
                <p className={"text-darkgreen text-[10px] text-center py-8"}><span className={"font-bold"}>Promoção Start</span>: Os planos de <span className={"font-bold"}>13 GB | 14 GB | 17 GB | 22 GB</span> estão com condições promocionais disponíveis para recargas realizadas entre 01/09/2026 e 30/11/2026. As recargas após essa data não terão promoção. Consulte as condições em <a className={"underline"} href={"/faq/suporte-plano-start"}>www.lestetelecom.com.br/faq/suporte-plano-start</a></p>
            </div>
        </section>
    )
}
