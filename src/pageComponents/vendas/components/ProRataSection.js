"use client";

import {useEffect, useMemo} from "react";
import {useSales} from "@/contexts/SalesContextNew";
import {daysInMonthUTC, monthNamePT, toBRL, lastDayOfMonthUTC} from "@/utils/Format";
import Image from "next/image";
import iconBarra from "@/assets/icons/codigobarras.png";

function calcProRataUTC(planValue, startISO) {
    const startDate = new Date(startISO);
    const endDate = lastDayOfMonthUTC(startDate);

    const usedDays = endDate.getUTCDate() - startDate.getUTCDate() + 1; // inclusive
    const monthDays = daysInMonthUTC(startDate);

    const prorata = (planValue / monthDays) * usedDays;
    console.log("planvalue " + planValue);
    const nextInvoice = planValue + prorata;

    return {usedDays, prorata, nextInvoice, startDate, endDate};
}


export default function ProRataSection() {
    const {data, updateStep} = useSales();

    const startISO = data?.agendamento.start;
    const planValue = data?.plano.valor;

    const dueDay = data?.plano?.vencimento;

    const {usedDays, prorata, nextInvoice, startDate, endDate} = useMemo(
        () => calcProRataUTC(Number(planValue), startISO),
        [planValue, startISO]
    );

    const monthLabel = startDate ? monthNamePT(startDate) : "";
    const periodLabel =
        startDate && endDate
            ? `01 a ${String(endDate.getDate()).padStart(2, "0")} de ${monthLabel}`
            : "-";

    const payLabel =
        startDate ? `${String(dueDay).padStart(2, "0")} de ${monthLabel}` : "-";

    useEffect(() => {
        updateStep("agendamento", {
            ...data?.agendamento,
            prorata
        });

    },[prorata]);

    return (
        <section className="w-full max-w-[980px]">
            <h3 className="text-xl mt-8 font-bold text-darkgreen mb-3">Pro rata</h3>

            <p className="text-darkgreen mb-4">
                O pagamento da fatura deverá ser feito sempre no mês em que o serviço for utilizado.
                Todo os meses, será gerada uma fatura com o valor do plano para o vencimento escolhido,
                cujo período de utilização do serviço compreenderá do 1º ao último dia do mês, por exemplo:
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
                        <tr className="bg-white text-darkgreen">
                            <td className="px-4 py-3 border-t border-graylighter">01 a 28 de Fevereiro</td>
                            <td className="px-4 py-3 border-t border-graylighter">2</td>
                            <td className="px-4 py-3 border-t border-graylighter">02 de Fevereiro</td>
                        </tr>
                        <tr className="bg-light text-darkgreen">
                            <td className="px-4 py-3 border-t border-graylighter">01 a 28 de Fevereiro</td>
                            <td className="px-4 py-3 border-t border-graylighter">5</td>
                            <td className="px-4 py-3 border-t border-graylighter">05 de Fevereiro</td>
                        </tr>
                        <tr className="bg-white text-darkgreen">
                            <td className="px-4 py-3 border-t border-graylighter">01 a 31 de Janeiro</td>
                            <td className="px-4 py-3 border-t border-graylighter">17</td>
                            <td className="px-4 py-3 border-t border-graylighter">17 de Janeiro</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
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
