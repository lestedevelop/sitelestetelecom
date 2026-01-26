import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Qual é a capacidade da ONU? | Leste",
    description: "Qual é a capacidade da ONU?.",
};

export default function SemInternt() {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Qual é a capacidade da ONU?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>Todas as nossas ONU (Optical Network Unit), também conhecidas como ONT (Optical Network Terminal) possuem porta ethernet GIGABIT.</p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 02/10/19
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
