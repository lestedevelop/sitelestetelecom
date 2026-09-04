import ReadequacaoFaqPage from "@/pageComponents/faq/ReadequacaoFaqPage";

const title = "O que acontece com os serviços adicionais na readequação?";

export const metadata = {
  title: `${title} | Leste`,
  description:
    "Entenda como ficam os serviços adicionais e benefícios após a readequação da oferta.",
};

export default function ServicosAdicionaisNaReadequacao() {
  return (
    <ReadequacaoFaqPage
      title={title}
      note="A composição da nova oferta pode variar conforme velocidade, serviços incluídos, benefícios disponíveis e condições comerciais vigentes."
    >
      <p>
        Os serviços adicionais e benefícios incluídos na nova oferta serão
        aqueles indicados na comunicação encaminhada ao cliente.
      </p>
      <p>
        Caso o cliente opte por outra oferta, deverão ser observados os serviços,
        benefícios e condições correspondentes à oferta escolhida.
      </p>
    </ReadequacaoFaqPage>
  );
}
