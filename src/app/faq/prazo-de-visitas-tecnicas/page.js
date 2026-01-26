import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Prazo de visitas técnicas. | Leste",
    description: "Prazo de visitas técnicas..",
};

export default function PrazoVisita() {
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Prazo de visitas técnicas.
                </>}/>

                <div className="mt-10 text-base leading-7 text-dark">
                    <p>
                        Informamos que o nosso prazo para visitas técnicas é de até 48 horas úteis - como consta em nosso contrato; Tal prazo pode ser dilatado nos seguintes casos: Mal tempo como chuvas e fortes ventanias - por conta dos riscos relacionados às ligações clandestinas na rede elétrica (gatos) e curtos na rede, feitos por galhos de de árvores (caso de fortes ventanias); Problemas relacionados com a falta de segurança - exemplos: temos limite de hora para atender alguns locais, não podemos fazer atendimentos noturnos desde 2015, ou impedimento por parte de criminosos. para atuar em uma data/hora específica em algum local ou termos o acesso a esse local impedido pelo mesmo motivo; Tentamos ao máximo reduzir o prazo de atendimento porém não podemos colocar em risco a integridade física de nossos funcionários.
                    </p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 23/10/19
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
