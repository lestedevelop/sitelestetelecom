export function formatPrice(value) {
    const n = Number(value || 0);
    const [inteiro, centavos] = n.toFixed(2).split(".");
    return { inteiro, centavos };
}

export function getFirstName(name) {
    if (!name) return "";

    const first = String(name)
        .trim()
        .split(/\s+/)[0];

    return first.charAt(0).toUpperCase() + first.slice(1).toLowerCase();
}

export function getFirstAndInitial(name) {
    if (!name) return "";

    const parts = String(name).trim().split(/\s+/);

    const first =
        parts[0].charAt(0).toUpperCase() + parts[0].slice(1).toLowerCase();

    if (parts.length === 1) return first;

    const secondInitial = parts[1].charAt(0).toUpperCase();

    return `${first} ${secondInitial}.`;
}

export function daysInMonth(date) {
    const y = date.getFullYear();
    const m = date.getMonth();
    return new Date(y, m + 1, 0).getDate();
}

export function toBRL(value) {
    const n = Number(value || 0);
    return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

export function monthNamePT(date) {
    return date.toLocaleDateString("pt-BR", { month: "long" });
}
export function lastDayOfMonthUTC(date) {
    const y = date.getUTCFullYear();
    const m = date.getUTCMonth();
    return new Date(Date.UTC(y, m + 1, 0)); // último dia do mês em UTC
}

export function daysInMonthUTC(date) {
    const y = date.getUTCFullYear();
    const m = date.getUTCMonth();
    return new Date(Date.UTC(y, m + 1, 0)).getUTCDate();
}

