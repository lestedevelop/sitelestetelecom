import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Os aplicativos da Leste são seguros? | Leste",
  description:
    "Informações sobre segurança dos aplicativos da Leste e links oficiais para instalação.",
};

export default function OsAplicativosDaLesteSaoSeguros() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Os aplicativos da Leste são seguros?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Sim. Todos os aplicativos da Leste para smartphones estão
              devidamente registrados nas lojas e plataformas oficiais da
              Apple e do Android.
            </p>

            <p>
              A instalação é feita de forma padrão, sem necessidade de alterar
              configurações ou diretivas de segurança do aparelho.
            </p>

            <p>
              A empresa não solicita a retiráda de proteções nativas do celular
              para instalação de aplicativos.
            </p>

            <p>
              A Leste também não envia aplicativos ou programas para instalação
              forçada ou manual em nenhum dispositivo, por nenhum meio,
              incluindo SMS, WhatsApp, e-mail ou outros canais.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Links oficiais
              </h2>

              <ul className="mt-4 list-disc space-y-2 pl-5">
                <li>
                  App Store:{" "}
                  <a
                    className="text-primary underline underline-offset-2"
                    href="https://apps.apple.com/br/app/central-do-cliente-leste/id1529506874"
                    target="_blank"
                    rel="noreferrer"
                  >
                    acessar na App Store
                  </a>
                </li>
                <li>
                  Google Play:{" "}
                  <a
                    className="text-primary underline underline-offset-2"
                    href="https://play.google.com/store/apps/details?id=com.lestecentralcliente&hl=pt_BR"
                    target="_blank"
                    rel="noreferrer"
                  >
                    acessar no Google Play
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <FaqNote>
            <p>
              Para sua segurança, instale aplicativos da Leste apenas pelas
              lojas oficiais. Caso receba alguma solicitação diferente, entre em
              contato com a central de atendimento para confirmação.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
