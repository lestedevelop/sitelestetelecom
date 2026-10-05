import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";

export const metadata = {
  title: "Como solicitar a exclusão dos meus dados? | Leste",
  description:
    "Saiba como solicitar a exclusão dos seus dados pessoais na Leste Telecom.",
};

export default function ComoSolicitarAExclusaoDosMeusDados() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como solicitar a exclusão dos meus dados?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Para solicitar a exclusão de seus dados, envie um e-mail para{" "}
              <a
                className="font-semibold text-primary hover:underline"
                href="mailto:sac@lestetelecom.com.br"
              >
                sac@lestetelecom.com.br
              </a>
              , incluindo o nome completo do assinante para identificação. É
              importante que a solicitação seja enviada a partir do e-mail
              cadastrado na Leste. Nosso time retornará o contato para a
              confirmação e dará continuidade ao processo de exclusão.
            </p>
          </div>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
