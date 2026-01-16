"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import Modal from "@/components/layout/Modal";
import Input from "@/pageComponents/vendas/form/Input";
import { maskCPF, maskDataNascimento, maskRG, maskCelular, maskTelefone } from "@/utils/masks";

export default function AddResponsavelModal({ open, onClose, onAdd }) {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            nome: "",
            cpf: "",
            dataNascimento: "",
            rg: "",
            cargoParentesco: "",
            email: "",
            celular: "",
            telefone: "",
        },
    });

    useEffect(() => {
        if (open) reset();
    }, [open, reset]);

    async function onSubmit(values) {
        onAdd?.(values);
        onClose?.();
    }

    return (
        <Modal
            open={open}
            onClose={onClose}
            title="Adicionar Responsável"
            subtitle="Preencha os campos abaixo para adicionar um novo responsável"
        >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <h4 className="text-base font-semibold text-darkgreen">Informações pessoais</h4>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Input label="Nome completo" register={register} name="nome" error={errors?.nome?.message} />

                    <Input
                        label="CPF"
                        name="cpf"
                        error={errors?.cpf?.message}
                        register={(n) =>
                            register(n, {
                                onChange: (e) => (e.target.value = maskCPF(e.target.value)),
                            })
                        }
                    />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Input
                        label="Data de nascimento"
                        name="dataNascimento"
                        placeholder="dd/mm/aaaa"
                        error={errors?.dataNascimento?.message}
                        register={(n) =>
                            register(n, {
                                onChange: (e) => (e.target.value = maskDataNascimento(e.target.value)),
                            })
                        }
                    />

                    <Input
                        label="RG"
                        name="rg"
                        error={errors?.rg?.message}
                        register={(n) =>
                            register(n, {
                                onChange: (e) => (e.target.value = maskRG(e.target.value)),
                            })
                        }
                    />
                </div>

                <h4 className="text-base font-semibold text-darkgreen">Informações de contato</h4>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Input
                        label="Cargo/Parentesco"
                        register={register}
                        name="cargoParentesco"
                        error={errors?.cargoParentesco?.message}
                        placeholder="Ex: Filho"
                    />

                    <Input label="E-mail" register={register} name="email" error={errors?.email?.message} />
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <Input
                        label="Celular / WhatsApp"
                        name="celular"
                        error={errors?.celular?.message}
                        register={(n) =>
                            register(n, {
                                onChange: (e) => (e.target.value = maskCelular(e.target.value)),
                            })
                        }
                    />

                    <Input
                        label="Telefone"
                        name="telefone"
                        error={errors?.telefone?.message}
                        register={(n) =>
                            register(n, {
                                onChange: (e) => (e.target.value = maskTelefone(e.target.value)),
                            })
                        }
                    />
                </div>

                <div className="flex justify-end pt-2">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-40 h-12 rounded-md bg-primary text-white font-semibold disabled:opacity-60"
                    >
                        Adicionar
                    </button>
                </div>
            </form>
        </Modal>
    );
}
