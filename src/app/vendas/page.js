"use client";

import {SalesProviderNew, useSales} from "@/contexts/SalesContextNew";
import VendasFlow from "@/pageComponents/vendas/VendasFlow";
import Image from "next/image";
import logo from "@/assets/lestelogocapabranco.png";
import logoVerde from "@/assets/logo.png";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "@/styles/toastify.css";
import  {useCaptureUtm} from "@/pageComponents/vendas/useCaptureUtm";

function VendasLayout() {
    const {data} = useSales();
    useCaptureUtm();


    const showLeft =
        data?.step !== "cadastro_inicial";

    return (
        <div className="bg-darkgreen min-h-screen flex flex-col min-w-full lg:flex-row">
            {!showLeft && (
                <div
                    className="bg-[url('/background-vendas.png')] py-8 lg:py-24 flex flex-col pl-12 gap-8 bg-no-repeat bg-cover w-full lg:w-1/2">
                    <Image src={logo} alt="Leste" className="w-55 lg:mt-50"/>
                    <h2 className="text-white text-lg md:text-4xl md:w-120 w-full">
                        Precisamos apenas de algumas informações para continuar
                    </h2>
                </div>
            )}
            <div className={`w-full ${!showLeft ? 'lg:w-1/2' : ''} md:pr-12 bg-light py-8`}>
                <Image src={logoVerde} alt={""} className={"mx-auto w-40"}/>
                <div className={"max-w-5xl mx-auto px-8"}>
                    <VendasFlow/>
                </div>
            </div>

            <ToastContainer
                position="top-right"
                autoClose={4000}
                newestOnTop
                closeOnClick
                pauseOnHover
            />

        </div>
    );
}

export default function VendasPage() {
    return (
        <SalesProviderNew>
            <VendasLayout/>
        </SalesProviderNew>
    );
}
