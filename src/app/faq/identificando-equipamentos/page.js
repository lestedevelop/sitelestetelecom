import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqImageSteps, { FaqImageStep } from "@/pageComponents/faq/FaqImageSteps";
import image1 from "@/assets/faq/indentificar.webp";

export const metadata = {
  title: "Como me certificar que os cabos estao conectados corretamente? | Leste",
  description: "Como me certificar que os cabos estao conectados corretamente?.",
};

export default function IdentificarEquipamentos() {
  return (
    <main className="bg-light">
      <div className="container py-12">
        <TitleFaq title={<>Como me certificar que os cabos estao conectados corretamente?</>} />

        <div className="mt-10 text-base leading-7 text-dark">
          <FaqImageSteps columns="md:grid-cols-1">
            <FaqImageStep image={image1} imageClassName="max-w-[890px]">
              1º Siga o mapa abaixo e confira as conexoes.
            </FaqImageStep>
          </FaqImageSteps>
        </div>
      </div>

      <SupportFooter />
    </main>
  );
}
