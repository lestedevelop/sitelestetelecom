"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formCompletoSchema } from "@/schemas/FormSchemas";
import Input from "@/components/Form/FormComponents/Input";
import SectionForm from "@/components/Form/FormComponents/SectionForm";
import {onlyDigits,maskCPF,maskTelefone,maskCelular,maskCEP,maskCpfCnpj} from "@/utils/masks";

export default function FormCompleto() {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formCompletoSchema),
    });

    // states mascarados
    const [cpfAssinante, setCpfAssinante] = useState("");
    const [cepAssinante, setCepAssinante] = useState("");
    const [celularAssinante, setCelularAssinante] = useState("");
    const [telefoneAssinante, setTelefoneAssinante] = useState("");

    const [celularAmigo, setCelularAmigo] = useState("");
    const [telefoneAmigo, setTelefoneAmigo] = useState("");

    const onSubmit = (data) => {
        // Se quiser enviar sem máscara:
        const payload = {
            ...data,
            cpfAssinante: onlyDigits(data.cpfAssinante || ""),
            cepAssinante: onlyDigits(data.cepAssinante || ""),
            celularAssinante: onlyDigits(data.celularAssinante || ""),
            telefoneAssinante: onlyDigits(data.telefoneAssinante || ""),
            celularAmigo: onlyDigits(data.celularAmigo || ""),
            telefoneAmigo: onlyDigits(data.telefoneAmigo || ""),
        };

        console.log("FORM COMPLETO:", payload);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-2xl mx-auto p-6 space-y-10 text-primary bg-light">
            {/* DADOS DO ASSINANTE */}
            <SectionForm title="Dados do assinante">
                <Input
                    label="Nome completo"
                    register={register}
                    name="nomeAssinante"
                    error={errors.nomeAssinante?.message}
                />

                <Input
                    label="CPF"
                    name="cpfAssinante"
                    register={register}
                    error={errors.cpfAssinante?.message}
                    placeholder="000.000.000-00"
                    value={cpfAssinante}
                    onChange={(e) => {
                        const masked = maskCPF(e.target.value);
                        setCpfAssinante(masked);
                        setValue("cpfAssinante", masked, { shouldValidate: true });
                    }}
                />
            </SectionForm>

            {/* CONTATO */}
            <SectionForm title="Contato do assinante">
                <Input
                    label="E-mail"
                    register={register}
                    name="emailAssinante"
                    error={errors.emailAssinante?.message}
                />

                <Input
                    label="Celular"
                    name="celularAssinante"
                    register={register}
                    error={errors.celularAssinante?.message}
                    placeholder="(99) 99999-9999"
                    value={celularAssinante}
                    onChange={(e) => {
                        const masked = maskCelular(e.target.value);
                        setCelularAssinante(masked);
                        setValue("celularAssinante", masked, { shouldValidate: true });
                    }}
                />

                <Input
                    label="Telefone"
                    name="telefoneAssinante"
                    register={register}
                    placeholder="(99) 9999-9999"
                    value={telefoneAssinante}
                    onChange={(e) => {
                        const masked = maskTelefone(e.target.value);
                        setTelefoneAssinante(masked);
                        setValue("telefoneAssinante", masked, { shouldValidate: true });
                    }}
                />
            </SectionForm>

            {/* ENDEREÇO */}
            <SectionForm title="Endereço do assinante">
                <Input
                    label="CEP"
                    name="cepAssinante"
                    register={register}
                    placeholder="99999-999"
                    value={cepAssinante}
                    onChange={(e) => {
                        const masked = maskCEP(e.target.value);
                        setCepAssinante(masked);
                        setValue("cepAssinante", masked, { shouldValidate: true });
                    }}
                />

                <Input label="Rua" register={register} name="ruaAssinante" />
                <Input label="Número" register={register} name="numeroAssinante" />
                <Input label="Complemento" register={register} name="complementoAssinante" />
                <Input label="Bairro" register={register} name="bairroAssinante" />
                <Input label="Cidade" register={register} name="cidadeAssinante" />
                <Input label="Estado" register={register} name="estadoAssinante" />
            </SectionForm>

            {/* DADOS DO AMIGO */}
            <SectionForm title="Dados do amigo">
                <Input
                    label="Nome completo do amigo"
                    register={register}
                    name="nomeAmigo"
                    error={errors.nomeAmigo?.message}
                />

                <Input
                    label="Endereço do amigo"
                    register={register}
                    name="enderecoAmigo"
                    error={errors.enderecoAmigo?.message}
                />

                <Input
                    label="Cidade do amigo"
                    register={register}
                    name="cidadeAmigo"
                    error={errors.cidadeAmigo?.message}
                />

                <Input
                    label="Celular do amigo"
                    name="celularAmigo"
                    register={register}
                    error={errors.celularAmigo?.message}
                    placeholder="(99) 99999-9999"
                    value={celularAmigo}
                    onChange={(e) => {
                        const masked = maskCelular(e.target.value);
                        setCelularAmigo(masked);
                        setValue("celularAmigo", masked, { shouldValidate: true });
                    }}
                />

                <Input
                    label="Telefone do amigo"
                    name="telefoneAmigo"
                    register={register}
                    placeholder="(99) 9999-9999"
                    value={telefoneAmigo}
                    onChange={(e) => {
                        const masked = maskTelefone(e.target.value);
                        setTelefoneAmigo(masked);
                        setValue("telefoneAmigo", masked, { shouldValidate: true });
                    }}
                />
            </SectionForm>

            {/* OBSERVAÇÕES */}
            <SectionForm title="Observações">
        <textarea
            {...register("observacoes")}
            className="w-full h-24 rounded-md bg-graylighter p-4 outline-none focus:border-primary border border-transparent"
        />
            </SectionForm>

            {/* POLÍTICA */}
            <label className="flex gap-3 items-center">
                <input type="checkbox" {...register("aceitarPolitica")} />
                <span>
          Aceito as{" "}
                    <a href="#" className="text-primary underline">
            Políticas de Privacidade
          </a>
        </span>
            </label>
            {errors.aceitarPolitica && (
                <p className="text-red-500 text-sm">{errors.aceitarPolitica.message}</p>
            )}

            {/* BOTÃO */}
            <button type="submit" className="w-full h-14 bg-primary text-white text-xl rounded-lg">
                Enviar
            </button>
        </form>
    );
}
