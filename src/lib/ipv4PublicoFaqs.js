const p = (text) => ({ type: "paragraph", text });
const list = (items) => ({ type: "list", style: "unordered", items });

function createFaq(slug, title, blocks) {
  return {
    slug,
    title,
    isValid: true,
    content: {
      schemaVersion: 1,
      format: "blocks",
      category: { label: "IPv4 Público" },
      blocks: blocks.map((block, index) => ({
        ...block,
        id: `${slug}-${index + 1}`,
      })),
    },
  };
}

const faqEntries = [
  [
    "o-que-e-o-ipv4-publico",
    "O que é o IPv4 Público?",
    [
      p("O IPv4 Público é um endereço IPv4 válido, fixo e exclusivo, com custo adicional mensal, disponibilizado para a conexão do cliente."),
      p("É indicado para acesso remoto a câmeras (CFTV/DVR), servidores domésticos, VPN pessoal, automação residencial, jogos online e hospedagem de serviços pessoais."),
      p("Diferentemente do IPv4 compartilhado fornecido por meio de CGNAT, o IPv4 Público não é compartilhado com outros clientes, permitindo que determinadas aplicações recebam conexões externas diretamente pela internet."),
      p("O padrão das conexões ofertadas nos planos de varejo é sempre IPv4 dinâmico entregue via CGNAT."),
      p("A contratação do IPv4 fixo não permite revenda, comercialização ou compartilhamento de serviços. O IPv4 é para uso individual por residência ou pequena empresa, assim como o plano de acesso."),
      p("A Leste se reserva o direito de cancelar o serviço imediatamente, em separado ou em conjunto com o plano de acesso, a seu critério, em caso de mau uso, como:"),
      list([
        "Servidores de pirataria de software.",
        "Infração de direitos autorais (copyrights).",
        "Servidores de listas de vídeo, box pirata ou TV box.",
        "Infração de qualquer lei ou regulamento nacional.",
        "Serviços que possam colocar em risco a segurança da rede da Leste ou de outras empresas de telecomunicações.",
        "Compartilhamento da conexão com outros usuários, residências ou empresas.",
        "Utilização em plataforma para envio massivo de e-mails não solicitados que resulte em bloqueio, inclusão em blocklists/blacklists ou comprometimento da reputação da infraestrutura, dos IPs ou dos domínios utilizados.",
      ]),
      p("O endereçamento do IPv4 (IP real) pode ser alterado conforme a necessidade da operadora, mediante aviso prévio."),
    ],
  ],
  [
    "o-ipv4-publico-e-um-servico-adicional-ao-plano-de-internet",
    "O IPv4 Público é um serviço adicional ao plano de internet?",
    [
      p("O serviço é contratado separadamente e depende da existência de um acesso de internet Fibra Leste ativo, além do atendimento às condições de elegibilidade comercial e técnica, sendo o IPv4 Público um serviço adicional."),
    ],
  ],
  [
    "qual-e-o-valor-do-ipv4-publico",
    "Qual é o valor do IPv4 Público?",
    [
      p("O valor do serviço deve ser consultado de acordo com a oferta comercial vigente no momento da contratação."),
      p("As condições de preço e cobrança serão apresentadas no momento da contratação."),
    ],
  ],
  [
    "qual-a-diferenca-entre-ipv4-publico-e-cgnat",
    "Qual a diferença entre IPv4 Público e CGNAT?",
    [
      p("No CGNAT, um mesmo endereço IPv4 público pode ser compartilhado entre diversos clientes. O cliente utiliza um endereço interno na rede da prestadora, enquanto a conexão com a internet é realizada por meio de um endereço público compartilhado."),
      p("No IPv4 Público, o cliente recebe um endereço IPv4 válido, fixo e exclusivo, não compartilhado simultaneamente com outros clientes."),
      p("Essa diferença permite que determinados serviços que necessitam receber conexões externas sejam configurados diretamente na conexão do cliente."),
      p("A utilização de CGNAT é uma solução reconhecida no setor de telecomunicações em razão da limitação de endereços IPv4 disponíveis. A Anatel também prevê a evolução das redes para IPv6, inclusive mediante utilização conjunta de IPv4 e IPv6."),
    ],
  ],
  [
    "o-ipv4-publico-aumenta-a-velocidade-da-minha-internet",
    "O IPv4 Público aumenta a velocidade da minha internet?",
    [
      p("O serviço não altera a velocidade contratada do seu plano de internet."),
      p("Sua velocidade de download e upload permanece a mesma prevista na oferta contratada."),
    ],
  ],
  [
    "o-ipv4-publico-melhora-o-sinal-ou-o-alcance-do-wi-fi",
    "O IPv4 Público melhora o sinal ou o alcance do Wi-Fi?",
    [
      p("O IPv4 Público não aumenta o alcance, a intensidade ou a qualidade do sinal Wi-Fi."),
      p("O desempenho do Wi-Fi depende, entre outros fatores, do roteador utilizado, da distância dos dispositivos, de obstáculos físicos, de interferências e da quantidade de equipamentos conectados."),
      p("Essa condição está expressamente prevista no Termo de Ativação do serviço."),
    ],
  ],
  [
    "o-ipv4-publico-melhora-o-ping-ou-reduz-a-latencia",
    "O IPv4 Público melhora o ping ou reduz a latência?",
    [
      p("A contratação do IPv4 Público não tem como finalidade reduzir o ping ou melhorar a latência da conexão."),
      p("A latência pode ser influenciada pela distância até o servidor de destino, pelas rotas utilizadas, pelo congestionamento da rede e por outros fatores relacionados à conexão e ao serviço acessado."),
    ],
  ],
  [
    "o-ipv4-publico-libera-todas-as-portas-da-conexao",
    "O IPv4 Público libera todas as portas da conexão?",
    [
      p("A contratação do IPv4 Público não significa que todas as portas estarão automaticamente abertas."),
      p("Por questões de segurança, o roteador pode manter conexões externas bloqueadas até que sejam realizadas as configurações necessárias."),
      p("Além disso, conforme previsto no Termo de Ativação, portas inferiores a 1024 são bloqueadas por políticas de segurança."),
      p("O cliente poderá realizar o redirecionamento de portas utilizando portas acima de 1024, observadas as configurações e limitações de seus próprios equipamentos."),
    ],
  ],
  [
    "e-possivel-fazer-port-forwarding-com-o-ipv4-publico",
    "É possível fazer Port Forwarding com o IPv4 Público?",
    [
      p("O IPv4 Público possibilita a utilização de Port Forwarding (redirecionamento de portas), desde que o equipamento do cliente ofereça suporte à funcionalidade e esteja corretamente configurado."),
      p("O redirecionamento pode ser utilizado, por exemplo, para permitir o acesso externo a câmeras, servidores e outros equipamentos ou aplicações."),
    ],
  ],
  [
    "a-leste-configura-equipamentos-ou-vpn-para-o-cliente",
    "A Leste configura câmeras, DVR, NVR, servidores ou VPN para o cliente?",
    [
      p("A Leste disponibiliza o endereço IPv4 Público, mas não realiza a configuração de equipamentos, aplicações ou sistemas particulares do cliente, tais como:"),
      list([
        "Câmeras.",
        "DVR.",
        "NVR.",
        "Servidores.",
        "VPN.",
        "Sistemas de automação.",
        "Acesso remoto.",
        "Demais equipamentos e aplicações particulares.",
      ]),
      p("A configuração desses recursos é de responsabilidade do cliente ou do profissional contratado pelo cliente."),
    ],
  ],
  [
    "a-leste-garante-que-determinada-aplicacao-funcionara-com-ipv4-publico",
    "Se o cliente contratar o IPv4 Público, a Leste garante que determinada aplicação funcionará?",
    [
      p("O serviço disponibiliza o endereço IPv4 público, fixo e exclusivo, mas o funcionamento de uma aplicação específica depende também de fatores externos à Leste, incluindo:"),
      list([
        "Compatibilidade do equipamento.",
        "Configuração do roteador.",
        "Configuração do firewall.",
        "Configuração da aplicação.",
        "Portas utilizadas.",
        "Protocolo utilizado.",
        "Configuração do equipamento de destino.",
        "Regras do próprio serviço ou aplicação.",
      ]),
      p("A contratação do IPv4 Público não representa garantia de funcionamento de aplicações ou equipamentos específicos."),
    ],
  ],
  [
    "o-endereco-ipv4-sera-sempre-o-mesmo",
    "O endereço IPv4 será sempre o mesmo?",
    [
      p("O serviço contratado é de IPv4 público, fixo e exclusivo."),
      p("O endereço permanece vinculado à conexão enquanto o serviço estiver ativo e forem mantidas as condições técnicas necessárias."),
      p("Entretanto, conforme previsto no Termo de Ativação, em situações de necessidade técnica ou operacional, o endereço poderá ser alterado pela Leste, mediante comunicação prévia."),
    ],
  ],
  [
    "o-cliente-pode-solicitar-a-troca-do-endereco-ipv4",
    "O cliente pode solicitar a troca do endereço IPv4?",
    [
      p("Eventuais solicitações de alteração do endereço IPv4 estarão sujeitas à análise técnica da Leste e à disponibilidade e viabilidade da alteração."),
      p("Não há garantia de atendimento automático da solicitação."),
    ],
  ],
  [
    "o-que-acontece-com-o-ipv4-se-o-cliente-cancelar-a-internet",
    "O que acontece com o IPv4 se o cliente cancelar a internet?",
    [
      p("O IPv4 Público está vinculado à conexão de internet Fibra Leste."),
      p("Assim, o cancelamento ou encerramento da conexão de internet à qual o serviço está vinculado impossibilita a continuidade da utilização daquele IPv4."),
    ],
  ],
  [
    "o-ipv4-publico-substitui-o-ipv6",
    "O IPv4 Público substitui o IPv6?",
    [
      p("Não. O IPv4 Público não substitui o IPv6. São protocolos diferentes e podem funcionar simultaneamente na mesma conexão."),
      p("O IPv4 ainda é amplamente utilizado na internet, enquanto o IPv6 foi criado para ampliar a quantidade de endereços disponíveis e permitir a evolução das redes."),
      p("Em uma conexão com Dual Stack, por exemplo, o cliente pode utilizar IPv4 Público e IPv6 ao mesmo tempo, e cada serviço utiliza o protocolo compatível."),
    ],
  ],
  [
    "ter-ipv4-publico-significa-que-a-rede-ficara-vulneravel",
    "Ter IPv4 Público significa que a rede ficará vulnerável?",
    [
      p("O IP público permite que a conexão seja alcançada diretamente pela internet, mas isso não significa que todos os equipamentos estarão automaticamente acessíveis."),
      p("Para aumentar a segurança, mantenha seu roteador e equipamentos atualizados, utilize senhas fortes, mantenha o firewall ativado e disponibilize somente as portas necessárias."),
    ],
  ],
  [
    "preciso-contratar-o-ipv4-publico-para-navegar-na-internet",
    "Preciso contratar o IPv4 Público para navegar na internet?",
    [
      p("O IPv4 Público é um serviço adicional, destinado a situações específicas nas quais o cliente necessita de um endereço IPv4 público, fixo e exclusivo."),
      p("Para navegar, assistir a vídeos, utilizar redes sociais e realizar outras atividades comuns na internet, a contratação do serviço não é necessária."),
    ],
  ],
  [
    "quais-chamados-o-cliente-pode-abrir-sobre-o-ipv4-publico",
    "Quais chamados o cliente pode abrir sobre o IPv4 Público?",
    [
      p("Os chamados podem envolver, principalmente:"),
      list([
        "Dificuldade relacionada ao funcionamento do IPv4.",
        "Impossibilidade de acesso externo após configuração.",
        "Dúvidas sobre Port Forwarding.",
        "Solicitação de verificação do serviço.",
        "Situações relacionadas ao endereço IPv4 disponibilizado.",
      ]),
      p("Quando o problema estiver relacionado à configuração de equipamento ou aplicação particular, o cliente é responsável pela configuração desses recursos."),
    ],
  ],
  [
    "o-que-a-leste-entrega-ao-contratar-o-ipv4-publico",
    "O que a Leste efetivamente entrega ao contratar o IPv4 Público?",
    [
      p("A Leste disponibiliza ao cliente um endereço IPv4 público, fixo e exclusivo, vinculado à conexão de internet contratada."),
      p("A contratação do IPv4 Público disponibiliza o recurso de conectividade, porém não inclui a configuração ou manutenção das aplicações particulares do cliente."),
      p("A utilização desse endereço em câmeras, servidores, VPNs, sistemas de automação, Port Forwarding ou outras aplicações depende das configurações dos equipamentos e sistemas do próprio cliente."),
    ],
  ],
];

export const IPV4_PUBLICO_FAQS = Object.fromEntries(
  faqEntries.map(([slug, title, blocks]) => [slug, createFaq(slug, title, blocks)]),
);

export function getIpv4PublicoFaqBySlug(slug) {
  return IPV4_PUBLICO_FAQS[slug] || null;
}
