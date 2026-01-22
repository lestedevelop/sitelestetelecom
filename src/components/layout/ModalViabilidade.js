"use client";

import {useEffect, useMemo} from "react";
import Modal from "@/components/layout/Modal";
import Input from "@/pageComponents/vendas/form/Input";

import {useForm} from "react-hook-form";
import {useDebounce} from "@/hooks/useDebounce";
import {useViabilidade} from "@/hooks/vendas/useViabilidade";
import {maskCEP, onlyDigits} from "@/utils/masks";
import {useSales} from "@/contexts/SalesContextNew";
import Link from "next/link";

export default function ModalViabilidade({open, onClose, updateCadastro,}) {
    const {data} = useSales();

    const {
        register,
        getValues,
        setValue,
        trigger,
        watch,
        formState: {errors},
    } = useForm({
        defaultValues: {cep: "", numero: ""},
        mode: "onBlur",
    });

    const {checkViabilidade, loading: viabLoading, error: viabError} =
        useViabilidade({
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

    const canAutoCheck = useMemo(() => {
        return cepDigits.length === 8 && numeroDigits.length > 0;
    }, [cepDigits, numeroDigits]);

    useEffect(() => {
        if (!open) return;
        if (!canAutoCheck) return;

        checkViabilidade({
            cep: cepDigits,
            numero: numeroDigits,
        });
    }, [open, canAutoCheck, cepDigits, numeroDigits, checkViabilidade]);

    useEffect(() => {
        if (open) return;
        setValue("cep", "");
        setValue("numero", "");
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
                            // fallback (opcional)
                            onBlur: () => {
                                const c = onlyDigits(getValues("cep")).slice(0, 8);
                                const num = onlyDigits(getValues("numero")).slice(0, 10);
                                if (c.length === 8 && num) checkViabilidade({cep: c, numero: num});
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
                                if (c.length === 8 && num) checkViabilidade({cep: c, numero: num});
                            },
                        })
                    }
                />
            </div>

            {/* Status / feedback */}
            <div className="mt-6 flex items-center justify-between gap-4">
               <div className={"flex flex-col"}>
                   <div className="text-sm">
                       {viabLoading ? (
                           <span className="text-gray-500">Consultando disponibilidade...</span>
                       ) : viabError ? (
                           <span className="text-red-600">{String(viabError)}</span>
                       ) : canAutoCheck ? (
                           <span className="text-emerald-700">Pronto! Verificando cobertura…</span>
                       ) : (
                           <span className="text-gray-500">Digite CEP e número para consultar.</span>
                       )}
                   </div>
                   <div className="text-lg">
                       {data?.cadastro.tipo_viabilidade == "FTTH" &&  canAutoCheck &&
                           <Link
                               href={"/vendas"}
                               className="mt-5 block rounded-xl bg-primary px-4 py-3 text-center text-[18px] font-semibold text-white shadow-[0_12px_20px_rgba(30,107,93,.22)]"
                           >
                               Finalizar Cadastro
                           </Link>
                       }
                       {data?.cadastro.tipo_viabilidade != "FTTH" && canAutoCheck &&
                           <p className={"text-red-600"}>
                              Infelizmente ainda nao temos disponibilidade na sua região!
                           </p>
                       }
                   </div>
               </div>


                <button
                    type="button"
                    onClick={() => onClose(false)}
                    className="rounded-xl px-4 py-2 text-sm font-semibold bg-black/5 hover:bg-black/10 transition"
                >
                    Fechar
                </button>
            </div>
        </Modal>
    );
}
