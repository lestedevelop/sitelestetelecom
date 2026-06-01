import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como ativar e configurar o Leste Câmeras? | Leste",
  description: "Passo a passo para ativar e configurar o Leste Câmeras.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como ativar e configurar o Leste Câmeras?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>A ativação pode ser feita de forma autônoma ou com apoio técnico.</p>
            <ol className="list-decimal space-y-2 pl-5">
              <li>Baixe o aplicativo Leste Câmeras na loja do seu dispositivo</li>
              <li>Crie sua conta e faça login seguindo as orientações do app</li>
              <li>Ligue a câmera e aguarde o LED azul piscando rapidamente</li>
              <li>Escaneie o QR Code do manual ou da parte inferior da câmera</li>
              <li>Selecione a rede Wi-Fi da Leste</li>
              <li>Configure o fuso horário conforme sua região</li>
              <li>Altere a senha de criptografia da gravação em nuvem</li>
            </ol>
            <p>Após esses passos, a câmera estará pronta para uso.</p>
          </div>
          <FaqNote>
            <p>
              Também é possível realizar a ativação com visita técnica paga. O
              técnico auxilia na ativação, mas não faz instalação física,
              acabamento, cabeamento ou fixação.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
