import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Para onde devo enviar os documentos e/ou comprovantes de pagamento? | Leste",
    description: "Para onde devo enviar os documentos e/ou comprovantes de pagamento?.",
};

export default function EnvioDocumentosComprovante(props) {
    return (
        <main className="bg-light">
            <AppBar />

            <div className="container py-12">
                <TitleFaq title={<>Para onde devo enviar os documentos e/ou comprovantes de pagamento?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        O envio de documentos ou imagens devem ser feitos pelo e-mail sac@lestetelecom.com.br, WhatsApp, Direct do Instagram, Messenger, Telegram ou Aplicativo.
                    </p><br/>
                    <p>
                        Em alguns casos específicos e pontuais, solicitamos que os clientes nos enviem para checagem comprovantes de pagamentos não compensados no sistema bancário (erro entre bancos).
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
