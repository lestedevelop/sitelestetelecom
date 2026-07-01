"use client";

import {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import SuccessCard from "@/components/cards/SuccessCard";
import {formUltraSchema} from "@/schemas/FormSchemas";
import {maskCelular, maskCEP} from "@/utils/masks";

const ULTRA_FORM_ENDPOINT = "/api/sac/externo/ultra";

function Field({label, name, register, error, value, onChange, placeholder, type = "text", disabled = false}) {
  return (
    <label className="block text-[11px] font-bold text-white">
      {label}
      <input
        {...register(name)}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={[
          "mt-1 h-9 w-full rounded-[4px] border bg-transparent px-3 text-sm font-medium text-white outline-none placeholder:text-white/55 focus:border-[#56ffe0] disabled:cursor-not-allowed disabled:opacity-70",
          error ? "border-red-300" : "border-white/80",
        ].join(" ")}
      />
      {error ? <span className="mt-1 block text-[11px] text-red-200">{error}</span> : null}
    </label>
  );
}

export default function UltraLeadForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(formUltraSchema),
    defaultValues: {
      name: "",
      email: "",
      endereco: "",
      cep: "",
      numero: "",
      cel: "",
      checkInfo: false,
    },
  });

  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");
  const [ticketNumber, setTicketNumber] = useState("");
  const [cep, setCep] = useState("");
  const [cel, setCel] = useState("");

  function getTicketNumber(data) {
    return (
      data?.result?.TicketNumber ||
      data?.result?.ticketNumber ||
      data?.result?.ticket ||
      data?.result?.protocolo ||
      data?.TicketNumber ||
      data?.ticketNumber ||
      data?.ticket ||
      data?.protocolo ||
      data?.protocol ||
      data?.id ||
      ""
    );
  }

  async function onSubmit(data) {
    setStatus("submitting");
    setMessage("");

    const payload = {
      name: data.name.trim(),
      email: data.email.trim(),
      endereco: data.endereco.trim(),
      cep: data.cep.trim(),
      numero: data.numero.trim(),
      cel: data.cel.trim(),
      checkInfo: Boolean(data.checkInfo),
    };

    try {
      const response = await fetch(ULTRA_FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      let responseData = null;
      try {
        responseData = await response.json();
      } catch {
        responseData = null;
      }

      if (!response.ok) {
        throw new Error("Erro ao enviar formulário");
      }

      const ticket = getTicketNumber(responseData);
      setTicketNumber(String(ticket || ""));
      setStatus("success");
    } catch {
      setStatus("error");
      setMessage("Não foi possível enviar. Tente novamente em instantes.");
    }
  }

  const isSubmitting = status === "submitting";

  function handleNewSubmit() {
    setStatus("idle");
    setMessage("");
    setTicketNumber("");
    setCep("");
    setCel("");
    reset();
  }

  if (status === "success") {
    return (
      <div className="mt-10">
        <SuccessCard
          ticketNumber={ticketNumber}
          buttonLabel="Fazer novo cadastro"
          message="Seu cadastro foi enviado. Nós falamos com você em breve."
          onNew={handleNewSubmit}
        />
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="mx-auto mt-10 max-w-[640px] rounded-xl bg-[#013127] px-9 py-10 shadow-[0_24px_70px_rgba(0,0,0,.22)]"
    >
      <div className="space-y-3">
        <Field
          name="name"
          label="Nome completo *"
          placeholder="Ex: João Batista da Silva"
          register={register}
          error={errors.name?.message}
          disabled={isSubmitting}
        />
        <Field
          name="email"
          label="Email *"
          placeholder="Ex: contato@gmail.com"
          type="email"
          register={register}
          error={errors.email?.message}
          disabled={isSubmitting}
        />
        <Field
          name="endereco"
          label="Endereço *"
          placeholder="Ex: Rua João Feliciano da Costa - Bairro"
          register={register}
          error={errors.endereco?.message}
          disabled={isSubmitting}
        />
        <Field
          name="cep"
          label="CEP *"
          placeholder="EX: 00000-000"
          register={register}
          error={errors.cep?.message}
          value={cep}
          disabled={isSubmitting}
          onChange={(event) => {
            const masked = maskCEP(event.target.value);
            setCep(masked);
            setValue("cep", masked, {shouldValidate: true});
          }}
        />
        <Field
          name="numero"
          label="Número *"
          placeholder="Ex: 329"
          register={register}
          error={errors.numero?.message}
          disabled={isSubmitting}
        />
        <Field
          name="cel"
          label="Telefone *"
          placeholder="(XX) XXXXX-XXXX"
          register={register}
          error={errors.cel?.message}
          value={cel}
          disabled={isSubmitting}
          onChange={(event) => {
            const masked = maskCelular(event.target.value);
            setCel(masked);
            setValue("cel", masked, {shouldValidate: true});
          }}
        />
      </div>

      <label className="mt-6 flex items-start gap-3 text-[11px] font-bold leading-tight text-white">
        <input
          {...register("checkInfo")}
          type="checkbox"
          disabled={isSubmitting}
          className="mt-1 h-4 w-4 shrink-0 accent-[#56ffe0] disabled:cursor-not-allowed"
        />
        ESTOU CIENTE que para usufruir plenamente da capacidade desta tecnologia, meus equipamentos precisam possuir portas 2.5GBASE-T, 5GBASE-T ou 10GBASE-T; superiores ao GIGABIT e compatíveis com o XGS-PON.
      </label>
      {errors.checkInfo?.message ? (
        <p className="mt-2 text-[11px] font-bold text-red-200">{errors.checkInfo.message}</p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mx-auto mt-9 flex h-11 w-56 items-center justify-center rounded-full bg-[#56ffe0] text-sm font-black uppercase text-[#00231d] transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>

      {message ? <p className="mt-5 text-center text-sm font-bold text-red-200">{message}</p> : null}
    </form>
  );
}
