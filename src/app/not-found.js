'use client'

import Link from "next/link";
import Image from "next/image";
import imagem404 from "@/assets/404/404-leste.webp";

export default function NotFound() {
    return (
        <main className="relative overflow-hidden bg-white lg:min-h-[calc(100vh-106px)]">
            <div aria-hidden="true" className="pointer-events-none">
                <div className="absolute inset-y-0 left-[34%] right-0 hidden bg-gradient-to-r from-white to-light/70 lg:block"/>
                <svg viewBox="0 0 355 292" className="absolute right-0 top-0 h-auto w-[34%] lg:w-[22%]">
                    <path
                        d="M0 0H355V292C330 294 300 292 285 280C265 262 255 230 225 200C200 175 185 158 140 155C90 152 50 140 25 105C5 75 -5 35 0 0Z"
                        fill="#ACDFD4"/>
                </svg>
                <svg viewBox="0 0 224 44" className="absolute bottom-[calc(0.66vw_-_2px)] left-[7.5%] hidden xl:bottom-[calc(0.66vw_+_46px)] h-auto w-[14%] lg:block">
                    <defs>
                        <linearGradient id="nf-mound" x1="0" x2="1" y1="0" y2="0">
                            <stop offset="0" stopColor="#C4E8DC"/>
                            <stop offset="1" stopColor="#5CC3A2"/>
                        </linearGradient>
                    </defs>
                    <path d="M0 44C50 22 110 2 150 1C185 0 212 22 224 44Z" fill="url(#nf-mound)"/>
                </svg>
                <svg viewBox="0 0 120 224" className="absolute bottom-[calc(0.66vw_-_2px)] left-0 hidden xl:bottom-[calc(0.66vw_+_46px)] h-auto w-[8%] lg:block">
                    <path d="M0 0C70 40 120 140 110 224H0Z" fill="#F2F7F5"/>
                </svg>
            </div>

            <div className="container relative px-6 pb-12 pt-6 lg:grid lg:min-h-[calc(100vh-106px)] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center lg:gap-10 lg:pb-32 lg:pt-4">
                <div className="relative mx-auto w-full max-w-xl lg:order-2 lg:max-w-[min(100%,calc((100vh-170px)*1.335))]">
                    <div aria-hidden="true" className="pointer-events-none">
                        <svg viewBox="0 0 320 372" className="absolute left-[2%] top-[4%] h-auto w-[13%] lg:-left-[6%] lg:top-[6%]">
                            <defs>
                                <linearGradient id="nf-leaf" x1="0" x2="0" y1="0" y2="1">
                                    <stop offset="0" stopColor="#E1F1EC"/>
                                    <stop offset="1" stopColor="#EEF5F2"/>
                                </linearGradient>
                            </defs>
                            <path
                                d="M0 3C70 -2 140 -3 190 2C265 10 320 75 318 155C316 220 300 265 270 292C245 315 220 345 198 372C130 330 75 280 45 210C20 150 5 80 0 3Z"
                                fill="url(#nf-leaf)"/>
                        </svg>
                        <div className="absolute left-[2%] top-[52%] h-1.5 w-6 rotate-[50deg] rounded-full bg-primary/70 lg:-left-[2%] lg:h-2 lg:w-9"/>
                        <div className="absolute right-0 top-[50%] h-1.5 w-6 -rotate-[50deg] rounded-full bg-primary/70 lg:-right-[3%] lg:top-[56%] lg:h-2 lg:w-9"/>
                        <div className="absolute right-[3%] top-[20%] h-3 w-2.5 rotate-12 rounded-full bg-primary/50 lg:-right-[1%] lg:top-[22%] lg:h-4 lg:w-3"/>
                    </div>

                    <Image
                        src={imagem404}
                        alt="Personagem da Leste procurando com uma lupa ao lado do número 404"
                        priority
                        sizes="(min-width: 1024px) 58vw, 100vw"
                        className="relative mx-auto h-auto w-[86%] mix-blend-multiply lg:w-full"
                    />
                </div>

                <div className="relative mt-8 lg:order-1 lg:mt-0">
                    <p className="text-sm font-semibold text-primary md:text-base">Erro 404</p>
                    <h1 className="mt-2 text-4xl font-bold leading-tight text-darkgreen lg:text-5xl">
                        Ops! Página não encontrada
                    </h1>
                    <p className="mt-4 max-w-md text-base text-graylight md:text-lg">
                        Nossa equipe já está de olho, mas parece que essa página se escondeu. Que tal voltar para o
                        caminho certo?
                    </p>

                    <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap">
                        <Link
                            href="/"
                            className="col-span-2 inline-flex h-12 items-center justify-center rounded-md bg-primary px-6 text-base font-semibold text-white hover:opacity-95 sm:h-11 sm:text-sm">
                            Ir para a Home
                        </Link>

                        <Link
                            href="/leste-suporte"
                            className="inline-flex h-12 items-center justify-center rounded-md border border-graylighter bg-white px-5 text-base font-semibold text-darkgreen hover:bg-graylighter/40 sm:h-11 sm:text-sm">
                            Ver suporte
                        </Link>

                        <button
                            type="button"
                            onClick={() => window.history.back()}
                            className="inline-flex h-12 items-center justify-center rounded-md border border-graylighter bg-white px-5 text-base font-semibold text-darkgreen hover:bg-graylighter/40 sm:h-11 sm:text-sm"
                        >
                            Voltar
                        </button>
                    </div>

                    <p className="mt-6 text-xs text-graylight md:text-sm">
                        Se você acha que isso é um erro, tente atualizar a página ou volte mais tarde.
                    </p>
                </div>
            </div>
        </main>
    );
}
