"use client";

import { createContext, useContext, useEffect, useState } from "react";

const SalesContext = createContext(null);
const STORAGE_KEY = "leste_vendas_data_v1";

export function SalesProvider({ children }) {
    const [hydrated, setHydrated] = useState(false);

    const [data, setData] = useState({
        cadastroInicial: {},
        cadastroCompleto: {},
        plano: {},
        agendamento: {},
    });

    // 🔹 1) Hidrata UMA vez do localStorage
    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && typeof parsed === "object") {
                    setData((prev) => ({
                        ...prev,
                        ...parsed,
                    }));
                }
            }
        } catch (e) {
            console.warn("Falha ao ler localStorage (vendas):", e);
        } finally {
            setHydrated(true);
        }
    }, []);

    // 🔹 2) Atualiza dados em memória
    function updateStep(step, values) {
        setData((prev) => ({
            ...prev,
            [step]: {
                ...prev[step],
                ...values,
            },
        }));
    }

    // 🔹 3) Salva no localStorage SOMENTE depois de hidratar
    useEffect(() => {
        if (!hydrated) return;

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            console.log("📦 SalesContext salvo no localStorage:", data);
        } catch (e) {
            console.warn("Falha ao salvar localStorage (vendas):", e);
        }
    }, [data, hydrated]);

    // 🔹 4) Limpa tudo (útil para QA)
    function clearSales() {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch {}

        setData({
            cadastroInicial: {},
            cadastroCompleto: {},
            plano: {},
            agendamento: {},
        });
    }

    return (
        <SalesContext.Provider
            value={{
                data,
                updateStep,
                clearSales,
                hydrated, // 👈 EXPÕE ISSO
            }}
        >
            {children}
        </SalesContext.Provider>
    );
}

export function useSales() {
    const ctx = useContext(SalesContext);
    if (!ctx) {
        throw new Error("useSales deve ser usado dentro de <SalesProvider>");
    }
    return ctx;
}
