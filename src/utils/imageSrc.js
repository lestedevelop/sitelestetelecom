export function getBase64ImageSrc(item) {
    const base64 = item?.base64;
    if (!base64) return null;

    return `data:image/webp;base64,${base64}`;
}

export function isDataImageSrc(src) {
    return typeof src === "string" && src.startsWith("data:");
}

function resolveNameSrc(name) {
    if (!name) return null;

    const value = String(name);
    if (/^(https?:|data:|blob:|\/)/i.test(value)) return value;
    if (/\.(avif|gif|jpe?g|png|svg|webp)(\?.*)?$/i.test(value)) return `/${value}`;

    return null;
}

export function resolveImageSrc(item, fallback = null) {
    const base64Src = getBase64ImageSrc(item);
    if (base64Src) return base64Src;

    if (!item) return fallback;
    if (typeof item === "string") return item || fallback;

    return (
        item.url ||
        item.src ||
        item.image ||
        item.imageUrl ||
        item.image_url ||
        resolveNameSrc(item.name || item.nome) ||
        fallback
    );
}
