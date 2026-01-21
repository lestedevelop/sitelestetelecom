"use client";

import {createContext, useContext, useEffect, useMemo, useState} from "react";

const SiteContext = createContext(null);
const STORAGE_KEY = "leste_site_v1";

const initialState = {
    city: null,
    cityModalOpen: false,
    planos: [],
};

export function SiteProvider({children, defaultCity = null}) {
    const [hydrated, setHydrated] = useState(false);
    const [site, setSite] = useState({
        ...initialState,
        ...(defaultCity ? {city: defaultCity} : {}),
    });

    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && typeof parsed === "object") {
                    setSite({
                        ...initialState,
                        ...parsed,
                        city: parsed.city || (defaultCity ? defaultCity : null),
                        cityModalOpen: !!parsed.cityModalOpen,
                    });
                }
            } else if (defaultCity) {
                setSite((prev) => ({...prev, city: defaultCity}));
            }
        } catch (e) {
            console.warn("Falha ao ler localStorage (site):", e);
            if (defaultCity) setSite((prev) => ({...prev, city: defaultCity}));
        } finally {
            setHydrated(true);
        }
    }, []);

    const codcid = useMemo(() => {
        const v = site?.city?.value;
        return typeof v === "number" ? v : v ? Number(v) : null;
    }, [site?.city?.value]);

    const cityLabel = useMemo(() => site?.city?.label || "", [site?.city?.label]);

    function setCity(cityOption) {
        if (!cityOption) {
            setSite((prev) => ({...prev, city: null}));
            return;
        }

        setSite((prev) => ({
            ...prev,
            city: {
                value: typeof cityOption.value === "number" ? cityOption.value : Number(cityOption.value),
                label: String(cityOption.label || ""),
            },
        }));
    }

    function setCityModalOpen(open) {
        setSite((prev) => ({...prev, cityModalOpen: !!open}));
    }

    function clearSite() {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch {
        }
        setSite({
            ...initialState,
            ...(defaultCity ? {city: defaultCity} : {}),
        });
    }

    function setPlanos(planos) {
        setSite((prev) => ({
            ...prev,
            planos,
            homeLoaded: true,
        }));
    }

    function clearPlanos() {
        setSite((prev) => ({
            ...prev,
            planos: null,
            homeLoaded: false,
        }));
    }


    useEffect(() => {
        if (!hydrated) return;

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(site));
        } catch (e) {
            console.warn("Falha ao salvar localStorage (site):", e);
        }
    }, [site, hydrated]);

    const value = useMemo(
        () => ({
            site,
            hydrated,
            codcid,
            cityLabel,
            setCity,
            clearSite,
            setPlanos,
            clearPlanos,
            setCityModalOpen,
            STORAGE_KEY,
        }),
        [site, hydrated, codcid, cityLabel]
    );

    return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
    const ctx = useContext(SiteContext);
    if (!ctx) throw new Error("useSite deve ser usado dentro de <SiteProvider />");
    return ctx;
}
