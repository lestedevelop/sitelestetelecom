"use client";

import { createContext, useContext, useEffect, useState } from "react";

const SalesContextNew = createContext(null);
const STORAGE_KEY = "leste_vendas_data_v2";

const initialState = {
    step: "cadastro_inicial",
    cadastro: {},
    plano: {},
    agendamento: {},
    precadastroBody: null,
    responsaveis: [],

};

export function SalesProviderNew({ children }) {
    const [hydrated, setHydrated] = useState(false);
    const [data, setData] = useState(initialState);

    function addResponsavel(responsavel) {
        setData((prev) => ({
            ...prev,
            responsaveis: [...(prev.responsaveis || []), { id: crypto.randomUUID?.() || String(Date.now()), ...responsavel }],
        }));
    }

    function removeResponsavel(id) {
        setData((prev) => ({
            ...prev,
            responsaveis: (prev.responsaveis || []).filter((r) => r.id !== id),
        }));
    }

    function updateResponsavel(id, patch) {
        setData((prev) => ({
            ...prev,
            responsaveis: (prev.responsaveis || []).map((r) => (r.id === id ? { ...r, ...patch } : r)),
        }));
    }

    useEffect(() => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                const parsed = JSON.parse(raw);
                if (parsed && typeof parsed === "object") {
                    setData({
                        ...initialState,
                        ...parsed,
                        cadastro: { ...(parsed.cadastro || {}) },
                        plano: { ...(parsed.plano || {}) },
                        agendamento: { ...(parsed.agendamento || {}) },
                        precadastroBody: parsed.precadastroBody || null,
                    });
                }
            }
        } catch (e) {
            console.warn("Falha ao ler localStorage (vendas):", e);
        } finally {
            setHydrated(true);
        }
    }, []);

    function updateCadastro(values) {
        setData((prev) => ({
            ...prev,
            cadastro: { ...prev.cadastro, ...(values || {}) },
        }));
    }

    function updateStep(step, values) {
        if (step === "cadastro") return updateCadastro(values);

        setData((prev) => ({
            ...prev,
            [step]: {
                ...(prev?.[step] || {}),
                ...(values || {}),
            },
        }));
    }

    function setPrecadastroBody(body) {
        setData((prev) => ({
            ...prev,
            precadastroBody: body || null,
        }));
    }

    function setStep(step) {
        setData((prev) => ({
            ...prev,
            step,
        }));
    }

    function clearSales() {
        try {
            localStorage.removeItem(STORAGE_KEY);
        } catch {}
        setData(initialState);
    }

    useEffect(() => {
        if (!hydrated) return;

        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            console.log("📦 SalesContext salvo no localStorage:", data);
        } catch (e) {
            console.warn("Falha ao salvar localStorage (vendas):", e);
        }
    }, [data, hydrated]);

    return (
        <SalesContextNew.Provider
            value={{
                data,
                hydrated,
                updateCadastro,
                setStep,
                updateStep,
                clearSales,
                setPrecadastroBody,
                addResponsavel,
                removeResponsavel,
                updateResponsavel,
            }}
        >
            {children}
        </SalesContextNew.Provider>
    );
}

export function useSales() {
    const ctx = useContext(SalesContextNew);
    if (!ctx) throw new Error("useSales deve ser usado dentro de <SalesProvider>");
    return ctx;
}
