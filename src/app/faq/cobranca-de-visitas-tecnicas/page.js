import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Cobrança de visitas técnicas | Leste",
    description: "Cobrança de visitas técnicas.",
};

export default function CobrancaDeVisitas() {
    return (
        <main className="bg-light">
            <AppBar/>

            <div className="container py-12">
                <TitleFaq title={<>Cobrança de visitas técnicas</>}/>

                <div className="mt-10 text-base leading-7 ">
                    <p>
                        Caso ocorra a necessidade de uma visita técnica devido a problemas relacionados aos seus
                        computadores, equipamentos ou por dano em algum material (MAL USO), é importante destacar que a
                        política de cobrança se baseia em alguns critérios específicos, ou seja, se a visita for
                        decorrente de problemas ocasionados pela própria pessoa, estando a prestação do serviço de
                        internet regular, a visita será cobrada.
                    </p>
                    <br/>
                    <p className={"font-bold"}>Valor cobrado por visita improdutiva: R$80,00.</p>
                    <br/>
                    <p className={"font-bold"}>Valores de reposição por equipamento em caso de dano/mal uso/extravio:<a className={"font-light underline"} href=" https://www.lestetelecom.com.br/valor-de-reposicao."> https://www.lestetelecom.com.br/valor-de-reposicao.</a></p>
                    <br/>
                    <p>No entanto, se o problema estiver relacionado ao serviço de internet ou falha "natural" em algum equipamento/material, a visita técnica de R$80,00 e o valor do material não serão cobrados.</p>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 06/05/2025
                </p>
            </div>

            <SupportFooter/>
            <Footer/>
        </main>
    );
}
