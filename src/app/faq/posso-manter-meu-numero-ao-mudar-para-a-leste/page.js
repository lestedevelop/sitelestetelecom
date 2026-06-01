import SupportFooter from "@/pageComponents/faq/SupportFooter";
import TitleFaq from "@/pageComponents/faq/TitleFaq";
import FaqNote from "@/pageComponents/faq/FaqNote";

export const metadata = {
  title: "Posso manter meu número ao mudar para a Leste? | Leste",
  description: "Portabilidade para o Leste Móvel.",
};

export default function Page() {
  return (
    <main className="bg-light">
      <div className="container py-12 md:py-16">
        <TitleFaq title={<>Posso manter meu número ao mudar para a Leste?</>} />
        <article className="mt-10 max-w-4xl rounded-xl border border-graylighter bg-white px-6 py-8 md:px-8">
          <div className="space-y-5 text-base leading-7 text-dark md:text-lg md:leading-8">
            <p>
              Sim. É possível manter seu número por meio da portabilidade, que
              pode ser solicitada pelo aplicativo Leste Móvel.
            </p>
            <p>
              O número deve estar ativo, ser do mesmo DDD e pertencer ao mesmo tipo
              de cadastro.
            </p>
          </div>
          <FaqNote>
            <p>
              Durante o processo, é necessário manter o chip da operadora anterior
              no aparelho para confirmar a solicitação.
            </p>
          </FaqNote>
        </article>
      </div>
      <SupportFooter />
    </main>
  );
}
