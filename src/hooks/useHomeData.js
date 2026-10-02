import { useEffect, useRef, useState } from "react";
import { useSite } from "@/contexts/SiteContext";

export function useHomeData() {
    const { codcid, site, setPlanos } = useSite();

    const cityId = codcid || site?.city?.value || ""; //

    const [requestResult, setRequestResult] = useState({ cityId: null, error: null });
    const setPlanosRef = useRef(setPlanos);

    useEffect(() => {
        setPlanosRef.current = setPlanos;
    }, [setPlanos]);

    useEffect(() => {
        if (!cityId) return undefined;

        const controller = new AbortController();

        fetch(`/api/home?cidade=${cityId}`, { signal: controller.signal })
            .then(async (r) => {
                const response = await r.json().catch(() => null);

                if (!r.ok) {
                    const message = response?.message || "Erro ao buscar dados da home";
                    throw new Error(`${message} (${r.status})`);
                }

                return response;
            })
            .then((res) => {
                if (controller.signal.aborted) return;
                setPlanosRef.current(res?.data?.planos || res?.data || res?.planos || []);
                setRequestResult({ cityId, error: null });
            })
            .catch((err) => {
                if (err.name !== "AbortError" && !controller.signal.aborted) {
                    // A home pode continuar com o conteúdo já carregado quando a API estiver indisponível.
                    console.warn("HOME FETCH FAIL:", err.message);
                    setRequestResult({ cityId, error: err });
                }
            });

        return () => controller.abort();
    }, [cityId]);

    const storedPlans = site?.planos;
    const planos = Array.isArray(storedPlans)
        ? storedPlans
        : Array.isArray(storedPlans?.data)
            ? storedPlans.data
            : [];

    return {
        planos,
        loading: Boolean(cityId) && requestResult.cityId !== cityId,
        error: requestResult.cityId === cityId ? requestResult.error : null,
    };
}
