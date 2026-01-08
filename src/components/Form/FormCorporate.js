"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@/components/Form/FormComponents/Input";
import { formCoporateSchema } from "@/schemas/FormSchemas";
import { maskTelefone, maskCEP, maskCNPJ, onlyDigits } from "@/utils/masks";

export default function FormConsultores() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors, isSubmitting },
    } = useForm({
        resolver: yupResolver(formCoporateSchema),
        mode: "onTouched",
        defaultValues: {
            nome: "",
            email: "",
            telefone: "",
            empresa: "",
            cep: "",
            numero: "",
            cnpj: "",
        },
    });

    const [telefone, setTelefone] = useState("");
    const [cep, setCep] = useState("");
    const [cnpj, setCnpj] = useState("");

    const onSubmit = (data) => {
        const payload = {
            ...data,
            telefone: onlyDigits(data.telefone),
            cep: onlyDigits(data.cep),
            cnpj: onlyDigits(data.cnpj),
        };

        console.log("CORPORATE payload:", payload);
    };

    return (
        <section className="bg-light py-6">
            <div className="max-w-3xl mx-auto px-6">
                <form onSubmit={handleSubmit(onSubmit)} className="mt-10 space-y-6">
                    <Input
                        label="Nome *"
                        name="nome"
                        register={register}
                        error={errors.nome?.message}
                        placeholder="Ex: João Batista da silva"
                    />

                    <Input
                        label="Email *"
                        name="email"
                        register={register}
                        error={errors.email?.message}
                        placeholder="Ex: contato@gmail.com"
                    />

                    <Input
                        label="Telefone *"
                        name="telefone"
                        register={register}
                        error={errors.telefone?.message}
                        placeholder="(XX) XXXX-XXXX"
                        value={telefone}
                        onChange={(e) => {
                            const masked = maskTelefone(e.target.value);
                            setTelefone(masked);
                            setValue("telefone", masked, { shouldValidate: true });
                        }}
                    />

                    <Input
                        label="Empresa *"
                        name="empresa"
                        register={register}
                        error={errors.empresa?.message}
                        placeholder="Ex: comércio X"
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Input
                            label="CEP *"
                            name="cep"
                            register={register}
                            error={errors.cep?.message}
                            placeholder="EX: 00000-000"
                            value={cep}
                            onChange={(e) => {
                                const masked = maskCEP(e.target.value);
                                setCep(masked);
                                setValue("cep", masked, { shouldValidate: true });
                            }}
                        />

                        <Input
                            label="Numero *"
                            name="numero"
                            register={register}
                            error={errors.numero?.message}
                            placeholder="EX: 5"
                        />
                    </div>

                    <Input
                        label="Cnpj *"
                        name="cnpj"
                        register={register}
                        error={errors.cnpj?.message}
                        placeholder="XX.XXX.XXX/XXXX-XX"
                        value={cnpj}
                        onChange={(e) => {
                            const masked = maskCNPJ(e.target.value);
                            setCnpj(masked);
                            setValue("cnpj", masked, { shouldValidate: true });
                        }}
                    />

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-14 rounded-full bg-primary text-white font-semibold tracking-wide
                       hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? "Enviando..." : "ENVIAR"}
                    </button>

                </form>
            </div>
        </section>
    );
}
