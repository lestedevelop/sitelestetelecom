import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Tenho um plano de 150Mbps | Leste",
    description: "Tenho um plano de 150Mbps (ou superior), mas meus testes de velocidade não passam de 100Mbps. O que fazer?.",
};

export default function TenhoUmPlanoDe150(props) {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Tenho um plano de 150Mbps (ou superior), mas meus testes de velocidade não passam de 100Mbps. O que fazer?</>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Bem, primeiro lembramos que todos os testes tem de ser feitos por cabo direto no computador, através do site http://www.minhaconexao.com.br/ usando o servidor da Leste Telecom ou o SIMET (https://beta.simet.nic.br). Você já viu se sua placa de rede ou switches da sua rede são todas gigabit? Não tem como “passar” mais de 100mbps em uma rede que é limitada a até 100mbps. E basta um equipamento no meio da rede ter a limitação (não ser gigabit) para que o gargalo aconteça. Se você já se certificou de que toda sua rede interna é gigabit e o problema permanece, entre em contato conosco através do (21) 2020-1300 ou envie um e-mail para sac@lestetelecom.com.br com seus dados para que a gente retorne o contato. Todos os nossos equipamentos tem porta gigabit de rede.
                    </p><br/>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 23/10/19
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
