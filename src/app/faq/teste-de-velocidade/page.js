import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqImageSteps, { FaqImageStep } from "@/pageComponents/faq/FaqImageSteps";
import image1 from "@/assets/faq/testevelocicade1.png";
import image2 from "@/assets/faq/testevelocicade2.webp";
import image3 from "@/assets/faq/testevelocicade3.png";

export const metadata = {
  title: "Como testar a velocidade da minha conexao? | Leste",
  description: "Como testar a velocidade da minha conexao?.",
};

export default function TesteDeVelocidadeFaq() {
  return (
    <main className="bg-light">
      <div className="container py-12">
        <TitleFaq title={<>Como testar a velocidade da minha conexao?</>} />

        <div className="py-4 text-dark">
          <p className="mb-4">
            <span className="font-bold">Aviso importante:</span> Encontramos
            limitacoes na plataforma do Minha Conexao, via navegador, que
            impedem a realizacao de testes em velocidades superiores a 800 Mbps.
            Entramos em contato com a empresa e fomos informados de que estao
            desenvolvendo um aplicativo nativo para Windows, o qual permitira
            testes em altas velocidades.
          </p>
          <a
            className="mt-8 font-bold italic text-primary underline"
            href="https://play.google.com/store/apps/details?id=org.zwanoo.android.speedtest&hl=pt_BR&pli=1"
            target="_blank"
            rel="noreferrer"
          >
            Ate que essa solucao tecnica esteja disponivel, limitaremos os
            testes ao aplicativo nativo do Speedtest (Ookla) para Windows.
          </a>
        </div>

        <div className="mt-10 text-base leading-7 text-dark">
          <p>
            Para realizar o teste de velocidade com precisao voce precisa
            <span className="font-bold">
              {" "}
              conectar o cabo de rede que sai da ONU (Optical Network Unit)
              direto no computador.
            </span>
          </p>

          <FaqImageSteps className="mt-8">
            <FaqImageStep image={image1} imageClassName="max-w-[600px]">
              1º Acesse o site{" "}
              <a
                href="https://www.minhaconexao.com.br/?provider=LESTE%20TELECOM"
                className="text-primary underline"
              >
                minhaconexao.com.br
              </a>
              .
            </FaqImageStep>
            <FaqImageStep image={image2} imageClassName="max-w-[600px]">
              2º Confirme se o servidor da Leste Telecom foi selecionado.
            </FaqImageStep>
            <FaqImageStep image={image3} imageClassName="max-w-[600px]">
              3º Pronto! Agora e so conferir o resultado.
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
