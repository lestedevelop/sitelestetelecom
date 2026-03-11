"use client";

import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@/pageComponents/vendas/form/Input";
import Checkbox from "@/pageComponents/vendas/form/Checkbox";
import { useSales } from "@/contexts/SalesContextNew";
import { cadastroInicialSchema } from "@/schemas/vendas/cadastroInicialSchema";
import { useViabilidade } from "@/hooks/vendas/useViabilidade";
import { maskCelular, maskCEP } from "@/utils/masks";
import { sendPrecadastro } from "@/services/vendas/precadastro";
import { toast } from "react-toastify";
import { useDebounce } from "@/hooks/useDebounce";
import {VENDAS_GTM_BUTTON_IDS, VENDAS_GTM_FORM_IDS} from "@/lib/gtm/vendas";

export default function StepCadastroInicial({ onNext }) {
    const { data, hydrated, updateCadastro, setPrecadastroBody, setStep } = useSales();

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        trigger,
        reset,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            nome: "",
            email: "",
            ...data?.cadastro,
        },
        resolver: yupResolver(cadastroInicialSchema),
    });

    const hydratedOnce = useRef(false);
    useEffect(() => {
        if (!hydrated) return;
        if (hydratedOnce.current) return;

        reset({
            ...data?.cadastro,
        });

        hydratedOnce.current = true;
    }, [hydrated, data?.cadastro, reset]);

    const { checkViabilidade, loading: viabLoading, error: viabError } =
        useViabilidade({
            setValue,
            trigger,
            updateCadastro,
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
        updateCadastro(values);

        try {
            const resp = await sendPrecadastro({
                ...values,
                id: data?.precadastroBody?.id,
            });
            setPrecadastroBody(resp);

            if (data.cadastro.tipo_viabilidade !== "FTTH" || data.cadastro.risco) {
                setStep("semViabilidade");
                return;
            }
        } catch (error) {
            toast.error(
                <div>
                    <div className="font-semibold text-darkgreen">Falha ao salvar</div>
                    <div className="text-sm text-gray-600">Tente novamente em alguns segundos.</div>
                </div>,
            );
            return;
        }
        onNext?.();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto space-y-6">
            <Input
                id={VENDAS_GTM_FORM_IDS.cadastroInicial.nome}
                label="Nome completo"
                register={register}
                name="nome"
                error={errors?.nome?.message}
            />
            <Input
                id={VENDAS_GTM_FORM_IDS.cadastroInicial.email}
                label="Seu melhor e-mail"
                register={register}
                name="email"
                error={errors?.email?.message}
            />

            <Input
                id={VENDAS_GTM_FORM_IDS.cadastroInicial.celular}
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
                    id={VENDAS_GTM_FORM_IDS.cadastroInicial.cep}
                    label="CEP"
                    name="cep"
                    register={(n) =>
                        register(n, {
                            onChange: (e) => {
                                e.target.value = maskCEP(e.target.value);
                            },
                            onBlur: () =>
                                checkViabilidade({
                                    cep: getValues("cep"),
                                    numero: getValues("numero"),
                                }),
                        })
                    }
                />

                <Input
                    id={VENDAS_GTM_FORM_IDS.cadastroInicial.numero}
                    label="Número"
                    name="numero"
                    error={errors?.numero?.message}
                    register={(n) =>
                        register(n, {
                            onBlur: () =>
                                checkViabilidade({
                                    cep: getValues("cep"),
                                    numero: getValues("numero"),
                                }),
                        })
                    }
                />
            </div>

            {viabLoading ? <p className="text-xs text-gray-500">Validando viabilidade...</p> : null}
            {viabError ? <p className="text-xs text-red-500">{viabError}</p> : null}

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                    id={VENDAS_GTM_FORM_IDS.cadastroInicial.cidade}
                    label="Cidade"
                    register={register}
                    name="cidade"
                    error={errors?.cidade?.message}
                    readOnly={viabLoading}
                    className={viabLoading ? "opacity-70 cursor-not-allowed" : ""}
                />
                <Input
                    id={VENDAS_GTM_FORM_IDS.cadastroInicial.bairro}
                    label="Bairro"
                    register={register}
                    name="bairro"
                    error={errors?.bairro?.message}
                    readOnly={viabLoading}
                    className={viabLoading ? "opacity-70 cursor-not-allowed" : ""}
                />
            </div>

            <Input
                id={VENDAS_GTM_FORM_IDS.cadastroInicial.rua}
                label="Rua"
                register={register}
                name="rua"
                error={errors?.rua?.message}
                readOnly={viabLoading}
                className={viabLoading ? "opacity-70 cursor-not-allowed" : ""}
            />

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Input
                    id={VENDAS_GTM_FORM_IDS.cadastroInicial.complemento}
                    label="Complemento"
                    register={register}
                    name="complemento"
                    error={errors?.complemento?.message}
                />
                <Input
                    id={VENDAS_GTM_FORM_IDS.cadastroInicial.referencia}
                    label="Ponto de Referência"
                    register={register}
                    name="referencia"
                    error={errors?.referencia?.message}
                    disabled={viabLoading}
                />
            </div>

            <Checkbox
                id={VENDAS_GTM_FORM_IDS.cadastroInicial.aceitouPrivacidade}
                register={register}
                name="aceitouPrivacidade"
                error={errors?.aceitouPrivacidade?.message}
            >
                Aceitar{" "}
                <a className="text-primary underline" href="/faq/politica-privacidade" target="_blank">
                    Políticas de Privacidade*
                </a>
            </Checkbox>

            <button
                id={VENDAS_GTM_BUTTON_IDS.cadastroInicialContinuar}
                type="submit"
                disabled={isSubmitting || viabLoading}
                className="w-full h-12 rounded-md bg-emerald-600 text-white font-semibold disabled:opacity-60"
            >
                {viabLoading ? "Validando..." : isSubmitting ? "Salvando..." : "Continuar"}
            </button>
        </form>
    );
}
