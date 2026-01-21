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

export function fmtDateBR(iso) {
    if (!iso) return "-";
    const d = new Date(iso);
    return d.toLocaleDateString("pt-BR");
}

export function inferPeriod(title) {
    const t = String(title || "").toUpperCase();
    if (t.includes("MANH")) return "Manhã";
    if (t.includes("TARDE")) return "Tarde";
    return "-";
}

export function clampPercent(p) {
    const n = Number(p || 0);
    if (!Number.isFinite(n)) return 0;
    return Math.max(0, Math.min(100, n));
}

export function brToISODate(br) {
    if (!br) return "";
    const [dd, mm, yyyy] = String(br).split("/");
    if (!dd || !mm || !yyyy) return ""; // força vazio se vier ruim

    // valida simples
    if (dd.length !== 2 || mm.length !== 2 || yyyy.length !== 4) return "";
    if (Number(mm) < 1 || Number(mm) > 12) return "";
    if (Number(dd) < 1 || Number(dd) > 31) return "";

    return `${yyyy}-${mm.padStart(2, "0")}-${dd.padStart(2, "0")}`;
}
