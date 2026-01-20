import { useState } from "react";
import { useSales} from "@/contexts/SalesContextNew";
import PagamentoBox from "@/pageComponents/vendas/components/PagamentoBox";

export default function PagamentoSection({}) {
    const { data ,updateStep} = useSales();
    const [metodo, setMetodo] = useState(data?.plano.flagPagamento || {value:"pix_instalacao",taxa:data.plano.taxa_desconto,label:"Pix na Instalação"});

    function handlePagamento(metodo) {
        setMetodo(metodo.value);
        updateStep("plano", {
            ...data?.plano,
            taxaTotal: metodo.taxa,
            formaDePagamento:metodo.label,
            flagPagamento:metodo.value
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