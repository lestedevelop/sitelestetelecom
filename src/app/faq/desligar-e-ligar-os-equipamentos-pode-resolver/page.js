import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Desligar e ligar os equipamentos pode resolver o problema da minha conexão? | Leste",
    description: "Desligar e ligar os equipamentos pode resolver o problema da minha conexão?.",
};

export default function DesligarEligarPodeResolve() {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>Desligar e ligar os equipamentos pode resolver o problema da minha conexão?
                </>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Sim, e muito. Oscilações na rede elétrica podem "travar" tanto a sua ONU quanto o roteador. Muitas vezes tais oscilações acontecem sem serem percebidas, mas os equipamentos podem ficar travados até serem desligados e ligados novamente. Todos os dias realizamos várias visitas técnicas - somente para tirar e recolocar os equipamentos de nossos clientes na tomada! Se possível, coloque sempre um no-break para segurar os equipamentos.
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 20/05/16
                </p>
            </div>

            <SupportFooter />
            <Footer />
        </main>
    );
}
