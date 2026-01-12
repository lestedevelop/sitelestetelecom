import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Mudei minha senha na Central do Assinante e agora minha internet caiu. O que fazer? | Leste",
    description: "Mudei minha senha na Central do Assinante e agora minha internet caiu. O que fazer?.",
};

export default function MudeiMinhaSenhaNaCentralEminhanInternetCaiu(props) {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>Mudei minha senha na Central do Assinante e agora minha internet caiu. O que fazer?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Agora que alterou sua senha, para conseguir se conectar novamente, você precisa também atualizar a senha no seu roteador ou discador.
                    </p><br/>
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
