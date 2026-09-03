import ReadequacaoFaqPage from "@/pageComponents/faq/ReadequacaoFaqPage";

const title = "Posso escolher outra oferta durante a readequação?";

export const metadata = {
  title: `${title} | Leste`,
  description:
    "Consulte as condições para escolher outra oferta durante a readequação do plano da Leste.",
};

export default function EscolherOutraOfertaDuranteReadequacao() {
  return (
    <ReadequacaoFaqPage
      title={title}
      note="Planos, valores, benefícios e condições podem variar conforme a oferta escolhida e a disponibilidade técnica no endereço."
    >
      <p>
        Sim. O cliente poderá consultar as demais ofertas disponíveis no
        portfólio da Leste e, se preferir, escolher outra opção.
      </p>
      <p>
        A escolha de outra oferta estará sujeita às condições comerciais e
        técnicas correspondentes, como disponibilidade no endereço, velocidade,
        benefícios, equipamentos e valores aplicáveis.
      </p>
      <p>
        As demais ofertas disponíveis podem ser consultadas pelos canais
        oficiais da Leste, inclusive pelo site{" "}
        <a
          href="https://www.lestetelecom.com.br"
          className="font-semibold text-primary underline underline-offset-2"
        >
          www.lestetelecom.com.br
        </a>
        .
      </p>
    </ReadequacaoFaqPage>
  );
}
