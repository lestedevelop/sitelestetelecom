"use client";

import { useEffect, useMemo, useState } from "react";
import Modal from "@/components/layout/Modal";
import Input from "@/pageComponents/vendas/form/Input";
import { useForm } from "react-hook-form";
import { useDebounce } from "@/hooks/useDebounce";
import { useViabilidade } from "@/hooks/vendas/useViabilidade";
import { maskCEP, onlyDigits } from "@/utils/masks";
import { useSales } from "@/contexts/SalesContextNew";
import Link from "next/link";
import { AlertViabilidade } from "@/components/cards/AlertViabilidade";

export default function ModalViabilidade({ open, onClose, updateCadastro }) {
    const { data } = useSales();

    const { register, setValue, trigger, watch, formState: { errors } } =
        useForm({ defaultValues: { cep: "", numero: "" }, mode: "onBlur" });

    const { checkViabilidade, loading: viabLoading, error: viabError } = useViabilidade({
        setValue,
        trigger,
        updateCadastro,
    });

    const cep = watch("cep");
    const numero = watch("numero");

    const cepDebounced = useDebounce(cep, 500);
    const numeroDebounced = useDebounce(numero, 500);

    const cepDigits = useMemo(() => onlyDigits(cepDebounced).slice(0, 8), [cepDebounced]);
    const numeroDigits = useMemo(() => onlyDigits(numeroDebounced).slice(0, 10), [numeroDebounced]);

    const canAutoCheck = cepDigits.length === 8 && numeroDigits.length > 0;

    const [dismissedKey, setDismissedKey] = useState("");

    const tipo = data?.cadastro?.tipo_viabilidade;

    const finished = open && canAutoCheck && !viabLoading && !viabError;
    const available = finished && tipo === "FTTH";
    const unavailable = finished && tipo !== "FTTH";
    const shouldShowAlert = open && canAutoCheck && !viabLoading && (viabError || tipo !== undefined);

    const alertKey = useMemo(() => {
        if (!canAutoCheck) return "";
        const resultKey = viabError ? "error" : String(tipo ?? "");
        return `${cepDigits}-${numeroDigits}-${resultKey}`;
    }, [canAutoCheck, cepDigits, numeroDigits, viabError, tipo]);

    useEffect(() => {
        if (!open) return;
        if (!canAutoCheck) return;

        setDismissedKey("");
        checkViabilidade({ cep: cepDigits, numero: numeroDigits });
    }, [open, canAutoCheck, cepDigits, numeroDigits, checkViabilidade]);

    useEffect(() => {
        if (open) return;
        setValue("cep", "");
        setValue("numero", "");
        setDismissedKey("");
    }, [open, setValue]);

    return (
        <Modal
            open={open}
            onClose={() => onClose(false)}
            title="Consulte a viabilidade"
            subtitle="Informe seu CEP e número para verificarmos disponibilidade"
        >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                    label="CEP"
                    name="cep"
                    error={errors?.cep?.message}
                    register={(n) =>
                        register(n, {
                            required: "Informe o CEP",
                            validate: (v) => (onlyDigits(v).length === 8 ? true : "CEP inválido"),
                            onChange: (e) => {
                                e.target.value = maskCEP(e.target.value);
                            },
                        })
                    }
                />

                <Input
                    label="Número"
                    name="numero"
                    error={errors?.numero?.message}
                    register={(n) =>
                        register(n, {
                            required: "Informe o número",
                            validate: (v) => (onlyDigits(v).length ? true : "Número inválido"),
                        })
                    }
                />
            </div>

            {shouldShowAlert && dismissedKey !== alertKey ? (
                viabError ? (
                    <AlertViabilidade
                        variant="error"
                        title="Erro ao consultar"
                        text={String(viabError)}
                        onClose={() => setDismissedKey(alertKey)}
                    />
                ) : available ? (
                    <AlertViabilidade
                        variant="success"
                        title="Plano disponível!"
                        text="Oba! Este plano está disponível no endereço consultado."
                        onClose={() => setDismissedKey(alertKey)}
                    />
                ) : unavailable ? (
                    <AlertViabilidade
                        variant="error"
                        title="No momento estamos sem disponibilidade"
                        text="Infelizmente ainda não temos disponibilidade na sua região."
                        onClose={() => setDismissedKey(alertKey)}
                    />
                ) : null
            ) : null}

            <div className="mt-6 flex items-center justify-between gap-4">
                <div className="text-sm text-gray-500">
                    {viabLoading
                        ? "Consultando disponibilidade..."
                        : !canAutoCheck
                            ? "Digite CEP e número para consultar."
                            : finished
                                ? "Consulta finalizada."
                                : ""}
                </div>

                <button
                    type="button"
                    onClick={() => onClose(false)}
                    className="rounded-xl px-4 text-graylight py-2 text-sm font-semibold bg-black/5 hover:bg-black/10 transition"
                >
                    Fechar
                </button>
            </div>

            {available ? (
                <Link
                    href="/vendas"
                    className="mt-5 block rounded-xl bg-primary px-4 py-3 text-center text-[18px] font-semibold text-white shadow-[0_12px_20px_rgba(30,107,93,.22)]"
                >
                    Finalizar Cadastro
                </Link>
            ) : null}
        </Modal>
    );
}
