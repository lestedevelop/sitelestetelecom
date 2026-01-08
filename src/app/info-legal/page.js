import AppBar from "@/components/layout/AppBar";
import Footer from "@/components/layout/Footer";
import logo from "@/assets/Leste_Institucionalpng.png"
import logoAntiga from "@/assets/LogoAntigo.png"
import Image from "next/image"
import Link from "next/link";

export default function InfoLegal() {
    return (
        <div className="min-h-full">
            <AppBar/>
            <section className="w-full mt-[90px] md:mt-[161px] bg-light">
                <div className="container py-14 md:py-20">
                    <h1 className="text-2xl md:text-[40px] font-extrabold tracking-tight text-dark md:text-5xl">
                        Informações legais.
                    </h1>

                    <p className="mt-10 text-sm text-dark/70">
                        Leste® e Leste Telecom® são marcas registradas no INPI da empresa:
                    </p>

                    <div className="mt-14 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-24">
                        <Image
                            src={logo}
                            alt="Logo Leste"
                            className="h-auto w-[260px] md:w-[320px]"
                            priority
                        />
                        <Image
                            src={logoAntiga}
                            alt="Logo Leste Telecom"
                            className="h-auto w-[220px] md:w-[280px]"
                            priority
                        />
                    </div>

                    <div className="mt-14 space-y-6 text-base text-dark/80">
                        <p>Leste Flu Serviços de Telecom LTDA (Leste Telecom)</p>
                        <p>CNPJ 02.533.755/0001-87</p>
                        <p>Rua João Feliciano da Costa, 207 - Centro - Itaboraí - RJ - 24800-017</p>

                        <p>
                            E-mail:{" "}
                            <a href="mailto:sac@lestetelecom.com.br"  className="text-primary underline-offset-4 hover:underline">
                                sac@lestetelecom.com.br
                            </a>
                        </p>

                        <p>Telefones &amp; WhatsApp: (021) 2020-1300 / (021) 3940-0130</p>
                    </div>

                    <div className="mt-12 space-y-6 text-base text-dark">
                        <p>
                            Para visualizar nosso contrato,{" "}
                            <a href="/docs/CONTRATO.pdf" target={"_blank"} className="text-primary underline-offset-4 hover:underline">
                                clique aqui
                            </a>
                        </p>

                        <p>
                            Para visualizar nossa outorga SCM,{" "}
                            <a href="/docs/anatellestescm.pdf" target={"_blank"} className="text-primary underline-offset-4 hover:underline">
                                clique aqui
                            </a>
                        </p>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}
