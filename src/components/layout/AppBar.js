// import { useRouter } from 'next/router'
"use client";
import Link from "next/link";
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { useEffect, useState } from "react";
import LinkLeste from "../links/LinkLeste";
import { colors } from "@/styles/colors";
import IconeTelefone from "../icons/TelephoneIcon";
import IconeWhatsApp from "../icons/WhatsappIcon";
export default function AppBar() {

    const [isFixed, setIsFixed] = useState(false);
    const [animate, setAnimate] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                if (!isFixed) {
                    setIsFixed(true);
                    setAnimate(true); // ativa a animação
                    setTimeout(() => setAnimate(false), 500); // desativa após a duração
                }
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isFixed]);

    return (
        <nav
            style={{ boxShadow: "0px 0px 21px 0px #00000066" }}
            className={`bg-[#FFFFFF]    w-full transition-transform duration-500 ease-out ${isFixed
                ? `fixed top-0 left-0 right-0 z-50 shadow-md ${animate ? "-translate-y-25 opacity-0" : "translate-y-0 opacity-100"
                }`
                : "relative"
                }`}
        >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 sm:py-10 lg:px-8">
                <div className="flex ml-30 gap-3 justify-start mr-5 space-x-4">
                    <LinkLeste className={` font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#00997b] after:transition-all after:duration-300 hover:after:w-full hover:font-semibold`} href="/ultra">
                        Para sua casa
                    </LinkLeste>
                    <LinkLeste className={` text-[#979797] font-medium after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[##979797] after:transition-all after:duration-300 hover:after:w-full hover:font-semibold transition-all `} href="/movel">
                        Para sua empresa
                    </LinkLeste>
                    <LinkLeste icon={<IconeWhatsApp/>} className={`font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[##979797] after:transition-all after:duration-300 hover:after:w-full hover:font-semibold transition-all `} href="/movel">
                        <p className="text-[12px]">21</p> 2020-1300
                    </LinkLeste>
                    <LinkLeste icon={<IconeTelefone/>} className={` font-bold after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[##979797] after:transition-all after:duration-300 hover:after:w-full hover:font-semibold transition-all `} href="/movel">
                       <p className="text-[12px]">21</p> 0800 053 1300
                    </LinkLeste>
                </div>

                <div className="flex h-16 items-center justify-between">

                    <div className="flex items-center mt-10 w-full">
                        <div className="shrink-0 ml-30 ">
                            <Link href="/" >
                                <Image
                                    src={logo} // import via Webpack
                                    alt="Logo"
                                    width={120}
                                    height={60}
                                />
                            </Link>
                        </div>
                        <div className="hidden md:flex mr-25 flex-col gap-8">

                            <div className="ml-10 flex items-baseline space-x-4">

                                <LinkLeste className={" text-[#979797] font-semibold hover:text-black"} href="/movel">
                                    Ajuda
                                </LinkLeste>
                                <LinkLeste className={" text-[#979797] font-semibold hover:text-black"} href="/movel">
                                    Central do Assinante
                                </LinkLeste>
                                <LinkLeste className={" text-[#979797] font-semibold hover:text-black"} href="/movel">
                                    Indique e Ganhe
                                </LinkLeste>



                            </div>
                        </div>
                    </div>

                    <div className="-mr-2 flex md:hidden">
                        <button type="button" command="--toggle" commandfor="mobile-menu"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                            <span className="absolute -inset-0.5"></span>
                            <span className="sr-only">Open main menu</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon"
                                aria-hidden="true" className="size-6 in-aria-expanded:hidden">
                                <path d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" strokeLinecap="round"
                                    strokeLinejoin="round" />
                            </svg>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon"
                                aria-hidden="true" className="size-6 not-in-aria-expanded:hidden">
                                <path d="M6 18 18 6M6 6l12 12" stroke-linecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <el-disclosure id="mobile-menu" hidden className="block md:hidden">
                <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                    <a href="#" aria-current="page"
                        className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Dashboard</a>
                    <a href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Team</a>
                    <a href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Projects</a>
                    <a href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Calendar</a>
                    <a href="#"
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white">Reports</a>
                </div>
                <div className="border-t border-white/10 pt-4 pb-3">
                    <div className="flex items-center px-5">
                        <div className="shrink-0">
                            <img
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                alt="" className="size-10 rounded-full outline -outline-offset-1 outline-white/10" />
                        </div>
                        <div className="ml-3">
                            <div className="text-base/5 font-medium text-white">Tom Cook</div>
                            <div className="text-sm font-medium text-gray-400">tom@example.com</div>
                        </div>
                        <button type="button"
                            className="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                            <span className="absolute -inset-1.5"></span>
                            <span className="sr-only">View notifications</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" data-slot="icon"
                                aria-hidden="true" className="size-6">
                                <path
                                    d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                                    stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-3 space-y-1 px-2">
                        <a href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white">Your
                            profile</a>
                        <a href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white">Settings</a>
                        <a href="#"
                            className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white">Sign
                            out</a>
                    </div>
                </div>
            </el-disclosure>
        </nav>
    )
}