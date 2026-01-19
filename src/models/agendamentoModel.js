import {brToISODate} from "@/utils/Format";

export function buildAgendamentoModel(data) {
    const cadastro = data?.cadastro || {};
    const endereco = cadastro?.endereco || {};
    const plano = data?.plano || data?.planos || {};
    const agendamento = data?.agendamento || {};
    const precadastroBody = data?.precadastroBody || {};

    const responsaveis = Array.isArray(data?.responsaveis)
        ? data.responsaveis.map((responsavel) => mapResponsavel(responsavel,cadastro?.cpf)).filter(Boolean)
        : [];


    return {
        responsaveis,
        precadastro: {
            nome_cli: cadastro?.nome,
            cpf: cadastro?.cpf,
            rg: cadastro?.rg,
            rg_emissor: cadastro?.emissorRg,
            data_nac: brToISODate(cadastro?.dataNascimento),
            e_mail: cadastro?.email,
            celular: cadastro?.celular,
            fone: cadastro?.telefone,
            cep: endereco?.cep,
            nome_cid: cadastro?.cidade,
            bairro: endereco?.bairro,
            rua: endereco?.rua,
            numero: endereco?.numero,
            complemento: endereco?.complemento,
            referencia: endereco?.referencia,
            moradiaTipo: endereco?.moradiaTipo,
            codcid: agendamento?.codcid || data?.codcid,
            id: precadastroBody?.id,
            predio: cadastro?.tipoMoradia === "predio" ? 1 : 0,
            viabilidade:cadastro?.tipo_viabilidade,
            interesse: "sim",
            tipo_cliente: "F",
            obs: "Cliente via site",
        },
        codser: plano.codser,
        vencimento: plano?.vencimento,
        txadesao: plano?.taxaTotal,
        pgtotxadesao: plano?.formaDePagamento,
        event_id:agendamento?.slotId,
    };
}

function mapResponsavel(resp, cpfResponsavel) {
    if (!resp) return null;

    return {
        nome_co_cl: resp?.nome,
        cargo: resp?.cargoParentesco || resp?.cargo,
        e_mail: resp?.email,
        fone: resp?.telefone,
        celular: resp?.celular,
        cpf: resp?.cpf,
        rg: resp?.rg,
        data_nac: brToISODate(resp?.dataNascimento),
        obs: `Responsável do cliente ${cpfResponsavel || ""}`.trim(),
    };
}
