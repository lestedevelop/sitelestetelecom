import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Minha instalação está garantida? | Leste",
  description:
    "Informações sobre avaliação técnica e viabilidade de instalação da Leste.",
};

export default function MinhaInstalacaoEstaGarantida() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Minha instalação está garantida?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A realização da instalação depende de avaliação técnica no local.
              Alguns fatores só podem ser verificados no momento da instalação,
              como intensidade do sinal, disponibilidade de conexão na rede,
              condições da fibra óptica, distância até a rede, acesso ao local,
              passagem de cabos e autorizações em condomínios ou prédios.
            </p>

            <p>
              Também podem impedir a instalação situações de risco à integridade
              física da equipe, como pontos energizados, estruturas com risco de
              desabamento, altura elevada ou condições inadequadas para execução
              do serviço.
            </p>

            <p>
              Essas condições podem impedir a instalação, mesmo após o
              agendamento, conforme verificado no Termo de Pré-Ativação.
            </p>
          </div>

          <FaqNote>
            <p>
              A solicitação de instalação não garante sua execução, pois a
              viabilidade depende de análise técnica no local. Caso a instalação
              não seja possível, o agendamento será cancelado sem gerar qualquer
              vínculo, custo ou obrigação legal e/ou comercial para o cliente.
            </p>
            <p>
              Em casos de mudança de endereço, a execução depende de
              disponibilidade técnica, permanecendo válidas as condições
              contratuais vigentes.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
