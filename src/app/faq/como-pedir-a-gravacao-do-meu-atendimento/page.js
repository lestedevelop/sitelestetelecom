import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como pedir a gravação do meu atendimento? | Leste",
  description: "Como solicitar a gravação de atendimento na Leste Telecom.",
};

export default function ComoPedirAGravacaoDoMeuAtendimento() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como pedir a gravação do meu atendimento?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Você pode solicitar a gravação do seu atendimento utilizando os
              dados da ligação realizada.
            </p>

            <p>
              Envie um e-mail para{" "}
              <a
                href="mailto:sac@lestetelecom.com.br"
                className="font-bold text-primary underline-offset-4 hover:underline"
              >
                sac@lestetelecom.com.br
              </a>
              , informando o número de origem da chamada e o protocolo ou a data
              e horário do contato.
            </p>

            <p>
              A gravação será enviada para o e-mail cadastrado do assinante, em
              formato AMR ou MP3.
            </p>
          </div>

          <FaqNote>
            <p>
              As gravações ficam armazenadas por até 90 dias corridos. Após a
              solicitação, o envio pode ocorrer em até 10 dias, sem custo,
              conforme a forma escolhida: meio eletrônico, correspondência ou
              retirada presencial.
            </p>
            <p>
              Como prestadora de pequeno porte (PPP), a Leste segue esse prazo
              conforme o Regulamento Geral de Direitos do Consumidor - Resolução
              nº 765/2023 da ANATEL.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
