import React from "react";
import logoLeste from "@/assets/lestelogocapabranco.png";
import telIcon from "@/assets/telIcon.svg";
import whatsIcon from "@/assets/whatsIcon.svg";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#00322d]">
            <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8 text-amber-50">
                <div className="flex flex-col md:flex-row md:justify-start justify-center items-center">
                    <Image width={150} src={logoLeste} />
                    <div className="flex gap-5">

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

                            <h2 className="mt-10 font-bold text-3xl">Leste Vendas</h2>

                            {/* WhatsApp Leste Vendas */}
                            <div className="flex items-center gap-2 text-white font-bold text-lg">
                                <Image src={whatsIcon} alt="WhatsApp" width={24} height={24} />
                                <span>021 2020-1303</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </footer>
    )
}