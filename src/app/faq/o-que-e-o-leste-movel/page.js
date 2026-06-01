import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "O que é o Leste Móvel? | Leste",
  description: "Entenda o serviço Leste Móvel.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>O que é o Leste Móvel?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O Leste Móvel é um chip de telefonia móvel na modalidade pré-paga
              que oferece internet, ligações e SMS, com tecnologia 5G e cobertura
              da rede TIM.
            </p>
            <p>
              O funcionamento é baseado em planos com validade definida. Para
              utilizar os serviços, é necessário realizar recargas, que ativam ou
              renovam o plano escolhido.
            </p>
            <p>
              O uso da tecnologia 5G depende da compatibilidade do aparelho e da
              disponibilidade da rede na região.
            </p>
          </div>
          <FaqNote>
            <p>
              Os planos não possuem fidelidade e podem ser renovados conforme a
              necessidade do cliente.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
