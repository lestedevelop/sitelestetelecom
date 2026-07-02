import { useEffect, useMemo, useState } from "react";
import { useSales } from "@/contexts/SalesContextNew";
import PagamentoBox from "@/pageComponents/vendas/components/PagamentoBox";

export default function PagamentoSection({}) {
    const { data, updateStep } = useSales();

    const defaultPayment = useMemo(() => ({
        value: "pix_instalacao",
        taxa: data?.plano?.taxa_desconto ?? 250,
        label: "Pix na Instalação",
    }), [data?.plano?.taxa_desconto]);

    const [metodo, setMetodo] = useState(data?.plano?.flagPagamento || defaultPayment.value);

    useEffect(() => {
        if (!data?.plano?.id) return;
        if (data?.plano?.taxaTotal !== undefined && data?.plano?.formaDePagamento) return;

        updateStep("plano", {
            ...data?.plano,
            taxaTotal: defaultPayment.taxa,
            formaDePagamento: defaultPayment.label,
            flagPagamento: defaultPayment.value,
        });
    }, [
        data?.plano?.id,
        data?.plano?.taxaTotal,
        data?.plano?.formaDePagamento,
        defaultPayment,
        updateStep,
    ]);

    function handlePagamento(metodo) {
        setMetodo(metodo.value);
        updateStep("plano", {
            ...data?.plano,
            taxaTotal: metodo.taxa,
            formaDePagamento: metodo.label,
            flagPagamento: metodo.value,
        });
    }

    return (
        <div>
            <PagamentoBox
                onChange={handlePagamento}
                value={metodo}
                taxaCheia={data?.plano?.taxa ?? 300}
                taxaNormal={data?.plano?.taxa_desconto ?? 250}
            />
        </div>
    );
}
