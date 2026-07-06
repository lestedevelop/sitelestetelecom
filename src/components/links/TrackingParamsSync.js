"use client";

import {useEffect} from "react";
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {hasTrackingParams, shouldTrackHref, withTrackingParams} from "@/lib/trackingParams";

function syncAnchorTrackingParams(searchParams) {
    if (typeof window === "undefined" || !hasTrackingParams(searchParams)) return;

    document.querySelectorAll("a[href]").forEach((anchor) => {
        const href = anchor.getAttribute("href");
        const trackedHref = withTrackingParams(href, searchParams, window.location.origin);

        if (trackedHref !== href) {
            anchor.setAttribute("href", trackedHref);
        }
    });
}

export default function TrackingParamsSync() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const search = searchParams.toString();

    useEffect(() => {
        if (!hasTrackingParams(searchParams)) return;

        syncAnchorTrackingParams(searchParams);

        const observer = new MutationObserver(() => {
            syncAnchorTrackingParams(searchParams);
        });

        observer.observe(document.body, {
            attributes: true,
            attributeFilter: ["href"],
            childList: true,
            subtree: true,
        });

        function handleTrackedClick(event) {
            if (
                event.defaultPrevented ||
                event.button !== 0 ||
                event.metaKey ||
                event.ctrlKey ||
                event.shiftKey ||
                event.altKey
            ) {
                return;
            }

            const anchor = event.target?.closest?.("a[href]");

            if (!anchor) return;

            const href = anchor.getAttribute("href");
            const isTrackableHref = shouldTrackHref(href, window.location.origin);

            if (!isTrackableHref) return;

            const trackedHref = withTrackingParams(href, searchParams, window.location.origin);

            anchor.setAttribute("href", trackedHref);

            if (anchor.target && anchor.target !== "_self") {
                return;
            }

            event.preventDefault();

            const trackedUrl = new URL(trackedHref, window.location.origin);

            if (trackedUrl.origin === window.location.origin) {
                router.push(`${trackedUrl.pathname}${trackedUrl.search}${trackedUrl.hash}`);
                return;
            }

            window.location.assign(trackedUrl.toString());
        }

        document.addEventListener("click", handleTrackedClick, true);

        return () => {
            observer.disconnect();
            document.removeEventListener("click", handleTrackedClick, true);
        };
    }, [pathname, router, search, searchParams]);

    return null;
}
