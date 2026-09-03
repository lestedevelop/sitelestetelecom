import ReadequacaoFaqPage from "@/pageComponents/faq/ReadequacaoFaqPage";

const title = "A readequação pode exigir troca de equipamentos?";

export const metadata = {
  title: `${title} | Leste`,
  description:
    "Saiba quando a readequação de uma oferta pode exigir a troca ou inclusão de equipamentos.",
};

export default function ReadequacaoETrocaDeEquipamentos() {
  return (
    <ReadequacaoFaqPage
      title={title}
      note="A troca ou inclusão de equipamentos, quando necessária, será informada previamente ao cliente."
    >
      <p>
        A necessidade de troca, substituição ou inclusão de equipamentos
        dependerá da oferta escolhida e das condições técnicas necessárias para
        sua disponibilização.
      </p>
      <p>
        A migração para a oferta especial indicada na comunicação seguirá as
        condições informadas individualmente ao cliente.
      </p>
      <p>
        Caso o cliente opte por outra oferta, a necessidade de alteração de
        equipamentos será avaliada conforme velocidade, tecnologia, benefícios
        e disponibilidade técnica no endereço.
      </p>
    </ReadequacaoFaqPage>
  );
}
