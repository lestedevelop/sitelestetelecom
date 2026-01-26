import SupportFooter from "@/pageComponents/faq/SupportFooter";
import Footer from "@/components/layout/Footer";
import AppBar from "@/components/layout/AppBar";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import image1 from "@/assets/faq/seminternet1.png"
import image2 from "@/assets/faq/seminternet2.png"
import Image from "next/image";

export const metadata = {
    title: "Plano Start (Leste Móvel) | Leste",
    description: "Plano Start (Leste Móvel).",
};

export default function SuportePlanoStart() {
    const planos  = [
        { total: "13GB", comp: "6GB + 7GB de bônus", price: "R$ 39,99" },
        { total: "14GB", comp: "8GB + 6GB de bônus", price: "R$ 44,99" },
        { total: "17GB", comp: "14GB + 3GB de bônus", price: "R$ 49,99" },
        { total: "22GB", comp: "21GB + 1GB de bônus", price: "R$ 59,99" },
    ]
    return (
        <main className="bg-light">
            

            <div className="container py-12">
                <TitleFaq title={<>Plano Start (Leste Móvel)</>}/>

                <div className="mt-10 text-base leading-7">
                   <div>
                       <h4 className={"font-bold text-base md:text-xl"}>O que é o Plano Start?</h4>
                       <p>
                           Plano promocional da Leste Móvel com pacotes de internet e bônus de gigas em meses específicos.
                       </p>
                   </div>
                    <br/>
                    <div>
                        <h4 className={"font-bold text-base md:text-xl"}>Quais meses estão com promoção ativa?</h4>
                        <p>
                            Março, Abril, Maio e Setembro, Outubro, Novembro.
                        </p>
                    </div>
                    <br/>
                    <div>
                        <h4 className={"font-bold text-base md:text-xl"}>Como funciona o acúmulo de gigas?</h4>
                        <ul>
                            <li>Recarregue todo mês para acumular até o dobro do plano contratado.</li>
                            <li>Se não recarregar no mês seguinte, o acúmulo é perdido.</li>
                        </ul>
                    </div>
                    <br/>
                    <div className="container px-6 py-10">
                        <div className="border border-graylighter overflow-hidden">
                            <div className="bg-primary text-white">
                                <div className="grid grid-cols-3 text-center font-extrabold text-sm md:text-2xl">
                                    <div className="py-4 md:py-10">Total de Internet</div>
                                    <div className="py-4 md:py-10">Composição</div>
                                    <div className="py-4 md:py-10">Preço</div>
                                </div>
                            </div>

                            <div className="divide-y divide-black/50">
                                {planos.map((r, idx) => (
                                    <div
                                        key={idx}
                                        className="grid grid-cols-3 text-center items-center bg-white"
                                    >
                                        <div className="py-16 text-sm md:text-3xl">{r.total}</div>
                                        <div className="py-16 text-sm md:text-3xl">{r.comp}</div>
                                        <div className="py-16 text-sm md:text-3xl">{r.price}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <br/>
                    <div>
                        <h4 className={"font-bold text-base md:text-xl"}>Importante:</h4>
                        <ul>
                            <li>Recargas fora desses meses não têm bônus.</li>
                            <li>A recarga vai até o último dia do mês da promoção vigente.</li>
                        </ul>
                    </div>
                </div>

                <p className="mt-12 text-sm text-graylight">
                    Última revisão em: 05/06/25
                </p>
            </div>

            <SupportFooter />
            
        </main>
    );
}
