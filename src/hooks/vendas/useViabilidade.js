"use client";

import { useRef, useState, useCallback } from "react";
import { getViabilidade } from "@/services/vendas/viabilidade";
import { useSales } from "@/contexts/SalesContextNew";
import { toast } from "react-toastify";

function normalizeRisco(value) {
    if (typeof value === "boolean") return value;
    if (typeof value === "number") return value === 1;
    if (typeof value === "string") {
        return ["1", "true", "sim", "s"].includes(value.trim().toLowerCase());
    }
    return false;
}

export function useViabilidade({ setValue, trigger, stepKey, updateStep }) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const abortRef = useRef(null);
    const lastKeyRef = useRef("");
    const { updateCadastro } = useSales();

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

            const clearAddressFields = () => {
                setValue("cidade", "", { shouldDirty: true, shouldTouch: true });
                setValue("bairro", "", { shouldDirty: true, shouldTouch: true });
                setValue("rua", "", { shouldDirty: true, shouldTouch: true });
            };

            const setViabilidadeFields = ({ tipoViabilidade, risco }) => {
                setValue("tipo_viabilidade", tipoViabilidade, { shouldDirty: true, shouldTouch: true });
                setValue("risco", risco, { shouldDirty: true, shouldTouch: true });
            };

            try {
                setError("");
                setLoading(true);

                const resp = await getViabilidade({
                    cep: cepDigits,
                    numero: numeroStr,
                    signal: controller.signal,
                });

                if (!Array.isArray(resp) || resp.length === 0) {
                    clearAddressFields();
                    setViabilidadeFields({ tipoViabilidade: "", risco: false });
                    updateCadastro({
                        cep: cepDigits,
                        numero: numeroStr,
                        cidade: "",
                        bairro: "",
                        rua: "",
                        tipo_viabilidade: "",
                        risco: false,
                    });
                    if (trigger) await trigger(["cidade", "bairro", "rua"]);
                    toast.error("CEP não encontrado ou sem cobertura");
                    return;
                }

                const v = Array.isArray(resp) ? resp[0] : resp;

                clearAddressFields();
                const cidade = v?.cidade || v?.nome_cid || "";
                const bairro = v?.bairro || "";
                const rua = v?.logradouro || v?.endereco || v?.logradouro_do || "";
                const tipoViabilidade = v?.tipo_viabilidade || v?.viabilidade || "";
                const risco = normalizeRisco(v?.risco);

                if (cidade) setValue("cidade", cidade, { shouldDirty: true, shouldTouch: true });
                if (bairro) setValue("bairro", bairro, { shouldDirty: true, shouldTouch: true });
                if (rua) setValue("rua", rua, { shouldDirty: true, shouldTouch: true });
                setViabilidadeFields({ tipoViabilidade, risco });

                if (trigger) await trigger(["cidade", "bairro", "rua"]);

                updateCadastro({
                    ...v,
                    cep: cepDigits,
                    numero: numeroStr,
                    cidade,
                    bairro,
                    rua,
                    tipo_viabilidade: tipoViabilidade,
                    risco,
                });
                toast.success("Cep validado com sucesso!");
            } catch (e) {
                if (e?.name === "AbortError") return;
                toast.error("Erro ao Validar CEP , aguarde alguns segundos e tente novamente");
            } finally {
                setLoading(false);
            }
        },
        [setValue, trigger, updateStep, stepKey, updateCadastro]
    );

    return { checkViabilidade, loading, error };
}
