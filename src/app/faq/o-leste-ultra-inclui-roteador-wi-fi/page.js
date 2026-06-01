import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "O Leste Ultra inclui roteador Wi-Fi? | Leste",
  description: "Informações sobre roteador Wi-Fi no Leste Ultra.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>O Leste Ultra inclui roteador Wi-Fi?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Não. O serviço padrão do Leste Ultra fornece apenas o conversor
              óptico (ONU) com saída 10GBASE-T.
            </p>
            <p>
              A distribuição da internet via Wi-Fi ou rede interna é de
              responsabilidade do cliente.
            </p>
          </div>
          <FaqNote>
            <p>
              Existem planos que incluem roteador Wi-Fi, porém com valor
              diferenciado e especificação própria do equipamento.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
