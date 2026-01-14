"use client";

import {useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import Input from "@/pageComponents/vendas/form/Input";
import {useSales} from "@/pageComponents/vendas/SalesContext";
import {cadastroCompletoSchema} from "@/schemas/vendas/cadastroCompletoSchema";
import {useViabilidade} from "@/hooks/vendas/useViabilidade";

import {maskCEP, maskCelular, maskTelefone} from "@/utils/masks";
import VendasStepper from "@/pageComponents/vendas/VendasStepper";

export default function StepCadastroCompleto({onNext, onBack}) {
    const {data, updateStep} = useSales();

    const defaults = {
        nome: "",
        cpf: "",
        dataNascimento: "",
        rg: "",
        emissorRg: "",

        email: "",
        confirmacaoEmail: "",

        celular: "",
        telefone: "",

        cep: "",
        numero: "",
        tipoMoradia: "",

        rua: "",
        bairro: "",
        cidade: "",

        complemento: "",
        pontoReferencia: "",
    };

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        trigger,
        reset,
        formState: {errors, isSubmitting},
    } = useForm({
        defaultValues: {
            ...defaults,
            ...(data?.cadastroInicial || {}),   // traz o que já foi preenchido no step 1
            ...(data?.cadastroCompleto || {}),  // traz o que já foi preenchido aqui antes
        },
        resolver: yupResolver(cadastroCompletoSchema),
    });

    // ✅ hidrata do context apenas uma vez (não “limpa” com updates)
    const hydratedOnce = useRef(false);
    useEffect(() => {
        if (hydratedOnce.current) return;

        reset({
            ...defaults,
            ...(data?.cadastroInicial || {}),
            ...(data?.cadastroCompleto || {}),
        });

        hydratedOnce.current = true;
    }, [reset]); // intencional: roda 1x

    const {checkViabilidade, loading: viabLoading, error: viabError} = useViabilidade({
        setValue,
        trigger,
    });

    const cep = watch("cep");
    const numero = watch("numero");

    function onSubmit(values) {
        // salva só quando avançar
        updateStep("cadastroCompleto", values);
        onNext?.();
    }

    return (
        <div>

            <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto space-y-8">
                {/* Cabeçalho / ações */}

                {/* Informações Pessoais */}
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-darkgreen">Informações Pessoais</h3>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <Input label="Nome completo" register={register} name="nome" error={errors?.nome?.message}/>
                        <Input label="CPF" register={register} name="cpf" error={errors?.cpf?.message}/>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <Input label="Data de nascimento" register={register} name="dataNascimento"
                               error={errors?.dataNascimento?.message} placeholder="dd/mm/aaaa"/>
                        <Input label="RG" register={register} name="rg" error={errors?.rg?.message}/>
                        <Input label="Emissor do RG" register={register} name="emissorRg"
                               error={errors?.emissorRg?.message}/>
                    </div>
                </div>

                {/* Contato */}
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-darkgreen">Informações de contato</h3>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <Input label="E-mail" register={register} name="email" error={errors?.email?.message}/>
                        <Input label="Confirmação de e-mail" register={register} name="confirmacaoEmail"
                               error={errors?.confirmacaoEmail?.message}/>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <Input
                            label="Celular"
                            register={register}
                            name="celular"
                            error={errors?.celular?.message}
                            onChange={(e) => {
                                const masked = maskCelular(e.target.value);
                                setValue("celular", masked, {shouldDirty: true, shouldValidate: true});
                            }}
                        />
                        <Input label="Telefone" register={register} name="telefone" error={errors?.telefone?.message}
                               onChange={(e) => {
                                   const masked = maskTelefone(e.target.value);
                                   setValue("telefone", masked, {shouldDirty: true, shouldValidate: true});
                               }}/>
                    </div>
                </div>

                {/* Endereço */}
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-darkgreen">Endereço</h3>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <Input
                            label="CEP"
                            register={register}
                            name="cep"
                            error={errors?.cep?.message}
                            disabled={viabLoading}
                            onChange={(e) => {
                                const masked = maskCep(e.target.value);
                                setValue("cep", masked, {shouldDirty: true, shouldValidate: true});
                            }}
                            onBlur={() => checkViabilidade({cep, numero})}
                        />

                        <Input
                            label="Número"
                            register={register}
                            name="numero"
                            error={errors?.numero?.message}
                            disabled={viabLoading}
                            onBlur={() => checkViabilidade({cep, numero})}
                        />

                        <div className="space-y-2">
                            <label className="text-darkgreen font-semibold">Qual tipo de moradia?*</label>
                            <div className="flex gap-6 h-12 items-center">
                                <label className="flex items-center gap-2 text-darkgreen">
                                    <input type="radio" value="predio" {...register("tipoMoradia")} />
                                    Prédio
                                </label>
                                <label className="flex items-center gap-2 text-darkgreen">
                                    <input type="radio" value="casa" {...register("tipoMoradia")} />
                                    Casa
                                </label>
                            </div>
                            {errors?.tipoMoradia?.message ? (
                                <p className="text-red-500 text-sm">{errors.tipoMoradia.message}</p>
                            ) : null}
                        </div>
                    </div>

                    {viabLoading ? <p className="text-xs text-gray-500">Validando viabilidade...</p> : null}
                    {viabError ? <p className="text-xs text-red-500">{viabError}</p> : null}

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <Input label="Rua" register={register} name="rua" error={errors?.rua?.message}
                               disabled={viabLoading}/>
                        <Input label="Bairro" register={register} name="bairro" error={errors?.bairro?.message}
                               disabled={viabLoading}/>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <Input label="Cidade" register={register} name="cidade" error={errors?.cidade?.message}
                               disabled={viabLoading}/>
                        <Input label="Complemento" register={register} name="complemento"
                               error={errors?.complemento?.message} disabled={viabLoading}/>
                        <Input label="Ponto de Referência" register={register} name="pontoReferencia"
                               error={errors?.pontoReferencia?.message} disabled={viabLoading}/>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting || viabLoading}
                    className="w-48 h-12 rounded-md bg-emerald-600 text-white font-semibold disabled:opacity-60"
                >
                    {viabLoading ? "Validando..." : isSubmitting ? "Salvando..." : "Continuar"}
                </button>
            </form>
        </div>
    );
}
