import * as yup from "yup";

export const cadastroCompletoSchema = yup.object({
    nome: yup.string().trim().required("Informe seu nome"),
    cpf: yup.string().trim().required("Informe seu CPF"),
    dataNascimento: yup.string().trim().required("Informe sua data de nascimento"),
    rg: yup.string().trim().required("Informe seu RG"),
    emissorRg: yup.string().trim().required("Informe o emissor do RG"),

    email: yup.string().trim().email("E-mail inválido").required("Informe seu e-mail"),
    confirmacaoEmail: yup
        .string()
        .trim()
        .oneOf([yup.ref("email")], "E-mails não conferem")
        .required("Confirme seu e-mail"),

    celular: yup.string().trim().required("Informe seu celular"),
    telefone: yup.string().trim().nullable(),

    cep: yup.string().trim().required("Informe o CEP"),
    numero: yup.string().trim().required("Informe o número"),
    tipoMoradia: yup.string().oneOf(["predio", "casa"]).required("Selecione o tipo de moradia"),

    rua: yup.string().trim().required("Informe a rua"),
    bairro: yup.string().trim().required("Informe o bairro"),
    cidade: yup.string().trim().required("Informe a cidade"),

    complemento: yup.string().trim().nullable(),
    pontoReferencia: yup.string().trim().nullable(),
});
