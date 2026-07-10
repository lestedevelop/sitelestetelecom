import {getCapturedTrackingFromCookies} from "@/lib/utm";

function getTrackingFields() {
    const {utm, idafiliado} = getCapturedTrackingFromCookies();

    return {
        utm,
        idafiliado,
    };
}

export function buildPreCadastroModel(data){

    return {
        nome_cli: data.nome,
        e_mail: data.email,
        celular: data.celular,
        id: data.id || "",
        cep: data.cep,
        numero: data.numero,
        endereco: data.rua,
        bairro: data.bairro,
        nome_cid: data.cidade,
        complemento: data.complemento,
        referencia: data.referencia,
        viabilidade: data.viabilidade || data.tipo_viabilidade,
        interesse: "sim",
        obs: "Cliente via site",
        ...getTrackingFields(),
    };
}

export function buildCadastroCompletoModel(data){

    return {
        nome_cli: data.nome,
        e_mail: data.email,
        cpf: data.cpf,
        rg:data.rg,
        data_nac: data.dataNascimento,
        rg_emissor: data.emissor_rg,
        celular: data.celular,
        fone: data.telefone,
        id: data.id || "",
        cep: data.cep,
        numero: data.numero,
        endereco: data.rua,
        bairro: data.bairro,
        nome_cid: data.cidade,
        complemento: data.complemento,
        referencia: data.referencia,
        predio: data.tipoMoradia === "predio" ? 1 : 0,
        viabilidade: data.viabilidade || data.tipo_viabilidade,
        interesse: "sim",
        tipo_cliente: "F",
        obs: "Cliente via site",
        ...getTrackingFields(),
    };
}
