export default function PromotionalCampaignDisclaimer({cities, className = ""}) {
    return (
        <p className={className}>
            Oferta disponível apenas para as cidades de {cities}. Fidelidade de 12 meses. Exclusiva
            para novos assinantes em migração de provedor. Após o período promocional, o valor da mensalidade será
            normalizado de acordo com o plano contratado. Sujeito à viabilidade técnica. Oferta válida até
            30/11/2026. Consulte condições em{" "}
            <a
                href="https://www.lestetelecom.com.br/faq"
                className="font-semibold text-primary underline underline-offset-2 hover:text-darkgreen"
            >
                www.lestetelecom.com.br/faq
            </a>
            .
        </p>
    );
}
