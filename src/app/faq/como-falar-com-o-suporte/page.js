import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como falar com o suporte? | Leste",
  description: "Canais de suporte do Leste Móvel.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como falar com o suporte?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              O suporte do Leste Móvel é realizado pelo aplicativo, na opção de
              chat, com atendimento via WhatsApp.
            </p>
            <p>
              Por esse canal, é possível solicitar suporte, tirar dúvidas e
              realizar atendimentos relacionados ao serviço.
            </p>
          </div>
          <FaqNote>
            <p>
              Problemas técnicos são tratados pela operadora parceira responsável
              pelo funcionamento do serviço.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
