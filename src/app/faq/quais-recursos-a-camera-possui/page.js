import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Quais recursos a câmera possui? | Leste",
  description: "Recursos disponíveis nas câmeras do Leste Câmeras.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Quais recursos a câmera possui?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>Os recursos variam conforme o modelo da câmera.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Notificações de movimento em tempo real</li>
              <li>Configuração pelo aplicativo</li>
              <li>Visão noturna, com alcance e qualidade conforme o modelo</li>
            </ul>
          </div>
          <FaqNote>
            <p>
              Para receber alertas corretamente, é necessário permitir as
              notificações do aplicativo no smartphone.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
