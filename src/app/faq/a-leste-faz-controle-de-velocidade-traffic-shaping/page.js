import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "A Leste faz controle de velocidade (traffic shaping)? | Leste",
  description:
    "Informações sobre controle de tráfego, limitações contratuais e uso de CGNAT.",
};

export default function ALesteFazControleDeVelocidadeTrafficShaping() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>A Leste faz controle de velocidade (traffic shaping)?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Não há controle de tráfego (traffic shaping) nas conexões.
            </p>

            <p>
              As únicas limitações seguem o que está definido no contrato de
              prestação de serviço.
            </p>
          </div>

          <FaqNote>
            <p>
              A Leste não aplica modelagem de tráfego além das condições
              previstas em contrato, que está disponível no site. O IPv4 é
              disponibilizado via CGNAT, o que pode impactar o funcionamento de
              algumas aplicações que não possuem suporte a IPv6.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
