import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Qual o valor de reposição da câmera? | Leste",
  description: "Valores de reposição das câmeras Leste Câmeras.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Qual o valor de reposição da câmera?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Em caso de dano ou extravio dos equipamentos cedidos pela Leste e
              que estejam sob a responsabilidade do cliente, poderá ser cobrado
              o valor de reposição.
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Câmera Interna Fixa: R$ 249,00</li>
              <li>Câmera Interna 360º: R$ 299,00</li>
            </ul>
          </div>
          <FaqNote>
            <p>
              Os valores podem ser atualizados conforme a política comercial
              vigente.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
