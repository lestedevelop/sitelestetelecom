import React from "react";
import linkedin from "@/assets/icons/linkedinbranco.png";
import Image from "next/image";
import LinkLeste from "@/components/links/LinkLeste";

export default function FooterCorporate() {

    const MAIN_LINKS = [
        {href: "/corporate", label: "Sobre a Leste Corporate"},
        {href: "/corporate", label: " Conheça nossas soluções"},
        {href: "/corporate/cobertura", label: "Cobertura"},
        {href: "/corporate#contrate", label: "Contrate"},
        {href: "/corporate/contato", label: "Contato"},
    ];

    return (
        <footer className="w-full bg-corporateDark scroll-behavior">
            <div className="container py-12">
                <div className="text-light">
                    <div className="flex flex-col items-center text-center md:text-left justify-center gap-8">
                        <p className={"font-bold"}>Mapa do Site</p>
                        <div className="flex flex-col gap-y-8 md:flex-row justify-between items-center w-full">
                            {MAIN_LINKS.map((item, index) => (
                                <LinkLeste href={item.href}
                                           className={"text-sm text-[#D6D6D6]"}
                                           key={index}>
                                    {item.label}
                                </LinkLeste>
                            ))}
                        </div>
                        <Image src={linkedin} width={42} alt="LinkedIn" />
                        <div className="flex flex-col items-center justify-center gap-2">
                            <p className="text-sm">Endereço: R. João Feliciano da Costa 207 - Centro - Itaboraí - RJ - 24.800-017</p>
                            <p className="text-sm">Todos os direitos reservados. ©2025 por Leste Telecom</p>
                            <a className={"text-sm underline"} href="/docs/corporate/CONTRATO CORPORATE - LESTE TELECOM.pdf" target={"_blank"}>Contrato de prestação de serviço.</a>
                        </div>

                    </div>
                </div>
            </div>

        </footer>
    )
}


