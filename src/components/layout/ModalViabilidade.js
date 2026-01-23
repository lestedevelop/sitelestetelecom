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
import {AlertViabilidade} from "@/components/cards/AlertViabilidade";


export default function ModalViabilidade({ open, onClose, updateCadastro }) {
    const { data } = useSales();

    const { register, getValues, setValue, trigger, watch, formState: { errors } } =
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

    const [showAlert, setShowAlert] = useState(false);

    const tipo = data?.cadastro?.tipo_viabilidade; // "FTTH" etc.

    const finished = open && canAutoCheck && !viabLoading && !viabError;
    const available = finished && tipo === "FTTH";
    const unavailable = finished && tipo !== "FTTH"; // inclui "" aqui


    useEffect(() => {
        if (!open) return;
        if (!canAutoCheck) return;

        setShowAlert(false);
        checkViabilidade({ cep: cepDigits, numero: numeroDigits });
    }, [open, canAutoCheck, cepDigits, numeroDigits]);

    useEffect(() => {
        if (!open) return;

        if (canAutoCheck && !viabLoading && (viabError || tipo !== undefined)) {
            setShowAlert(true);
        }
    }, [open, canAutoCheck, viabLoading, viabError, tipo]);



    useEffect(() => {
        if (open) return;
        setValue("cep", "");
        setValue("numero", "");
        setShowAlert(false);
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
                            onBlur: () => {
                                const c = onlyDigits(getValues("cep")).slice(0, 8);
                                const num = onlyDigits(getValues("numero")).slice(0, 10);
                                if (c.length === 8 && num) checkViabilidade({ cep: c, numero: num });
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
                            onBlur: () => {
                                const c = onlyDigits(getValues("cep")).slice(0, 8);
                                const num = onlyDigits(getValues("numero")).slice(0, 10);
                                if (c.length === 8 && num) checkViabilidade({ cep: c, numero: num });
                            },
                        })
                    }
                />
            </div>

            {showAlert && open && canAutoCheck && !viabLoading ? (
                viabError ? (
                    <AlertViabilidade
                        variant="error"
                        title="Erro ao consultar"
                        text={String(viabError)}
                        onClose={() => setShowAlert(false)}
                    />
                ) : available ? (
                    <AlertViabilidade
                        variant="success"
                        title="Plano disponível!"
                        text="Oba! Este plano está disponível no endereço consultado."
                        onClose={() => setShowAlert(false)}
                    />
                ) : unavailable ? (
                    <AlertViabilidade
                        variant="error"
                        title="No momento estamos sem disponibilidade"
                        text="Infelizmente ainda não temos disponibilidade na sua região."
                        onClose={() => setShowAlert(false)}
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
                    className="rounded-xl px-4 py-2 text-sm font-semibold bg-black/5 hover:bg-black/10 transition"
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
