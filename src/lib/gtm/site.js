export const SITE_GTM_CONTAINER_ID = "GTM-KG29DNH";

export function isVendasPathname(pathname = "") {
    return pathname === "/vendas" || pathname.startsWith("/vendas/") || pathname.startsWith("/vendas-");
}
