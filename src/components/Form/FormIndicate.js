"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formIndicateSchema } from "@/schemas/FormSchemas";
import Input from "@/components/Form/FormComponents/Input";
import SectionForm from "@/components/Form/FormComponents/SectionForm";
import { maskCPF, maskTelefone, maskCelular } from "@/utils/masks";
import { sendIndicacao } from "@/services/indicacao";
import { toast } from "react-toastify";
import SuccessCard from "@/components/cards/SuccessCard";

export default function FormIndicate() {
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
  const [success, setSuccess] = useState(false);
  const [ticketNumber, setTicketNumber] = useState("");

  async function onSubmit(data) {
    try {
      setLoading(true);
      const res = await sendIndicacao(data);
      const ticket = res?.result?.TicketNumber;

      setTicketNumber(String(ticket || ""));
      setSuccess(true);
      toast.success(`Indicado com sucesso! ticket: ${ticket}`);
    } catch {
      toast.error("Erro ao enviar a indicação, tente novamente!");
    } finally {
      setLoading(false);
    }
  }

  function handleNewIndication() {
    setSuccess(false);
    setTicketNumber("");
    reset();
    setCpfAssinante("");
    setCelularAmigo("");
    setTelefoneAmigo("");
  }

  if (success) {
    return <SuccessCard ticketNumber={ticketNumber} onNew={handleNewIndication} />;
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-[1.9rem] bg-[#f4f1ed] p-6 text-primary md:p-8"
    >
      <h2 className="text-[2.6rem] font-bold leading-none text-darkgreen md:text-[3.35rem]">
        Preencha o formulario
      </h2>

      <div className="mt-5 space-y-8">
        <SectionForm title="Dados do assinante">
          <Input
            label="Nome completo*"
            register={register}
            name="nomeAssinante"
            error={errors.nomeAssinante?.message}
            disabled={loading}
          />

          <Input
            label="CPF*"
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

        <SectionForm title="Dados do amigo">
          <Input
            label="Nome completo do Amigo*"
            register={register}
            name="nomeAmigo"
            error={errors.nomeAmigo?.message}
            disabled={loading}
          />

          <Input
            label="Endereco completo do Amigo*"
            register={register}
            name="enderecoAmigo"
            error={errors.enderecoAmigo?.message}
            disabled={loading}
          />

          <Input
            label="Cidade do Amigo*"
            register={register}
            name="cidadeAmigo"
            error={errors.cidadeAmigo?.message}
            disabled={loading}
          />

          <div className="grid gap-4 md:grid-cols-2">
            <Input
              label="Celular do Amigo*"
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
              label="Telefone do Amigo*"
              name="telefoneAmigo"
              register={register}
              error={errors.telefoneAmigo?.message}
              placeholder="(99) 9999-9999"
              value={telefoneAmigo}
              disabled={loading}
              onChange={(e) => {
                const masked = maskTelefone(e.target.value);
                setTelefoneAmigo(masked);
                setValue("telefoneAmigo", masked, { shouldValidate: true });
              }}
            />
          </div>
        </SectionForm>
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`mt-8 flex h-14 w-full items-center justify-center rounded-full text-[1.9rem] font-semibold text-light transition ${
          loading
            ? "cursor-not-allowed bg-primary/70"
            : "bg-primary hover:opacity-95"
        }`}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}
