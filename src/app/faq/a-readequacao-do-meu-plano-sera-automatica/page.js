import ReadequacaoFaqPage from "@/pageComponents/faq/ReadequacaoFaqPage";

const title = "A migração será automática?";

export const metadata = {
  title: `${title} | Leste`,
  description:
    "Entenda quando a migração para a oferta indicada pela Leste pode ocorrer automaticamente.",
};

export default function ReadequacaoAutomatica() {
  return (
    <ReadequacaoFaqPage
      title={title}
      note="Os clientes impactados serão comunicados individualmente com antecedência mínima de 30 dias em relação à implementação da alteração ou encerramento da oferta."
    >
      <p>
        Sim. Caso o cliente não escolha outra oferta disponível dentro do prazo
        informado na comunicação, a migração para a oferta indicada poderá
        ocorrer automaticamente, observadas as condições previstas na
        regulamentação aplicável.
      </p>
      <p>
        A alteração será feita conforme a data informada na comunicação
        encaminhada ao cliente.
      </p>
    </ReadequacaoFaqPage>
  );
}
