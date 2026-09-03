import ReadequacaoFaqPage from "@/pageComponents/faq/ReadequacaoFaqPage";

const title = "Onde tirar dúvidas sobre a readequação da minha oferta?";

export const metadata = {
  title: `${title} | Leste`,
  description:
    "Veja os canais oficiais para tirar dúvidas sobre a readequação da sua oferta Leste.",
};

export default function DuvidasSobreReadequacaoDaOferta() {
  return (
    <ReadequacaoFaqPage
      title={title}
      note="Antes de escolher outra oferta ou solicitar o cancelamento, consulte as condições aplicáveis ao seu cadastro, plano atual e oferta indicada na comunicação recebida."
    >
      <p>
        Em caso de dúvidas sobre a readequação, oferta indicada, possibilidade de
        escolha de outro plano ou solicitação de cancelamento, o cliente pode
        entrar em contato com a Leste pelos canais oficiais de atendimento:
      </p>
      <div className="space-y-2">
        <p>
          Telefone/WhatsApp:{" "}
          <a
            href="tel:+552120201300"
            className="font-semibold text-primary underline underline-offset-2"
          >
            (021) 2020-1300
          </a>
        </p>
        <p>
          E-mail:{" "}
          <a
            href="mailto:sac@lestetelecom.com.br"
            className="font-semibold text-primary underline underline-offset-2"
          >
            sac@lestetelecom.com.br
          </a>
        </p>
      </div>
      <p>
        Também é possível utilizar os canais oficiais da Anatel, quando
        necessário.
      </p>
    </ReadequacaoFaqPage>
  );
}
