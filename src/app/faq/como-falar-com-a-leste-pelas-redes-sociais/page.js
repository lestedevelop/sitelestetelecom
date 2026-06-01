import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como falar com a Leste pelas redes sociais? | Leste",
  description: "Canais oficiais da Leste Telecom nas redes sociais.",
};

const serviceChannels = [
  { label: "Facebook", href: "https://facebook.com/lestetelecom" },
  { label: "Instagram", href: "https://instagram.com/lestetelecom" },
  { label: "X (antigo Twitter)", href: "https://x.com/lestetelecom" },
  { label: "TikTok", href: "https://tiktok.com/@leste.oficial" },
];

const institutionalChannels = [
  { label: "YouTube", href: "https://youtube.com/@LesteTelecom" },
  { label: "LinkedIn", href: "https://linkedin.com/company/lestetelecom" },
];

function SocialLink({ channel }) {
  return (
    <li>
      <a
        href={channel.href}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold text-primary underline-offset-4 hover:underline"
      >
        {channel.label}
      </a>
    </li>
  );
}

export default function ComoFalarComALestePelasRedesSociais() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como falar com a Leste pelas redes sociais?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Você pode entrar em contato com a Leste pelas redes sociais por
              meio de mensagem privada (Inbox ou Direct).
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Canais com atendimento disponível
              </h2>
              <ul className="mt-3 grid gap-2 md:grid-cols-2">
                {serviceChannels.map((channel) => (
                  <SocialLink key={channel.label} channel={channel} />
                ))}
              </ul>
            </div>

            <p>
              O atendimento funciona 24 horas por dia, seguindo o mesmo
              funcionamento da central de atendimento da Leste.
            </p>

            <p>
              Para agilizar o atendimento, envie uma única mensagem com todas as
              informações necessárias, incluindo a descrição do que precisa, seus
              dados de identificação e um telefone para contato. Se possível,
              informe também o melhor horário para retorno.
            </p>

            <p>
              As redes sociais são integradas à central de atendimento, e o
              contato pode continuar por telefone quando necessário.
            </p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">
                Canais institucionais
              </h2>
              <ul className="mt-3 grid gap-2 md:grid-cols-2">
                {institutionalChannels.map((channel) => (
                  <SocialLink key={channel.label} channel={channel} />
                ))}
              </ul>
            </div>
          </div>

          <FaqNote>
            <p>
              Para sua segurança, não compartilhe dados pessoais em comentários
              públicos. Utilize sempre mensagens privadas ou o e-mail oficial{" "}
              <a
                href="mailto:sac@lestetelecom.com.br"
                className="font-bold text-primary underline-offset-4 hover:underline"
              >
                sac@lestetelecom.com.br
              </a>
              .
            </p>
            <p>
              Comentários com ofensas, spam ou publicações repetidas podem ser
              removidos, e usuários que desrespeitarem as regras podem ser
              bloqueados.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
