export function formatPrice(value) {
    const n = Number(value || 0);
    const [inteiro, centavos] = n.toFixed(2).split(".");
    return { inteiro, centavos };
}