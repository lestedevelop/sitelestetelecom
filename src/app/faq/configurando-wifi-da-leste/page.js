import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";
import FaqImageSteps, { FaqImageStep } from "@/pageComponents/faq/FaqImageSteps";
import image1 from "@/assets/faq/configurando-wifi-da-leste.webp";
import image2 from "@/assets/faq/configurando-wifi-da-leste2.webp";
import image3 from "@/assets/faq/configurando-wifi-da-leste3.webp";
import image4 from "@/assets/faq/configurando-wifi-da-leste4.webp";
import image5 from "@/assets/faq/configurando-wifi-da-leste5.webp";
import image6 from "@/assets/faq/configurando-wifi-da-leste6.webp";
import image7 from "@/assets/faq/configurando-wifi-da-leste7.webp";

export const metadata = {
  title: "Como mudar o nome ou senha do Wi-Fi? | Leste",
  description:
    "Veja como alterar o nome ou a senha da rede Wi-Fi pelo autoatendimento.",
};

export default function ConfigWIFIDaLeste() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como mudar o nome ou senha do Wi-Fi?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Você pode alterar o nome ou a senha da sua rede Wi-Fi pelo
              autoatendimento no WhatsApp, Telegram ou aplicativo, quando o
              equipamento instalado for uma ONU com Wi-Fi.
            </p>

            <p>Siga os passos no atendimento automático:</p>
          </div>

          <FaqImageSteps className="mt-8">
            <FaqImageStep image={image1}>
              Inicie o atendimento enviando uma mensagem.
            </FaqImageStep>
            <FaqImageStep image={image2}>
              Envie “1” para confirmar que já é assinante.
            </FaqImageStep>
            <FaqImageStep image={image3}>
              Informe seu CPF, sem traços, e depois sua data de nascimento.
            </FaqImageStep>
            <FaqImageStep image={image4}>
              Confirme o número enviando “2”.
            </FaqImageStep>
            <FaqImageStep image={image5}>
              Envie “6” para iniciar a configuração.
            </FaqImageStep>
            <FaqImageStep image={image6}>
              Escolha o plano, ou ponto, desejado e selecione o que deseja
              alterar: nome da rede ou senha.
            </FaqImageStep>
            <FaqImageStep image={image7}>
              Envie o novo nome ou a nova senha e aguarde a confirmação.
            </FaqImageStep>
          </FaqImageSteps>

          <div className="mt-8 space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Após o envio das informações, o sistema realiza a verificação e a
              rede é atualizada automaticamente.
            </p>
          </div>

          <FaqNote>
            <p>
              Caso sua conexão utilize conversor, ONU e roteador próprio, a
              alteração deve ser feita diretamente no roteador. Nesse caso,
              consulte o conteúdo de configuração do roteador para realizar o
              procedimento.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
