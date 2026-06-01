import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funciona o suporte técnico do Leste Câmeras? | Leste",
  description: "Entenda como funciona o suporte técnico do Leste Câmeras.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funciona o suporte técnico do Leste Câmeras?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O Leste Câmeras é um serviço desenvolvido para ser operado
              diretamente pelo cliente.
            </p>
            <p>
              Em caso de necessidade de suporte, o prazo de atendimento segue o
              padrão da Leste para reparos de internet, podendo ocorrer em até 48
              horas úteis.
            </p>
            <p>
              Todas as visitas técnicas são cobradas, seguindo o valor da visita
              padrão da empresa.
            </p>
          </div>
          <FaqNote>
            <p>
              Não há cobrança apenas quando for identificado defeito de hardware
              na câmera.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
