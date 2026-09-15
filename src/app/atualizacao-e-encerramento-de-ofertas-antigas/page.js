import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";

export const metadata = {
  title: "Atualização e Encerramento de Ofertas Antigas | Leste",
  description:
    "Regras e condições para atualização, migração e encerramento de ofertas antigas da Leste.",
};

const questions = [
  {
    title: "Por que meu plano está sendo alterado?",
    answer: (
      <>
        <p>
          A Leste está realizando uma atualização de seu portfólio comercial,
          incluindo a revisão e o encerramento de ofertas antigas que não fazem
          mais parte das condições comerciais atualmente disponibilizadas pela
          empresa.
        </p>
        <p>
          Os clientes vinculados às ofertas impactadas estão sendo comunicados
          individualmente, com antecedência mínima de 30 (trinta) dias, conforme
          as regras aplicáveis.
        </p>
      </>
    ),
  },
  {
    title: "O que acontecerá com meu plano atual?",
    answer: (
      <>
        <p>
          A partir da data informada na comunicação enviada ao cliente, a oferta
          atualmente contratada será encerrada e o cliente será migrado para a
          oferta indicada na comunicação ou para outra de sua livre escolha.
        </p>
        <p>
          A nova oferta será aquela apresentada individualmente ao cliente, com
          indicação de sua velocidade, valor e serviços incluídos.
        </p>
      </>
    ),
  },
  {
    title: "A migração será automática?",
    answer: (
      <p>
        Sim. Caso o cliente não opte por outra oferta disponível dentro do prazo
        informado na comunicação, a migração para a oferta indicada poderá
        ocorrer automaticamente, observadas as condições previstas na
        regulamentação aplicável.
      </p>
    ),
  },
  {
    title: "Por que estou recebendo uma nova oferta?",
    answer: (
      <p>
        A Leste disponibilizará aos clientes opções comerciais compatíveis com a
        atual estrutura de serviços da empresa, permitindo que o cliente avalie
        as condições disponíveis e escolha a alternativa que melhor atenda às
        suas necessidades.
      </p>
    ),
  },
  {
    title: "A migração para a oferta indicada gera nova fidelização?",
    answer: (
      <>
        <p>Não.</p>
        <p>
          A migração para a oferta especial indicada na comunicação não dará
          início a um novo período de fidelização.
        </p>
        <p>
          Caso o cliente escolha uma oferta que envolva troca ou instalação de
          equipamentos de tecnologia superior, poderá haver fidelização,
          conforme as condições específicas da nova oferta, que serão
          previamente informadas, conforme o item 7.
        </p>
      </>
    ),
  },
  {
    title: "Posso escolher outra oferta?",
    answer: (
      <>
        <p>Sim.</p>
        <p>
          O cliente poderá consultar as demais ofertas disponíveis no portfólio
          da Leste e, caso prefira, optar por outra oferta, observadas as
          condições comerciais e técnicas correspondentes.
        </p>
      </>
    ),
  },
  {
    title: "Se eu escolher outra oferta, haverá fidelização?",
    answer: (
      <>
        <p>Dependerá das condições da oferta escolhida.</p>
        <p>
          Algumas ofertas podem envolver instalação, substituição ou inclusão
          de equipamentos ou outros benefícios e, quando aplicável, poderão
          prever prazo de permanência mínima, observadas as regras
          regulamentares.
        </p>
        <p>
          As condições de eventual fidelização serão informadas previamente ao
          cliente no momento da escolha da nova oferta.
        </p>
      </>
    ),
  },
  {
    title: "O que acontece se eu não quiser contratar uma nova oferta?",
    answer: (
      <>
        <p>
          O cliente que não tiver interesse em permanecer com a Leste poderá
          solicitar o cancelamento do serviço pelos canais de atendimento
          disponibilizados pela empresa.
        </p>
        <p>
          Nas hipóteses de encerramento da oferta, serão observadas as regras
          regulamentares aplicáveis à rescisão e à eventual existência de prazo
          de permanência.
        </p>
        <p>
          Caso o cliente não tenha interesse em permanecer com o serviço nas
          novas condições, poderá solicitar a rescisão do contrato pelos canais
          de atendimento da Leste, observadas as regras aplicáveis ao
          encerramento da oferta e do contrato.
        </p>
      </>
    ),
  },
  {
    title: "Haverá multa de fidelização em razão da migração?",
    answer: (
      <>
        <p>A migração para a oferta indicada pela Leste não gera nova fidelização.</p>
        <p>
          Eventual prazo de permanência anteriormente existente deverá ser
          analisado de acordo com as condições da oferta originalmente
          contratada e com as regras aplicáveis ao encerramento ou à migração da
          oferta.
        </p>
      </>
    ),
  },
  {
    title: "Minha data de vencimento será alterada?",
    answer: (
      <>
        <p>Não.</p>
        <p>
          A data de vencimento do cliente permanecerá a mesma, salvo se houver
          solicitação ou alteração decorrente de outra contratação realizada
          pelo próprio cliente.
        </p>
      </>
    ),
  },
  {
    title: "Precisarei assinar um novo contrato?",
    answer: (
      <p>
        Não será necessária a assinatura de um novo contrato ou o envio de novos
        documentos para a migração para a oferta especial indicada na
        comunicação, observadas as condições informadas ao cliente.
      </p>
    ),
  },
  {
    title: "Precisarei trocar meus equipamentos?",
    answer: (
      <>
        <p>
          A necessidade de troca, substituição ou inclusão de equipamentos
          dependerá da oferta escolhida e das condições técnicas necessárias
          para sua disponibilização.
        </p>
        <p>
          A migração para a oferta especial indicada na comunicação seguirá as
          condições informadas individualmente ao cliente.
        </p>
      </>
    ),
  },
  {
    title: "O que acontecerá com os serviços adicionais (SVAs)?",
    answer: (
      <>
        <p>
          Os serviços incluídos na nova oferta serão aqueles indicados na
          comunicação encaminhada ao cliente.
        </p>
        <p>
          Caso o cliente opte por outra oferta, deverão ser observados os
          serviços, benefícios e condições correspondentes à oferta escolhida.
        </p>
      </>
    ),
  },
  {
    title: "Por que houve essa atualização das ofertas?",
    answer: (
      <>
        <p>
          A atualização faz parte da gestão do portfólio comercial da Leste e
          considera a evolução da infraestrutura, dos serviços disponibilizados,
          dos equipamentos utilizados e dos custos relacionados à prestação do
          serviço.
        </p>
        <p>
          O objetivo é manter ofertas compatíveis com a atual estrutura de
          serviços e com a evolução da operação.
        </p>
      </>
    ),
  },
  {
    title: "Com quanto tempo de antecedência fui comunicado?",
    answer: (
      <p>
        Os clientes impactados estão sendo comunicados individualmente com
        antecedência mínima de 30 (trinta) dias em relação à implementação da
        alteração ou extinção da oferta, conforme as regras aplicáveis.
      </p>
    ),
  },
  {
    title: "Onde posso consultar outras ofertas?",
    answer: (
      <p>
        As demais ofertas disponíveis podem ser consultadas pelos canais
        oficiais da Leste, inclusive pelo site{` `}
        <a
          href="https://www.lestetelecom.com.br"
          className="font-semibold text-primary underline underline-offset-2"
        >
          www.lestetelecom.com.br
        </a>
        , observadas as condições comerciais e técnicas de cada oferta.
      </p>
    ),
  },
  {
    title: "Como posso solicitar o cancelamento?",
    answer: (
      <>
        <p>
          O cancelamento poderá ser solicitado pelos canais oficiais de
          atendimento da Leste.
        </p>
        <p>
          A rescisão será processada de acordo com as regras regulamentares e
          contratuais aplicáveis ao caso.
        </p>
      </>
    ),
  },
  {
    title: "Como posso tirar dúvidas ou solicitar o cancelamento?",
    answer: (
      <>
        <p>
          O cliente poderá entrar em contato com a Leste pelos canais oficiais
          de atendimento:
        </p>
        <p>
          Telefone/WhatsApp:{` `}
          <a
            href="https://api.whatsapp.com/send/?phone=552120201300"
            className="font-semibold text-primary underline underline-offset-2"
          >
            (21) 2020-1300
          </a>
          <br />
          E-mail:{` `}
          <a
            href="mailto:sac@lestetelecom.com.br"
            className="font-semibold text-primary underline underline-offset-2"
          >
            sac@lestetelecom.com.br
          </a>
        </p>
        <p>Também poderá utilizar os canais oficiais da Anatel, quando necessário.</p>
      </>
    ),
  },
];

export default function AtualizacaoEEncerramentoDeOfertasAntigasPage() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq
          title={<>Atualização e Encerramento de Ofertas Antigas</>}
          eyebrow="Regras e condições"
          showBackButton={false}
        />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="divide-y divide-graylighter">
            {questions.map((question, index) => (
              <section key={question.title} className="py-6 first:pt-0 last:pb-0">
                <h2 className="text-lg font-bold text-darkgreen md:text-xl">
                  {index + 1}. {question.title}
                </h2>
                <div className="mt-3 space-y-3 text-base leading-7 text-dark md:text-lg md:leading-8">
                  {question.answer}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>

      <SupportFooter showBackButton={false} />
    </main>
  );
}
