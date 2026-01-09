import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Como criar o discador de conexão de Banda Larga? | Leste",
    description: "Como criar o discador de conexão de Banda Larga?.",
};

export default function ComoCriarDiscador() {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>Como criar o discador de conexão de Banda Larga?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <ul className={"list-disc px-8"}>
                        <li>
                            <Link href="winxp">Criando discador no Windows XP</Link>
                        </li>
                        <li>
                            <Link href="win7">Criando discador no Windows 7</Link>
                        </li>
                        <li>
                            <Link href="win10">Criando discador no Windows 10</Link>
                        </li>
                    </ul>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 08/04/25
                </p>
            </div>

            <SupportFooter />
            <Footer />
        </main>
    );
}
