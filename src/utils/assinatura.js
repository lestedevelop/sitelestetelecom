
export function pad2(n) {
    return String(n).padStart(2, "0");
}

export function msToMMSS(ms) {
    const total = Math.max(0, Math.floor(ms / 1000));
    const mm = Math.floor(total / 60);
    const ss = total % 60;
    return `${pad2(mm)}:${pad2(ss)}`;
}
export function calcCountdown(startAtMs, totalMs) {
    const now = Date.now();
    const end = startAtMs + totalMs;
    const remainingMs = Math.max(0, end - now);
    const elapsed = Math.min(totalMs, Math.max(0, now - startAtMs));
    const progress = totalMs ? (totalMs - elapsed) / totalMs : 0;

    return { remainingMs, progress };
}
