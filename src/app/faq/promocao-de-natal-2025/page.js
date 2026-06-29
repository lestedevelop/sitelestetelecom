import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funcionou a promoção de Natal 2025? | Leste",
  description:
    "Informações sobre a promoção de Natal 2025, sorteios, regras, entrega de prêmios e uso de dados.",
};

export default function PromocaoDeNatal2025() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funcionou a promoção de Natal 2025?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A ativação de Natal 2025 foi uma ação promocional gratuita da
              Leste, realizada em parceria com o Plaza Niterói, com
              participação por meio de cadastro online via QR Code.
            </p>

            <p>
              Para participar, era necessário preencher corretamente os dados,
              sendo permitido apenas um cadastro por CPF. A participação foi
              restrita a maiores de 18 anos e implicava concordância com todas
              as regras da promoção.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Sorteios e premiação
              </h2>
              <p className="mt-4">
                A promoção contou com sorteios periódicos de brindes a partir de
                23/11/2025, incluindo todos os cadastrados até a data de cada
                sorteio.
              </p>
              <p className="mt-4">
                Os contemplados foram comunicados pelos dados informados no
                cadastro. Caso não houvesse resposta em até 48 horas, um novo
                sorteio era realizado.
              </p>
              <p className="mt-4">
                A entrega dos prêmios seguiu instruções enviadas ao
                participante, podendo ser solicitada validação com documento. Os
                prêmios não puderam ser convertidos em dinheiro, produtos ou
                serviços diferentes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Responsabilidades e regras
              </h2>
              <p className="mt-4">
                A Leste foi responsável pela realização da promoção, cadastro,
                sorteios e entrega dos prêmios.
              </p>
              <p className="mt-4">
                Não se responsabilizou por fatores externos, como falhas de
                internet, problemas em dispositivos, funcionamento de terceiros
                ou dados informados incorretamente.
              </p>
              <p className="mt-4">
                Os participantes puderam ser desclassificados em casos de
                fraude, múltiplos cadastros, informações falsas ou
                descumprimento das regras.
              </p>
              <p className="mt-4">
                A promoção foi válida enquanto houvesse prêmios disponíveis,
                podendo ser encerrada por motivos operacionais ou de força
                maior.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">Uso de dados</h2>
              <p className="mt-4">
                Os dados informados foram utilizados para gestão da promoção,
                contato com participantes e comunicação da empresa, conforme a
                LGPD.
              </p>
              <p className="mt-4">
                Os participantes puderam solicitar a qualquer momento a
                correção, exclusão ou alteração de seus dados pelos canais
                oficiais.
              </p>
              <p className="mt-4">
                A participação implicou concordância com todas as condições
                descritas neste conteúdo. Casos não previstos foram definidos
                pela Leste.
              </p>
            </div>
          </div>

          <FaqNote>
            <p>
              A participação na promoção implicou concordância com todas as
              condições descritas neste conteúdo.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
