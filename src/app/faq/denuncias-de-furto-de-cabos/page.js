import BackToIndexButton from "@/pageComponents/faq/BackToIndexButton";
import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";

export const metadata = {
    title: "Denúncias de furto de cabos, equipamentos, sabotagens | Leste",
    description: "Denúncias de furto de cabos, equipamentos, sabotagens.",
};

export default function DenunciaFurtoPage() {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Aviso legal sobre o atendimento<br/>WhatsApp em fase beta.</>}/>

                <div className="mt-10 text-base leading-7 text-graylight">
                    <p>
                        Denúncias de furto de cabos, equipamentos, sabotagens e outras ações criminosas contra a prestação de serviços de telecomunicações.
                    </p>
                    <br/>
                    <p>
                        Relatos, informações, fotos ou vídeos sobre atividades criminosas que possam causar paralisações nos serviços podem ser encaminhados para nosso SAC: <span className={"font-bold"}>sac@lestetelecom.com.br.</span>
                    </p>
                    <br/>
                    <p>
                        Além disso, o <span className={"font-bold"}>Disque Denúncia</span> recebe, de forma anônima, qualquer denúncia de crimes contra provedores:
                    </p>
                    <p>
                        (21) 2253-1177 (ligação ou WhatsApp).<br/>
                    </p>
                    <p>O sigilo é garantido em todas as mensagens e ligações.</p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 22/10/25
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
