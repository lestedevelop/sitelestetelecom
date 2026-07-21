"use client";

import {usePathname} from "next/navigation";
import {isVendasPathname, SITE_GTM_CONTAINER_ID} from "@/lib/gtm/site";

export default function SiteGtm() {
    const pathname = usePathname();

    if (isVendasPathname(pathname)) {
        return null;
    }

    return (
        <noscript>
            <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${SITE_GTM_CONTAINER_ID}`}
                height="0"
                width="0"
                style={{display: "none", visibility: "hidden"}}
                title="Google Tag Manager"
            />
        </noscript>
    );
}
