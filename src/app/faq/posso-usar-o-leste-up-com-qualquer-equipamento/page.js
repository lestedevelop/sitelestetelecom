import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Posso usar o Leste UP com qualquer equipamento? | Leste",
  description: "Regras de compatibilidade do Leste UP.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Posso usar o Leste UP com qualquer equipamento?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Não. O Leste UP deve ser utilizado apenas com equipamentos de rede
              da Leste, com exceção dos dispositivos do Leste Câmeras.
            </p>
            <p>
              Após a instalação, evite alterar ou interferir no fornecimento de
              energia do dispositivo.
            </p>
          </div>
          <FaqNote>
            <p>
              A conexão de equipamentos não compatíveis ou o uso incorreto pode
              causar sobrecarga e desligamento automático do Leste UP.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
