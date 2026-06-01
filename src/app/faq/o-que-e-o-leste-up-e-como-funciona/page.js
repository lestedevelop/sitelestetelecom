import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "O que é o Leste UP e como funciona? | Leste",
  description: "Entenda o funcionamento do Leste UP.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>O que é o Leste UP e como funciona?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O Leste UP é um mini nobreak, ou power bank, que mantém os
              equipamentos de rede da Leste funcionando por até 4 horas durante
              quedas de energia.
            </p>
            <p>
              Ele também atua em situações de instabilidade elétrica, como
              oscilações e meia fase.
            </p>
          </div>
          <FaqNote>
            <p>
              Para que o Wi-Fi continue funcionando durante a falta de energia,
              o roteador deve estar conectado ao Leste UP e os dispositivos do
              cliente precisam estar com bateria suficiente ou utilizar uma fonte
              própria de energia.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
