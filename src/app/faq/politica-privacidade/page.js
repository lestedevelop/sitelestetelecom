import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Política de privacidade - Uso de dados | Leste",
  description: "Política de privacidade e uso de dados da Leste Telecom.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-light">
      <div className="container px-6 py-12">
        <TitleFaq title={<>Como a Leste utiliza e protege meus dados?</>} />

        <article className="mt-10 max-w-5xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              As informações fornecidas pelos usuários são coletadas e armazenadas
              conforme padrões rígidos de segurança e confidencialidade.
            </p>

            <p>
              A Leste pode utilizar os dados informados para ações ligadas à sua
              operação e à prestação do serviço, como promoções, eventos,
              divulgações, comunicações, informes técnicos, avisos técnicos e
              contatos relacionados ao provimento de internet e à cobertura de
              sinal Wi-Fi.
            </p>

            <p>
              Essas comunicações podem ocorrer por e-mail, aplicativos, programas,
              redes sociais, SMS, WhatsApp, Messenger ou outros sistemas de mensagem
              e comunicação. Os dados também podem ser utilizados em casos de amplo
              interesse público.
            </p>

            <p>
              As informações dos usuários não são vendidas e não são transferidas
              a terceiros, exceto em casos de ordem legal ou judicial.
            </p>

            <p>
              O acesso aos dados é restrito apenas a funcionários autorizados,
              conforme a necessidade de uso adequado dessas informações. Quando
              outras organizações forem contratadas para prestar serviços de apoio,
              será exigida adequação aos padrões de privacidade adotados pela
              empresa.
            </p>

            <p>
              Para fins administrativos, podem ser utilizados cookies nos sites da
              empresa. O usuário pode configurar o navegador para ser avisado sobre
              o uso de cookies ou para impedir sua ativação.
            </p>

            <p>
              Todo o conteúdo do site, da fan page no Facebook e das plataformas
              digitais utilizadas pela Leste pertence à empresa. Esse conteúdo não
              pode ser copiado, reproduzido, distribuído, apresentado, anunciado ou
              transmitido de nenhuma maneira ou por nenhum meio, salvo por
              autorização expressa da empresa ou do titular dos direitos autorais,
              quando aplicável.
            </p>
          </div>

          <FaqNote>
            <p>A base de dados da Leste não será vendida.</p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
