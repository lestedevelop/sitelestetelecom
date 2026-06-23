import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como funciona o agendamento pelo site? | Leste",
  description:
    "Informações sobre agendamento pelo site, pré-instalação, viabilidade técnica e envio de documentos.",
};

export default function ComoFuncionaOAgendamentoPeloSite() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como funciona o agendamento pelo site?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O agendamento realizado pelo site funciona como uma etapa inicial
              do processo de instalação, permitindo a checagem prévia de
              viabilidade e o autoatendimento para pré-instalação.
            </p>

            <p>
              A confirmação da instalação depende de análise técnica no local e
              do atendimento às condições necessárias, como disponibilidade de
              rede, distância até a caixa de atendimento, existência de portas
              ativas, acesso ao imóvel e infraestrutura adequada, como conduítes
              e dutos livres.
            </p>

            <p>
              Além disso, é necessário o envio dos documentos solicitados para
              continuidade do processo.
            </p>

            <p>O agendamento não garante a instalação do serviço.</p>
          </div>

          <FaqNote>
            <p>
              A Leste pode cancelar agendamentos que não atendam às condições
              técnicas ou que não tenham o envio dos documentos solicitados.
            </p>
            <p>
              Os dados informados na página são utilizados internamente pela
              empresa e podem ser usados para comúnicação com o cliente,
              incluindo campanhas, informes técnicos e contatos por telefone,
              SMS ou aplicativos de mensagem.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
