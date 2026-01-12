import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Como posso mudar a data de vencimento da minha mensalidade? | Leste",
    description: "Como posso mudar a data de vencimento da minha mensalidade?.",
};

export default function ComoAlterarVencimento(props) {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>Como posso mudar a data de vencimento da minha mensalidade?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Você pode solicitar a mudança de vencimento a cada 30 dias. É necessário entrar em contato com nossa Central de Atendimento, pelo WhatsApp, Direct do Instagram, Messenger, Telegram ou Aplicativo.

                    </p><br/>
                   <p>Central Telefônica: <a href="tel:02120201300"></a>(021) 2020-1300​</p>
                   <p>WhatsApp: (021) 2020-1300<a href="https://wa.me/02120201300"></a>(021) 2020-1300​</p>
                   <p>Telegram: <a href="https://web.telegram.org/k/#@leste_bot"></a>@Leste_bot</p>
                   <p>App: <a href="https://www.lestetelecom.com.br/aplicativo-leste"></a>Leste - Central do Assinante</p>

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
