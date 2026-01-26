import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Como mudar de plano? | Leste",
    description: "Como mudar de plano?.",
};

export default function ComoMudarDePlano(props) {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Como mudar de plano?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        <span>A mudança de plano só pode ser realizada para os planos disponíveis no ano vigente. </span>A mudança de plano pode ser solicitada a cada 30 dias, ou seja, o contratante terá direito a 1 mudança de plano a cada mês, sendo que a diferença de migração (desconto/acréscimo) sempre virá para o próximo mês.
                    </p><br/>
                    <p>
                        É necessário entrar em contato com nossa Central de Atendimento, pelo WhatsApp, Direct do Instagram, Messenger, Telegram ou Aplicativo. Será apresentado os planos e a condição de cada plano vigente no período.
                    </p><br/>
                   <p>Central Telefônica: <a href="tel:02120201300"></a>(021) 2020-1300​</p><br/>
                   <p>WhatsApp: (021) 2020-1300<a href="https://wa.me/02120201300"></a>(021) 2020-1300​</p><br/>
                   <p>Telegram: <a href="https://web.telegram.org/k/#@leste_bot"></a>@Leste_bot</p><br/>
                   <p>App: <a href="https://www.lestetelecom.com.br/aplicativo-leste"></a>Leste - Central do Assinante</p><br/>

                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 20/05/16
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
