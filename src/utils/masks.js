// remove tudo que não for número
export const onlyDigits = (value = "") =>
    value.replace(/\D/g, "");

// ================= CPF =================
export const maskCPF = (value = "") => {
    const v = onlyDigits(value).slice(0, 11);

    return v
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
};

// ================= CEP =================
export const maskCEP = (value = "") => {
    const v = onlyDigits(value).slice(0, 8);
    return v.replace(/(\d{5})(\d)/, "$1-$2");
};

// ================= TELEFONE FIXO =================
export const maskTelefone = (value = "") => {
    const v = onlyDigits(value).slice(0, 10);

    return v
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{4})(\d)/, "$1-$2");
};

// ================= CELULAR =================
export const maskCelular = (value = "") => {
    const v = onlyDigits(value).slice(0, 11);

    return v
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2");
};

// ================= CPF ou CNPJ (opcional) =================
export const maskCpfCnpj = (value = "") => {
    const v = onlyDigits(value);

    if (v.length <= 11) {
        return maskCPF(v);
    }

    return v
        .slice(0, 14)
        .replace(/(\d{2})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1/$2")
        .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
};

export const maskCNPJ = (value = "") => {
    const v = onlyDigits(value).slice(0, 14);

    return v
        .replace(/^(\d{2})(\d)/, "$1.$2")
        .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
        .replace(/\.(\d{3})(\d)/, ".$1/$2")
        .replace(/(\d{4})(\d{1,2})$/, "$1-$2");
};