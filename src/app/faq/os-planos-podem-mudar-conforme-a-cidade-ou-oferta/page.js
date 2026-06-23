import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Os planos podem mudar conforme a cidade ou oferta? | Leste",
  description:
    "Informações sobre variações de planos, valores, tecnologias e condições por cidade ou oferta.",
};

export default function OsPlanosPodemMudarConformeACidadeOuOferta() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Os planos podem mudar conforme a cidade ou oferta?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Sim. Os planos, valores e promocoes podem variar conforme a
              cidade, tipo de imovel, campanhas e condições técnicas da região.
            </p>

            <p>
              Os planos disponíveis são definidos por cidade (praca) e podem
              variar em velocidades, tecnologias utilizadas, equipamentos e
              taxas de instalação.
            </p>

            <p>
              Pode haver diferenciacao entre planos para casas
              (instalacoes horizontais/rua) e para predios (instalacoes
              verticais), com valores, condições e tecnologias distintas.
            </p>

            <p>
              A disponibilidade do serviço depende da infraestrutura da rede no
              local. Por isso, mesmo em uma mesma rua ou predio, pode haver
              diferença entre imóveis atendidos e não atendidos, conforme a
              viabilidade técnica de cada ponto.
            </p>

            <p>
              Essas variações ocorrem por fatores técnicos e operacionais, como
              capacidade da rede, infraestrutura instalada e custos de
              implantacao em cada região.
            </p>

            <p>
              Também podem existir ofertas promocionais por tempo limitado e
              para regiões especificas. Esses planos podem não estar
              disponíveis no site e não permitem migração.
            </p>

            <p>
              Os planos oficiais, valores e condições atualizados podem ser
              consultados no site:
              {" "}
              <a
                className="text-primary underline underline-offset-2"
                href="https://www.lestetelecom.com.br"
                target="_blank"
                rel="noreferrer"
              >
                www.lestetelecom.com.br
              </a>
            </p>

            <p>
              Planos de cidades ou plataformas diferentes não são compatéveis
              entre si, não sendo possível realizar migração entre essas
              estruturas.
            </p>
          </div>

          <FaqNote>
            <p>
              Os preços e condições dos serviços são definidos conforme
              características técnicas, custos operacionais e benefícios
              oferecidos, podendo variar por região. As ofertas seguem a
              regulamentacao da Anatel (Resolução no 765/2023 - Regulamento
              Geral de Direitos do Consumidor) e estão sujeitas a
              disponibilidade técnica e comercial.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
