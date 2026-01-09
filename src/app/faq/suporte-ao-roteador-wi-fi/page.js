import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Suporte ao Roteador WI-FI. | Leste",
    description: "Suporte ao Roteador WI-FI..",
};

export default function SuporteAoRoteador() {
    return (
        <main className="bg-light">
            <AppBar/>

            <div className="container py-12">
                <TitleFaq title={<>Suporte ao Roteador WI-FI.</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        O roteador Wi-Fi ficará sob a guarda do contratante (cliente) enquanto o plano estiver ativo,
                        devendo ser devolvido à Leste no caso de cancelamento do plano e rescisão contratual, nos prazos
                        estipulados no contrato de prestação de serviços. O equipamento passa a ser de responsabilidade
                        do assinante. Todas as informações para configuração do equipamento são fornecidas. Equipamentos
                        NÃO são bloqueados. A empresa não se responsabiliza por problemas de configuração, suporte e/ou
                        mudanças na configuração do equipamento. Lembramos que equipamentos que não estejam protegidos
                        contra picos e oscilações de energia elétrica podem perder configurações ou ficarem travados.
                    </p>
                    <br/>
                    <p><span className={"font-bold"}>ATENÇÃO:</span> A ONU (Unidade de Rede Óptica) também deverá ser devolvida com a respetiva fonte em caso
                        de cancelamento. Valores para reposição dos equipamentos estão disponíveis em nosso FAQ.
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 01/01/17
                </p>
            </div>

            <SupportFooter/>
            <Footer/>
        </main>
    );
}
