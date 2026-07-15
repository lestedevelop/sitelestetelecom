function resolveNameSrc(name) {
    if (!name) return null;

    const value = String(name);
    if (/^(https?:|data:|blob:|\/)/i.test(value)) return value;
    if (/\.(avif|gif|jpe?g|png|svg|webp)(\?.*)?$/i.test(value)) return `/${value}`;

    return null;
}

function resolveApiImageSrc(value) {
    if (typeof value !== "string") return value;

    const coreImagePath = "/api/sac/externo/home/image";
    if (value.startsWith(coreImagePath)) {
        return value.replace(coreImagePath, "/api/home/image");
    }

    if (/^https?:\/\//i.test(value)) {
        try {
            const url = new URL(value);
            if (url.pathname === coreImagePath) return `/api/home/image${url.search}`;
        } catch {
            return value;
        }
    }

    return value;
}

export function resolveImageSrc(item, fallback = null) {
    if (!item) return fallback;
    if (typeof item === "string") return resolveApiImageSrc(item) || fallback;

    const src =
        item.image?.url ||
        item.url ||
        item.src ||
        item.image ||
        item.imageUrl ||
        item.image_url ||
        resolveNameSrc(item.name || item.nome) ||
        fallback;

    return resolveApiImageSrc(src);
}
