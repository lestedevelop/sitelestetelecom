import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funcionam os planos? | Leste",
  description: "Entenda como funcionam os planos do Leste Móvel.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funcionam os planos?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Os planos do Leste Móvel são pré-pagos e oferecem uma combinação de
              internet, ligações e SMS durante o período de validade contratado.
            </p>
            <p>
              A internet funciona com uma franquia de dados, ou seja, há um limite
              de consumo conforme o plano escolhido.
            </p>
            <p>
              Os planos podem incluir benefícios adicionais, como aplicativos e
              bônus de internet, dependendo da oferta vigente no momento da
              contratação.
            </p>
          </div>
          <FaqNote>
            <p>
              Os planos não possuem fidelidade e podem ser alterados ou renovados
              conforme a necessidade do cliente.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
