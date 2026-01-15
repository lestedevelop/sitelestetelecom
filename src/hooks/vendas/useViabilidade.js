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
                    // se sua API espera com hífen, formata aqui; se aceita digits, deixa digits
                    cep: cepDigits,
                    numero: numeroStr,
                    signal: controller.signal,
                });

                const v = Array.isArray(resp) ? resp[0] : resp;

                setValue("viabilidade", v?.tipo_viabilidade || v?.tipo_viabilidade_nome || v?.viabilidade || "", {
                    shouldDirty: true,
                    shouldValidate: false,
                });


                //
                // // ✅ preenche inputs
                // if (v?.cidade) setValue("cidade", v.cidade, { shouldValidate: true, shouldDirty: true });
                // if (v?.bairro) setValue("bairro", v.bairro, { shouldValidate: true, shouldDirty: true });
                // if (v?.logradouro) setValue("rua", v.logradouro, { shouldValidate: true, shouldDirty: true });
                //
                // if (trigger) await trigger(["cidade", "bairro", "rua"]);
                //
                // // ✅ salva no contexto no step correto (cadastroInicial ou cadastroCompleto)
                // if (updateStep && stepKey) {
                //     updateStep(stepKey, {
                //         viabilidade: v?.tipo_viabilidade,
                //     });
                // }
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
