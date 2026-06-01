import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Posso acumular internet (GB)? | Leste",
  description: "Como funciona o acúmulo de internet no Leste Móvel.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Posso acumular internet (GB)?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Sim. Caso o cliente renove o plano até o vencimento, os dados não
              utilizados são acumulados com a nova franquia contratada.
            </p>
            <p>
              Esse acúmulo permite aproveitar melhor o saldo de internet ao longo
              do tempo, desde que a renovação seja feita dentro do prazo de
              validade do plano.
            </p>
          </div>
          <FaqNote>
            <p>
              O total de dados acumulados não pode ultrapassar o dobro da franquia
              do plano contratado naquele mês.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
