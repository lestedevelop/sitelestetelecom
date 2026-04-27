const DEFAULT_REDIRECT_PATH = "/vendas";

function normalizePath(path = "") {
    const trimmed = String(path || "").trim();

    if (!trimmed) return null;
    if (trimmed === "/") return "/";

    return trimmed.startsWith("/") ? trimmed.replace(/\/+$/, "") : `/${trimmed.replace(/\/+$/, "")}`;
}

function parseEnvList(value = "") {
    return String(value || "")
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
}

function buildMatchers(paths = []) {
    return paths
        .map((item) => {
            const isPrefix = item.endsWith("*");
            const rawPath = isPrefix ? item.slice(0, -1) : item;
            const normalizedPath = normalizePath(rawPath);

            if (!normalizedPath) return null;

            return {
                type: isPrefix ? "prefix" : "exact",
                boundary: rawPath.endsWith("/") ? "/" : null,
                path: normalizedPath,
            };
        })
        .filter(Boolean);
}

export const siteLockConfig = {
    enabled: process.env.SITE_LOCK_ENABLED !== "false",
    redirectPath: normalizePath(process.env.SITE_LOCK_REDIRECT_PATH) || DEFAULT_REDIRECT_PATH,
    allowedRoutes: buildMatchers([
        "/vendas",
        "/vendas/*",
        "/vendas-*",
        "/api/vendas/*",
        ...parseEnvList(process.env.SITE_LOCK_ALLOWED_ROUTES),
    ]),
};

export function isRouteAllowed(pathname = "") {
    const normalizedPathname = normalizePath(pathname);

    if (!normalizedPathname) return false;

    return siteLockConfig.allowedRoutes.some((route) => {
        if (route.path === "/") {
            return normalizedPathname === "/";
        }

        if (route.type === "exact") {
            return normalizedPathname === route.path;
        }

        if (route.boundary === "/") {
            return normalizedPathname === route.path || normalizedPathname.startsWith(`${route.path}/`);
        }

        return normalizedPathname === route.path || normalizedPathname.startsWith(route.path);
    });
}
