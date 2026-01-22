"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formIndicateSchema } from "@/schemas/FormSchemas";
import Input from "@/components/Form/FormComponents/Input";
import SectionForm from "@/components/Form/FormComponents/SectionForm";
import { maskCPF, maskTelefone, maskCelular } from "@/utils/masks";
import Select from "@/components/Form/FormComponents/Select";
import { sendIndicacao } from "@/services/indicacao";
import {toast} from "react-toastify";

function SuccessCard({ ticketNumber, onNew }) {
    return (
        <div className="max-w-2xl mx-auto p-6">
            <div className="rounded-2xl bg-white shadow-sm border border-gray-200 p-8 text-center">
                <h2 className="text-3xl font-bold text-primary">Sucesso!</h2>

                <p className="mt-3 text-gray-700">
                    Seu formulário foi enviado. Nós falamos com você em breve.
                </p>

                <div className="mt-6 rounded-xl bg-light border border-gray-200 p-4">
                    <p className="text-gray-700">Seu número de protocolo é</p>
                    <p className="mt-1 text-2xl font-extrabold text-primary">
                        #{ticketNumber || "—"}
                    </p>
                </div>

                <button
                    type="button"
                    onClick={onNew}
                    className="mt-8 h-12 px-6 rounded-lg bg-primary text-white font-semibold hover:opacity-95"
                >
                    Fazer nova indicação
                </button>
            </div>
        </div>
    );
}

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
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(formIndicateSchema),
    });

    const [cpfAssinante, setCpfAssinante] = useState("");
    const [celularAmigo, setCelularAmigo] = useState("");
    const [telefoneAmigo, setTelefoneAmigo] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [success, setSuccess] = useState(false);
    const [ticketNumber, setTicketNumber] = useState("");

    async function onSubmit(data) {
        try {
            setLoading(true);
            setError(null);
            console.log(data)
            const res = await sendIndicacao(data);

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

        // limpa form + masks
        reset();
        setCpfAssinante("");
        setCelularAmigo("");
        setTelefoneAmigo("");
    }

    // 👉 Se enviou com sucesso, mostra o card no lugar do form
    if (success) {
        return <SuccessCard ticketNumber={ticketNumber} onNew={handleNewIndication} />;
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="max-w-2xl mx-auto p-6 space-y-10 text-primary bg-light"
        >
            {/* DADOS DO ASSINANTE */}
            <SectionForm title="Dados do assinante">
                <Input
                    label="Nome completo"
                    register={register}
                    name="nomeAssinante"
                    error={errors.nomeAssinante?.message}
                    disabled={loading}
                />

                <Input
                    label="CPF"
                    name="cpfAssinante"
                    register={register}
                    error={errors.cpfAssinante?.message}
                    placeholder="000.000.000-00"
                    value={cpfAssinante}
                    disabled={loading}
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
                    disabled={loading}
                />

                <Input
                    label="Endereço do amigo"
                    register={register}
                    name="enderecoAmigo"
                    error={errors.enderecoAmigo?.message}
                    disabled={loading}
                />

                <Select
                    label="Cidade do Amigo"
                    name="cidadeAmigo"
                    register={register}
                    required
                    error={errors.cidadeAmigo?.message}
                    options={cidadesRJ}
                    disabled={loading}
                />

                <Input
                    label="Celular do amigo"
                    name="celularAmigo"
                    register={register}
                    error={errors.celularAmigo?.message}
                    placeholder="(99) 99999-9999"
                    value={celularAmigo}
                    disabled={loading}
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
                    disabled={loading}
                    onChange={(e) => {
                        const masked = maskTelefone(e.target.value);
                        setTelefoneAmigo(masked);
                        setValue("telefoneAmigo", masked, { shouldValidate: true });
                    }}
                />
            </SectionForm>

            {/* BOTÃO + LOADING */}
            <button
                type="submit"
                disabled={loading}
                className={`w-full h-14 rounded-lg text-white text-xl font-semibold transition
          ${loading ? "bg-primary/70 cursor-not-allowed" : "bg-primary cursor-pointer hover:opacity-95"}`}
            >
                {loading ? "Enviando..." : "Enviar"}
            </button>
        </form>
    );
}
