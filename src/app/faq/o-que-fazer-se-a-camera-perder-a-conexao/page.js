import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "O que fazer se a câmera perder a conexão? | Leste",
  description: "Passos básicos quando a câmera perde conexão.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>O que fazer se a câmera perder a conexão?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>Se a câmera perder conexão, verifique os seguintes pontos:</p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Confirme se a câmera está ligada</li>
              <li>Verifique o LED do equipamento</li>
              <li>Confira se o sinal de Wi-Fi está chegando corretamente</li>
              <li>Se persistir, entre em contato com o suporte da Leste</li>
            </ul>
          </div>
          <FaqNote>
            <p>
              LED verde indica câmera conectada e LED vermelho indica ausência de
              conexão com a internet.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
