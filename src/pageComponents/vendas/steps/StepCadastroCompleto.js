"use client";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@/pageComponents/vendas/form/Input";
import RadioGroup from "@/pageComponents/vendas/form/RadioGroup";
import { useSales } from "@/pageComponents/vendas/SalesContext";
import { cadastroCompletoSchema } from "@/schemas/vendas/cadastroCompletoSchema";

export default function StepCadastroCompleto({ onNext, onBack }) {
    const { data, updateStep } = useSales();

    // junta dados do inicial + completo pra preencher tudo nessa tela
    const initial = data?.cadastroInicial || {};
    const complete = data?.cadastroCompleto || {};

    const defaultValues = useMemo(
        () => ({
            // vem do inicial pra comparar emailConfirmacao com email
            email: initial.email || "",
            nome: initial.nome || "",
            celular: initial.celular || "",

            // campos dessa etapa
            cpf: "",
            nascimento: "",
            rg: "",
            emissorRg: "",
            emailConfirmacao: "",
            telefone: "",
            tipoMoradia: "casa",
            ...complete,
        }),
        [initial, complete]
    );

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues,
        resolver: yupResolver(cadastroCompletoSchema),
    });

    function onSubmit(values) {
        // salva só o que é da etapa completa (mas pode salvar tudo se quiser)
        updateStep("cadastroCompleto", {
            cpf: values.cpf,
            nascimento: values.nascimento,
            rg: values.rg,
            emissorRg: values.emissorRg,
            emailConfirmacao: values.emailConfirmacao,
            telefone: values.telefone,
            tipoMoradia: values.tipoMoradia,
        });

        onNext?.();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-5xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <button type="button" onClick={onBack} className="text-gray-500 hover:text-gray-700">
                    ‹ Voltar
                </button>
            </div>

            <h1 className="text-3xl font-bold text-darkgreen">Seu Cadastro</h1>

            <section className="space-y-6">
                <h2 className="text-xl font-semibold text-darkgreen">Informações Pessoais</h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Input label="Nome completo" register={register} name="nome" disabled />
                    <Input label="CPF" register={register} name="cpf" error={errors?.cpf?.message} />
                    <Input label="Data de nascimento" register={register} name="nascimento" placeholder="dd/mm/aaaa" error={errors?.nascimento?.message} />
                    <Input label="RG" register={register} name="rg" error={errors?.rg?.message} />
                    <Input label="Emissor do RG" register={register} name="emissorRg" error={errors?.emissorRg?.message} />
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-xl font-semibold text-darkgreen">Informações de contato</h2>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Input label="E-mail" register={register} name="email" disabled />
                    <Input label="Confirmação de e-mail" register={register} name="emailConfirmacao" error={errors?.emailConfirmacao?.message} />
                    <Input label="Celular" register={register} name="celular" disabled />
                    <Input label="Telefone" register={register} name="telefone" error={errors?.telefone?.message} />
                </div>
            </section>

            <section className="space-y-6">
                <h2 className="text-xl font-semibold text-darkgreen">Endereço</h2>

                <RadioGroup
                    label="Qual tipo de moradia?*"
                    name="tipoMoradia"
                    register={register}
                    options={[
                        { label: "Prédio", value: "predio" },
                        { label: "Casa", value: "casa" },
                    ]}
                    error={errors?.tipoMoradia?.message}
                />
            </section>

            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-12 px-10 rounded-md bg-emerald-600 text-white font-semibold disabled:opacity-60"
                >
                    {isSubmitting ? "Salvando..." : "Continuar"}
                </button>
            </div>
        </form>
    );
}
