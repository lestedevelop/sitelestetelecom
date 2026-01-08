'use client'

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
    return (
        <main className="min-h-screen bg-light">
            <div className="container px-6 py-16">
                <div className="mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-2">
                    <div>
                        <p className="text-sm font-semibold text-primary">Erro 404</p>
                        <h1 className="mt-2 text-3xl font-bold text-dark md:text-4xl">
                            Página não encontrada
                        </h1>
                        <p className="mt-4 text-graylight">
                            Parece que você caiu em uma rota que não existe. Bora voltar pro
                            caminho certo?
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                href="/"
                                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-5 text-sm font-semibold text-white hover:opacity-95">
                                Ir para a Home
                            </Link>

                            <Link
                                href="/leste-suporte"
                                className="inline-flex h-11 items-center justify-center rounded-md border border-graylighter bg-white px-5 text-sm font-semibold text-dark hover:bg-graylighter/40">
                                Ver Suporte
                            </Link>

                            <button
                                type="button"
                                onClick={() => window.history.back()}
                                className="inline-flex h-11 items-center justify-center rounded-md border border-graylighter bg-white px-5 text-sm font-semibold text-dark hover:bg-graylighter/40"
                            >
                                Voltar
                            </button>
                        </div>

                        <p className="mt-6 text-xs text-graylight">
                            Se você acha que isso é um erro, tente atualizar a página ou volte
                            mais tarde.
                        </p>
                    </div>

                    <div className="relative mx-auto w-full max-w-md">
                        <div className="absolute -inset-6 rounded-3xl bg-white/70 blur-xl" />
                        <div className="relative overflow-hidden rounded-3xl border border-graylighter bg-white p-6 shadow-sm">
                            <Image
                                src="/404-leste.jpg"
                                alt="Personagem da Leste perdida - página não encontrada"
                                width={900}
                                height={900}
                                priority
                                className="h-auto w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
