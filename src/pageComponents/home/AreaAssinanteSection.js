import Image from "next/image";
import Link from "next/link";
import bannerBg from "@/assets/home/15-05-2026/clienteLeste.png";
import bannerBgmobile from "@/assets/home/banner-assinantemobile.svg";

export default function AreaAssinanteSection() {
    return (
        <section className="w-full bg-lightgreenBackground py-10 md:py-16">
            <div className="container">
                <div className="relative overflow-hidden rounded-3xl">

                    <div
                        className="flex flex-col md:hidden"
                        style={{ backgroundImage: `url(${bannerBgmobile.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                        <div className="relative h-72 w-full">
                        </div>
                        <div className="px-8 pb-10 pt-6 text-white">
                            <h2 className="text-[2rem] font-bold leading-tight">
                                Já é cliente
                                <br />Leste?
                            </h2>
                            <p className="mt-2 text-sm leading-6 text-white/80">
                                Consulte faturas, serviços e tudo da sua conta em um só lugar.
                            </p>
                            <Link
                                href="https://minhaarea.lestetelecom.com.br"
                                className="mt-6 inline-block rounded-full bg-darkgreen px-8 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-darkgreen/80"
                            >
                                Acessar minha conta
                            </Link>
                        </div>
                    </div>

                    <div
                        className="hidden md:flex md:min-h-[200px] md:items-center"
                        style={{ backgroundImage: `url(${bannerBg.src})`, backgroundSize: "cover", backgroundPosition: "center" }}
                    >
                        <div className="relative z-10 py-10 pl-12 pr-6 md:w-1/2">
                            <h2 className="text-[2.4rem] font-bold leading-tight text-white">
                                Já é cliente <br/>Leste
                            </h2>
                            <p className="mt-3 max-w-[300px] text-[0.95rem] leading-6 text-white/80">
                                Consulte faturas, serviços e tudo da sua conta em um só lugar.
                            </p>
                            <Link
                                href="https://portal.lestetelecom.com.br/login"
                                className="mt-7 inline-block rounded-full bg-darkgreen px-8 py-3 text-sm font-semibold text-white ring-1 ring-white/20 transition hover:bg-darkgreen/80"
                            >
                                Acessar minha conta.
                            </Link>
                        </div>

                        <div className="relative ml-auto h-full self-stretch">
                            <div className=" absolute bottom-0 right-12 top-1/2 aspect-square w-52 -translate-y-1/2 rounded-full bg-primary/50" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
