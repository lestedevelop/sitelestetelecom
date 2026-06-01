import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como utilizar o Leste UP no dia a dia? | Leste",
  description: "Modo de uso do Leste UP.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como utilizar o Leste UP no dia a dia?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>O funcionamento do Leste UP varia conforme o modo de uso.</p>
            <p><strong>Modo conectado à energia (AC):</strong></p>
            <ul className="list-disc space-y-2 pl-5">
              <li>O dispositivo liga automaticamente ao ser conectado à tomada</li>
              <li>Para desligar, pressione e segure o botão Liga/Desliga por 2 segundos</li>
              <li>Para reiniciar, pressione novamente o botão</li>
            </ul>
            <p><strong>Modo bateria:</strong></p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Pressione o botão Liga/Desliga para ligar o dispositivo</li>
              <li>Para desligar, pressione e segure o botão por 2 segundos</li>
              <li>O equipamento desliga automaticamente após 30 segundos se não houver dispositivos conectados</li>
            </ul>
          </div>
          <FaqNote>
            <p>
              Em caso de sobrecarga, os LEDs piscam e o equipamento desliga
              automaticamente para proteção.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
