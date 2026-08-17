const p = (text) => ({type: "paragraph", text});
const richP = (segments) => ({type: "paragraph", segments});
const list = (items) => ({type: "list", style: "unordered", items});
const link = (text, href) => ({type: "link", text, href});
const note = (text) => ({type: "note", title: "Nota", blocks: [p(text)]});

function createFaq(slug, title, blocks) {
    const blocksWithIds = blocks.map((block, index) => ({
        ...block,
        id: `${slug}-${index + 1}`,
        blocks: block.blocks?.map((child, childIndex) => ({
            ...child,
            id: `${slug}-${index + 1}-${childIndex + 1}`,
        })),
    }));

    return {
        slug,
        title,
        isValid: true,
        content: {
            schemaVersion: 1,
            format: "blocks",
            category: {label: "Leste Play"},
            blocks: blocksWithIds,
        },
    };
}

const faqEntries = [
    [
        "o-que-e-o-leste-play",
        "O que é o Leste Play?",
        [
            p("O Leste Play é um serviço de entretenimento por streaming oferecido pela Leste em planos com internet fibra."),
            p("Por meio da plataforma Watch, o serviço reúne filmes, séries, canais ao vivo, esportes, notícias, conteúdos infantis, educativos e outros conteúdos digitais em um único lugar."),
            p("O acesso é realizado pelo aplicativo Watch ou pelo site play.watch.tv.br. O Leste Play não utiliza antena e não é uma TV Box, funcionando por meio de aplicativo ou navegador com conexão à internet."),
            link("Acessar play.watch.tv.br", "https://play.watch.tv.br"),
            note("A disponibilidade do Leste Play, dos planos e dos conteúdos pode variar conforme a contratação, o plano ativo e as regras comerciais vigentes."),
        ],
    ],
    [
        "como-contratar-o-leste-play",
        "Como contratar o Leste Play?",
        [
            p("A contratação do Leste Play deve ser realizada pelos canais de atendimento da Leste, por meio da adesão a um dos planos combo disponíveis."),
            list([
                "E-mail: sac@lestetelecom.com.br",
                "WhatsApp e telefone: (021) 2020-1300",
                "Aplicativo: Leste - Central do Assinante",
                "Telegram: @leste_bot",
                "Redes sociais (mensagem privada)",
            ]),
            p("Após a contratação e a ativação do plano principal do combo, a Leste providenciará a criação da conta e enviará as instruções de acesso para o e-mail ou SMS cadastrado pelo cliente."),
            p("A cobrança será realizada pela Leste, conforme o plano contratado e as formas de pagamento disponíveis."),
        ],
    ],
    [
        "como-acessar-o-leste-play-pela-primeira-vez",
        "Como acessar o Leste Play pela primeira vez?",
        [
            p("Após a contratação e a ativação do plano principal do combo, a Leste enviará as instruções de acesso para o e-mail ou SMS cadastrado."),
            p("Para realizar o primeiro acesso, siga o link indicado para a plataforma Watch, cadastre sua senha pessoal e finalize a ativação da conta. Depois disso, o acesso poderá ser realizado pelo aplicativo Watch ou pelo site play.watch.tv.br."),
            link("Acessar play.watch.tv.br", "https://play.watch.tv.br"),
            p("Caso não receba as instruções de acesso, verifique a caixa de spam do seu e-mail e entre em contato com a Leste para confirmar os dados cadastrados e solicitar um novo envio."),
            note("Caso precise de apoio visual, consulte o tutorial de primeiro acesso disponibilizado pela Watch."),
        ],
    ],
    [
        "como-recuperar-a-senha-do-leste-play",
        "Como recuperar a senha do Leste Play?",
        [
            p("Para recuperar sua senha, acesse play.watch.tv.br, clique em “Entrar” e selecione a opção “Esqueci minha senha”."),
            link("Acessar play.watch.tv.br", "https://play.watch.tv.br"),
            p("Informe o e-mail cadastrado e siga as orientações enviadas pela Watch para redefinir o acesso."),
            p("O login do Leste Play é realizado com o e-mail cadastrado. A senha pessoal é criada pelo cliente durante a ativação da conta, seguindo as instruções de acesso enviadas pela Leste."),
            note("Caso o acesso apareça como inativo ou o e-mail de recuperação não seja recebido, entre em contato com a Leste para verificar a situação do cadastro."),
        ],
    ],
    [
        "onde-posso-assistir-o-leste-play",
        "Onde posso assistir o Leste Play?",
        [
            p("O Leste Play pode ser acessado pelo aplicativo oficial da plataforma ou pelo navegador, no endereço play.watch.tv.br."),
            link("Acessar play.watch.tv.br", "https://play.watch.tv.br"),
            p("A plataforma é compatível com smartphones, tablets, computadores, notebooks, Smart TVs e alguns dispositivos de streaming, conforme os requisitos da Watch."),
            p("Para assistir, é necessário ter conexão ativa com a internet. Os conteúdos não podem ser baixados para assistir offline."),
            note("A compatibilidade pode variar conforme o modelo, sistema operacional e atualização do dispositivo. Recomenda-se manter o app, a TV, o navegador ou o dispositivo de streaming sempre atualizados."),
        ],
    ],
    [
        "quais-dispositivos-aceitam-o-leste-play",
        "Quais dispositivos aceitam o Leste Play?",
        [
            p("O Leste Play é compatível com celulares e tablets Android e iOS, navegadores atualizados, Smart TVs compatíveis e alguns dispositivos de streaming."),
            richP([
                "Entre os dispositivos suportados estão Smart TVs ",
                {text: "Samsung", href: "https://descubra.watch.tv.br/tutorial/como-instalar-watch-na-minha-tv-samsung/"},
                ", ",
                {text: "LG", href: "https://descubra.watch.tv.br/tutorial/como-instalar-watch-na-minha-tv-lg/"},
                ", ",
                {text: "Roku", href: "https://descubra.watch.tv.br/tutorial/saiba-como-baixar-a-watch-na-roku-express/"},
                " e ",
                {text: "Android TV", href: "https://descubra.watch.tv.br/tutorial/saiba-como-instalar-o-apptv-da-watch-brasil-na-sua-android-tv-elsys/"},
                ", Fire TV Stick e Mi TV Stick, além de acesso pela web em navegadores como Google Chrome, Mozilla Firefox, Microsoft Edge e Safari, conforme versões compatíveis.",
            ]),
            p("Smart TVs antigas podem deixar de receber atualizações ou não permitir novas instalações do aplicativo. Nesses casos, o acesso pode continuar pelo celular, computador, navegador ou por dispositivos compatíveis."),
            note("Dispositivos com Android Open Source (AOSP), versões antigas de sistemas ou aparelhos sem suporte oficial podem não funcionar corretamente com a Watch."),
        ],
    ],
    [
        "o-app-da-watch-foi-atualizado",
        "O app da Watch foi atualizado?",
        [
            p("Sim. A Watch 2026 é uma nova versão da plataforma, desenvolvida para oferecer navegação mais fluida, interface renovada e maior estabilidade no uso."),
            p("A atualização pode ser feita pela loja de aplicativos do dispositivo. Em Smart TVs e Roku, a atualização costuma ocorrer automaticamente, mas é recomendado verificar se há versão disponível na loja do aparelho."),
            p("A nova versão está sendo liberada gradualmente para celulares, tablets, TVs compatíveis, Fire TV Stick, Roku e web."),
            note("Caso a atualização ainda não esteja disponível para o seu dispositivo, aguarde a liberação gradual ou verifique a compatibilidade do aparelho."),
        ],
    ],
    [
        "como-funcionam-telas-e-perfis-no-leste-play",
        "Como funcionam telas e perfis no Leste Play?",
        [
            p("O Leste Play permite o acesso simultâneo de 2 a 4 telas, conforme as especificações do plano ou combo contratado."),
            p("Também é possível criar até 8 perfis diferentes na conta, incluindo Perfil Kids e perfis com controle parental."),
            p("Para criar ou editar perfis, acesse play.watch.tv.br, faça login, clique no ícone de perfil e selecione “Gerenciar perfis”."),
            link("Acessar play.watch.tv.br", "https://play.watch.tv.br"),
            note("A quantidade de telas contratada aplica-se ao uso na plataforma Leste Play. Aplicativos e serviços de parceiros integrados, como a HBO Max, possuem regras e limites próprios de telas simultâneas, gerenciados diretamente por seus licenciadores."),
        ],
    ],
    [
        "como-criar-perfil-kids-no-leste-play",
        "Como criar Perfil Kids no Leste Play?",
        [
            p("O Perfil Kids permite criar uma experiência de uso com restrição de conteúdo por faixa etária."),
            p("Para criar, acesse play.watch.tv.br, faça login, clique no ícone de perfil, selecione “Gerenciar perfis” e depois “Novo perfil”. Preencha os dados, marque a opção de perfil infantil e escolha a classificação etária desejada."),
            link("Acessar play.watch.tv.br", "https://play.watch.tv.br"),
            p("Também é possível transformar um perfil existente em Perfil Kids, acessando a edição do perfil e ajustando as restrições de visualização."),
            note("O controle parental pode ser aplicado em perfis adultos, com criação de senha de 4 dígitos para restringir alterações e acessos."),
        ],
    ],
    [
        "o-que-esta-incluido-no-leste-play",
        "O que está incluído no Leste Play?",
        [
            p("O Leste Play oferece conteúdos como filmes, séries, desenhos, realities, canais ao vivo, esportes, notícias, conteúdos infantis, educativos e outros títulos de parceiros nacionais e internacionais."),
            p("O catálogo é atualizado semanalmente, com entrada e saída de conteúdos. A plataforma também pode incluir canais ao vivo e conteúdos de parceiros, conforme o plano contratado."),
            p("Alguns conteúdos adicionais, como HBO, Telecine, Premiere ou Combate, podem estar disponíveis conforme o plano ou contratação específica."),
            note("O catálogo, os canais, os parceiros e os conteúdos disponíveis podem variar conforme o plano contratado, a região, os acordos comerciais e o portfólio vigente da Watch."),
        ],
    ],
    [
        "como-acessar-hbo-max-pelo-leste-play",
        "Como acessar HBO Max pelo Leste Play?",
        [
            p("O acesso à HBO Max depende do plano contratado. Caso o serviço esteja incluso, as instruções de ativação serão enviadas conforme a contratação."),
            p("Para ativar, acesse sua conta Leste Play pelo navegador em play.watch.tv.br, faça login, localize a área “Mais diversão pra você” e clique em HBO Max. Depois, siga as instruções da HBO Max para completar o cadastro."),
            link("Acessar play.watch.tv.br", "https://play.watch.tv.br"),
            p("Após a ativação, baixe o aplicativo da HBO Max ou acesse pelo site da plataforma e faça login com os dados cadastrados."),
            note("Se a opção HBO Max não aparecer, verifique se o serviço está incluído no seu plano. Se necessário, consulte o tutorial de ativação da HBO Max pela Watch ou entre em contato com a Leste."),
        ],
    ],
    [
        "como-falar-com-o-suporte-do-leste-play",
        "Como falar com o suporte do Leste Play?",
        [
            p("Para dúvidas sobre contratação, cadastro ativo ou inativo, cobrança e habilitação do serviço, entre em contato com a Leste pelos canais de atendimento."),
            list([
                "WhatsApp e telefone: (021) 2020-1300",
                "E-mail: sac@lestetelecom.com.br",
                "Aplicativo: Leste - Central do Assinante",
                "Telegram: @leste_bot",
                "Redes sociais (mensagem privada)",
            ]),
            p("Problemas de funcionamento da plataforma, como falhas no app, instabilidade, erro de reprodução ou dificuldades técnicas específicas da Watch, podem ser direcionados ao suporte da parceira."),
            p("O suporte da Watch pode ser acionado pelo número: (41) 93500-4848."),
            note("A Leste verifica a situação do cadastro e do plano contratado. O funcionamento técnico da plataforma, do aplicativo e dos conteúdos segue as regras e suporte da Watch."),
        ],
    ],
    [
        "existem-outras-opcoes-de-planos-da-leste",
        "Existem outras opções de planos da Leste?",
        [
            p("Sim. Além dos planos principais, a Leste oferece outros planos com diferentes velocidades e combinações de benefícios para atender às necessidades de cada cliente."),
            p("Dependendo do plano escolhido, você pode contar com benefícios como Skeelo, BeBanca, Leste Clube e Assistência Premium:"),
            list([
                "LESTE 800 AX + Skeelo + BeBanca + Clube + Assistência Premium. Fidelidade de 12 meses — R$ 129,99",
                "LESTE 1GB AX + Skeelo + BeBanca + Clube + Assistência Premium. Fidelidade de 12 meses — R$ 149,99",
            ]),
            p("Se você prefere contratar apenas o serviço de internet, a Leste também oferece planos sem SVA (Serviços de Valor Agregado), que não incluem benefícios adicionais."),
            list([
                "LESTE 600 AC SEM SVA. Fidelidade de 12 meses — R$ 119,99",
                "LESTE 800 AX SEM SVA. Fidelidade de 12 meses — R$ 159,99",
                "LESTE 1GB AX SEM SVA. Fidelidade de 12 meses — R$ 179,99",
            ]),
            note("Planos disponíveis somente para as cidades de Niterói e Maricá."),
        ],
    ],
];

export const LESTE_PLAY_FAQS = Object.fromEntries(
    faqEntries.map(([slug, title, blocks]) => [slug, createFaq(slug, title, blocks)])
);

export function getLestePlayFaqBySlug(slug) {
    return LESTE_PLAY_FAQS[slug] || null;
}
