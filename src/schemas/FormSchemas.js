import * as yup from "yup";

const onlyDigits = (v = "") => v.replace(/\D/g, "");

export const formCompletoSchema = yup.object({
    // Assinante
    nomeAssinante: yup.string().required("Nome obrigatório"),
    cpfAssinante: yup.string().required("CPF obrigatório"),

    // Contato Assinante
    emailAssinante: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
    celularAssinante: yup.string().required("Celular obrigatório"),
    telefoneAssinante: yup.string(),

    // Endereço Assinante
    cepAssinante: yup.string(),
    ruaAssinante: yup.string(),
    numeroAssinante: yup.string(),
    complementoAssinante: yup.string(),
    bairroAssinante: yup.string(),
    cidadeAssinante: yup.string(),
    estadoAssinante: yup.string(),

    // Amigo
    nomeAmigo: yup.string().required("Nome do amigo obrigatório"),
    enderecoAmigo: yup.string().required("Endereço obrigatório"),
    cidadeAmigo: yup.string().required("Cidade obrigatória"),
    celularAmigo: yup.string().required("Celular obrigatório"),
    telefoneAmigo: yup.string(),

    // Extras
    observacoes: yup.string(),
    aceitarPolitica: yup.boolean().oneOf([true], "Aceite os termos"),

    dataNascimento: yup
        .date()
        .typeError("Data inválida")
        .required("Data obrigatória"),

});

export const formIndicateSchema = yup.object({
    // Dados do assinante
    nomeAssinante: yup
        .string()
        .required("Nome obrigatório")
        .min(2, "Nome muito curto"),

    cpfAssinante: yup
        .string()
        .required("CPF obrigatório")
        .min(14, "CPF incompleto"),

    // Dados do amigo
    nomeAmigo: yup
        .string()
        .required("Nome do amigo obrigatório")
        .min(2, "Nome muito curto"),

    enderecoAmigo: yup
        .string()
        .required("Endereço obrigatório")
        .min(3, "Endereço muito curto"),

    cidadeAmigo: yup
        .string()
        .required("Selecione a cidade")
        .notOneOf([""], "Selecione a cidade"),

    celularAmigo: yup
        .string()
        .required("Celular obrigatório")
        .min(15, "Celular incompleto"),

    telefoneAmigo: yup
        .string()
        .nullable()
        .transform((v) => (v === "" ? null : v))
        .min(14, "Telefone incompleto"),
});
