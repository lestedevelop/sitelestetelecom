import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Mudei de endereço. Posso transferir o meu ponto da Leste? | Leste",
    description: "Mudei de endereço. Posso transferir o meu ponto da Leste?.",
};

export default function MudeiDeEnderecoPossoTransferir(props) {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Mudei de endereço. Posso transferir o meu ponto da Leste?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Se tivermos rede de FTTH ativa (cobertura geográfica) e capacidade livre (portas vagas) no seu novo endereço - SIM, pode.
                    </p>
                    <br/>
                    <p>
                        Nesse caso, a instalação feita no atual ponto é perdida, e pode ocorrer cobrança pela nova instalação.
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 28/03/23
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
