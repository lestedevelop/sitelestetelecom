import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqImageSteps, { FaqImageStep } from "@/pageComponents/faq/FaqImageSteps";
import image1 from "@/assets/faq/lentidao1.webp";
import image2 from "@/assets/faq/lentidao2.webp";
import image3 from "@/assets/faq/lentidao3.webp";

export const metadata = {
  title: "Minha internet esta lenta | Leste",
  description: "Em caso de lentidao, o que fazer?.",
};

export default function ProcedimentoLentidaoFaq() {
  return (
    <main className="bg-light">
      <div className="container py-12">
        <TitleFaq title={<>Em caso de lentidao, o que fazer?</>} />

        <div className="py-4 text-dark">
          <p>
            Para realizar o teste de velocidade com precisao voce precisa estar
            conectado com o cabo de rede direto no computador.
          </p>
        </div>

        <div className="mt-10 text-base leading-7 text-dark">
          <FaqImageSteps>
            <FaqImageStep image={image1} imageClassName="max-w-[600px]">
              1º Limpe o historico de navegacao do seu navegador.
            </FaqImageStep>
            <FaqImageStep image={image2} imageClassName="max-w-[600px]">
              1º Continue seguindo a sequencia exibida na tela.
            </FaqImageStep>
            <FaqImageStep image={image3} imageClassName="max-w-[600px]">
              1º Finalize a limpeza e feche as abas que nao estiver usando.
            </FaqImageStep>
          </FaqImageSteps>

          <div className="mt-8 space-y-6">
            <p>
              2º Desligue e ligue a <span className="font-bold">ONU</span> e o{" "}
              <span className="font-bold">roteador</span>.
            </p>
            <p>
              3º Ainda com o cabo no computador, realize um novo teste de
              velocidade, acesse 3 sites diferentes ao mesmo tempo e, caso ainda
              persista a lentidao, por favor realize contato com a central de
              atendimento.
            </p>
          </div>
        </div>

        <p className="mt-12 text-sm text-graylight">
          Ultima revisao em: 08/04/25
        </p>
      </div>

      <SupportFooter />
    </main>
  );
}
