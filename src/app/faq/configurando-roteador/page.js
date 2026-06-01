import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";
import FaqImageSteps, { FaqImageStep } from "@/pageComponents/faq/FaqImageSteps";
import image1 from "@/assets/faq/roteador1.png";
import image2 from "@/assets/faq/roteador2.png";
import image3 from "@/assets/faq/roteador3.png";
import image4 from "@/assets/faq/roteador4.png";
import image5 from "@/assets/faq/roteador5.png";
import image6 from "@/assets/faq/roteador6.png";
import image7 from "@/assets/faq/roteador7.png";
import image8 from "@/assets/faq/roteador8.png";
import image9 from "@/assets/faq/roteador9.png";
import image10 from "@/assets/faq/roteador10.png";

const routerManuals = [
  { image: image1, href: "https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/17df7f_81697d66da6044f488cf020a59bff25c.pdf" },
  { image: image2, href: "https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/17df7f_98042a059d284b65a67e203652c5c39a.pdf" },
  { image: image3, href: "https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/17df7f_61dfd0bd44d54984845983587e1f60b5.pdf" },
  { image: image4, href: "https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/19591b_0001922803584215859ed9a4763f2fbe.pdf" },
  { image: image5, href: "https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/17df7f_497fcb28edfe4640b7586777f3c0b553.pdf" },
  { image: image6, href: "https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/19591b_cca5f7f229f4499eacc7316989b7629f.pdf" },
  { image: image7, href: "https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/19591b_5985b3408da0409789cd0233333bd8e8.pdf" },
  { image: image8, href: "https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/17df7f_e61139ed2bf54c058073d57b925f3091.pdf" },
  { image: image9, href: "https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/19591b_9041ec8ad52643d8b97bd79ea440a885.pdf" },
  { image: image10, href: "https://71925a7b-95dc-4654-9c34-5d3cf910eed1.filesusr.com/ugd/b3185e_6430413cd8db4d3497f39d230b3aed75.pdf" },
];

export const metadata = {
  title: "Como configurar meu roteador para acessar a internet? | Leste",
  description:
    "Selecione o modelo do roteador e siga o guia correspondente para realizar a configuração básica de acesso.",
};

export default function ConfigRoteador() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como configurar meu roteador para acessar a internet?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              A configuração do roteador pode variar conforme o modelo do
              equipamento.
            </p>

            <p>
              Selecione o modelo do seu roteador e siga o guia correspondente
              para realizar a configuração básica de acesso.
            </p>
          </div>

          <div className="mt-8">
            <FaqImageSteps>
              {routerManuals.map((manual, index) => (
                <FaqImageStep
                  key={manual.href}
                  image={manual.image}
                  href={manual.href}
                  alt={`Modelo de roteador ${index + 1}`}
                >
                  Manual de configuração do roteador {index + 1}.
                </FaqImageStep>
              ))}
            </FaqImageSteps>
          </div>

          <FaqNote>
            <p>
              Todo o material foi desenvolvido pela Leste para orientar a
              configuração básica dos equipamentos, sem necessidade de suporte
              externo. As instruções não incluem configurações avançadas ou
              políticas de segurança, que devem ser definidas pelo próprio
              usuário.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
