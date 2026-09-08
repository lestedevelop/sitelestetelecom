export default function LestePlayDisclaimer({className = ""}) {
    return (
        <p className={className}>
            Oferta exclusiva para Niterói/RJ e Maricá/RJ. Sujeita à viabilidade técnica. Fidelidade de 12 meses.
            Combo internet + Leste Play, conforme plano contratado. Conteúdos, canais e funcionalidades variam por
            plano e estão sujeitos a alterações, inclusão, exclusão ou indisponibilidade na plataforma Watch, sem
            aviso prévio. Disponibilidade consultada em 01/09/2026. Consulte condições em{" "}
            <a
                href="https://lestetelecom.com.br/faq"
                className="font-semibold text-primary underline underline-offset-2 hover:text-darkgreen"
            >
                lestetelecom.com.br/faq
            </a>
            .
        </p>
    );
}
