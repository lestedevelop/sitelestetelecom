import { useEffect, useState } from "react";
import { useSite } from "@/contexts/SiteContext";

export function useHomeData() {
    const { codcid, site, setPlanos } = useSite();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!codcid) return;

        if (site?.planos && site?.homeLoaded) return;

        const controller = new AbortController();
        setLoading(true);
        setError(null);

        fetch(`/api/home?cidade=${codcid}`, {
            signal: controller.signal,
        })
            .then((r) => {
                if (!r.ok) throw new Error("Erro ao buscar dados da home");
                return r.json();
            })
            .then((res) => {
                setPlanos(res?.planos || res);
            })
            .catch((err) => {
                if (err.name !== "AbortError") {
                    console.error("HOME FETCH FAIL:", err);
                    setError(err);
                }
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, [codcid]);

    return {
        planos: site?.planos,
        loading,
        error,
    };
}
