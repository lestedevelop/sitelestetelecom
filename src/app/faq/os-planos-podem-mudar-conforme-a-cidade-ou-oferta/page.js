import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Os planos podem mudar conforme a cidade ou oferta? | Leste",
  description:
    "Informacoes sobre variacoes de planos, valores, tecnologias e condicoes por cidade ou oferta.",
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
              cidade, tipo de imovel, campanhas e condicoes tecnicas da regiao.
            </p>

            <p>
              Os planos disponiveis sao definidos por cidade (praca) e podem
              variar em velocidades, tecnologias utilizadas, equipamentos e
              taxas de instalacao.
            </p>

            <p>
              Pode haver diferenciacao entre planos para casas
              (instalacoes horizontais/rua) e para predios (instalacoes
              verticais), com valores, condicoes e tecnologias distintas.
            </p>

            <p>
              A disponibilidade do servico depende da infraestrutura da rede no
              local. Por isso, mesmo em uma mesma rua ou predio, pode haver
              diferenca entre imoveis atendidos e nao atendidos, conforme a
              viabilidade tecnica de cada ponto.
            </p>

            <p>
              Essas variacoes ocorrem por fatores tecnicos e operacionais, como
              capacidade da rede, infraestrutura instalada e custos de
              implantacao em cada regiao.
            </p>

            <p>
              Tambem podem existir ofertas promocionais por tempo limitado e
              para regioes especificas. Esses planos podem nao estar
              disponiveis no site e nao permitem migracao.
            </p>

            <p>
              Os planos oficiais, valores e condicoes atualizados podem ser
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
              Planos de cidades ou plataformas diferentes nao sao compativeis
              entre si, nao sendo possivel realizar migracao entre essas
              estruturas.
            </p>
          </div>

          <FaqNote>
            <p>
              Os precos e condicoes dos servicos sao definidos conforme
              caracteristicas tecnicas, custos operacionais e beneficios
              oferecidos, podendo variar por regiao. As ofertas seguem a
              regulamentacao da Anatel (Resolucao no 765/2023 - Regulamento
              Geral de Direitos do Consumidor) e estao sujeitas a
              disponibilidade tecnica e comercial.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
