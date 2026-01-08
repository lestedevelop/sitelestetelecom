import AppBarCorporate from "@/pageComponents/corporate/AppBarCorporate";
import FooterCorporate from "@/pageComponents/corporate/FooterCorporate";
import BannerCorporate from "@/pageComponents/corporate/BannerCorporate";
import MidSectionCorporate from "@/pageComponents/corporate/MidSectionCorporate";
import SectionSolutionsCorporate from "@/pageComponents/corporate/SectionSolutionsCorporate";
import FormCorporate from "@/components/Form/FormCorporate";
import Link from "next/link";

export default function Coporate() {


    return (
        <div className="min-h-full">

            <AppBarCorporate/>
            <BannerCorporate/>
            <MidSectionCorporate/>
            <SectionSolutionsCorporate/>
            <section id={"contato-corporate"}>
                <div className="container py-16">
                    <h3 className={"text-[23px] md:text-[40px] text-primary text-center font-bold pb-8"}>Que tal falar com um de nossos <br/> consultores?</h3>
                    <FormCorporate/>
                    <p className="text-center text-sm text-graylight">
                        Prometemos não utilizar suas informações de contato para enviar qualquer tipo de SPAM.
                    </p>
                    <div className="text-center text-xs text-graylight leading-relaxed mt-6">
                        <p>
                            <strong>Atenção:</strong> A unidade corporate trabalha com produtos de preço e composição
                            diferenciada.
                        </p>
                        <p>Esse canal não visa atendimento a qualquer produto de varejo.</p>
                        <p>
                            Para varejo, clique{" "}
                            <Link className="underline text-primary" href="/">
                                aqui
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </section>
            <FooterCorporate/>
        </div>
    );
}
