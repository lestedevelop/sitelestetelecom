import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funciona o aplicativo Leste Suporte? | Leste",
  description:
    "Informações sobre o aplicativo Leste Suporte e testes automáticos de conexão.",
};

export default function ComoFuncionaOAplicativoLesteSuporte() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funciona o aplicativo Leste Suporte?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O Leste Suporte é um aplicativo que ajuda a identificar e
              resolver problemas na sua conexão de internet.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Por meio do app, é possível executar testes automáticos que
                auxiliam na análise de situações como:
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Lentidão</li>
                <li>Oscilações na conexão com a internet</li>
                <li>Falhas ou comportamento inesperado dos equipamentos</li>
              </ul>
            </div>

            <p>
              Com esses testes, a equipe consegue identificar possíveis causas
              e orientar a melhor solução para que sua conexão volte ao normal.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Onde baixar
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Android:{" "}
                  <a
                    className="font-semibold text-primary hover:underline"
                    href="https://play.google.com/store/apps/details?id=com.routerthis.lestetelecom&hl=pt_BR&gl=US"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Google Play
                  </a>
                </li>
                <li>
                  iOS:{" "}
                  <a
                    className="font-semibold text-primary hover:underline"
                    href="https://apps.apple.com/us/app/leste-suporte/id1524340561"
                    target="_blank"
                    rel="noreferrer"
                  >
                    App Store
                  </a>
                </li>
              </ul>
            </div>

            <p>
              Sugestões de melhorias podem ser enviadas para{" "}
              <a
                className="font-semibold text-primary hover:underline"
                href="mailto:sac@lestetelecom.com.br"
              >
                sac@lestetelecom.com.br
              </a>
              .
            </p>
          </div>

          <FaqNote>
            <p>
              O aplicativo auxilia na identificação de problemas, mas não
              substitui o atendimento técnico quando necessário.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
