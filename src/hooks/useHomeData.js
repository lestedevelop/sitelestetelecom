"use client";

import { useEffect, useState } from "react";
import { useCity } from "@/contexts/CityContext";

export function useHomeData() {
    const { city } = useCity();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!city) return;

        let cancelled = false;
        setLoading(true);

        fetch(`/api/home?city=${encodeURIComponent(city)}`)
            .then((r) => r.json())
            .then((json) => {
                if (!cancelled) setData(json);
            })
            .finally(() => {
                if (!cancelled) setLoading(false);
            });

        return () => {
            cancelled = true;
        };
    }, [city]);

    return { city, data, loading };
}
