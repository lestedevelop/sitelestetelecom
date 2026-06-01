import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funciona o aplicativo Leste Telecom? | Leste",
  description:
    "Informações sobre o aplicativo Leste Telecom - Central do Assinante.",
};

export default function ComoFuncionaOAplicativoLesteTelecom() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funciona o aplicativo Leste Telecom?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O aplicativo “Leste Telecom - Central do Assinante” permite
              acompanhar e gerenciar seu serviço de forma prática pelo celular.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Por meio do app, é possível:
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Receber boletos em PDF automaticamente</li>
                <li>
                  Receber informes sobre sua conexão, sua região e possíveis
                  instabilidades
                </li>
                <li>Solicitar contato da central de atendimento</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Onde baixar
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Android e iOS:{" "}
                  <a
                    className="font-semibold text-primary hover:underline"
                    href="https://bit.ly/lesteAPP"
                    target="_blank"
                    rel="noreferrer"
                  >
                    https://bit.ly/lesteAPP
                  </a>
                </li>
                <li>
                  App Store:{" "}
                  <a
                    className="font-semibold text-primary hover:underline"
                    href="https://apps.apple.com/br/app/central-do-cliente-leste/id1529506874"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Central do Cliente Leste
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
              O aplicativo pode passar por melhorias e atualizações contínuas,
              podendo apresentar limitações ou indisponibilidade em determinados
              momentos.
            </p>
            <p>
              Para atendimento com resposta formal, utilize o e-mail{" "}
              <a
                className="font-semibold text-primary hover:underline"
                href="mailto:sac@lestetelecom.com.br"
              >
                sac@lestetelecom.com.br
              </a>
              .
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
