import PlanCardMovel from "@/components/cards/PlanCardMovel";

export default function SectionMovelPlan() {

    const plans = [
        {
            titleNumber: "6GB",
            titlePlan: "+100 Minutos + 60 SMS\n",
            wifiText: "SUPER WI-FI 6 AX MESH",
            perks: ["+ WhatsApp Grátis", "+ Sem multa", "+ Acúmulo de Gigas"],
            price: 39.99,
            cta: "Onde comprar!",
            // footnote: "Fidelidade de 12 meses",
        },
        {
            titleNumber: "8GB",
            titlePlan: "+100 SMS + 1GB Portabilidade\n",
            wifiText: "SUPER WI-FI 6 AX MESH",
            perks: ["+ WhatsApp Grátis","+ Minutos ilimitados\n", "+ Sem multa", "+ Acúmulo de Gigas"],
            price: 44.99,
            cta: "Onde comprar!",
            // footnote: "Fidelidade de 12 meses",
            bonus: ""
        },
        {
            titleNumber: "14GB",
            titlePlan: "+100 SMS + 1GB Portabilidade\n",
            wifiText: "SUPER WI-FI 6 AX MESH",
            perks: ["+ WhatsApp Grátis","+ Minutos ilimitados\n", "+ Sem multa", "+ Acúmulo de Gigas"],
            price: 49.99,
            cta: "Onde comprar!",
            // footnote: "Fidelidade de 12 meses",
            bonus: ""
        },
        {
            titleNumber: "21GB",
            titlePlan: "+100 SMS + 1GB Portabilidade\n",
            wifiText: "SUPER WI-FI 6 AX MESH",
            perks: ["+ WhatsApp Grátis","+ Minutos ilimitados\n", "+ Sem multa", "+ Acúmulo de Gigas"],
            price: 59.99,
            cta: "Onde comprar!",
            // footnote: "Fidelidade de 12 meses",
            bonus: ""
        },
        {
            titleNumber: "38GB",
            titlePlan: "+100 SMS + 1GB Portabilidade\n",
            wifiText: "SUPER WI-FI 6 AX MESH",
            perks: ["+ WhatsApp Grátis","+ Minutos ilimitados\n", "+ Sem multa", "+ Acúmulo de Gigas"],
            price: 69.99,
            cta: "Onde comprar!",
            // footnote: "Fidelidade de 12 meses",
            bonus: "29GB + 9GB Bônus"
        },
        {
            titleNumber: "58GB",
            titlePlan: "+100 SMS + 1GB Portabilidade\n",
            wifiText: "SUPER WI-FI 6 AX MESH",
            perks: ["+ WhatsApp Grátis","+ Minutos ilimitados\n", "+ Sem multa", "+ Acúmulo de Gigas"],
            price: 79.99,
            cta: "Onde comprar!",
            // footnote: "Fidelidade de 12 meses",
            bonus: "39GB + 19GB Bônus"
        },
        {
            titleNumber: "68GB",
            titlePlan: "+100 SMS + 1GB Portabilidade\n",
            wifiText: "SUPER WI-FI 6 AX MESH",
            perks: ["+ WhatsApp Grátis","+ Minutos ilimitados\n", "+ Sem multa", "+ Acúmulo de Gigas"],
            price: 79.99,
            cta: "Onde comprar!",
            // footnote: "Fidelidade de 12 meses",
            bonus: "44GB + 24GB Bônus"
        },
    ]

    return (
        <section>
            <div className={"container"}>
                <div className={"py-8 text-center md:text-left"}>
                    <h3 className={"font-bold text-[22px] md:text-[40px] text-darkgreen"}>Escolha o pré-pago mais adequado pra você</h3>
                    <p className={"font-light text-darkgreen text-[15px] md:text-[26px]"}>Aqui você não paga multa!</p>
                </div>
                <div className={"w-full flex flex-wrap items-center justify-center gap-8"}>
                    {plans.map((elem,index) => <PlanCardMovel plan={elem} key={index}/>)}
                </div>
                <p className={"text-darkgreen text-[10px] text-center py-8"}><span className={"font-bold"}>Promoção Turbo</span>: Os planos de <span className={"font-bold"}>38GB | 58GB e 68GB</span>  estão com condições promocionais disponíveis para recargas feitas até 28/02/2026. Recargas após essa data não terão promoção. Consulte condições em <a className={"underline"} href={"www.lestetelecom.com.br/faq-suporte-plano-turbo"}>www.lestetelecom.com.br/faq-suporte-plano-turbo</a></p>
            </div>
        </section>
    )
}