export const AUTH_CODE_DURATION_MS = 5 * 60 * 1000;

export function onlyDigits(value) {
  return String(value || "").replace(/\D/g, "");
}

export function normalizeCpf(value) {
  const digits = onlyDigits(value);
  return digits.length === 11 ? digits : "";
}

export function normalizeCellphone(value) {
  let digits = onlyDigits(value);
  if (digits.startsWith("55") && digits.length === 13) digits = digits.slice(2);
  return digits.length === 11 ? digits : "";
}

export function maskCpf(value) {
  const digits = onlyDigits(value).slice(0, 11);
  return digits
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1-$2");
}

export function formatCellphoneInput(value) {
  const digits = onlyDigits(value).slice(0, 11);
  return digits
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}

export function maskCellphone(value) {
  const digits = normalizeCellphone(value) || onlyDigits(value);
  if (digits.length !== 11) return "";
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-****`;
}

export function maskEmail(value) {
  const [name, domain] = String(value || "").trim().split("@");
  if (!name || !domain) return "";
  return `${name.slice(0, 1)}${"*".repeat(Math.max(name.length - 1, 4))}@${domain}`;
}

export function contactConfirmationMatches(method, confirmation, { email, celular }) {
  if (method === "email") {
    const expected = String(email || "").trim().split("@")[0].toLowerCase();
    return Boolean(expected) && String(confirmation || "").trim().toLowerCase() === expected;
  }

  const phone = normalizeCellphone(celular);
  return Boolean(phone) && onlyDigits(confirmation).slice(-4) === phone.slice(-4);
}
