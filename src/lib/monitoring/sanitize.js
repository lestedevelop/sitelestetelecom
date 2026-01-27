const REDACT_KEYS = new Set([
    "authorization",
    "cookie",
    "set-cookie",
    "password",
    "senha",
    "token",
    "access_token",
    "refresh_token",
    "cpf",
    "cnpj",
    "email",
    "telefone",
    "phone",
    "celular",
]);

function maskEmail(value) {
    return value.replace(/([\w.+-]{1,2})[\w.+-]*(@[\w.-]+)/g, "$1***$2");
}

function maskPhone(value) {
    return value.replace(/(\+?\d{0,2})?(\d{2})(\d{4,5})(\d{4})/g, (match, cc, ddd, mid, end) => {
        if (!ddd || !end) return match;
        return `${cc || ""}${ddd}****${end}`;
    });
}

function maskCpfCnpj(value) {
    return value
        .replace(/\b(\d{3})\.?\d{3}\.?\d{3}-?(\d{2})\b/g, "$1.***.***-$2")
        .replace(/\b(\d{2})\.?\d{3}\.?\d{3}\/\d{4}-?(\d{2})\b/g, "$1.***.***/****-$2");
}

function sanitizeString(value) {
    let out = String(value);
    out = maskEmail(out);
    out = maskPhone(out);
    out = maskCpfCnpj(out);
    return out;
}

export function sanitize(value, keyHint = "") {
    if (value == null) return value;

    const key = String(keyHint || "").toLowerCase();
    if (REDACT_KEYS.has(key) || key.includes("password") || key.includes("token")) {
        return "[REDACTED]";
    }

    if (typeof value === "string") {
        return sanitizeString(value);
    }

    if (Array.isArray(value)) {
        return value.map((item) => sanitize(item, keyHint));
    }

    if (typeof value === "object") {
        const output = {};
        for (const [k, v] of Object.entries(value)) {
            const lower = k.toLowerCase();
            if (REDACT_KEYS.has(lower) || lower.includes("password") || lower.includes("token")) {
                output[k] = "[REDACTED]";
            } else {
                output[k] = sanitize(v, k);
            }
        }
        return output;
    }

    return value;
}
