import { useEffect, useState } from "react";
import { useSite } from "@/contexts/SiteContext";

export function useHomeData() {
    const { codcid, site, setPlanos } = useSite();

    const cityId = codcid || site?.city?.value || ""; //

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!cityId) return;

        const controller = new AbortController();

        setLoading(true);
        setError(null);

        setPlanos?.([]);

        fetch(`/api/home?cidade=${cityId}`, { signal: controller.signal })
            .then((r) => {
                if (!r.ok) throw new Error("Erro ao buscar dados da home");
                return r.json();
            })
            .then((res) => {
                setPlanos(res?.planos || res || []);
            })
            .catch((err) => {
                if (err.name !== "AbortError") {
                    console.error("HOME FETCH FAIL:", err);
                    setError(err);
                }
            })
            .finally(() => setLoading(false));

        return () => controller.abort();
    }, [cityId]);

    return {
        planos: site?.planos || [],
        loading,
        error,
    };
}
