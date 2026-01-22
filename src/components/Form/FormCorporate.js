"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Input from "@/components/Form/FormComponents/Input";
import { formCoporateSchema } from "@/schemas/FormSchemas";
import { maskTelefone, maskCEP, maskCNPJ, onlyDigits } from "@/utils/masks";
import {sendIndicacao} from "@/services/indicacao";
import {toast} from "react-toastify";
import SuccessCard from "@/components/cards/SuccessCard";
import {sendCorporativo} from "@/services/corporativo";

export default function FormConsultores() {

    const [success, setSuccess] = useState(false);
    const [ticketNumber, setTicketNumber] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const {
        register,
        handleSubmit,
        setValue,
        reset,
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

    async function onSubmit(data) {
        try {
            setLoading(true);
            setError(null);
            console.log(data)
            const res = await sendCorporativo(data);

            const ticket = res?.result?.TicketNumber

            setTicketNumber(String(ticket || ""));
            setSuccess(true);
            toast.success(`Indicado com sucesso! ticket: ${ticket}`);
        } catch (err) {
            setError(err?.message || "Erro ao enviar indicação");
            toast.error("Erro ao enviar a indicação, tente novamente!");
        } finally {
            setLoading(false);
        }
    }


    function handleNewIndication() {
        setSuccess(false);
        setTicketNumber("");
        setError(null);

        reset();
    }

    if (success) {
        return <SuccessCard ticketNumber={ticketNumber} onNew={handleNewIndication} />;
    }

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
                        disabled={loading}
                        className="w-full h-14 rounded-full bg-primary text-white font-semibold tracking-wide
                       hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                        {loading ? "Enviando..." : "ENVIAR"}
                    </button>


                </form>
            </div>
        </section>
    );
}
