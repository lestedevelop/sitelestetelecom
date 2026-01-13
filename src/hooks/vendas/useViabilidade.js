"use client";

import { useRef, useState, useCallback } from "react";
import { getViabilidade } from "@/pageComponents/vendas/api/viabilidade";

export function useViabilidade({ setValue, trigger, updateStep, stepKey }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const abortRef = useRef(null);
    const lastKeyRef = useRef("");

    const checkViabilidade = useCallback(
        async ({ cep, numero }) => {
            const cepDigits = String(cep || "").replace(/\D/g, "");
            const numeroStr = String(numero || "").trim();

            // só faz request com CEP completo e número
            if (cepDigits.length !== 8 || !numeroStr) return;

            const key = `${cepDigits}-${numeroStr}`;
            if (lastKeyRef.current === key) return;
            lastKeyRef.current = key;

            // cancela request anterior
            if (abortRef.current) abortRef.current.abort();
            const controller = new AbortController();
            abortRef.current = controller;

            try {
                setError("");
                setLoading(true);

                const resp = await getViabilidade({
                    cep: formatCep(cepDigits),
                    numero: numeroStr,
                    signal: controller.signal,
                });

                const v = Array.isArray(resp) ? resp[0] : resp;

                // ✅ garante que vai pro input (e valida)
                if (v?.cidade) setValue("cidade", v.cidade, { shouldValidate: true, shouldDirty: true });
                if (v?.bairro) setValue("bairro", v.bairro, { shouldValidate: true, shouldDirty: true });
                if (v?.logradouro) setValue("rua", v.logradouro, { shouldValidate: true, shouldDirty: true });

                // força revalidação visual caso o form esteja “teimoso”
                if (trigger) await trigger(["cidade", "bairro", "rua"]);

                // guarda no contexto tb
                // updateStep(stepKey, {
                //     cep: formatCep(cepDigits),
                //     numero: numeroStr,
                //     viabilidade: v,
                // });
            } catch (e) {
                if (e?.name === "AbortError") return;
                setError(e?.message || "Erro ao validar viabilidade");
            } finally {
                setLoading(false);
            }
        },
        [setValue, trigger, updateStep, stepKey]
    );

    return { checkViabilidade, loading, error };
}

function formatCep(cepDigits) {
    if (cepDigits.length !== 8) return cepDigits;
    return `${cepDigits.slice(0, 5)}-${cepDigits.slice(5)}`;
}
