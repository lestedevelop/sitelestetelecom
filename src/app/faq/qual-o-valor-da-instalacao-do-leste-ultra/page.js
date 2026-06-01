import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Qual o valor da instalação do Leste Ultra? | Leste",
  description: "Valor da instalação do Leste Ultra.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Qual o valor da instalação do Leste Ultra?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A instalação do Leste Ultra tem o valor de R$ 1.500,00, podendo ser
              pago à vista ou parcelado em até 10x sem juros para planos prediais
              e de rede de rua.
            </p>
          </div>
          <FaqNote>
            <p>Todos os planos possuem taxa de instalação.</p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
