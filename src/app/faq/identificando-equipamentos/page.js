import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/indentificar.png"
import Image from "next/image";

export const metadata = {
    title: "Como me certificar que os cabos estão conectados corretamente? | Leste",
    description: "Como me certificar que os cabos estão conectados corretamente?.",
};

export default function IdendificarEquipamentos() {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Como me certificar que os cabos estão conectados corretamente?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                        <p>1° Siga o mapa abaixo e confira as conexões.</p>
                        <Image src={image1} alt={""} className={"py-4 max-w-[280px] md:max-w-[890px]"} />
                </div>

            </div>

            <SupportFooter />
            
        </main>
    );
}
