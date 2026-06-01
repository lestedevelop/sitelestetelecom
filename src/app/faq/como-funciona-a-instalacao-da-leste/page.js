import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funciona a instalação da Leste? | Leste",
  description:
    "Informações sobre padrões técnicos, cobrança e propriedade dos equipamentos da Leste.",
};

export default function ComoFuncionaAInstalacaoDaLeste() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funciona a instalação da Leste?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A instalação do serviço segue padrões técnicos para garantir a
              qualidade da conexão.
            </p>

            <p>
              A Leste utiliza rede e cabeamento próprios, não sendo feito
              reaproveitamento de infraestrutura de terceiros. Todos os materiais
              são selecionados para melhor desempenho.
            </p>

            <p>
              As instalações seguem padrões técnicos definidos pela empresa, com
              uso exclusivo de rede própria.
            </p>

            <p>
              A instalação pode ser gratuita ou paga, conforme a oferta
              contratada. Em campanhas como "Instalação Grátis" ou "Migração
              Grátis", não há cobrança. Fora de promoções, podem ser aplicadas
              taxas de instalação, que variam de acordo com a cidade, a demanda e
              as condições da contratação, sendo sempre informadas previamente.
            </p>

            <p>
              Os valores cobrados referem-se à mão de obra. Cabos, conectores,
              cordões ópticos e suportes não são vendidos, sendo propriedade da
              Leste. O conversor óptico (ONU) e o roteador também permanecem como
              propriedade da empresa.
            </p>
          </div>

          <FaqNote>
            <p>
              As condições de instalação podem variar conforme a oferta vigente e
              as regras comerciais no momento da contratação.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
