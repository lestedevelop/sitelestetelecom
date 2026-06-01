import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Posso usar a porta USB do roteador ou ONU? | Leste",
  description:
    "Informações sobre uso de portas USB em roteadores e ONUs fornecidos pela Leste.",
};

export default function PossoUsarAPortaUsbDoRoteadorOuOnu() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Posso usar a porta USB do roteador ou ONU?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              As portas USB presentes nos equipamentos fornecidos pela Leste não
              poderão ser utilizadas.
            </p>

            <p>
              Para uso da internet, utilize apenas as portas RJ-45 do
              equipamento.
            </p>
          </div>

          <FaqNote>
            <p>
              As portas USB dos equipamentos da Leste, como ONU ou roteadores,
              não fazem parte do serviço contratado e não possuem suporte para
              utilização, por limitações técnicas.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
