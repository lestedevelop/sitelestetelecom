"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formIndicateSchema } from "@/schemas/FormSchemas";
import Input from "@/components/Form/FormComponents/Input";
import SectionForm from "@/components/Form/FormComponents/SectionForm";
import {onlyDigits,maskCPF,maskTelefone,maskCelular} from "@/utils/masks";
import Select from "@/components/Form/FormComponents/Select";


export default function FormCompleto() {

    const cidadesRJ = [
        { value: "", label: "Selecione" },
        { value: "niteroi", label: "Niterói" },
        { value: "sao-goncalo", label: "São Gonçalo" },
        { value: "marica", label: "Maricá" },
        { value: "itaborai", label: "Itaboraí" },
        { value: "tangua", label: "Tanguá" },
        { value: "rio-bonito", label: "Rio Bonito" },
        { value: "mage", label: "Magé" },
        { value: "guapimirim", label: "Guapimirim" },
        { value: "saquarema", label: "Saquarema" },
        { value: "araruama", label: "Araruama" },
        { value: "cabo-frio", label: "Cabo Frio" },
        { value: "silva-jardim", label: "Silva Jardim" },
        { value: "armacao-dos-buzios", label: "Armação de Búzios" },
        { value: "outra", label: "Outra cidade" },
    ];

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formIndicateSchema),
    });

    const [cpfAssinante, setCpfAssinante] = useState("");
    const [celularAmigo, setCelularAmigo] = useState("");
    const [telefoneAmigo, setTelefoneAmigo] = useState("");


    const onSubmit = (data) => {
        console.log("data", data);
        const payload = {
            ...data,
            cpfAssinante: onlyDigits(data.cpfAssinante || ""),
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
                <Select
                    label="Cidade do Amigo"
                    name="cidadeAmigo"
                    register={register}
                    required
                    error={errors.cidadeAmigo?.message}
                    options={cidadesRJ}
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
            {/* BOTÃO */}
            <input type="submit" className="w-full h-14 bg-primary cursor-pointer text-white text-xl rounded-lg" value={"Enviar"} />
        </form>
    );
}
