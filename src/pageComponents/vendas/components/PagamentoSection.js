import { useState } from "react";
import { useSales} from "@/contexts/SalesContextNew";
import PagamentoBox from "@/pageComponents/vendas/components/PagamentoBox";

export default function PagamentoSection({}) {
    const [metodo, setMetodo] = useState("pix_instalacao");
    const { data ,updateStep} = useSales();

    function handlePagamento(metodo,total,metodoLabel) {
        setMetodo(metodo);
        updateStep("plano", {
            ...data?.plano,
            taxaTotal: total,
            formaDePagamento:metodoLabel,
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
   )
}