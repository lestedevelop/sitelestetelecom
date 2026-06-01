import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como acompanhar minha conexão? | Leste",
  description:
    "Informações sobre como consultar o extrato de conexão no portal do assinante.",
};

export default function ComoAcompanharMinhaConexao() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como acompanhar minha conexão?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Você pode acompanhar sua conexão pelo extrato disponível no
              portal do assinante.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">Para acessar:</h2>
              <ol className="mt-3 list-decimal space-y-2 pl-5">
                <li>
                  Entre em{" "}
                  <a
                    className="font-semibold text-primary hover:underline"
                    href="https://portal.lestetelecom.com.br/login"
                    target="_blank"
                    rel="noreferrer"
                  >
                    portal.lestetelecom.com.br/login
                  </a>
                </li>
                <li>Faça login com seu CPF/CNPJ e senha</li>
                <li>Acesse o menu “Conexão”</li>
              </ol>
            </div>

            <p>
              O extrato fica disponível 24 horas por dia e permite consultar
              informações como datas, horários e volume de dados trafegados,
              considerando um período de até 30 dias.
            </p>

            <p>
              Também é possível acessar pela opção “Central do Assinante” no
              site da Leste.
            </p>
          </div>

          <FaqNote>
            <p>
              O extrato de conexão não apresenta o endereço IP das conexões e
              possui limitação de visualização de até 30 dias.
            </p>
            <p>
              Mais informações podem ser consultadas em{" "}
              <a
                className="font-semibold text-primary hover:underline"
                href="https://www.lestetelecom.com.br/extrato-de-conexa"
                target="_blank"
                rel="noreferrer"
              >
                este endereço
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
