import React from "react";
import logoLeste from "@/assets/logolestemovelbranca.svg";
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
import appstore from "@/assets/icons/apple.svg";
import playstore from "@/assets/icons/playstore.svg";

import Image from "next/image";
import ListItemAppLink from "@/components/listItems/ListAppLinkFooter";
import Link from "next/link";

export default function FooterMovel() {
    return (
        <footer className="w-full bg-darkgreen">
            <div className="container py-12">
                <div className="flex justify-center md:hidden pb-12">
                    <Image width={260} src={logoLeste} alt="Leste" className="fill-white" />
                </div>
                <div className="text-light">
                    <div className="flex flex-col-reverse md:flex-row justify-between items-start text-light w-full">

                        {/* LOGO + REDES + APPS + RECLAME AQUI */}
                        <div className="flex flex-col gap-10">

                            {/* Logo */}
                            <Image width={260} src={logoLeste} alt="Leste" className="hidden md:block" />

                            {/* Apps */}
                            <div className="mt-10 w-full">
                                <h2 className="text-lg font-semibold mb-3">Baixe o app Leste Central</h2>
                                <div className={"flex items-center h-24 md:w-96 justify-between"}>
                                    <a target={"_blank"} href={"https://play.google.com/store/apps/details?id=app.mobile.leste"} className={"flex items-center gap-x-4 w-39 md:w-48"}>
                                        <Image className={"w-[29px] h-[36px]"} src={playstore} alt={"playstore"}/>
                                        <p className={"text-light"}>Baixar no<span className={"font-bold"}><br/> Play Store</span>
                                        </p>
                                    </a>
                                    <a target={"_blank"} href={"https://apps.apple.com/br/app/leste-m%C3%B3vel/id6449548594"} className={"flex items-center gap-x-4 w-39 md:w-48"}>
                                        <Image className={"w-[29px] h-[36px]"} src={appstore} alt={"appstore"}/>
                                        <p className={"text-light"}>Baixar no <span
                                            className={"font-bold"}><br/>App Store</span>
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* PRA VOCÊ */}
                        <div className="flex gap-4 md:gap-20 w-full md:w-[75%] justify-between md:justify-end">
                            <div className="flex flex-col">
                                <h1 className="font-bold text-3xl mb-5">Pra você</h1>

                                <div className="flex flex-col gap-2 text-[15px]">
                                    <Link href="/movel" className="hover:underline">Inicio</Link>
                                    <a href="https://wa.me/5511933019327" target={"_blank"} className="hover:underline">Suporte</a>
                                    <a href="https://tim.img.com.br/mapa-cobertura/" target={"_blank"} className="hover:underline">Mapa de Cobertura</a>
                                    <Link href="/movel/chip" className="hover:underline">Como comprar na Leste</Link>
                                </div>
                            </div>

                            <div className="flex flex-col justify-end gap-2 text-[15px]">
                                <a href="https://privacidade.operadora.app.br/#/Leste" target={"_blank"} className="hover:underline">Política de Privacidade</a>
                                <a href="https://privacidade.operadora.app.br/#/Leste" target={"_blank"} className="hover:underline">Termos e condições</a>
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


