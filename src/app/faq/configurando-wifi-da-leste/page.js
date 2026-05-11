import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqImageSteps, { FaqImageStep } from "@/pageComponents/faq/FaqImageSteps";
import image1 from "@/assets/faq/configurando-wifi-da-leste6.webp";
import image2 from "@/assets/faq/configurando-wifi-da-leste5.webp";
import image3 from "@/assets/faq/configurando-wifi-da-leste4.webp";
import image4 from "@/assets/faq/configurando-wifi-da-leste3.webp";
import image5 from "@/assets/faq/configurando-wifi-da-leste7.webp";
import image6 from "@/assets/faq/configurando-wifi-da-leste.webp";
import image7 from "@/assets/faq/configurando-wifi-da-leste2.webp";

export const metadata = {
  title: "Configurando o Wi-Fi do conversor otico da Leste! | Leste",
  description: "Configurando o Wi-Fi do conversor otico da Leste!.",
};

export default function ConfigWIFIDaLeste() {
  return (
    <main className="bg-light">
      <div className="container py-12">
        <TitleFaq title={<>Configurando o Wi-Fi <br />do conversor otico da Leste!</>} />

        <div className="mt-10 text-base leading-7 text-dark">
          <p>
            Agora voce pode trocar sozinho o nome da rede WI-FI e a senha para
            conversores oticos (ONU com WIFI integrado) pelo autoatendimento no
            WhatsApp e Telegram.
          </p>
          <p className="mt-6">Veja como e simples e rapido:</p>

          <FaqImageSteps className="mt-8">
            <FaqImageStep image={image1}>
              1º Inicie o atendimento mandando uma mensagem.
            </FaqImageStep>
            <FaqImageStep image={image2}>
              2º Confirme que ja e assinante enviando "1".
            </FaqImageStep>
            <FaqImageStep image={image3}>
              3º Para identificacao, envie seu CPF, sem tracos. Assim que seu
              nome for identificado, envie sua data de nascimento.
            </FaqImageStep>
            <FaqImageStep image={image4}>
              4º Nessa etapa voce vai confirmar que o numero que voce esta
              utilizando e um numero seguro. Envie "2".
            </FaqImageStep>
            <FaqImageStep image={image5}>
              5º Para iniciar a configuracao envie "6".
            </FaqImageStep>
            <FaqImageStep image={image6}>
              6º Escolha qual plano (ponto) voce deseja configurar enviando o
              numero correspondente e, em seguida, qual configuracao deseja
              alterar: nome da rede ou senha de acesso.
            </FaqImageStep>
            <FaqImageStep image={image7}>
              7º Agora e so responder com sua nova senha e nome de rede,
              aguardar a verificacao do sistema e pronto, sua rede foi
              configurada!
            </FaqImageStep>
          </FaqImageSteps>
        </div>

        <p className="mt-12 text-sm text-graylight">
          Ultima revisao em: 22/10/25
        </p>
      </div>

      <SupportFooter />
    </main>
  );
}
