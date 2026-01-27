"use client";

import {useEffect} from "react";
import {usePathname} from "next/navigation";
import {ToastContainer} from "react-toastify";
import WhatsAppFloating from "@/components/layout/WhatsAppFloating";
import AppBarNew from "@/components/layout/AppBarNew";
import Footer from "@/components/layout/Footer";
import {init as initMonitoring} from "@/monitoring/client";

export default function RootShell({children}) {
    const pathname = usePathname();
    const layoutOverrideRoutes = ["/movel","/corporate","/vendas","/monitoramento"];
    const isOverrideRoute = layoutOverrideRoutes.some(
        (route) => pathname === route || pathname.startsWith(`${route}/`)
    );

    useEffect(() => {
        initMonitoring();
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
