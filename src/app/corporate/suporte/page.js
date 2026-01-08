import AppBarCorporate from "@/pageComponents/corporate/AppBarCorporate";
import FooterCorporate from "@/pageComponents/corporate/FooterCorporate";
import Link from "next/link";

export default function CoporateSuporte() {

    return (
        <div className="min-h-full">

            <AppBarCorporate/>
            <section className={"mt-[120px] bg-light md:mt-[155px]"}>
                <div className="container mx-auto px-6 py-12 max-w-[980px]">

                    <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
                        <span className="text-dark">Nosso </span>
                        <span className="text-primary">Suporte</span>
                    </h1>

                    <p className="mt-6 text-lg text-graylight leading-relaxed max-w-3xl">
                        Os contatos nesta guia são destinados exclusivamente para atendimento à
                        nossos clientes corporativos que possuem internet empresarial.
                    </p>

                    <div className="mt-10">
                        <p className="text-primary font-semibold text-xl">Atendimento:</p>
                        <p className="text-dark text-lg mt-1">24 horas, 7 dias por semana.</p>

                        <div className="mt-8 space-y-8">
                            <div>
                                <p className="text-primary font-semibold text-xl">E-mail:</p>
                                <a href="mailto:cgr@lestetelecom.com.br"  className="mt-1 inline-flex items-center gap-2 text-dark text-lg hover:underline">
                                    cgr@lestetelecom.com.br
                                </a>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <p className="text-primary font-semibold text-xl">Suporte/CGR:</p>
                                    <div className="mt-1 space-y-2">
                                        <a href="tel:+552120060951"
                                           className="inline-flex items-center gap-2 text-dark text-lg hover:underline">
                                            (21) 2006-0951
                                        </a>

                                        <a href="tel:+552139400134"
                                           className="inline-flex items-center gap-2 ml-2 text-dark text-lg hover:underline">
                                            (21) 3940-0134
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-primary font-semibold text-xl inline-flex items-center gap-2">
                                        Suporte via WhatsApp
                                    </p>
                                    <div className="mt-1">
                                        <a
                                            href="https://wa.me/5521976389055"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-dark text-lg hover:underline">
                                            (21) 97638-9055
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-primary/40 w-full"/>
                        </div>
                    </div>

                    <div className="mt-12">
                        <p className="text-primary font-semibold text-xl">
                            Administrativo/Financeiro:
                        </p>

                        <div className="mt-2 space-y-2 text-dark text-lg">
                            <p>
                                <a href="tel:+552120060967" className="hover:underline">
                                    (21) 2006-0967
                                </a>
                                <span className="text-graylight"> (De segunda à sexta, das 09:00h às 18:00h)</span>
                            </p>
                            <p>
                                <a href="tel:+5521976674030" className="hover:underline">
                                    (21) 97667-4030
                                </a>
                                <span className="text-graylight"> (De segunda à sexta, das 11:00h às 20:00h)</span>
                            </p>
                        </div>

                        <div className="mt-6">
                            <p className="text-primary font-semibold text-xl">E-mail:</p>
                            <a href="mailto:administrativo@lestetelecom.com.br"
                               className="mt-1 inline-flex items-center gap-2 text-dark text-lg hover:underline">
                                administrativo@lestetelecom.com.br
                            </a>
                        </div>

                        <div className="mt-10 h-px bg-primary/40 w-full"/>
                    </div>

                    <div className="mt-12">
                        <p className="text-primary font-semibold text-xl">Corporativo:</p>

                        <div className="mt-2 space-y-2">
                            <a href="tel:+552120060968"
                               className="inline-flex items-center gap-2 text-dark text-lg hover:underline">
                                (21) 2006-0968
                            </a>

                            <a href="tel:+5521966758115"
                               className="inline-flex ml-2 items-center gap-2 text-dark text-lg hover:underline">
                                (21) 96675-8115
                            </a>
                        </div>

                        <div className="mt-6">
                            <p className="text-primary font-semibold text-xl">E-mail:</p>
                            <a href="mailto:corporate@lestetelecom.com.br"
                               className="mt-1 inline-flex items-center gap-2 text-dark text-lg hover:underline">
                                corporate@lestetelecom.com.br
                            </a>
                        </div>
                    </div>
                </div>
                <div className="text-center text-xs py-12 text-graylight leading-relaxed mt-6">
                    <p>
                        <strong>Atenção:</strong> A unidade corporate trabalha com produtos de preço e composição
                        diferenciada.
                    </p>
                    <p>Esse canal não visa atendimento a qualquer produto de varejo.</p>
                    <p>
                        Para varejo, clique
                        <Link className="underline text-primary" href="/">
                            aqui
                        </Link>
                        .
                    </p>
                </div>
            </section>

            <FooterCorporate/>
        </div>
    );
}
