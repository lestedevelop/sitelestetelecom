import React from "react";
import logoLeste from "@/assets/lestelogocapabranco.png";
import telIcon from "@/assets/telIcon.svg";
import whatsIcon from "@/assets/whatsIcon.svg";
import facebook from "@/assets/facebook.svg";
import insta from "@/assets/insta.svg";
import linkedin from "@/assets/linkedin.svg";
import tiktok from "@/assets/tiktok.svg";
import twitter from "@/assets/twitter.svg";
import portalLeste from "@/assets/portalLeste.svg";
import appLeste from "@/assets/appLeste.svg";
import reclameAqui from "@/assets/reclameAqui.png";
import Image from "next/image";
import ListItemAppLink from "@/components/listItems/ListAppLinkFooter";

export default function FooterMovel() {
    return (
        <footer className="w-full bg-[#00322d]">
            <div className="container py-12">
                <div className="flex justify-center md:hidden pb-12">
                    <Image width={150} src={logoLeste} alt="Leste" className="" />
                </div>
                <div className="text-light">
                    <div className="flex flex-col-reverse md:flex-row justify-between items-start text-light w-full">

                        {/* LOGO + REDES + APPS + RECLAME AQUI */}
                        <div className="flex flex-col gap-10">

                            {/* Logo */}
                            <Image width={150} src={logoLeste} alt="Leste" className="hidden md:block" />

                            {/* Redes sociais */}
                            <div className="mt-10">
                                <h2 className="text-lg font-semibold mb-3">Acompanhe a Leste nas redes</h2>
                                <div className="flex items-center gap-4">
                                    <Image src={facebook} width={40} alt="Facebook" />
                                    <Image src={insta} width={40} alt="Instagram" />
                                    <Image src={tiktok} width={40} alt="TikTok" />
                                    <Image src={twitter} width={40} alt="Twitter" />
                                    <Image src={linkedin} width={40} alt="LinkedIn" />
                                </div>
                            </div>

                            {/* Apps */}
                            <div className="mt-10">
                                <h2 className="text-lg font-semibold mb-3">Baixe o app Leste Central</h2>
                                <div className="flex gap-4">
                                    <ListItemAppLink textApp="Baixar" iconApp={appLeste} nameApp="Leste&nbsp;Central" />
                                    <ListItemAppLink textApp="Baixar" iconApp={portalLeste} nameApp="Leste&nbsp;Suporte" />
                                </div>
                            </div>

                            {/* Reclame Aqui */}
                            <div className="mt-5">
                                <h2 className="text-xl font-semibold">Verificados pelo Reclame Aqui</h2>
                                <Image src={reclameAqui} width={150} alt="Reclame Aqui" className="mt-3 rounded-xl" />
                            </div>
                        </div>

                        {/* PRA VOCÊ */}
                        <div className="flex gap-4 md:gap-20 w-full md:w-[75%] justify-between md:justify-end">
                            <div className="flex flex-col">
                                <h1 className="font-bold text-3xl mb-5">Pra você</h1>

                                <div className="flex flex-col gap-2 text-[15px]">
                                    <a href="#" className="hover:underline">Central de atendimento</a>
                                    <a href="#" className="hover:underline">Teste sua velocidade</a>
                                    <a href="#" className="hover:underline">Área de cobertura</a>
                                    <a href="#" className="hover:underline">2ª via da fatura</a>
                                    <a href="#" className="hover:underline">FAQ</a>
                                    <a href="#" className="hover:underline">Nossas lojas</a>
                                    <a href="#" className="hover:underline">Conheça os aplicativos</a>
                                    <a href="#" className="hover:underline">Trabalhe na Leste</a>
                                    <a href="#" className="hover:underline">Contrato e regulamentos</a>
                                </div>
                            </div>

                            {/* SUPORTE */}
                            <div className="flex flex-col ">

                                <h2 className="font-bold text-3xl mb-5">Suporte 24h</h2>

                                <div className="flex items-center gap-2 text-lg font-semibold">
                                    <Image src={whatsIcon} width={22} alt="WhatsApp" />
                                    <span>021 2020-1300</span>
                                </div>

                                <div className="flex items-center gap-2 text-lg font-semibold mt-3">
                                    <Image src={telIcon} width={22} alt="Telefone" />
                                    <span>021 3940-0130</span>
                                </div>

                                <div className="flex items-center gap-2 text-lg font-semibold mt-3">
                                    <Image src={telIcon} width={22} alt="Telefone" />
                                    <span>021 0800 053 1300</span>
                                </div>

                                <p className="text-sm mt-2 opacity-70">Apenas telefone fixo</p>

                                <h2 className="font-bold text-2xl mt-8">Leste Vendas</h2>

                                <div className="flex items-center gap-2 text-lg font-semibold mt-3">
                                    <Image src={whatsIcon} width={22} alt="WhatsApp" />
                                    <span>021 2020-1303</span>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* Rodapé Final */}
                    <div className="hidden md:flex self-center justify-center w-full mt-10">
                        <p className="text-[12px] opacity-80">
                            Todos os direitos reservados. ©2025 por Leste Telecom
                        </p>
                    </div>
                </div>
            </div>

        </footer>
    )
}


