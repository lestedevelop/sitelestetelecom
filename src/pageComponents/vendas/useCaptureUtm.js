"use client";

import { useEffect } from "react";
import { getIdAfiliadoFromUrl, getUtmFromUrl } from "@/lib/utm";

export function useCaptureUtm() {
    useEffect(() => {
        const utm = getUtmFromUrl();
        const idafiliado = getIdAfiliadoFromUrl();

        if (utm) {
            document.cookie =
                `leste_utm=${encodeURIComponent(JSON.stringify(utm))}; path=/; max-age=${60 * 60 * 24 * 7}`;
        }

        if (idafiliado) {
            document.cookie =
                `leste_idafiliado=${encodeURIComponent(idafiliado)}; path=/; max-age=${60 * 60 * 24 * 7}`;
        }
    }, []);
}
