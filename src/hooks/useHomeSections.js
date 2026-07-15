import {useCallback, useEffect, useMemo, useState} from "react";
import {findHomeSection, getCurrentDevice, selectSectionAdverts} from "@/lib/homeSections";

export function useHomeSections() {
    const [home, setHome] = useState(null);
    const [device, setDevice] = useState("desktop");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const mediaQueries = [
            window.matchMedia("(max-width: 767px)"),
            window.matchMedia("(max-width: 1023px)"),
        ];
        const updateDevice = () => setDevice(getCurrentDevice());
        updateDevice();
        mediaQueries.forEach((query) => query.addEventListener("change", updateDevice));
        return () => mediaQueries.forEach((query) => query.removeEventListener("change", updateDevice));
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);

        fetch("/api/home/content", {signal: controller.signal})
            .then((response) => {
                if (!response.ok) throw new Error("Erro ao buscar secoes da home");
                return response.json();
            })
            .then(setHome)
            .catch((fetchError) => {
                if (fetchError.name !== "AbortError") setError(fetchError);
            })
            .finally(() => {
                if (!controller.signal.aborted) setLoading(false);
            });

        return () => controller.abort();
    }, []);

    const sectionsByKey = useMemo(
        () => Object.fromEntries((home?.sections || []).map((section) => [section.key, section])),
        [home]
    );

    const getAdverts = useCallback(
        (key) => selectSectionAdverts(sectionsByKey[key] || findHomeSection(home, key), device),
        [device, home, sectionsByKey]
    );

    return {home, device, loading, error, getAdverts};
}
