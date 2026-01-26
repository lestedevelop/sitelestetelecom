import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "O que é CGNAT? | Leste",
    description: "O que é CGNAT?.",
};

export default function OqueECgnat() {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>O que é CGNAT?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Com o fim do IPv4, todos os equipamentos que nós usamos conectados à rede deveriam ser compatíveis com IPv6, mas não é o que acontece. Ainda hoje, diversos roteadores e sistemas de câmeras, por exemplo, só possuem suporte para o antigo e esgotado IPv4.
                    </p><br/>
                    <p>
                        Como a adesão total ao IPv6 pode demorar, nós não podemos simplesmente encerrar a entrega do IPv4, pois isso afetaria diretamente nossos clientes que ainda não atualizaram seus dispositivos. Para tentar aliviar a transição, optamos por trabalhar com o CGNAT (Carrier Grade NAT).
                    </p><br/>
                    <p>
                        O CGNAT é um tradutor de endereço de internet. Ele permite o compartilhamento de um endereço público de IPv4 para mais de um usuário. Com isso, há mais tempo para os usuários se adequarem ao novo protocolo sem ter seu acesso afetado.
                    </p><br/>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 20/05/16
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
