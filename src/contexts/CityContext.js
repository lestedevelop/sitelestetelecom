"use client";

import {createContext, useContext, useEffect, useMemo, useState} from "react";
import {findCodCidByName} from "@/utils/cidade";
import {cidadesMock} from "@/mocks/cidadesMock";

const STORAGE_KEY = "leste_city";

const CityContext = createContext(null);

export function CityProvider({children, defaultCity = "niteroi"}) {
    const [city, setCityState] = useState("");



    const setCity = (nextCity) => {
        const value = String(nextCity || "").toLowerCase();
        setCityState(value);
        window.localStorage.setItem(STORAGE_KEY, value);
    };

    const value = useMemo(() => ({city, setCity, STORAGE_KEY}), [city]);

    return <CityContext.Provider value={value}>{children}</CityContext.Provider>;
}

export function useCity() {
    const ctx = useContext(CityContext);
    if (!ctx) throw new Error("useCity deve ser usado dentro de <CityProvider />");
    return ctx;
}
