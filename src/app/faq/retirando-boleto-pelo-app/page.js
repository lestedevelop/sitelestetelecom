import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqImageSteps, { FaqImageStep } from "@/pageComponents/faq/FaqImageSteps";
import image1 from "@/assets/faq/telaapp1.png";
import image2 from "@/assets/faq/telaapp2.webp";
import image3 from "@/assets/faq/telaapp3.webp";
import image4 from "@/assets/faq/telaapp4.webp";
import image5 from "@/assets/faq/telaapp5.webp";

export const metadata = {
  title: "Como emitir seu boleto no app da Leste | Leste",
  description: "Como emitir seu boleto no app da Leste.",
};

export default function RetirandoBoletoPeloApp() {
  return (
    <main className="bg-light">
      <div className="container py-12">
        <TitleFaq title={<>Como emitir seu boleto no app da Leste</>} />

        <div className="mt-10 text-base leading-7 text-dark">
          <FaqImageSteps>
            <FaqImageStep image={image1}>
              1º Baixe o app da Leste na Play Store.
            </FaqImageStep>
            <FaqImageStep image={image2}>
              2º Abra o app e faca login com seus dados cadastrais.
            </FaqImageStep>
            <FaqImageStep image={image3}>
              3º Clique na opcao "Pagar fatura" na pagina principal do
              aplicativo.
            </FaqImageStep>
            <FaqImageStep image={image4}>
              4º Escolha a opcao de pagamento desejada: PIX ou boleto.
            </FaqImageStep>
            <FaqImageStep image={image5}>
              5º Para a opcao boleto, voce pode copiar o codigo de barras para
              pagar no app do seu banco ou baixar a fatura no celular.
            </FaqImageStep>
          </FaqImageSteps>

          <p className="mt-8 font-bold">
            Simples e direto no seu celular, sem precisar falar com o
            atendimento!
          </p>
        </div>

        <p className="mt-12 text-sm text-graylight">
          Ultima revisao em: 13/12/24
        </p>
      </div>

      <SupportFooter />
    </main>
  );
}
