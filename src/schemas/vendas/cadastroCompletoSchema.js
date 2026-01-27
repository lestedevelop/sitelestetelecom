import * as yup from "yup";
import { onlyDigits } from "@/utils/masks";

function isValidCPF(value = "") {
    const cpf = onlyDigits(value);
    if (cpf.length !== 11) return false;
    if (/^(\d)\1{10}$/.test(cpf)) return false;

    let sum = 0;
    for (let i = 0; i < 9; i += 1) {
        sum += Number(cpf[i]) * (10 - i);
    }
    let check = (sum * 10) % 11;
    if (check === 10) check = 0;
    if (check !== Number(cpf[9])) return false;

    sum = 0;
    for (let i = 0; i < 10; i += 1) {
        sum += Number(cpf[i]) * (11 - i);
    }
    check = (sum * 10) % 11;
    if (check === 10) check = 0;

    return check === Number(cpf[10]);
}

export const cadastroCompletoSchema = yup.object({
    nome: yup.string().trim().required("Informe seu nome"),
    cpf: yup
        .string()
        .trim()
        .required("Informe seu CPF")
        .test("cpf-len", "CPF incompleto", (v) => {
            if (!v) return true;
            return onlyDigits(v).length === 11;
        })
        .test("cpf-valid", "CPF inválido", (v) => {
            if (!v) return true;
            return isValidCPF(v);
        }),
    dataNascimento: yup.string().trim().required("Informe sua data de nascimento"),
    rg: yup.string().trim().required("Informe seu RG"),
    emissorRg: yup.string().trim().required("Informe o emissor do RG"),

    email: yup
        .string()
        .trim()
        .email("E-mail inválido")
        .test("email-domain", "E-mail inválido", (v) => {
            if (!v) return true;
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
        })
        .required("Informe seu e-mail"),
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
    referencia: yup.string().trim().nullable(),
});
