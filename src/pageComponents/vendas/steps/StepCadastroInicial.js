"use client";

import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import Input from "@/pageComponents/vendas/form/Input";
import Checkbox from "@/pageComponents/vendas/form/Checkbox";
import {useSales} from "@/pageComponents/vendas/SalesContext";
import {cadastroInicialSchema} from "@/schemas/vendas/cadastroInicialSchema";
import {useViabilidade} from "@/hooks/vendas/useViabilidade";
import {useEffect} from "react";
import {maskCelular, maskCEP} from "@/utils/masks";
import {sendPrecadastro} from "@/pageComponents/vendas/api/precadastro";
import {toast} from "react-toastify";

export default function StepCadastroInicial({onNext}) {
    const {data, updateStep, setPrecadastroBody} = useSales();

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        trigger,
        reset,
        getValues,
        formState: {errors, isSubmitting},
    } = useForm({
        defaultValues: {
            nome: "",
            email: "",
            celular: "",
            cep: "",
            numero: "",
            cidade: "",
            bairro: "",
            rua: "",
            complemento: "",
            pontoReferencia: "",
            aceitouPrivacidade: false,
            viabilidade: "",
            viabilidadeRaw: null,
            ...(data?.cadastroInicial || {}),
        },

        resolver: yupResolver(cadastroInicialSchema),
    });

    const {checkViabilidade, loading: viabLoading, error: viabError} = useViabilidade({
        setValue,
        trigger,
        updateStep,
        stepKey: "cadastroInicial",
    });

    const cep = watch("cep");
    const numero = watch("numero");

    async function onSubmit(values) {
        updateStep("cadastroInicial", values);

        try {
            const resp = await sendPrecadastro({...values, id: data?.precadastroBody?.id})
            setPrecadastroBody(resp);
        } catch (error) {
            toast.error(error?.message)
        }
        onNext?.();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-6">
            <Input label="Nome completo" register={register} name="nome" error={errors?.nome?.message}/>
            <Input label="Seu melhor e-mail" register={register} name="email" error={errors?.email?.message}/>
            <Input
                label="Celular / WhatsApp"
                name="celular"
                error={errors?.celular?.message}
                register={(n) =>
                    register(n, {
                        onChange: (e) => {
                            e.target.value = maskCelular(e.target.value);
                        },
                    })
                }
            />


            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                    label="CEP"
                    name="cep"
                    error={errors?.cep?.message}
                    register={(n) =>
                        register(n, {
                            onChange: (e) => {
                                e.target.value = maskCEP(e.target.value); // ✅ altera o valor antes do RHF salvar
                            },
                            onBlur: () => checkViabilidade({cep: getValues("cep"), numero: getValues("numero")}),
                        })
                    }
                />


                <Input
                    label="Número"
                    register={register}
                    name="numero"
                    error={errors?.numero?.message}
                    onBlur={() => checkViabilidade({cep, numero})}
                    disabled={viabLoading}
                />
            </div>

            {/* feedback travando */}
            {viabLoading ? <p className="text-xs text-gray-500">Validando viabilidade...</p> : null}
            {viabError ? <p className="text-xs text-red-500">{viabError}</p> : null}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                    label="Cidade"
                    register={register}
                    name="cidade"
                    error={errors?.cidade?.message}
                    disabled={viabLoading}
                />
                <Input
                    label="Bairro"
                    register={register}
                    name="bairro"
                    error={errors?.bairro?.message}
                    disabled={viabLoading}
                />
            </div>

            <Input
                label="Rua"
                register={register}
                name="rua"
                error={errors?.rua?.message}
                disabled={viabLoading}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                    label="Complemento"
                    register={register}
                    name="complemento"
                    error={errors?.complemento?.message}
                    disabled={viabLoading}
                />
                <Input
                    label="Ponto de Referência"
                    register={register}
                    name="pontoReferencia"
                    error={errors?.pontoReferencia?.message}
                    disabled={viabLoading}
                />
            </div>

            <Checkbox register={register} name="aceitouPrivacidade" error={errors?.aceitouPrivacidade?.message}>
                Aceitar{" "}
                <a className="text-primary underline" href="/faq/privacy-policy" target="_blank">
                    Políticas de Privacidade*
                </a>
            </Checkbox>

            <button
                type="submit"
                disabled={isSubmitting || viabLoading}
                className="w-full h-12 rounded-md bg-emerald-600 text-white font-semibold disabled:opacity-60"
            >
                {viabLoading ? "Validando..." : isSubmitting ? "Salvando..." : "Continuar"}
            </button>
        </form>
    );
}
