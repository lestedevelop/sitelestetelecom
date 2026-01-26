import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Planos Prediais cidade de Niterói | Leste",
    description: "Planos Prediais cidade de Niterói.",
};

export default function PlanosPrediaisNiteroi() {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Planos Prediais cidade de Niterói</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Os planos da cidade de Niterói são voltados a instalações verticais - prédios/condomínios verticais de alta e média densidade e possuem valores e condições diferentes das demais cidades onde a empresa presta serviço em casas e condomínios horizontais.
                    </p><br/>
                    <p>
                        Toda a plataforma de equipamentos de rede e dos usuários utilizados na  cidade de Niterói é diferente das demais cidades atendidas NÃO HAVENDO compatibilidade entre estas plataformas. Não existe como portar um equipamento de uma plataforma para outra!
                    </p><br/>
                    <p>
                        Condições técnicas e comerciais de cada fornecedor também implicam na composição dos custos e condições de venda em cada praça!
                    </p><br/>
                    <p>
                        Planos ofertados para a cidade de Niterói tem indicação clara de oferta apenas para essa praça.
                    </p><br/>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 06/02/20
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
