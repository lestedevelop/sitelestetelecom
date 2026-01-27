import * as yup from "yup";

export const cadastroInicialSchema = yup.object({
    nome: yup.string().trim().required("Informe seu nome completo"),
    email: yup
        .string()
        .trim()
        .email("E-mail inválido")
        .test("email-domain", "E-mail inválido", (v) => {
            if (!v) return true;
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        })
        .required("Informe seu e-mail"),
    celular: yup.string().trim().required("Informe seu celular/WhatsApp"),

    cep: yup.string().trim().required("Informe seu CEP"),
    numero: yup.string().trim().required("Informe o número"),

    cidade: yup.string().trim().required("Informe a cidade"),
    bairro: yup.string().trim().required("Informe o bairro"),
    rua: yup.string().trim().required("Informe a rua"),

    complemento: yup.string().trim().optional(),
    referencia: yup.string().trim().optional(),

    aceitouPrivacidade: yup
        .boolean()
        .oneOf([true], "Você precisa aceitar as Políticas de Privacidade"),
});
