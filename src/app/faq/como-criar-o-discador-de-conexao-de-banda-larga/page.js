import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como criar o discador de conexão de banda larga? | Leste",
  description:
    "Passo a passo para criar o discador de conexão de banda larga em diferentes versões do Windows.",
};

const windows10Steps = [
  "Acesse o menu Iniciar",
  "Clique em Configurações",
  "Selecione Rede e Internet",
  "Acesse Conexão discada",
  "Clique em Configurar uma nova conexão",
  "Selecione Conectar-se à Internet",
  "Escolha Banda larga (PPPoE)",
  "Preencha login (PPPoE), senha e nome da conexão, como Leste Telecom",
  "Clique em Conectar agora",
];

const windows7Steps = [
  "Acesse o menu Iniciar",
  "Clique em Painel de Controle",
  "Acesse Rede e Internet",
  "Clique em Centro de Rede e Compartilhamento",
  "Selecione Configurar uma nova conexão",
  "Escolha Conectar-se à Internet",
  "Selecione Banda larga (PPPoE)",
  "Informe login e senha",
  "Aguarde a conexão",
];

const windowsXPSteps = [
  "Acesse o menu Iniciar",
  "Clique em Painel de Controle",
  "Acesse Conexões de rede",
  "Clique em Criar nova conexão",
  "Selecione Conectar-me à Internet",
  "Configure manualmente",
  "Escolha conexão banda larga com usuário e senha",
  "No campo Nome do provedor, informe Leste Telecom",
  "Informe usuário e senha (PPPoE)",
  "Crie atalho, se desejar",
  "Clique em Concluir",
];

function Section({ title, steps }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-dark md:text-2xl">{title}</h2>
      <ol className="list-decimal space-y-2 pl-5 text-base leading-7 text-dark md:text-lg md:leading-8">
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
    </section>
  );
}

export default function ComoCriarDiscador() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como criar o discador de conexão de banda larga?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-8">
            <p className="text-base leading-7 text-dark md:text-lg md:leading-8">
              A criação do discador varia conforme o sistema operacional do
              computador. Selecione abaixo o seu sistema para seguir o passo a
              passo:
            </p>

            <Section title="Windows 10" steps={windows10Steps} />
            <Section title="Windows 7" steps={windows7Steps} />
            <Section title="Windows XP" steps={windowsXPSteps} />
          </div>

          <FaqNote>
            <p>
              Todo o material foi desenvolvido pela Leste para orientar a
              configuração básica do acesso, sem necessidade de suporte externo.
              As instruções não incluem configurações avançadas ou políticas de
              segurança, que devem ser definidas pelo próprio usuário.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
