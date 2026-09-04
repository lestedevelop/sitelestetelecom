import ReadequacaoFaqPage from "@/pageComponents/faq/ReadequacaoFaqPage";

const title = "O que acontece com meu plano antigo na readequação?";

export const metadata = {
  title: `${title} | Leste`,
  description:
    "Saiba como ocorre a migração de um plano antigo durante a readequação de ofertas da Leste.",
};

export default function PlanoAntigoNaReadequacao() {
  return (
    <ReadequacaoFaqPage
      title={title}
      note="A comunicação enviada ao cliente deve ser consultada para confirmar a oferta indicada, a data de alteração e as condições aplicáveis."
    >
      <p>
        A partir da data informada na comunicação enviada ao cliente, a oferta
        atualmente contratada será encerrada e o cliente será migrado para a
        oferta indicada na comunicação.
      </p>
      <p>
        A nova oferta será apresentada individualmente ao cliente, com
        informações sobre velocidade, valor e serviços incluídos.
      </p>
      <p>
        Caso o cliente prefira, poderá consultar outras ofertas disponíveis no
        portfólio da Leste, observadas as condições comerciais e técnicas de
        cada opção.
      </p>
    </ReadequacaoFaqPage>
  );
}
