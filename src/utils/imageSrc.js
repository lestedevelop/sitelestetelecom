function resolveNameSrc(name) {
    if (!name) return null;

    const value = String(name);
    if (/^(https?:|data:|blob:|\/)/i.test(value)) return value;
    if (/\.(avif|gif|jpe?g|png|svg|webp)(\?.*)?$/i.test(value)) return `/${value}`;

    return null;
}

const HOME_IMAGE_CACHE_VERSION = "2";

function withHomeImageCacheVersion(value) {
    if (!value || value.includes("siteImageVersion=")) return value;
    const separator = value.includes("?") ? "&" : "?";
    return `${value}${separator}siteImageVersion=${HOME_IMAGE_CACHE_VERSION}`;
}

function resolveApiImageSrc(value) {
    if (typeof value !== "string") return value;

    const coreImagePath = "/api/sac/externo/home/image";
    const siteImagePath = "/api/home/image";
    if (value.startsWith(coreImagePath)) {
        return withHomeImageCacheVersion(value.replace(coreImagePath, siteImagePath));
    }

    if (value.startsWith(siteImagePath)) {
        return withHomeImageCacheVersion(value);
    }

    if (/^https?:\/\//i.test(value)) {
        try {
            const url = new URL(value);
            if (url.pathname === coreImagePath) {
                return withHomeImageCacheVersion(`${siteImagePath}${url.search}`);
            }
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
