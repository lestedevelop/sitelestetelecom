import ReadequacaoFaqPage from "@/pageComponents/faq/ReadequacaoFaqPage";

const title = "Escolher outra oferta na readequação pode gerar fidelidade?";

export const metadata = {
  title: `${title} | Leste`,
  description:
    "Entenda quando a escolha de outra oferta durante a readequação pode envolver fidelidade.",
};

export default function OutraOfertaPodeGerarFidelidade() {
  return (
    <ReadequacaoFaqPage
      title={title}
      note="A fidelidade não será aplicada automaticamente pela readequação, mas pode existir caso o cliente escolha uma nova oferta com condições específicas."
    >
      <p>Depende das condições da oferta escolhida.</p>
      <p>
        Algumas ofertas podem envolver instalação, substituição ou inclusão de
        equipamentos ou outros benefícios. Quando aplicável, essas condições
        poderão prever prazo de permanência mínima, observadas as regras
        regulamentares.
      </p>
      <p>
        As condições de eventual fidelização serão informadas previamente ao
        cliente no momento da escolha da nova oferta.
      </p>
    </ReadequacaoFaqPage>
  );
}
