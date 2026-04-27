export const VENDAS_GTM_CONTAINER_ID = "GTM-MJZLNHX8";

export const VENDAS_GTM_FORM_IDS = {
    cadastroInicial: {
        nome: "gtm-vendas-cadastro-inicial-nome",
        email: "gtm-vendas-cadastro-inicial-email",
        celular: "gtm-vendas-cadastro-inicial-celular",
        cep: "gtm-vendas-cadastro-inicial-cep",
        numero: "gtm-vendas-cadastro-inicial-numero",
        cidade: "gtm-vendas-cadastro-inicial-cidade",
        bairro: "gtm-vendas-cadastro-inicial-bairro",
        rua: "gtm-vendas-cadastro-inicial-rua",
        complemento: "gtm-vendas-cadastro-inicial-complemento",
        referencia: "gtm-vendas-cadastro-inicial-referencia",
        aceitouPrivacidade: "gtm-vendas-cadastro-inicial-politica-privacidade",
    },
    cadastroCompleto: {
        nome: "gtm-vendas-cadastro-completo-nome",
        cpf: "gtm-vendas-cadastro-completo-cpf",
        dataNascimento: "gtm-vendas-cadastro-completo-data-nascimento",
        rg: "gtm-vendas-cadastro-completo-rg",
        emissorRg: "gtm-vendas-cadastro-completo-emissor-rg",
        email: "gtm-vendas-cadastro-completo-email",
        confirmacaoEmail: "gtm-vendas-cadastro-completo-confirmacao-email",
        celular: "gtm-vendas-cadastro-completo-celular",
        telefone: "gtm-vendas-cadastro-completo-telefone",
        cep: "gtm-vendas-cadastro-completo-cep",
        numero: "gtm-vendas-cadastro-completo-numero",
        tipoMoradiaPredio: "gtm-vendas-cadastro-completo-tipo-moradia-predio",
        tipoMoradiaCasa: "gtm-vendas-cadastro-completo-tipo-moradia-casa",
        rua: "gtm-vendas-cadastro-completo-rua",
        bairro: "gtm-vendas-cadastro-completo-bairro",
        cidade: "gtm-vendas-cadastro-completo-cidade",
        complemento: "gtm-vendas-cadastro-completo-complemento",
        referencia: "gtm-vendas-cadastro-completo-referencia",
    },
    responsavel: {
        nome: "gtm-vendas-responsavel-nome",
        cpf: "gtm-vendas-responsavel-cpf",
        dataNascimento: "gtm-vendas-responsavel-data-nascimento",
        rg: "gtm-vendas-responsavel-rg",
        cargoParentesco: "gtm-vendas-responsavel-cargo-parentesco",
        email: "gtm-vendas-responsavel-email",
        celular: "gtm-vendas-responsavel-celular",
        telefone: "gtm-vendas-responsavel-telefone",
    },
    agendamento: {
        periodoManha: "gtm-vendas-agendamento-periodo-manha",
        periodoTarde: "gtm-vendas-agendamento-periodo-tarde",
    },
    revisao: {
        aceitouTaxa: "gtm-vendas-revisao-aceite-taxa",
        aceitouPrivacidade: "gtm-vendas-revisao-aceite-politica-privacidade",
    },
};

export const VENDAS_GTM_PAYMENT_IDS = {
    pix_instalacao: "gtm-vendas-pagamento-pix-instalacao",
    credito_instalacao: "gtm-vendas-pagamento-credito-instalacao",
    debito_instalacao: "gtm-vendas-pagamento-debito-instalacao",
    credito_parcelado: "gtm-vendas-pagamento-credito-10x-instalacao",
};

export const VENDAS_GTM_BUTTON_IDS = {
    cadastroInicialContinuar: "gtm-vendas-cadastro-inicial-continuar",
    cadastroCompletoContinuar: "gtm-vendas-cadastro-completo-continuar",
    planosContinuar: "gtm-vendas-planos-continuar",
    agendamentoContinuar: "gtm-vendas-agendamento-continuar",
    revisaoContinuar: "gtm-vendas-revisao-continuar",
    responsavelAdicionar: "gtm-vendas-responsavel-adicionar",
    assinaturaAssinar: "gtm-vendas-assinatura-assinar",
};

function sanitizeIdSegment(value) {
    return String(value || "")
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-zA-Z0-9_-]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .toLowerCase();
}

export function getPlanoButtonId(plan) {
    const codser = String(plan?.codser || "").trim();

    if (codser) {
        return codser;
    }

    const fallback = sanitizeIdSegment(plan?.id || plan?.nome_exibicao || "sem-id");
    return `gtm-vendas-plano-${fallback || "sem-id"}`;
}
