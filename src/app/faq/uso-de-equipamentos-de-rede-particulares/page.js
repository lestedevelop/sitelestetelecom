import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Uso de equipamentos de rede particulares | Leste",
    description: "Uso de equipamentos de rede particulares.",
};

export default function UsoDeEquipamentosDeRedeParticulares() {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>Uso de equipamentos de rede particulares</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        A Leste Telecom não impede o uso de roteadores próprios junto às ONUs fornecidas pela empresa. Não impedimos o uso de Nenhum equipamento após a nossa ONU. Neste caso, a empresa não fornecerá suporte aos roteadores e demais equipamentos de rede particulares (é impossível treinar pessoal para dar suporte a todos os roteadores e demais equipamentos de todas as marcas existentes). Não permitimos o uso de ONUs particulares, mesmo de similar marca/fabricante e modelo, não fornecidas pela empresa, em nossa rede.
                    </p><br/>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 16/02/18
                </p>
            </div>

            <SupportFooter />
            <Footer />
        </main>
    );
}
