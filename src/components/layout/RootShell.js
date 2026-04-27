"use client";

import {usePathname} from "next/navigation";
import {ToastContainer} from "react-toastify";
import WhatsAppFloating from "@/components/layout/WhatsAppFloating";
import AppBarNew from "@/components/layout/AppBarNew";
import Footer from "@/components/layout/Footer";

function isVendasPathname(pathname = "") {
    return pathname === "/vendas" || pathname.startsWith("/vendas/") || pathname.startsWith("/vendas-");
}

export default function RootShell({children}) {
    const pathname = usePathname();
    const layoutOverrideRoutes = ["/movel","/corporate","/vendas"];
    const isBaseOverrideRoute = layoutOverrideRoutes.some(
        (route) => pathname === route || pathname.startsWith(`${route}/`)
    );
    const isOverrideRoute = isBaseOverrideRoute || isVendasPathname(pathname);

    if (isOverrideRoute) {
        return <>{children}</>;
    }

    return (
        <>
            <AppBarNew/>
            {children}
            <ToastContainer
                position="top-right"
                autoClose={4000}
                newestOnTop
                closeOnClick
                pauseOnHover
            />
            <WhatsAppFloating/>
            <Footer/>
        </>
    );
}
