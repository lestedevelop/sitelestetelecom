import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como mudar meu plano de internet? | Leste",
  description: "Como solicitar mudança de plano de internet da Leste.",
};

const channels = [
  "Telefone e WhatsApp: (021) 2020-1300",
  "Telegram: @leste_bot",
  "Aplicativo: Leste - Central do Assinante",
  "Redes sociais (Instagram e Facebook, por mensagem privada)",
];

export default function ComoMudarDePlano() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como mudar meu plano de internet?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Você pode solicitar a mudança do seu plano entrando em contato com
              a central de atendimento.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Canais de atendimento
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                {channels.map((channel) => (
                  <li key={channel}>{channel}</li>
                ))}
              </ul>
            </div>

            <p>
              Durante o atendimento, serão apresentados os planos disponíveis e
              as condições vigentes para a alteração.
            </p>

            <p>
              A mudança pode ser feita para os planos disponíveis no período
              vigente e pode ser solicitada a cada 30 dias. A diferença de valor
              da migração, seja desconto ou acréscimo, é aplicada no próximo mês.
            </p>

            <p>
              Ao mudar de plano, passam a valer as regras, condições e limites
              do novo contrato de prestação de serviço vigente, disponível no
              site da Leste. Caso existam pendências cadastrais, como documento
              de identidade e CPF, será necessário regularizar o cadastro para
              concluir a solicitação.
            </p>

            <p>
              Em situações específicas, a Leste pode oferecer mudança automática
              para planos superiores, sem aumento de mensalidade. Nesses casos,
              você pode aceitar ou recusar a alteração dentro do prazo informado.
              Se não houver manifestação nesse período, a mudança pode ser
              considerada aceita. Também é possível solicitar o retorno ao plano
              anterior em até 45 dias, conforme as condições vigentes.
            </p>
          </div>

          <FaqNote>
            <p>
              A mudança de plano implica adesão ao contrato vigente, com
              assinatura do termo digital. Em caso de aceite de mudança
              automática, passa a valer um novo prazo para reajuste anual,
              conforme as condições contratuais.
            </p>
            <p>
              Para realizar a mudança, é necessário que o cliente esteja com as
              obrigações financeiras em dia. Em caso de débitos vencidos em
              aberto, será necessário quitá-los antes de prosseguir com a
              solicitação.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
