"use client";

import {useMemo} from "react";
import {useRouter} from "next/navigation";
import {withTrackingParams} from "@/lib/trackingParams";

export function useTrackedRouter() {
    const router = useRouter();

    return useMemo(() => {
        const track = (href) => {
            const origin = typeof window !== "undefined" ? window.location.origin : undefined;
            const search = typeof window !== "undefined" ? window.location.search : "";

            return withTrackingParams(href, search, origin);
        };

        return {
            ...router,
            push: (href, options) => router.push(track(href), options),
            replace: (href, options) => router.replace(track(href), options),
            prefetch: (href, options) => router.prefetch(track(href), options),
            track,
        };
    }, [router]);
}
