"use client";

import {useEffect} from "react";
import {usePathname} from "next/navigation";
import {ToastContainer} from "react-toastify";
import WhatsAppFloating from "@/components/layout/WhatsAppFloating";
import AppBarNew from "@/components/layout/AppBarNew";
import Footer from "@/components/layout/Footer";
import {init as initMonitoring} from "@/monitoring/client";

function isVendasPathname(pathname = "") {
    return pathname === "/vendas" || pathname.startsWith("/vendas/") || pathname.startsWith("/vendas-");
}

export default function RootShell({children}) {
    const pathname = usePathname();
    const layoutOverrideRoutes = ["/movel","/corporate","/vendas","/monitoramento"];
    const isBaseOverrideRoute = layoutOverrideRoutes.some(
        (route) => pathname === route || pathname.startsWith(`${route}/`)
    );
    const isOverrideRoute = isBaseOverrideRoute || isVendasPathname(pathname);

    useEffect(() => {
        initMonitoring();
        const root = document.querySelector("#__next");
        if (root) {
            root.setAttribute("data-monitor-ready", "true");
        }
    }, []);

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
