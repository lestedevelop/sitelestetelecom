"use client";

import {useEffect, useMemo} from "react";
import {useSales} from "@/contexts/SalesContextNew";
import {daysInMonthUTC, toBRL, lastDayOfMonthUTC} from "@/utils/Format";
import Image from "next/image";
import iconBarra from "@/assets/icons/codigobarras.png";
import VencimentoSection from "@/pageComponents/vendas/components/VencimentoSection";

const DUE_DAY_OPTIONS = [2, 5, 17];

function parseYmdAsUTC(dateLike) {
    const ymd = String(dateLike || "").slice(0, 10);
    const [y, m, d] = ymd.split("-").map(Number);
    if (!y || !m || !d) return null;
    return new Date(Date.UTC(y, m - 1, d));
}

function buildInvoiceDateUTC(startDate, dueDay) {
    if (!startDate || dueDay === undefined || dueDay === null) return null;

    const due = Number(dueDay);
    if (!Number.isFinite(due)) return null;

    const startDay = startDate.getUTCDate();
    // Regra de negócio: primeira cobrança ocorre no mês seguinte ao vencimento de referência.
    const monthOffset = due >= startDay ? 1 : 2;
    const firstOfTargetMonth = new Date(
        Date.UTC(startDate.getUTCFullYear(), startDate.getUTCMonth() + monthOffset, 1)
    );

    const maxDay = daysInMonthUTC(firstOfTargetMonth);
    const safeDueDay = Math.min(Math.max(1, Math.trunc(due)), maxDay);

    return new Date(
        Date.UTC(
            firstOfTargetMonth.getUTCFullYear(),
            firstOfTargetMonth.getUTCMonth(),
            safeDueDay
        )
    );
}

function calcProRataUTC(planValue, startISO) {
    const startDate = parseYmdAsUTC(startISO);
    if (!startDate) {
        return {
            usedDays: 0,
            prorata: 0,
            nextInvoice: Number(planValue || 0),
            startDate: null,
            endDate: null
        };
    }
    const endDate = lastDayOfMonthUTC(startDate);

    const usedDays = endDate.getUTCDate() - startDate.getUTCDate() + 1; // inclusive
    const monthDays = daysInMonthUTC(startDate);

    const prorata = (planValue / monthDays) * usedDays;
    const nextInvoice = planValue + prorata;

    return {usedDays, prorata, nextInvoice, startDate, endDate};
}


export default function ProRataSection() {
    const {data, updateStep} = useSales();

    const startISO = data?.agendamento.start;
    const planValue = data?.plano.valor;

    const {usedDays, prorata, nextInvoice, startDate, endDate} = useMemo(
        () => calcProRataUTC(Number(planValue), startISO),
        [planValue, startISO]
    );

    const periodMonthLabel = startDate
        ? startDate.toLocaleDateString("pt-BR", {month: "long", timeZone: "UTC"})
        : "";

    const periodLabel =
        startDate && endDate
            ? `${String(startDate.getUTCDate()).padStart(2, "0")} a ${String(endDate.getUTCDate()).padStart(2, "0")} de ${periodMonthLabel}`
            : "-";

    const tableRows = useMemo(
        () =>
            DUE_DAY_OPTIONS.map((option, index) => {
                const rowInvoiceDate = buildInvoiceDateUTC(startDate, option);
                const rowPayLabel = rowInvoiceDate
                    ? `${String(rowInvoiceDate.getUTCDate()).padStart(2, "0")} de ${rowInvoiceDate.toLocaleDateString("pt-BR", {
                        month: "long",
                        timeZone: "UTC"
                    })}`
                    : "-";

                return {
                    id: `${option}-${index}`,
                    periodLabel,
                    dueDay: option,
                    payLabel: rowPayLabel,
                    rowClassName: index % 2 === 0 ? "bg-white text-darkgreen" : "bg-light text-darkgreen"
                };
            }),
        [startDate, periodLabel]
    );

    useEffect(() => {
        updateStep("agendamento", {
            ...data?.agendamento,
            prorata
        });

    },[prorata]);

    function handleSelectVencimento(vencimento) {
        updateStep("plano", {
            ...data?.plano,
            vencimento
        });
    }

    return (
        <section className="w-full max-w-[980px]">
            <h3 className="text-xl mt-8 font-bold text-darkgreen mb-3">Pro rata</h3>

            <p className="text-darkgreen mb-4">
                O pagamento da fatura deverá ser feito sempre no mês em que o serviço for utilizado.
                Todo os meses, será gerada uma fatura com o valor do plano para o vencimento escolhido,
                cujo período de utilização do serviço compreenderá da data de instalação até o ultimo dia do mês , por exemplo:
            </p>

            <div className="border botext-graylighter rounded-lg overflow-hidden mb-3">
                <div className="w-full overflow-x-hidden">
                    <table className="w-full text-sm">
                        <thead>
                        <tr className="bg-graylight text-white">
                            <th className="text-left px-4 py-3 font-bold">Período de utilização</th>
                            <th className="text-left px-4 py-3 font-bold">Dia de vencimento</th>
                            <th className="text-left px-4 py-3 font-bold">Mês de pagamento</th>
                        </tr>
                        </thead>
                        <tbody>
                        {tableRows.map((row) => (
                            <tr key={row.id} className={row.rowClassName}>
                                <td className="px-4 py-3 border-t border-graylighter">{row.periodLabel}</td>
                                <td className="px-4 py-3 border-t border-graylighter">{row.dueDay}</td>
                                <td className="px-4 py-3 border-t border-graylighter">{row.payLabel}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className={"py-8"}>
                <div className={"h-[2px] bg-gray-300 w-full"} />
                <VencimentoSection className={"py-8"} onSelect={handleSelectVencimento} vencimentos={[2, 5, 17]}  selected={data?.plano?.vencimento}/>
                <div className={"h-[2px] bg-gray-300 w-full"} />
            </div>
            <div className="text-center text-graylight font-bold mb-6">Datas de Pagamento</div>
            <p className="text-darkgreen text-lg mb-4">
                Se no primeiro mês, não utilizar o serviço por completo, realizaremos um cálculo proporcional
                com base no valor do plano escolhido e dias utilizados.
            </p>

            {startDate ? (
                <p className="text-darkgreen text-lg mb-4">
                    Da data escolhida para o pré agendamento até o último dia do mês, serão utilizados{" "}
                    <span className="font-extrabold">{usedDays} dias</span> e o proporcional será de{" "}
                    <span className="font-extrabold">{toBRL(prorata)}</span>.
                </p>
            ) : (
                <p className="text-[#6a7282] mb-4">
                    Selecione uma data de agendamento para calcular o pró-rata.
                </p>
            )}

            <div className="mt-2 flex gap-4 items-center border-2 bg-white border-primary/40 rounded-xl p-4">
                <div className={"w-12"}>
                    <Image src={iconBarra} alt={""}/>
                </div>
                <div>
                    <div className="text-primary font-extrabold">
                        Esse valor virá na próxima fatura.
                    </div>
                    <div className="text-dark">
                        Logo sua próxima fatura será no valor de{" "}
                        <span className="font-extrabold">{toBRL(nextInvoice)}</span>.
                    </div>
                </div>
            </div>
        </section>
    );
}

