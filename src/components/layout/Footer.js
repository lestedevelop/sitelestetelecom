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
import Link from "next/link";
import ListItemAppLink from "../listItems/ListAppLinkFooter";

export default function Footer() {
    return (
        <footer className="w-full bg-[#00322d]">
            <div className="md:hidden mx-auto max-w-5xl px-6 py-6 sm:px-6 lg:px-8 text-amber-50">
                <div className="flex flex-col justify-center items-center">
                    <Image width={150} src={logoLeste} alt="logo"/>

                    <div className="flex gap-5 md:justify-around">

                        <div className="flex flex-col ">
                            <h1 className="mt-20 font-bold text-3xl">
                                Pra Você
                            </h1>
                            <div className="flex flex-col gap-1 mt-3">
                                <a className="text-[#f2f2f2] text-[14px] mt-3"
                                    href="https://www.lestetelecom.com.br/faq-suporte/como-entrar-em-contato-com-nossa-central-de-atendimento.?_gl=1*uzyceg*_up*MQ..*_gs*MQ..&gclid=CjwKCAiA9bq6BhAKEiwAH6bqoFQjnJzTGu4-6uax7WtpL_Nl_LQ2caXVnftGKoMaawCblazYbWDKuxoCMs4QAvD_BwE">
                                    Central de atendimento</a>
                                <a className="text-[#f2f2f2] text-[14px]  mt-3"
                                    href="https://www.lestetelecom.com.br/faq-suporte/como-entrar-em-contato-com-nossa-central-de-atendimento.?_gl=1*uzyceg*_up*MQ..*_gs*MQ..&gclid=CjwKCAiA9bq6BhAKEiwAH6bqoFQjnJzTGu4-6uax7WtpL_Nl_LQ2caXVnftGKoMaawCblazYbWDKuxoCMs4QAvD_BwE">
                                    Teste sua velocidade</a>
                                <a className="text-[#f2f2f2] text-[14px]  mt-3"
                                    href="https://www.lestetelecom.com.br/faq-suporte/como-entrar-em-contato-com-nossa-central-de-atendimento.?_gl=1*uzyceg*_up*MQ..*_gs*MQ..&gclid=CjwKCAiA9bq6BhAKEiwAH6bqoFQjnJzTGu4-6uax7WtpL_Nl_LQ2caXVnftGKoMaawCblazYbWDKuxoCMs4QAvD_BwE">
                                    Área de cobertura</a>
                                <a className="text-[#f2f2f2] text-[14px]  mt-3"
                                    href="https://www.lestetelecom.com.br/faq-suporte/como-entrar-em-contato-com-nossa-central-de-atendimento.?_gl=1*uzyceg*_up*MQ..*_gs*MQ..&gclid=CjwKCAiA9bq6BhAKEiwAH6bqoFQjnJzTGu4-6uax7WtpL_Nl_LQ2caXVnftGKoMaawCblazYbWDKuxoCMs4QAvD_BwE">
                                    2ª via da fatura</a>
                                <a className="text-[#f2f2f2] text-[14px]  mt-3"
                                    href="https://www.lestetelecom.com.br/faq-suporte/como-entrar-em-contato-com-nossa-central-de-atendimento.?_gl=1*uzyceg*_up*MQ..*_gs*MQ..&gclid=CjwKCAiA9bq6BhAKEiwAH6bqoFQjnJzTGu4-6uax7WtpL_Nl_LQ2caXVnftGKoMaawCblazYbWDKuxoCMs4QAvD_BwE">
                                    FAQ</a>
                                <a className="text-[#f2f2f2] text-[14px]  mt-3"
                                    href="https://www.lestetelecom.com.br/faq-suporte/como-entrar-em-contato-com-nossa-central-de-atendimento.?_gl=1*uzyceg*_up*MQ..*_gs*MQ..&gclid=CjwKCAiA9bq6BhAKEiwAH6bqoFQjnJzTGu4-6uax7WtpL_Nl_LQ2caXVnftGKoMaawCblazYbWDKuxoCMs4QAvD_BwE">
                                    Nossas Lojas</a>
                                <a className="text-[#f2f2f2] text-[14px]  mt-3"
                                    href="https://www.lestetelecom.com.br/faq-suporte/como-entrar-em-contato-com-nossa-central-de-atendimento.?_gl=1*uzyceg*_up*MQ..*_gs*MQ..&gclid=CjwKCAiA9bq6BhAKEiwAH6bqoFQjnJzTGu4-6uax7WtpL_Nl_LQ2caXVnftGKoMaawCblazYbWDKuxoCMs4QAvD_BwE">
                                    Conheça os aplicativos</a>
                                <a className="text-[#f2f2f2] text-[14px]  mt-3"
                                    href="https://www.lestetelecom.com.br/faq-suporte/como-entrar-em-contato-com-nossa-central-de-atendimento.?_gl=1*uzyceg*_up*MQ..*_gs*MQ..&gclid=CjwKCAiA9bq6BhAKEiwAH6bqoFQjnJzTGu4-6uax7WtpL_Nl_LQ2caXVnftGKoMaawCblazYbWDKuxoCMs4QAvD_BwE">
                                    Trabalhe na Leste</a>
                                <a className="text-[#f2f2f2] text-[14px]  mt-3"
                                    href="https://www.lestetelecom.com.br/faq-suporte/como-entrar-em-contato-com-nossa-central-de-atendimento.?_gl=1*uzyceg*_up*MQ..*_gs*MQ..&gclid=CjwKCAiA9bq6BhAKEiwAH6bqoFQjnJzTGu4-6uax7WtpL_Nl_LQ2caXVnftGKoMaawCblazYbWDKuxoCMs4QAvD_BwE">
                                    Contrato e regulamentos</a>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3">
                            <h2 className="mt-20 font-bold text-3xl">Suporte 24h</h2>

                            {/* WhatsApp */}
                            <div className="flex items-center gap-2 text-white font-bold text-lg">
                                <Image src={whatsIcon} alt="WhatsApp" width={24} height={24} />
                                <span>21 2020-1300</span>
                            </div>

                            {/* Telefone fixo */}
                            <div className="flex items-center gap-2 text-white font-bold text-lg">
                                <Image src={telIcon} alt="Telefone" width={24} height={24} />
                                <span>21 3940-0130</span>
                            </div>

                            {/* 0800 */}
                            <div className="flex items-center gap-2 text-white font-bold text-lg">
                                <Image src={telIcon} alt="Telefone" width={24} height={24} />
                                <span>21 0800 053 1300</span>
                            </div>

                            <h2 className="mt-10 font-bold text-2xl">Leste Vendas</h2>

                            {/* WhatsApp Leste Vendas */}
                            <div className="flex items-center gap-2 text-white font-bold text-lg">
                                <Image src={whatsIcon} alt="WhatsApp" width={24} height={24} />
                                <span>021 2020-1303</span>
                            </div>
                        </div>



                    </div>

                </div>
                <div className="flex flex-col md:hidden   gap-5 mt-10 text-lg">
                    <h2>
                        Apenas Telefone Fixo
                    </h2>
                    <h2 className="font-bold text-2xl">Nossas Redes</h2>
                    <div className="flex gap-2 items-center">
                        <Image src={facebook} alt="WhatsApp" width={47} height={24} />
                        <Image src={insta} alt="WhatsApp" width={47} height={24} />
                        <Image src={tiktok} alt="WhatsApp" width={47} height={24} />
                        <Image src={twitter} alt="WhatsApp" width={47} height={24} />
                        <Image src={linkedin} alt="WhatsApp" width={47} height={24} />

                    </div>
                    <div>
                        <h2 className="font-bold text-2xl">Baixe o app leste central</h2>
                        <div className="flex items-center gap-2 mt-5">
                            <ListItemAppLink textApp={'Baixar'} iconApp={appLeste} nameApp={'Leste Central'} />
                            <ListItemAppLink textApp={'Baixar'} iconApp={portalLeste} nameApp={'Leste Suporte'} />

                        </div>
                    </div>

                    <div className="mt-5">
                        <h2 className="text-[20px] text-[#fff]">
                            Verificados pelo Reclame Aqui
                        </h2>
                        <Image src={reclameAqui} className="mt-3 rounded-2xl" alt="Icone Reclame aqui" width={150} height={24} />
                        <div className="flex justify-center mt-15">
                            <p className="text-[10px]">
                                Todos os direitos reservados. ©2025 por Leste Telecom
                            </p>


                        </div>
                    </div>

                </div>
            </div>
            <div className="mx-auto max-w-6xl px-6 py-10 sm:px-6 lg:px-8 text-amber-50">

                {/* DESKTOP */}
                <div className="hidden md:flex justify-between items-start   px-6 py-6 sm:px-6 lg:px-8 text-amber-50 w-full">

                    {/* LOGO + REDES + APPS + RECLAME AQUI */}
                    <div className="flex flex-col gap-10">

                        {/* Logo */}
                        <Image width={150} src={logoLeste} alt="Leste" />

                        {/* Redes sociais */}
                        <div className="mt-10">
                            <h2 className="text-xl font-semibold mb-3">Acompanhe a Leste nas redes</h2>
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
                            <h2 className="text-xl font-semibold mb-3">Baixe o app Leste Central</h2>
                            <div className="flex gap-4">
                                <ListItemAppLink textApp="Baixar" iconApp={appLeste} nameApp="Leste Central" />
                                <ListItemAppLink textApp="Baixar" iconApp={portalLeste} nameApp="Leste Suporte" />
                            </div>
                        </div>

                        {/* Reclame Aqui */}
                        <div className="mt-5">
                            <h2 className="text-xl font-semibold">Verificados pelo Reclame Aqui</h2>
                            <Image src={reclameAqui} width={150} alt="Reclame Aqui" className="mt-3 rounded-xl" />
                        </div>
                    </div>

                    {/* PRA VOCÊ */}
                    <div className="flex gap-20 ">
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

        </footer>
    )
}


