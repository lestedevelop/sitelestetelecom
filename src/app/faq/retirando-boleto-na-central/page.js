import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqImageSteps, { FaqImageStep } from "@/pageComponents/faq/FaqImageSteps";
import image1 from "@/assets/faq/retiradaboleto1.png";
import image2 from "@/assets/faq/retiradaboleto2.webp";
import image3 from "@/assets/faq/retiradaboleto3.webp";

export const metadata = {
  title: "Como retirar seu boleto pelo site? | Leste",
  description: "Como retirar seu boleto pelo site?.",
};

export default function RetiradoBoletoNaCentral() {
  return (
    <main className="bg-light">
      <div className="container py-12">
        <TitleFaq title={<>Como retirar seu boleto pelo site?</>} />

        <div className="mt-10 text-base leading-7 text-dark">
          <p>
            1º Acesse o site da Leste e clique em{" "}
            <span className="font-bold">"Central do Assinante"</span> ou va
            direto para:{" "}
            <a
              href="https://portal.lestetelecom.com.br/login"
              className="text-primary underline"
            >
              portal.lestetelecom.com.br/login
            </a>
          </p>

          <FaqImageSteps className="mt-8">
            <FaqImageStep image={image1} imageClassName="max-w-[485px]">
              2º Na aba <span className="font-bold">"Portal do Assinante"</span>,
              insira suas informacoes de CPF/CNPJ e senha e clique em{" "}
              <span className="font-bold">"Fazer Login"</span>.
            </FaqImageStep>
            <FaqImageStep image={image2} imageClassName="max-w-[485px]">
              3º No menu lateral, clique em{" "}
              <span className="font-bold">"Faturas"</span>.
            </FaqImageStep>
            <FaqImageStep image={image3} imageClassName="max-w-[485px]">
              4º Clique em <span className="font-bold">"Pagar agora"</span> na
              fatura em aberto e escolha a opcao{" "}
              <span className="font-bold">"Boleto"</span> para fazer o download.
            </FaqImageStep>
          </FaqImageSteps>
        </div>

        <p className="mt-12 text-sm text-graylight">
          Ultima revisao em: 08/04/25
        </p>
      </div>

      <SupportFooter />
    </main>
  );
}
