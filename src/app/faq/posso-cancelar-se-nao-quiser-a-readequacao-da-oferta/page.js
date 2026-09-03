import ReadequacaoFaqPage from "@/pageComponents/faq/ReadequacaoFaqPage";

const title = "Posso cancelar se não quiser a readequação da oferta?";

export const metadata = {
  title: `${title} | Leste`,
  description:
    "Saiba como solicitar o cancelamento caso não queira a readequação da oferta Leste.",
};

export default function CancelamentoDaReadequacao() {
  return (
    <ReadequacaoFaqPage
      title={title}
      note="A solicitação de cancelamento deve ser feita pelos canais oficiais da Leste. Eventuais condições contratuais anteriores deverão ser analisadas conforme o caso."
    >
      <p>
        Sim. O cliente que não tiver interesse em permanecer com a Leste poderá
        solicitar o cancelamento do serviço pelos canais oficiais de
        atendimento.
      </p>
      <p>
        Nas hipóteses de encerramento da oferta, serão observadas as regras
        regulamentares aplicáveis à rescisão e à eventual existência de prazo
        de permanência.
      </p>
    </ReadequacaoFaqPage>
  );
}
