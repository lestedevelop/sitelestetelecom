import AppBarCorporate from "@/pageComponents/corporate/AppBarCorporate";
import FooterCorporate from "@/pageComponents/corporate/FooterCorporate";
import Image from "next/image";
import mapaImages from "@/assets/mapacoberturacoporate.png"
import Link from "next/link";

export default function CoporateCobertura() {


    return (
        <div className="min-h-full">

            <AppBarCorporate/>
            <section className={"mt-[120px] bg-light md:mt-[155px]"}>
               <div className={"container py-20 mx-auto"}>
                   <Image src={mapaImages} alt={""} />
                   <div className="text-center text-xs py-8 text-graylight leading-relaxed mt-6">
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
