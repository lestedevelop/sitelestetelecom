import ReadequacaoFaqPage from "@/pageComponents/faq/ReadequacaoFaqPage";

const title = "O que é a readequação de ofertas para planos antigos?";

export const metadata = {
  title: `${title} | Leste`,
  description:
    "Entenda a atualização do portfólio comercial da Leste e como ela afeta ofertas antigas.",
};

export default function ReadequacaoDeOfertasParaPlanosAntigos() {
  return (
    <ReadequacaoFaqPage
      title={title}
      note="A readequação se aplica apenas aos clientes vinculados às ofertas antigas impactadas pela atualização do portfólio."
    >
      <p>
        A readequação de ofertas para planos antigos é uma atualização do
        portfólio comercial da Leste.
      </p>
      <p>
        Com essa atualização, algumas ofertas antigas deixarão de fazer parte do
        portfólio atualmente disponível e serão encerradas. Essa mudança
        considera a evolução da infraestrutura, dos serviços disponibilizados,
        dos equipamentos utilizados e dos custos relacionados à prestação do
        serviço.
      </p>
      <p>
        Para os clientes vinculados às ofertas impactadas, foram estruturadas
        ofertas específicas, considerando composição de serviços, velocidade,
        benefícios e condições comerciais aplicáveis.
      </p>
      <p>
        Os clientes impactados serão comunicados individualmente, com
        antecedência mínima de 30 dias, antes da implementação da alteração ou
        encerramento da oferta.
      </p>
    </ReadequacaoFaqPage>
  );
}
