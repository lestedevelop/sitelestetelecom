import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Posso ativar a câmera por conta própria? | Leste",
  description: "Entenda a ativação autônoma das câmeras Leste.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Posso ativar a câmera por conta própria?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Sim. O equipamento pode ser retirado em uma loja da Leste e a
              ativação pode ser realizada pelo próprio cliente.
            </p>
            <p>
              Basta seguir as orientações fornecidas no momento da compra e no
              aplicativo.
            </p>
          </div>
          <FaqNote>
            <p>
              A ativação autônoma é indicada para clientes que desejam
              configurar o equipamento por conta própria.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
