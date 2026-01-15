"use client";

import { useRef, useState, useCallback } from "react";
import { getViabilidade } from "@/pageComponents/vendas/api/viabilidade";

export function useViabilidade({ setValue, trigger, stepKey, updateStep }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const abortRef = useRef(null);
    const lastKeyRef = useRef("");

    const checkViabilidade = useCallback(
        async ({ cep, numero }) => {
            const cepDigits = String(cep || "").replace(/\D/g, "");
            const numeroStr = String(numero || "").trim();

            if (cepDigits.length !== 8 || !numeroStr) return;

            const key = `${cepDigits}-${numeroStr}`;
            if (lastKeyRef.current === key) return;
            lastKeyRef.current = key;

            if (abortRef.current) abortRef.current.abort();
            const controller = new AbortController();
            abortRef.current = controller;

            try {
                setError("");
                setLoading(true);

                const resp = await getViabilidade({
                    cep: cepDigits,
                    numero: numeroStr,
                    signal: controller.signal,
                });

                const v = Array.isArray(resp) ? resp[0] : resp;


                const cidade = v?.cidade || v?.nome_cid || "";
                const bairro = v?.bairro || "";
                const rua = v?.logradouro || v?.endereco || v?.logradouro_do || "";

                if (cidade) setValue("cidade", cidade, { shouldDirty: true, shouldTouch: true });
                if (bairro) setValue("bairro", bairro, { shouldDirty: true, shouldTouch: true });
                if (rua) setValue("rua", rua, { shouldDirty: true, shouldTouch: true });

                if (trigger) await trigger(["cidade", "bairro", "rua"]);


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
