import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqImageSteps, { FaqImageStep } from "@/pageComponents/faq/FaqImageSteps";
import image1 from "@/assets/faq/ledvermelho1.webp";
import image2 from "@/assets/faq/seminternet2.webp";

export const metadata = {
  title: "LED vermelho piscando na ONU. O que devo fazer? | Leste",
  description: "Ha um LED vermelho piscando na ONU. O que devo fazer?.",
};

export default function LedVermelho() {
  return (
    <main className="bg-light">
      <div className="container py-12">
        <TitleFaq title={<>Ha um LED vermelho piscando na ONU. O que devo fazer?</>} />

        <div className="mt-10 text-base leading-7 text-dark">
          <FaqImageSteps columns="md:grid-cols-2">
            <FaqImageStep image={image1} imageClassName="max-w-[890px]">
              1º Reinicie o Conversor Optico (ONU) e o roteador.
            </FaqImageStep>
            <FaqImageStep image={image2} imageClassName="max-w-[890px]">
              2º Confira se todos cabos estao conectados corretamente.
            </FaqImageStep>
          </FaqImageSteps>

          <p className="mt-8">
            3º Caso o problema persista, entre em contato conosco atraves dos
            nossos canais de atendimento.
          </p>
        </div>

        <p className="mt-12 text-sm text-graylight">
          Ultima revisao em: 20/05/26
        </p>
      </div>

      <SupportFooter />
    </main>
  );
}
