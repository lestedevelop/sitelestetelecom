"use client";

import {useMemo} from "react";
import {useSales} from "@/contexts/SalesContextNew";
import {fmtDateBR, inferPeriod, toBRL} from "@/utils/Format";
import Checkbox from "@/pageComponents/vendas/form/Checkbox";
import * as yup from "yup";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

import ReviewField from "@/pageComponents/vendas/components/ReviewField";
import ReviewCard from "@/pageComponents/vendas/components/ReviewCard";
import {sendAgendamento} from "@/services/vendas/agendamento";
import {toast} from "react-toastify";

export default function StepRevisao({onNext, onBack, onEditSection}) {
    const {data,updateStep} = useSales();

    const cadastro = data?.cadastro || {};
    const plano = data?.plano || data?.planos || {};
    const agendamento = data?.agendamento || {};
    const endereco = cadastro?.endereco || cadastro;

    const periodo = useMemo(() => inferPeriod(agendamento?.title), [agendamento?.title]);

    const schema = yup.object({
        aceitouTaxa: yup.boolean().oneOf([true], "É necessário aceitar a taxa de adesão"),
        aceitouPrivacidade: yup
            .boolean()
            .oneOf([true], "É necessário aceitar as políticas de privacidade"),
    });

    const {
        register,
        handleSubmit,
        watch,
        formState: {errors, isSubmitting, isValid},
    } = useForm({
        defaultValues: {
            aceitouTaxa: false,
            aceitouPrivacidade: false,
        },
        resolver: yupResolver(schema),
        mode: "onChange",
    });

    const aceitouTaxa = watch("aceitouTaxa");
    const aceitouPrivacidade = watch("aceitouPrivacidade");
    const canContinue = !!aceitouTaxa && !!aceitouPrivacidade && isValid && !isSubmitting;

    async function onSubmit() {
        try {
            const resp = await sendAgendamento(data);

            if (resp?.TicketNumber) {
                updateStep("agendamento", {
                    ...data.agendamento,
                    TicketNumber: resp.TicketNumber,
                });

                toast.success(
                    `Agendamento criado com sucesso! Protocolo: ${resp.TicketNumber}`
                );

                onNext?.();
                return;
            }

            toast.error(
                "Não foi possível concluir o agendamento. Tente novamente!"
            );
        } catch (error) {
            console.error("Erro ao enviar agendamento:", error);

            const message =
                error?.response?.data?.message ||
                error?.message ||
                "Erro inesperado ao concluir o agendamento.";

            toast.error(message);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full max-w-[980px] mx-auto">
                <h2 className="text-darkgreen text-xl md:text-3xl font-bold">Revisão</h2>
                <p className="text-darkgreen mb-6">
                    <span className="font-bold text-darkgreen">Confirmação</span> | Revise todas as
                    informações antes de finalizar.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <ReviewCard title="Viabilidade" onEdit={() => onEditSection?.(1)}>
                        <ReviewField label="CEP" value={endereco?.cep}/>
                        <ReviewField label="Cidade" value={cadastro?.cidade}/>
                        <ReviewField label="Bairro" value={endereco?.bairro}/>
                        <ReviewField label="Rua" value={endereco?.rua}/>
                        <ReviewField label="Número" value={endereco?.numero}/>
                    </ReviewCard>

                    <ReviewCard title="Informações Pessoais" onEdit={() => onEditSection?.(1)}>
                        <ReviewField label="Nome" value={cadastro?.nome}/>
                        <ReviewField label="CPF" value={cadastro?.cpf}/>
                        <ReviewField label="Data de Nascimento" value={cadastro?.dataNascimento}/>
                        <ReviewField label="RG" value={cadastro?.rg}/>
                        <ReviewField label="Emissor do RG" value={cadastro?.emissorRg}/>
                    </ReviewCard>

                    <ReviewCard title="Informações de Localização" onEdit={() => onEditSection?.(1)}>
                        <ReviewField label="Complemento" value={endereco?.complemento}/>
                        <ReviewField label="Ponto de referência" value={endereco?.referencia}/>
                        <ReviewField label="Qual o tipo de moradia?" value={endereco?.tipoMoradia}/>
                    </ReviewCard>

                    <ReviewCard title="Informações de Contato" onEdit={() => onEditSection?.(1)}>
                        <ReviewField label="E-mail" value={cadastro?.email}/>
                        <ReviewField label="Confirmação de E-mail" value={cadastro?.confirmacaoEmail}/>
                        <ReviewField label="Celular / WhatsApp" value={cadastro?.celular}/>
                        <ReviewField label="Telefone" value={cadastro?.telefone}/>
                    </ReviewCard>

                    <ReviewCard title="Informações de Cobrança" onEdit={() => onEditSection?.(2)}>
                        <ReviewField label="Plano" value={plano?.nome_exibicao}/>
                        <ReviewField label="Valor" value={toBRL(plano?.valor || plano?.value)}/>
                        <ReviewField
                            label="Vencimento"
                            value={plano?.vencimento ? `Dia ${plano.vencimento}` : "-"}
                        />
                        <ReviewField label="Taxa de Adesão" value={toBRL(plano?.taxaTotal)}/>
                        <ReviewField
                            label="Forma de Pagamento (Taxa de Adesão)"
                            value={plano?.formaDePagamento}
                        />
                        <ReviewField label="Pro Rata" value={toBRL(agendamento?.prorata)}/>
                        <ReviewField
                            label="Forma de Pagamento (Pro Rata)"
                            value={plano?.pagamentoProrata || "Na próxima fatura"}
                        />
                    </ReviewCard>

                    <ReviewCard
                        title="Responsáveis Adicionais"
                        onEdit={() => onEditSection?.(2)}
                    >
                        {Array.isArray(data?.responsaveis) && data.responsaveis.length ? (
                            data.responsaveis.flatMap((resp, i) => {
                                const key = resp?.id || i;

                                return [
                                    <ReviewField
                                        key={`${key}-nome`}
                                        label={`Responsável ${i + 1}`}
                                        value={resp?.nome}
                                    />,
                                    <ReviewField
                                        key={`${key}-celular`}
                                        label="Celular / WhatsApp"
                                        value={resp?.celular}
                                    />,
                                ];
                            })
                        ) : (
                            <>
                                <ReviewField label="Responsáveis" value="-"/>
                                <div/>
                            </>
                        )}
                    </ReviewCard>


                    <ReviewCard title="Agendamento" onEdit={() => onEditSection?.(3)}>
                        <ReviewField label="Data" value={fmtDateBR(agendamento?.start)}/>
                        <ReviewField label="Período" value={periodo}/>
                    </ReviewCard>
                </div>

            {/* CHECKS */}
            <div className="mt-6 flex flex-row gap-3">
                <Checkbox
                    register={register}
                    name="aceitouTaxa"
                    error={errors?.aceitouTaxa?.message}
                >
                    Aceitar{" "}
                    <a className="text-primary underline" href="/faq/" target="_blank" rel="noreferrer">
                        Taxa de Adesão*
                    </a>
                </Checkbox>

                <Checkbox
                    register={register}
                    name="aceitouPrivacidade"
                    error={errors?.aceitouPrivacidade?.message}
                >
                    Aceitar{" "}
                    <a
                        className="text-primary underline"
                        href="/faq/politica-privacidade"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Políticas de Privacidade*
                    </a>
                </Checkbox>
            </div>

            {/* SUBMIT */}
            <div className="mt-6">
                <button
                    type="submit"
                    disabled={!canContinue}
                    className="bg-primary text-white font-bold px-10 py-3 rounded-md disabled:opacity-50"
                >
                    {isSubmitting ? "Enviando..." : "Continuar"}
                </button>
            </div>
        </div>
</form>
)
    ;
}
