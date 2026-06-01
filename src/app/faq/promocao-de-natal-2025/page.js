import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funcionou a promoção de Natal 2025? | Leste",
  description:
    "Informacoes sobre a promocao de Natal 2025, sorteios, regras, entrega de premios e uso de dados.",
};

export default function PromocaoDeNatal2025() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funcionou a promoção de Natal 2025?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A ativacao de Natal 2025 foi uma acao promocional gratuita da
              Leste, realizada em parceria com o Plaza Niteroi, com
              participacao por meio de cadastro online via QR Code.
            </p>

            <p>
              Para participar, era necessario preencher corretamente os dados,
              sendo permitido apenas um cadastro por CPF. A participacao foi
              restrita a maiores de 18 anos e implicava concordancia com todas
              as regras da promocao.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Sorteios e premiacao
              </h2>
              <p className="mt-4">
                A promocao contou com sorteios periodicos de brindes a partir de
                23/11/2025, incluindo todos os cadastrados ate a data de cada
                sorteio.
              </p>
              <p className="mt-4">
                Os contemplados foram comunicados pelos dados informados no
                cadastro. Caso nao houvesse resposta em ate 48 horas, um novo
                sorteio era realizado.
              </p>
              <p className="mt-4">
                A entrega dos premios seguiu instrucoes enviadas ao
                participante, podendo ser solicitada validacao com documento. Os
                premios nao puderam ser convertidos em dinheiro, produtos ou
                servicos diferentes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Responsabilidades e regras
              </h2>
              <p className="mt-4">
                A Leste foi responsavel pela realizacao da promocao, cadastro,
                sorteios e entrega dos premios.
              </p>
              <p className="mt-4">
                Nao se responsabilizou por fatores externos, como falhas de
                internet, problemas em dispositivos, funcionamento de terceiros
                ou dados informados incorretamente.
              </p>
              <p className="mt-4">
                Os participantes puderam ser desclassificados em casos de
                fraude, multiplos cadastros, informacoes falsas ou
                descumprimento das regras.
              </p>
              <p className="mt-4">
                A promocao foi valida enquanto houvesse premios disponiveis,
                podendo ser encerrada por motivos operacionais ou de forca
                maior.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">Uso de dados</h2>
              <p className="mt-4">
                Os dados informados foram utilizados para gestao da promocao,
                contato com participantes e comunicacao da empresa, conforme a
                LGPD.
              </p>
              <p className="mt-4">
                Os participantes puderam solicitar a qualquer momento a
                correcao, exclusao ou alteracao de seus dados pelos canais
                oficiais.
              </p>
              <p className="mt-4">
                A participacao implicou concordancia com todas as condicoes
                descritas neste conteudo. Casos nao previstos foram definidos
                pela Leste.
              </p>
            </div>
          </div>

          <FaqNote>
            <p>
              A participacao na promocao implicou concordancia com todas as
              condicoes descritas neste conteudo.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
