import BackToIndexButton from "@/pageComponents/faq/BackToIndexButton";
import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";

export const metadata = {
    title: "Aviso legal sobre o atendimento WhatsApp em fase beta | Leste",
    description: "Aviso legal sobre o atendimento WhatsApp em fase beta.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Aviso legal sobre o atendimento<br/>WhatsApp em fase beta.</>}/>

                <div className="mt-10 text-base leading-7 text-graylight">
                    <p>
                        A plataforma de atendimento do Whatsapp está em fase inicial de testes e está sujeita a correções e limitações;
                        Não aceitamos envio de audio na plataforma. O envio de imagens não será aceito fora da estrutura de atendimento (menu com opção para envio de documentos).
                    </p>
                    <p>
                        Ex. somente receberemos uma foto ou imagem na opção correta do menu de atendimento - não serão aceitas/processadas imagens enviadas "soltas" no chat.
                    </p>
                    <p>
                        O canal de contato oficial da empresa continua sendo o e-mail sac@lestetelecom.com.br
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 27/05/19
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
