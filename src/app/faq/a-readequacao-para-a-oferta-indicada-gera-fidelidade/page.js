import ReadequacaoFaqPage from "@/pageComponents/faq/ReadequacaoFaqPage";

const title = "A readequação para a oferta indicada gera fidelidade?";

export const metadata = {
  title: `${title} | Leste`,
  description:
    "Entenda se a migração para a oferta indicada pela Leste inicia um novo período de fidelização.",
};

export default function OfertaIndicadaGeraFidelidade() {
  return (
    <ReadequacaoFaqPage
      title={title}
      note="A readequação para a oferta indicada não gera nova fidelização, mas eventuais condições anteriores devem ser verificadas conforme o contrato vigente."
    >
      <p>
        Não. A migração para a oferta especial indicada na comunicação enviada
        pela Leste não dará início a um novo período de fidelização.
      </p>
      <p>
        Caso exista algum prazo de permanência anteriormente contratado, ele
        deverá ser analisado conforme as condições da oferta original e as
        regras aplicáveis ao encerramento ou à migração da oferta.
      </p>
    </ReadequacaoFaqPage>
  );
}
