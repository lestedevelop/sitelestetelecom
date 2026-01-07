import Image from "next/image";
import AppBarMovel from "@/pageComponents/movel/AppBarMovel"
import image from "@/assets/lestemovelimagem.png";
import chip from "@/assets/icons/chip.svg";
import whatsapp from "@/assets/icons/whatsapp.png";
import rede5g from "@/assets/icons/5G.webp";
import redeicon from "@/assets/icons/iconrede.png";
import CardStoreLocations from "@/components/cards/CardStoreLocations";
import FooterMovel from "@/pageComponents/movel/FooterMovel";

export default function Chip() {

    const bancas = [
        {
            cidade: "Niterói (Icaraí)",
            endereco: "Rua Ator Paulo Gustavo, 323 - Icaraí, Niterói.",
            referencia: "",
            link: "https://maps.app.goo.gl/mSjpsCq1m3AFVxb2A",
        },
        {
            cidade: "Niterói (Centro)",
            endereco: "Rua São Pedro, 154 - Centro, Niterói.",
            referencia: "",
            link: "https://maps.app.goo.gl/vEBSYXD6z359CYty9",
        },
        {
            cidade: "Niterói (Icaraí)",
            endereco: "Rua Otávio Carneiro, 100 - Icaraí, Niterói.",
            referencia: "",
            link: "https://maps.app.goo.gl/zb9jv99hagMeo5DB9",
        },
        {
            cidade: "Rio Bonito (Centro)",
            endereco: "Rua Nilo Peçanha, S/N - Centro, Rio Bonito.",
            referencia: "",
            link: "https://maps.app.goo.gl/uKpZpuDK45QoHSzo7",
        },
    ]

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
            cidade: "Niterói (Stand)\n",
            endereco: "Rua Quinze de Novembro, 8 - Centro, Niterói - RJ, 24020-125",
            referencia: "Shopping Plaza Niterói - Piso L3",
            link: "https://maps.app.goo.gl/x5nyQmAwuUX9AYte7",
        },
        {
            cidade: "Tanguá (Centro)",
            endereco: "Rua Manoel João Gonçalves Qd C Lt 02 - Centro - Tanguá -24890-000",
            referencia: "Ao lado da Drogarias Alexandre e da Lotérica.",
            link: "https://maps.app.goo.gl/xTnM9rSskZQmPmUS9",
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
            referencia: "No Shopping ​da praça.",
            link: "https://maps.app.goo.gl/CAa7CmtHmANHGsny5",
        },
    ]

    return (
        <div className="min-h-full bg-white!">

            <AppBarMovel/>

            <section className="mt-[88px] md:mt-[123px] pt-6 bg-light w-full">
                <div className={"flex flex-col md:flex-row justify-between items-center container text-light"}>
                    <div className="md:w-1/2 flex flex-col items-left justify-center gap-4 md:gap-8 ">
                        <h3 className={"text-darkgreen md:text-[69px]/18 text-[33px]/10"}>Como conseguir<br/><span
                            className={"font-bold"}> meu chip</span>?</h3>
                        <p className={"text-base md:text-[25px] font-semibold text-darkgreen max-w-96"}>Compre seu chip diretamente em nossas lojas.</p>
                    </div>
                    <div className={"relative w-[120%] md:w-1/2"}>
                        <Image src={image} alt={""} />
                        <Image src={whatsapp} alt={""} className={"absolute left-0 top-[30%] w-25 scale-65 lg:scale-100"} />
                        <Image src={rede5g} alt={""} className={"absolute right-0 top-[10%] w-36 scale-75 lg:scale-100"} />
                        <Image src={redeicon} alt={""} className={"absolute right-[20%] bottom-[20%]  md:w-18 -rotate-16 scale-65 md:scale-100"} />
                    </div>
                </div>
            </section>

            <section className={"py-12"}>
                <div className={"container flex justify-center flex-col py-8 gap-y-8"}>
                    <div className={"flex flex-row-reverse md:justify-start justify-end md:flex-row md:items-center items-end gap-x-4 md:gap-x-8"}>
                        <h3 className={"text-darkgreen text-[32px] md:text-[40px]"}>Nas <span className={"font-bold"}>Bancas</span></h3>
                        <Image src={chip} alt={"Bancas"} className={"md:w-19 w-[38px]"} />
                    </div>
                    <div className={"flex flex-wrap gap-8"}>
                        {bancas.map((banca,index) => (<CardStoreLocations cidade={banca.cidade} referencia={banca.referencia} endereco={banca.endereco} link={banca.link} key={index} />))}
                    </div>

                    <div className={"flex flex-row-reverse md:justify-start justify-end md:flex-row md:items-center items-end gap-x-4 md:gap-x-8"}>
                        <h3 className={"text-darkgreen text-[32px] md:text-[40px]"}>Nossas <span className={"font-bold"}>Lojas</span></h3>
                        <Image src={chip} alt={"Bancas"} className={"md:w-19 w-[38px]"} />
                    </div>
                    <div className={"flex flex-wrap gap-8"}>
                        {lojas.map((loja,index) => (<CardStoreLocations cidade={loja.cidade} referencia={loja.referencia} endereco={loja.endereco} link={loja.link} key={index} />))}
                    </div>
                </div>
            </section>
            <FooterMovel />
        </div>
    );
}
