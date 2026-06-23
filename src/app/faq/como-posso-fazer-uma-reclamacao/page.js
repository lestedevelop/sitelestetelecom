import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como fazer uma reclamação? | Leste",
  description: "Canais para registrar uma reclamação na Leste Telecom.",
};

export default function ComoPossoFazerUmaReclamacao() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como fazer uma reclamação?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Você pode registrar sua reclamação pelos canais de atendimento da
              Leste, com acompanhamento da equipe responsavel.
            </p>

            <p>
              O canal oficial para solicitações com resposta por escrito é o
              e-mail{" "}
              <a
                href="mailto:sac@lestetelecom.com.br"
                className="font-bold text-primary underline-offset-4 hover:underline"
              >
                sac@lestetelecom.com.br
              </a>
              . Também é possível entrar em contato pelos telefones{" "}
              <strong className="font-bold text-darkgreen">
                (021) 2020-1300
              </strong>{" "}
              (também via WhatsApp),{" "}
              <strong className="font-bold text-darkgreen">
                0800 053 1300
              </strong>{" "}
              e{" "}
              <strong className="font-bold text-darkgreen">
                (021) 3940-0130
              </strong>
              .
            </p>

            <p>
              Para agilizar o atendimento, descreva o ocorrido com clareza e
              informe o nome completo, CPF do titular e um telefone para contato.
            </p>
          </div>

          <FaqNote>
            <p>
              O e-mail é o canal oficial para respostas por escrito. No
              atendimento via redes sociais, o retorno pode ocorrer por ligação
              telefônica para dar continuidade à tratativa.
            </p>
            <p>
              Para sua segurança, não compartilhe dados pessoais em comentários
              públicos.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
