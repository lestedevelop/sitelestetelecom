import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "A Leste faz controle de velocidade (traffic shaping)? | Leste",
  description:
    "Informacoes sobre controle de trafego, limitacoes contratuais e uso de CGNAT.",
};

export default function ALesteFazControleDeVelocidadeTrafficShaping() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>A Leste faz controle de velocidade (traffic shaping)?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Nao ha controle de trafego (traffic shaping) nas conexoes.
            </p>

            <p>
              As unicas limitacoes seguem o que esta definido no contrato de
              prestacao de servico.
            </p>
          </div>

          <FaqNote>
            <p>
              A Leste nao aplica modelagem de trafego alem das condicoes
              previstas em contrato, que esta disponivel no site. O IPv4 e
              disponibilizado via CGNAT, o que pode impactar o funcionamento de
              algumas aplicacoes que nao possuem suporte a IPv6.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
