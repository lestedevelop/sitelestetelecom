"use client";

import {Suspense} from "react";
import {usePathname} from "next/navigation";
import {ToastContainer} from "react-toastify";
import AppBarNew from "@/components/layout/AppBarNew";
import Footer from "@/components/layout/Footer";
import WhatsAppFloating from "@/components/layout/WhatsAppFloating";
import TrackingParamsSync from "@/components/links/TrackingParamsSync";
import {isVendasPathname} from "@/lib/gtm/site";

export default function RootShell({children}) {
    const pathname = usePathname();
    const layoutOverrideRoutes = ["/movel","/corporate","/vendas", "/ultra"];
    const isBaseOverrideRoute = layoutOverrideRoutes.some(
        (route) => pathname === route || pathname.startsWith(`${route}/`)
    );
    const isOverrideRoute = isBaseOverrideRoute || isVendasPathname(pathname);

    if (isOverrideRoute) {
        return (
            <>
                <Suspense fallback={null}>
                    <TrackingParamsSync/>
                </Suspense>
                {children}
            </>
        );
    }

    return (
        <>
            <Suspense fallback={null}>
                <TrackingParamsSync/>
            </Suspense>
            <AppBarNew/>
            {children}
            <WhatsAppFloating/>
            <ToastContainer
                position="top-right"
                autoClose={4000}
                newestOnTop
                closeOnClick
                pauseOnHover
            />
            <Footer/>
        </>
    );
}
