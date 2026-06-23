import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqImageSteps, { FaqImageStep } from "@/pageComponents/faq/FaqImageSteps";
import image1 from "@/assets/faq/boletowhatsapp1.webp";
import image2 from "@/assets/faq/boletowhatsapp2.webp";
import image3 from "@/assets/faq/boletowhatsapp3.webp";
import image4 from "@/assets/faq/boletowhatsapp4.png";
import image5 from "@/assets/faq/boletowhatsapp5.webp";
import image6 from "@/assets/faq/boletowhatsapp6.webp";
import image7 from "@/assets/faq/boletowhatsapp7.webp";
import image8 from "@/assets/faq/boletowhatsapp8.webp";

export const metadata = {
  title: "Como retirár seu boleto pelo WhatsApp? | Leste",
  description: "Como retirár seu boleto pelo WhatsApp?.",
};

export default function RetirándoBoletoPeloWhatsapp() {
  return (
    <main className="bg-light">
      <div className="container py-12">
        <TitleFaq title={<>Como retirár seu boleto pelo WhatsApp?</>} />

        <div className="mt-10 text-base leading-7 text-dark">
          <FaqImageSteps>
            <FaqImageStep image={image1}>
              1º Inicie uma conversa no WhatsApp mandando uma mensagem para o
              nosso número (21) 2020-1300.
            </FaqImageStep>
            <FaqImageStep image={image2}>
              2º Responda "1" para sinalizar que você já e um assinante da
              Leste.
            </FaqImageStep>
            <FaqImageStep image={image3}>
              3º Digite seu CPF ou CNPJ.
            </FaqImageStep>
            <FaqImageStep image={image4}>
              4º Digite sua senha de acesso. Caso não tenha uma, o chat irá
              solicitar a criacao da senha.
            </FaqImageStep>
            <FaqImageStep image={image5}>
              5º Responda "1" para assegurar que o número pertence a você e
              prosseguir o atendimento.
            </FaqImageStep>
            <FaqImageStep image={image6}>
              6º Responda "5" para consultar as faturas em aberto.
            </FaqImageStep>
            <FaqImageStep image={image7}>
              7º Responda com o número correspondente ao plano que você deseja
              obter a fatura.
            </FaqImageStep>
            <FaqImageStep image={image8}>
              8º Pronto. Agora você pode copiar o código de barras, pagar pelo
              PIX ou baixar o PDF da fatura.
            </FaqImageStep>
          </FaqImageSteps>
        </div>

        <p className="mt-12 text-sm text-graylight">
          Ultima revisao em: 27/05/19
        </p>
      </div>

      <SupportFooter />
    </main>
  );
}
