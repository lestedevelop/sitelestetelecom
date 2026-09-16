const CATEGORY = "Readequação de Ofertas 2026";

const entries = [
  ["por-que-meu-plano-esta-sendo-alterado", "Por que meu plano está sendo alterado?", [
    "A Leste está realizando uma atualização de seu portfólio comercial, incluindo a revisão e o encerramento de ofertas antigas que não fazem mais parte das condições comerciais atualmente disponibilizadas pela empresa.",
    "Os clientes vinculados às ofertas impactadas estão sendo comunicados individualmente, com antecedência mínima de 30 (trinta) dias, conforme as regras aplicáveis.",
  ]],
  ["o-que-acontecera-com-meu-plano-atual", "O que acontecerá com meu plano atual?", [
    "A partir da data informada na comunicação enviada ao cliente, a oferta atualmente contratada será encerrada e o cliente será migrado para a oferta indicada na comunicação ou para outra de sua livre escolha.",
    "A nova oferta será aquela apresentada individualmente ao cliente, com indicação de sua velocidade, valor e serviços incluídos.",
  ]],
  ["a-migracao-sera-automatica", "A migração será automática?", [
    "Sim. Caso o cliente não opte por outra oferta disponível dentro do prazo informado na comunicação, a migração para a oferta indicada poderá ocorrer automaticamente, observadas as condições previstas na regulamentação aplicável.",
  ]],
  ["por-que-estou-recebendo-uma-nova-oferta", "Por que estou recebendo uma nova oferta?", [
    "A Leste disponibilizará aos clientes opções comerciais compatíveis com a atual estrutura de serviços da empresa, permitindo que o cliente avalie as condições disponíveis e escolha a alternativa que melhor atenda às suas necessidades.",
  ]],
  ["a-migracao-para-a-oferta-indicada-gera-nova-fidelizacao", "A migração para a oferta indicada gera nova fidelização?", [
    "Não.",
    "A migração para a oferta especial indicada na comunicação não dará início a um novo período de fidelização.",
    "Caso o cliente escolha uma oferta que envolva troca ou instalação de equipamentos de tecnologia superior, poderá haver fidelização, conforme as condições específicas da nova oferta, que serão previamente informadas — conforme item 7.",
  ]],
  ["posso-escolher-outra-oferta", "Posso escolher outra oferta?", [
    "Sim.",
    "O cliente poderá consultar as demais ofertas disponíveis no portfólio da Leste e, caso prefira, optar por outra oferta, observadas as condições comerciais e técnicas correspondentes.",
  ]],
  ["se-eu-escolher-outra-oferta-havera-fidelizacao", "Se eu escolher outra oferta, haverá fidelização?", [
    "Dependerá das condições da oferta escolhida.",
    "Algumas ofertas podem envolver instalação, substituição ou inclusão de equipamentos ou outros benefícios e, quando aplicável, poderão prever prazo de permanência mínima, observadas as regras regulamentares.",
    "As condições de eventual fidelização serão informadas previamente ao cliente no momento da escolha da nova oferta.",
  ]],
  ["o-que-acontece-se-eu-nao-quiser-contratar-uma-nova-oferta", "O que acontece se eu não quiser contratar uma nova oferta?", [
    "O cliente que não tiver interesse em permanecer com a Leste poderá solicitar o cancelamento do serviço pelos canais de atendimento disponibilizados pela empresa.",
    "Nas hipóteses de encerramento da oferta, serão observadas as regras regulamentares aplicáveis à rescisão e à eventual existência de prazo de permanência.",
    "Caso o cliente não tenha interesse em permanecer com o serviço nas novas condições, poderá solicitar a rescisão do contrato pelos canais de atendimento da Leste, observadas as regras aplicáveis ao encerramento da oferta e do contrato.",
  ]],
  ["havera-multa-de-fidelizacao-em-razao-da-migracao", "Haverá multa de fidelização em razão da migração?", [
    "A migração para a oferta indicada pela Leste não gera nova fidelização.",
    "Eventual prazo de permanência anteriormente existente deverá ser analisado de acordo com as condições da oferta originalmente contratada e com as regras aplicáveis ao encerramento ou à migração da oferta.",
  ]],
  ["minha-data-de-vencimento-sera-alterada", "Minha data de vencimento será alterada?", [
    "Não.",
    "A data de vencimento do cliente permanecerá a mesma, salvo se houver solicitação ou alteração decorrente de outra contratação realizada pelo próprio cliente.",
  ]],
  ["precisarei-assinar-um-novo-contrato", "Precisarei assinar um novo contrato?", [
    "Não será necessária a assinatura de um novo contrato ou o envio de novos documentos para a migração para a oferta especial indicada na comunicação, observadas as condições informadas ao cliente.",
  ]],
  ["precisarei-trocar-meus-equipamentos", "Precisarei trocar meus equipamentos?", [
    "A necessidade de troca, substituição ou inclusão de equipamentos dependerá da oferta escolhida e das condições técnicas necessárias para sua disponibilização.",
    "A migração para a oferta especial indicada na comunicação seguirá as condições informadas individualmente ao cliente.",
  ]],
  ["o-que-acontecera-com-os-servicos-adicionais-svas", "O que acontecerá com os serviços adicionais (SVAs)?", [
    "Os serviços incluídos na nova oferta serão aqueles indicados na comunicação encaminhada ao cliente.",
    "Caso o cliente opte por outra oferta, deverão ser observados os serviços, benefícios e condições correspondentes à oferta escolhida.",
  ]],
  ["por-que-houve-essa-atualizacao-das-ofertas", "Por que houve essa atualização das ofertas?", [
    "A atualização faz parte da gestão do portfólio comercial da Leste e considera a evolução da infraestrutura, dos serviços disponibilizados, dos equipamentos utilizados e dos custos relacionados à prestação do serviço.",
    "O objetivo é manter ofertas compatíveis com a atual estrutura de serviços e com a evolução da operação.",
  ]],
  ["com-quanto-tempo-de-antecedencia-fui-comunicado", "Com quanto tempo de antecedência fui comunicado?", [
    "Os clientes impactados estão sendo comunicados individualmente com antecedência mínima de 30 (trinta) dias em relação à implementação da alteração/extinção da oferta, conforme as regras aplicáveis.",
  ]],
  ["onde-posso-consultar-outras-ofertas", "Onde posso consultar outras ofertas?", [
    ["As demais ofertas disponíveis podem ser consultadas pelos canais oficiais da Leste, inclusive pelo site ", { text: "www.lestetelecom.com.br", href: "https://www.lestetelecom.com.br" }, ", observadas as condições comerciais e técnicas de cada oferta."],
  ]],
  ["como-posso-solicitar-o-cancelamento", "Como posso solicitar o cancelamento?", [
    "O cancelamento poderá ser solicitado pelos canais oficiais de atendimento da Leste.",
    "A rescisão será processada de acordo com as regras regulamentares e contratuais aplicáveis ao caso.",
  ]],
  ["como-posso-tirar-duvidas-ou-solicitar-o-cancelamento", "Como posso tirar dúvidas ou solicitar o cancelamento?", [
    "O cliente poderá entrar em contato com a Leste pelos canais oficiais de atendimento:",
    ["Telefone/WhatsApp: ", { text: "(21) 2020-1300", href: "https://api.whatsapp.com/send/?phone=552120201300" }],
    ["E-mail: ", { text: "sac@lestetelecom.com.br", href: "mailto:sac@lestetelecom.com.br" }],
    "Também poderá utilizar os canais oficiais da Anatel, quando necessário.",
  ]],
];

export const READEQUACAO_FAQ_ITEMS = entries.map(([slug, title]) => ({
  title,
  href: `/faq/${slug}`,
}));

export function getReadequacaoFaqBySlug(slug) {
  const entry = entries.find(([entrySlug]) => entrySlug === slug);
  if (!entry) return null;
  const [, title, paragraphs] = entry;

  return {
    title,
    updatedAt: "2026-09-16",
    content: {
      category: { label: CATEGORY },
      blocks: paragraphs.map((paragraph, index) =>
        Array.isArray(paragraph)
          ? { id: `${slug}-${index + 1}`, type: "paragraph", segments: paragraph }
          : { id: `${slug}-${index + 1}`, type: "paragraph", text: paragraph },
      ),
    },
  };
}
