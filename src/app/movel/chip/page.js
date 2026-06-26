import Image from "next/image";
import AppBarMovel from "@/pageComponents/movel/AppBarMovel";
import image from "@/assets/lestemovelimagem.webp";
import chip from "@/assets/icons/chip.svg";
import whatsapp from "@/assets/icons/whatsapp.png";
import rede5g from "@/assets/icons/5G.webp";
import redeicon from "@/assets/icons/iconrede.png";
import CardStoreLocations from "@/components/cards/CardStoreLocations";
import FooterMovel from "@/pageComponents/movel/FooterMovel";

export default function Chip() {
    const bancas = [
        {
            cidade: "Niterói - Centro",
            endereco: "Av. Amaral Peixoto, 363 - Centro, Niterói.",
            referencia: "",
            link: "https://www.google.com/maps/search/?api=1&query=Av.%20Amaral%20Peixoto%2C%20363%20-%20Centro%2C%20Niter%C3%B3i",
        },
        {
            cidade: "Niterói - Centro",
            endereco: "Av. Visconde do Rio Branco, 294 - Centro, Niterói.",
            referencia: "",
            link: "https://www.google.com/maps/search/?api=1&query=Av.%20Visconde%20do%20Rio%20Branco%2C%20294%20-%20Centro%2C%20Niter%C3%B3i",
        },
        {
            cidade: "Niterói - Icaraí",
            endereco: "Rua Mem de Sá, 150 - Icaraí, Niterói.",
            referencia: "",
            link: "https://www.google.com/maps/search/?api=1&query=Rua%20Mem%20de%20S%C3%A1%2C%20150%20-%20Icara%C3%AD%2C%20Niter%C3%B3i",
        },
        {
            cidade: "Niterói - Icaraí",
            endereco: "Rua Tavares de Macedo, 415 - Icaraí, Niterói.",
            referencia: "",
            link: "https://www.google.com/maps/search/?api=1&query=Rua%20Tavares%20de%20Macedo%2C%20415%20-%20Icara%C3%AD%2C%20Niter%C3%B3i",
        },
        {
            cidade: "Niterói - Icaraí",
            endereco: "Rua Cel. Moreirá César, 323 - Icaraí, Niterói.",
            referencia: "",
            link: "https://www.google.com/maps/search/?api=1&query=Rua%20Cel.%20Moreira%20C%C3%A9sar%2C%20323%20-%20Icara%C3%AD%2C%20Niter%C3%B3i",
        },
        {
            cidade: "Niterói - Icaraí",
            endereco: "Rua Mariz e Barros, 252 - Icaraí, Niterói.",
            referencia: "",
            link: "https://www.google.com/maps/search/?api=1&query=Rua%20Mariz%20e%20Barros%2C%20252%20-%20Icara%C3%AD%2C%20Niter%C3%B3i",
        },
        {
            cidade: "Niterói - Icaraí",
            endereco: "Rua Lopes Trovão, 191, esquina com Rua Ator Paulo Gustavo - Icaraí, Niterói.",
            referencia: "",
            link: "https://www.google.com/maps/search/?api=1&query=Rua%20Lopes%20Trov%C3%A3o%2C%20191%20-%20Icara%C3%AD%2C%20Niter%C3%B3i",
        },
        {
            cidade: "Niterói - Icaraí",
            endereco: "Rua Otávio Carneiro, 100 - Icaraí, Niterói.",
            referencia: "",
            link: "https://www.google.com/maps/search/?api=1&query=Rua%20Ot%C3%A1vio%20Carneiro%2C%20100%20-%20Icara%C3%AD%2C%20Niter%C3%B3i",
        },
        {
            cidade: "Niterói - Santa Rosa",
            endereco: "Rua Mário Viana - Santa Rosa, Niterói.",
            referencia: "",
            link: "https://www.google.com/maps/search/?api=1&query=Rua%20M%C3%A1rio%20Viana%20-%20Santa%20Rosa%2C%20Niter%C3%B3i",
        },
        {
            cidade: "Niterói - Largo da Batalha",
            endereco: "Estr. Washington Luís, 1 - Largo da Batalha, Niterói.",
            referencia: "",
            link: "https://www.google.com/maps/search/?api=1&query=Estr.%20Washington%20Lu%C3%ADs%2C%201%20-%20Largo%20da%20Batalha%2C%20Niter%C3%B3i",
        },
        {
            cidade: "Niterói - São Francisco",
            endereco: "Av. Rui Barbosa, 83 - São Francisco, Niterói.",
            referencia: "",
            link: "https://www.google.com/maps/search/?api=1&query=Av.%20Rui%20Barbosa%2C%2083%20-%20S%C3%A3o%20Francisco%2C%20Niter%C3%B3i",
        },
        {
            cidade: "Niterói - Itaipu",
            endereco: "Av. Central Ewerton Xavier, 1469 - Itaipu, Niterói.",
            referencia: "",
            link: "https://www.google.com/maps/search/?api=1&query=Av.%20Central%20Ewerton%20Xavier%2C%201469%20-%20Itaipu%2C%20Niter%C3%B3i",
        },
        {
            cidade: "Niterói - Icaraí",
            endereco: "Rua Ator Paulo Gustavo, 323 - Icaraí, Niterói.",
            referencia: "Não confundir com a banca da Rua Lopes Trovão, 191, que fica na esquina com a Ator Paulo Gustavo.",
            link: "https://www.google.com/maps/search/?api=1&query=Rua%20Ator%20Paulo%20Gustavo%2C%20323%20-%20Icara%C3%AD%2C%20Niter%C3%B3i",
        },
    ];

    const lojas = [
        {
            cidade: "Itaboraí (Centro)",
            endereco: "Rua Acácio Campos dos Santos, 100 - Centro, Itaboraí - RJ, 24800-021",
            referencia: "Rua atrás da antiga Nalin.",
            link: "https://www.google.com/maps/place/Leste+Telecom/@-22.7493302,-42.861157,19z/data=!4m6!3m5!1s0x99c0099e857b29:0xef997b4b2c51ccd3!8m2!3d-22.7493726!4d-42.8609173!16s%2Fg%2F11bz0b6t4t?entry=ttu&g_ep=EgoyMDI1MDMxMS4wIKXMDSoASAFQAw%3D%3D",
        },
        {
            cidade: "Maricá (Centro)",
            endereco: "Av. Vereador Francisco Sabino da Costa, 119 - Loja 5 - Centro - Maricá - RJ - 24900-100",
            referencia: "No mesmo prédio da Casa & Vídeo.",
            link: "https://maps.app.goo.gl/GATy3Umv53A8WCTp6",
        },
        {
            cidade: "Niterói (Stand)",
            endereco: "Rua Quinze de Novembro, 8 - Centro, Niterói - RJ, 24020-125",
            referencia: "Shopping Plaza Niterói - Piso L3",
            link: "https://maps.app.goo.gl/x5nyQmAwuUX9AYte7",
        },
        {
            cidade: "Rio Bonito (Centro)",
            endereco: "Av. Sete de Maio, 50 - Loja 6 - Centro, Rio Bonito - RJ, 28800-000",
            referencia: "Edifício Henry Ford.",
            link: "https://maps.app.goo.gl/3m2q5taccaCwRVCe7",
        },
        {
            cidade: "Magé",
            endereco: "Praça Nilo Peçanha - 45 - Loja 211 - Centro- Magé - RJ - 25900-088",
            referencia: "No Shopping da praça.",
            link: "https://maps.app.goo.gl/CAa7CmtHmANHGsny5",
        },
    ];

    return (
        <div className="min-h-full bg-white!">
            <AppBarMovel />

            <section className="mt-[88px] md:mt-[123px] pt-6 bg-light w-full">
                <div className={"flex flex-col md:flex-row justify-between items-center container text-light"}>
                    <div className="md:w-1/2 flex flex-col items-left justify-center gap-4 md:gap-8 ">
                        <h3 className={"text-darkgreen md:text-[69px]/18 text-[33px]/10"}>
                            Como conseguir
                            <br />
                            <span className={"font-bold"}> meu chip</span>?
                        </h3>
                        <p className={"text-base md:text-[25px] font-semibold text-darkgreen max-w-96"}>
                            Compre seu chip diretamente em nossas lojas.
                        </p>
                    </div>
                    <div className={"relative w-[120%] md:w-1/2"}>
                        <Image src={image} alt={""} />
                        <Image src={whatsapp} alt={""} className={"absolute left-0 top-[30%] w-25 scale-65 lg:scale-100"} />
                        <Image src={rede5g} alt={""} className={"absolute right-0 top-[10%] w-36 scale-75 lg:scale-100"} />
                        <Image
                            src={redeicon}
                            alt={""}
                            className={"absolute right-[20%] bottom-[20%]  md:w-18 -rotate-16 scale-65 md:scale-100"}
                        />
                    </div>
                </div>
            </section>

            <section className={"py-12"}>
                <div className={"container flex justify-center flex-col py-8 gap-y-8"}>
                    <div className={"flex flex-row-reverse md:justify-start justify-end md:flex-row md:items-center items-end gap-x-4 md:gap-x-8"}>
                        <h3 className={"text-darkgreen text-[32px] md:text-[40px]"}>
                            Nas <span className={"font-bold"}>Bancas</span>
                        </h3>
                        <Image src={chip} alt={"Bancas"} className={"md:w-19 w-[38px]"} />
                    </div>
                    <div className={"flex flex-wrap gap-8"}>
                        {bancas.map((banca, index) => (
                            <CardStoreLocations
                                cidade={banca.cidade}
                                referencia={banca.referencia}
                                endereco={banca.endereco}
                                link={banca.link}
                                key={index}
                            />
                        ))}
                    </div>

                    <div className={"flex flex-row-reverse md:justify-start justify-end md:flex-row md:items-center items-end gap-x-4 md:gap-x-8"}>
                        <h3 className={"text-darkgreen text-[32px] md:text-[40px]"}>
                            Nossas <span className={"font-bold"}>Lojas</span>
                        </h3>
                        <Image src={chip} alt={"Bancas"} className={"md:w-19 w-[38px]"} />
                    </div>
                    <div className={"flex flex-wrap gap-8"}>
                        {lojas.map((loja, index) => (
                            <CardStoreLocations
                                cidade={loja.cidade}
                                referencia={loja.referencia}
                                endereco={loja.endereco}
                                link={loja.link}
                                key={index}
                            />
                        ))}
                    </div>
                </div>
            </section>
            <FooterMovel />
        </div>
    );
}
