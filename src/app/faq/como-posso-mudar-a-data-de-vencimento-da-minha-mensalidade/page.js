import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Como mudar a data de vencimento? | Leste",
  description: "Como mudar a data de vencimento?",
};

export default function ComoAlterarVencimento() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Como mudar a data de vencimento?</>} />

        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Se você quer alterar a data de vencimento, pode solicitar pela
              central de atendimento.
            </p>

            <p>A mudança pode ser feita conforme sua necessidade.</p>

            <div>
              <h2 className="text-xl font-bold text-darkgreen">Para solicitar:</h2>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Entre em contato pela central telefônica ou WhatsApp (021) 2020-1300</li>
                <li>Ou pelos canais digitais</li>
                <li>Central telefônica ou WhatsApp: (021) 2020-1300</li>
                <li>Pontos de atendimento presenciais</li>
                <li>Redes sociais (mensagem privada)</li>
              </ul>
            </div>
          </div>

          <FaqNote>
            <p>
              A nova data de vencimento passa a valer a partir do próximo ciclo
              em que a fatura ainda não tenha sido gerada.
            </p>
          </FaqNote>
        </article>
      </div>

      <SupportFooter />
    </main>
  );
}
