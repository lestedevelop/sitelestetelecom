import * as yup from "yup";

export const cadastroCompletoSchema = yup.object({
    cpf: yup.string().trim().required("Informe seu CPF"),
    nascimento: yup.string().trim().required("Informe sua data de nascimento"),
    rg: yup.string().trim().required("Informe seu RG"),
    emissorRg: yup.string().trim().required("Informe o emissor do RG"),

    emailConfirmacao: yup
        .string()
        .trim()
        .oneOf([yup.ref("email")], "E-mails não conferem")
        .required("Confirme seu e-mail"),

    telefone: yup.string().trim().optional(),

    tipoMoradia: yup
        .mixed()
        .oneOf(["predio", "casa"])
        .required("Selecione o tipo de moradia"),
});
