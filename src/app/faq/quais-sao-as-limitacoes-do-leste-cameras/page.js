import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Quais são as limitações do Leste Câmeras? | Leste",
  description: "Limitações e cuidados do serviço Leste Câmeras.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Quais são as limitações do Leste Câmeras?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>O Leste Câmeras possui algumas limitações importantes de uso.</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Não permite o uso de cartão SD</li>
              <li>Não é recomendado resetar a câmera</li>
              <li>É um serviço de automonitoramento, não vigilância profissional</li>
              <li>A quantidade de câmeras por cliente depende da viabilidade técnica</li>
            </ul>
          </div>
          <FaqNote>
            <p>
              Qualquer dano decorrente de uso de cartão SD é responsabilidade do
              cliente.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
