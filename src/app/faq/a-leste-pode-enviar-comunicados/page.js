import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "A Leste pode enviar comunicados? | Leste",
  description: "Informações sobre comunicados enviados pela Leste Telecom.",
};

export default function ALestePodeEnviarComunicados() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>A Leste pode enviar comunicados?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A Leste pode enviar comunicados relacionados ao seu serviço e ao
              seu contrato, utilizando os canais de contato informados no seu
              cadastro.
            </p>

            <p>
              Esses envios podem incluir informações sobre faturas, avisos
              operacionais, atualizações, anúncios, propagandas e demais
              comunicações relacionadas à prestação do serviço.
            </p>

            <p>
              Se você não quiser receber comunicações desse tipo, pode solicitar
              a desinscrição pelo próprio canal que recebeu a mensagem ou entrar
              em contato com a central de atendimento.
            </p>
          </div>

          <FaqNote>
            <p>
              Ao contratar o serviço, o assinante autoriza o envio de
              comunicados, inclusive em formato massivo, pelos canais informados
              no cadastro. O e-mail cadastrado é considerado o principal meio de
              comunicação entre as partes.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
