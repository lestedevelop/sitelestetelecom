
export function getBadge(plan) {
    if (Number(plan?.predio) === 1 && Number(plan?.residencial === 0)) return "Plano exclusivo predial";

    const f = plan?.fidelidade;
    if (f) {
        const meses = Number(f);
        if (!Number.isNaN(meses) && meses > 0) return `Fidelidade de ${meses} meses`;
        return "Fidelidade";
    }

    return null;
}

export function getTitle(plan) {

    const down = Number(plan?.down || 0);

    if (down >= 1024) {
        const g = down / 1024;
        return {titleNumber: String(g).replace(".0", ""), titleUnit: "GIGA"};
    }

    if (down > 0) return {titleNumber: String(down), titleUnit: "MEGA"};
    return {titleNumber: "—", titleUnit: ""};
}