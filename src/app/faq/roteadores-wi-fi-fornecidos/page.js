import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Roteadores Wi-Fi fornecidos | Leste",
    description: "Roteadores Wi-Fi fornecidos.",
};

export default function RoteadoresFornecidos() {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>Roteadores Wi-Fi fornecidos</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Todos os planos acompanham um roteador BGN para cobertura BÁSICA do serviço de WIFI (rede sem fio). Salvo oferta específica, todos os equipamentos de WIFI serão básicos BGN. Mesmo nos casos de roteadores especiais, fornecidos em planos determinados, conforme oferta específica, de tecnologia superior à BGN, como roteadores ABGN ou AC - NÃO HAVERÁ GARANTIA DE SERVIÇO E COBERTURA POR REDES WIFI. Todos os testes devem ser SEMPRE realizados via cabo pela porta ethernet direto na ONU (Optical Network Unit) utilizando os sites recomendados e uma placa de rede gigabit ethernet.
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 04/09/19
                </p>
            </div>

            <SupportFooter />
            <Footer />
        </main>
    );
}
