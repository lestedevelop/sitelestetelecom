import { useState } from "react";
import { useSales} from "@/contexts/SalesContextNew";
import PagamentoBox from "@/pageComponents/vendas/components/PagamentoBox";

export default function PagamentoSection({}) {
    const [metodo, setMetodo] = useState("pix_instalacao");
    const { data } = useSales();

    return (
       <div>
               <PagamentoBox
                   onChange={setMetodo}
                   value={metodo}
                   taxaCheia={data?.plano?.taxa ?? 300}
                   taxaNormal={data?.plano?.taxa_desconto ?? 250}
                   pixOffPercent={40}
               />
       </div>
   )
}