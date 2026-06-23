import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Quais são as informações legais da Leste? | Leste",
  description:
    "Dados cadastrais, contatos e documentos oficiais da Leste Telecom.",
};

export default function InfoLegal() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Quais são as informações legais da Leste?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A Leste Telecom e uma empresa registrada e autorizada para
              prestação de serviços, com informações disponíveis para consulta.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Dados da empresa
              </h2>
              <div className="mt-4 space-y-2">
                <p>Leste® e Leste Telecom® são marcas registradas no INPI da empresa</p>
                <p>Leste Flu Serviços de Telecom LTDA (Leste Telecom)</p>
                <p>CNPJ: 02.533.755/0001-87</p>
                <p>
                  Avenida Almiránte Tamandare, 600
                  <br />
                  Pirátininga - Niterói - RJ
                  <br />
                  CEP: 24350-380
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Canais de contato
              </h2>
              <div className="mt-4 space-y-2">
                <p>
                  E-mail:{" "}
                  <a
                    className="text-primary underline underline-offset-2"
                    href="mailto:sac@lestetelecom.com.br"
                  >
                    sac@lestetelecom.com.br
                  </a>
                </p>
                <p>Telefones &amp; WhatsApp:</p>
                <p>(021) 2020-1300</p>
                <p>(021) 3940-0130</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Documentos oficiais
              </h2>
              <div className="mt-4 space-y-2">
                <p>
                  Contrato de prestação de serviços:{" "}
                  <a
                    className="text-primary underline underline-offset-2"
                    href="/docs/CONTRATO.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    clique para acessar
                  </a>
                </p>
                <p>
                  Outorga SCM:{" "}
                  <a
                    className="text-primary underline underline-offset-2"
                    href="/docs/anatellestescm.pdf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    clique para acessar
                  </a>
                </p>
              </div>
            </div>
          </div>

          <FaqNote>
            <p>
              As informações legais podem ser atualizadas conforme mudanças
              cadastrais, regulatórias ou documentais da empresa.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
