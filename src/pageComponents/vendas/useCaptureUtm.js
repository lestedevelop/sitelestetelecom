"use client";

import { useEffect } from "react";
import { getUtmFromUrl } from "@/lib/utm";

export function useCaptureUtm() {
    useEffect(() => {
        const utm = getUtmFromUrl();
        if (!utm) return;

        document.cookie =
            `leste_utm=${encodeURIComponent(JSON.stringify(utm))}; path=/; max-age=${60 * 60 * 24 * 7}`;
    }, []);
}
