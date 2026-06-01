import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Ativação de Páscoa 2026 | Leste",
  description:
    "Regras, sorteios, entrega de premios e uso de dados da ativacao promocional de Pascoa 2026.",
};

export default function AtivacaoDePascoa2026() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Ativação de Páscoa 2026</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A ativacao de Pascoa 2026 foi uma acao promocional gratuita da
              Leste, realizada em parceria com o Plaza Niteroi, com
              participacao por meio de cadastro online via QR Code.
            </p>

            <p>
              Para participar, era necessario preencher corretamente os dados,
              sendo permitido apenas um cadastro por CPF e participacao
              restrita a maiores de 18 anos. Apenas participantes cadastrados
              concorreram aos sorteios, sendo desclassificados cadastros
              duplicados ou com informacoes incorretas.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Sorteios e premiacao
              </h2>
              <p className="mt-4">
                Os sorteios ocorreram a partir de 08/04/2026, incluindo todos os
                cadastrados ate cada data. A quantidade, descricao e entrega
                dos brindes variaram conforme disponibilidade e foram
                divulgadas nos canais da Leste.
              </p>
              <p className="mt-4">
                Os ganhadores foram comunicados por e-mail, telefone ou
                WhatsApp e, caso nao respondessem em ate 48 horas, um novo
                sorteio era realizado.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Entrega dos premios
              </h2>
              <p className="mt-4">
                A entrega seguiu instrucoes enviadas ao contemplado, podendo ser
                solicitada a apresentacao de documento oficial com foto e CPF.
                Os premios nao puderam ser convertidos em dinheiro ou outros
                produtos.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Responsabilidades e regras
              </h2>
              <p className="mt-4">
                A Leste foi responsavel pela realizacao da ativacao, cadastro,
                sorteios e entrega dos premios. Nao se responsabiliza por
                cancelamentos ou alteracoes realizadas por terceiros, problemas
                de acesso a internet, falhas no dispositivo do participante ou
                dados incorretos informados no cadastro.
              </p>
              <p className="mt-4">
                Podem ser desclassificados participantes que informarem dados
                falsos, realizarem multiplos cadastros, tentarem fraudar a
                promocao ou descumprirem as regras.
              </p>
              <p className="mt-4">
                A promocao foi valida enquanto houve premios disponiveis,
                podendo ser encerrada por motivos operacionais, forca maior ou
                ajustes necessarios.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">Uso de dados</h2>
              <p className="mt-4">
                Os dados foram utilizados para gestao da promocao, contato com
                participantes e comunicacao relacionada a marca. Tambem podem
                ser utilizados para acoes de marketing, publicidade e ofertas,
                conforme a LGPD.
              </p>
              <p className="mt-4">
                O participante pode solicitar a qualquer momento: correcao,
                exclusao, portabilidade ou limitacao dos dados por meio dos
                canais oficiais da Leste.
              </p>
              <p className="mt-4">
                A participacao implicou aceitacao total das regras, e casos nao
                previstos foram definidos pela Leste.
              </p>
            </div>
          </div>

          <FaqNote>
            <p>
              O regulamento completo esteve disponivel na pagina da promocao
              durante o periodo da campanha.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
