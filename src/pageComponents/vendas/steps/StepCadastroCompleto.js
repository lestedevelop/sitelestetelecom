"use client";

import {useEffect, useRef} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import Input from "@/pageComponents/vendas/form/Input";
import {useSales} from "@/pageComponents/vendas/SalesContext";
import {cadastroCompletoSchema} from "@/schemas/vendas/cadastroCompletoSchema";
import {useViabilidade} from "@/hooks/vendas/useViabilidade";

import {maskCEP, maskCelular, maskTelefone, maskDataNascimento, maskCPF, maskRG} from "@/utils/masks";
import {sendPrecadastro} from "@/pageComponents/vendas/api/precadastro";
import {toast} from "react-toastify";
import { useDebounce } from "@/hooks/useDebounce";

export default function StepCadastroCompleto({onNext, onBack}) {
    const {data, updateStep, setPrecadastroBody} = useSales();

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

        viabilidade: "",
        viabilidadeRaw: null,
    };

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
            ...defaults,
            ...(data?.cadastroInicial || {}),   // traz o que já foi preenchido no step 1
            ...(data?.cadastroCompleto || {}),  // traz o que já foi preenchido aqui antes
        },
        resolver: yupResolver(cadastroCompletoSchema),
    });

    const hydratedOnce = useRef(false);
    useEffect(() => {
        if (hydratedOnce.current) return;

        reset({
            ...defaults,
            ...(data?.cadastroInicial || {}),
            ...(data?.cadastroCompleto || {}),
        });

        hydratedOnce.current = true;
    }, [reset]);

    const {checkViabilidade, loading: viabLoading, error: viabError} = useViabilidade({
        setValue,
        trigger,
    });

    const cep = watch("cep");
    const numero = watch("numero");

    const cepDebounced = useDebounce(cep, 500);
    const numeroDebounced = useDebounce(numero, 500);

    useEffect(() => {
        const c = String(cepDebounced || "").replace(/\D/g, "");
        const n = String(numeroDebounced || "").trim();
        if (c.length !== 8 || !n) return;
        checkViabilidade({ cep: cepDebounced, numero: numeroDebounced });
    }, [cepDebounced, numeroDebounced, checkViabilidade]);

    async function onSubmit(values) {
        updateStep("cadastroCompleto", values);

        try {
            const resp = await sendPrecadastro({...values, id: data?.precadastroBody.id})
            setPrecadastroBody(resp);
        } catch (error) {
            toast.error(error?.message)
        }
        onNext?.();
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="max-w-4xl mx-auto space-y-8">
                {/* Informações Pessoais */}
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-darkgreen">Informações Pessoais</h3>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <Input label="Nome completo" register={register} name="nome" error={errors?.nome?.message}/>

                        <Input
                            label="CPF"
                            name="cpf"
                            error={errors?.cpf?.message}
                            register={(n) =>
                                register(n, {
                                    onChange: (e) => {
                                        e.target.value = maskCPF(e.target.value);
                                    },
                                })
                            }
                        />

                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <Input
                            label="Data de nascimento"
                            name="dataNascimento"
                            placeholder="dd/mm/aaaa"
                            error={errors?.dataNascimento?.message}
                            register={(n) =>
                                register(n, {
                                    onChange: (e) => {
                                        e.target.value = maskDataNascimento(e.target.value);
                                    },
                                })
                            }
                        />


                        <Input
                            label="RG"
                            name="rg"
                            error={errors?.rg?.message}
                            register={(n) =>
                                register(n, {
                                    onChange: (e) => {
                                        e.target.value = maskRG(e.target.value);
                                    },
                                })
                            }
                        />


                        <Input
                            label="Emissor do RG"
                            register={register}
                            name="emissorRg"
                            error={errors?.emissorRg?.message}
                        />
                    </div>
                </div>

                <div className={"h-[1px] w-full bg-gray-300"}/>

                {/* Contato */}
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-darkgreen">Informações de contato</h3>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <Input label="E-mail" register={register} name="email" error={errors?.email?.message}/>
                        <Input
                            label="Confirmação de e-mail"
                            register={register}
                            name="confirmacaoEmail"
                            error={errors?.confirmacaoEmail?.message}
                        />
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <Input
                            label="Celular"
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

                        <Input
                            label="Telefone"
                            name="telefone"
                            error={errors?.telefone?.message}
                            register={(n) =>
                                register(n, {
                                    onChange: (e) => {
                                        e.target.value = maskTelefone(e.target.value);
                                    },
                                })
                            }
                        />

                    </div>
                </div>

                <div className={"h-[1px] w-full bg-gray-300"}/>

                {/* Endereço */}
                <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-darkgreen">Endereço</h3>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <Input
                            label="CEP"
                            name="cep"
                            error={errors?.cep?.message}
                            disabled={viabLoading}
                            register={(n) =>
                                register(n, {
                                    onChange: (e) => {
                                        e.target.value = maskCEP(e.target.value);
                                    },
                                    onBlur: () => checkViabilidade({
                                        cep: getValues("cep"),
                                        numero: getValues("numero")
                                    }),
                                })
                            }
                        />


                        <Input
                            label="Número"
                            name="numero"
                            error={errors?.numero?.message}
                            disabled={viabLoading}
                            register={(n) =>
                                register(n, {
                                    onBlur: () => checkViabilidade({
                                        cep: getValues("cep"),
                                        numero: getValues("numero")
                                    }),
                                })
                            }
                        />


                        <div className="space-y-2">
                            <label className="text-darkgreen font-semibold">Qual tipo de moradia?*</label>
                            <div className="flex gap-6 h-12 items-center">
                                <label className="flex items-center gap-2 text-darkgreen accent-primary">
                                    <input type="radio" value="predio" {...register("tipoMoradia")} />
                                    Prédio
                                </label>
                                <label className="flex items-center gap-2 text-darkgreen accent-primary">
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
                        <Input label="Rua" register={register} name="rua" error={errors?.rua?.message} readOnly={viabLoading} className={viabLoading ? "opacity-70 cursor-not-allowed" : ""}/>
                        <Input label="Bairro" register={register} name="bairro" error={errors?.bairro?.message}  readOnly={viabLoading} className={viabLoading ? "opacity-70 cursor-not-allowed" : ""}/>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                        <Input label="Cidade" register={register} name="cidade" error={errors?.cidade?.message} readOnly={viabLoading} className={viabLoading ? "opacity-70 cursor-not-allowed" : ""}/>
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
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting || viabLoading}
                    className="w-48 h-12 rounded-md bg-primary text-white font-semibold disabled:opacity-60"
                >
                    {viabLoading ? "Validando..." : isSubmitting ? "Salvando..." : "Continuar"}
                </button>
            </form>

        </div>
    );
}
