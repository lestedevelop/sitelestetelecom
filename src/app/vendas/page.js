"use client";

import {SalesProviderNew} from "@/contexts/SalesContextNew";
import VendasFlow from "@/pageComponents/vendas/VendasFlow";
import Image from "next/image";
import logo from "@/assets/lestelogocapabranco.png"
import {ToastContainer} from "react-toastify";

export default function VendasPage() {
    return (
    <div className="bg-darkgreen min-h-screen flex flex-col min-w-full lg:flex-row">
           <div className="bg-[url('/background-vendas.png')] py-8 lg:py-24 flex flex-col pl-12 gap-8 bg-no-repeat bg-cover w-full lg:w-1/2">
               <Image src={logo} alt={""} className={"w-55 lg:mt-50"} />
               <h2 className={"text-white text-lg md:text-4xl md:w-120 w-full"}>
                   Precisamos apenas de algumas informações para continuar
               </h2>
           </div>
           <div className={"w-full lg:w-1/2 md:pr-12 bg-light py-8 lg:py-24"}>
               <SalesProviderNew>
                   <VendasFlow/>
               </SalesProviderNew>
           </div>
        <ToastContainer
            position="top-right"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            pauseOnHover
        />
    </div>
)
    ;
}
