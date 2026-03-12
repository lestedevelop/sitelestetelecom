export const DEFAULT_VENDAS_STEP = "cadastro_inicial";
export const VENDAS_BASE_PATH = "/vendas";

export const VENDAS_STEP_TO_SLUG = {
    cadastro_inicial: "cadastro-inicial",
    cadastro_completo: "cadastro-completo",
    planos: "planos",
    agendamento: "agendamento",
    revisao: "revisao",
    assinatura: "assinatura",
    semViabilidade: "sem-viabilidade",
};

export const VENDAS_ALIAS_REWRITES = Object.values(VENDAS_STEP_TO_SLUG).map((slug) => ({
    source: `/vendas-${slug}`,
    destination: VENDAS_BASE_PATH,
}));

export function normalizeVendasStep(step) {
    return VENDAS_STEP_TO_SLUG[step] ? step : DEFAULT_VENDAS_STEP;
}

export function getVendasPathByStep(step) {
    const safeStep = normalizeVendasStep(step);
    return `/vendas-${VENDAS_STEP_TO_SLUG[safeStep]}`;
}
