import ReadequacaoFaqPage from "@/pageComponents/faq/ReadequacaoFaqPage";

const title = "A readequação altera vencimento, contrato ou documentos?";

export const metadata = {
  title: `${title} | Leste`,
  description:
    "Confira os efeitos da readequação sobre vencimento, contrato e documentação do cliente.",
};

export default function ReadequacaoVencimentoContratoDocumentos() {
  return (
    <ReadequacaoFaqPage
      title={title}
      note="Caso o cliente escolha outra oferta disponível no portfólio, poderão ser solicitadas novas confirmações, aceite de condições ou assinatura de termo, conforme a contratação realizada."
    >
      <p>
        Não. A data de vencimento do cliente permanecerá a mesma, salvo se
        houver solicitação do próprio cliente ou alteração decorrente de outra
        contratação realizada por ele.
      </p>
      <p>
        Para a migração para a oferta especial indicada na comunicação, não será
        necessária a assinatura de um novo contrato ou o envio de novos
        documentos.
      </p>
      <p>
        A migração seguirá as condições informadas individualmente ao cliente,
        observadas as regras aplicáveis.
      </p>
    </ReadequacaoFaqPage>
  );
}
